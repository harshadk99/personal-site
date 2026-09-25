// Loads the YAML files in src/content/data so pages can use them.
import yaml from 'js-yaml';
import researchRaw from '../content/data/research.yaml?raw';
import projectsRaw from '../content/data/projects.yaml?raw';
import talksRaw from '../content/data/talks.yaml?raw';
import writingRaw from '../content/data/writing.yaml?raw';
import recognitionRaw from '../content/data/recognition.yaml?raw';
import profilesRaw from '../content/data/profiles.yaml?raw';

export interface Link { label: string; url: string; video?: boolean; host?: string }

export interface Paper {
  slug: string;
  title: string;
  subtitle: string;
  version: string;
  date: string;
  status: string;
  summary: string;
  links: Record<string, string>;
}

export type Track = 'deception' | 'edge';

export interface Project {
  slug: string;
  track: Track;
  name: string;
  description: string;
  features: string[];
  tags: string[];
  repo: string;
  released: string;
  cited_by?: string[];
  talks?: string[];
}

export interface Talk {
  id: string;
  title: string;
  event: string;
  location: string;
  date: string;
  kind: string;
  track?: Track;
  status?: string;
  summary?: string;
  links: Link[];
}

export interface Article {
  id: string;
  title: string;
  where: string;
  date: string;
  url: string;
  summary: string;
  link_label: string;
}

export interface Citation {
  id: string;
  heading: string;
  date: string;
  url: string;
  description: string;
  link_label: string;
  about_project?: string;
}

// YAML reads unquoted 2026-09 as a string and 2026-09-24 as a Date; keep
// every date as an ISO-ish string so sorting and formatting stay simple.
const load = <T>(raw: string): T => yaml.load(raw, { schema: yaml.JSON_SCHEMA }) as T;

/** A value still waiting on the author. Never rendered. */
export const isPending = (v: unknown) => typeof v === 'string' && v.trim().startsWith('[TBC');

const research = load<{ papers: Paper[] }>(researchRaw);
export const papers = research.papers;
const projectsDoc = load<{ tracks: Record<Track, string>; projects: Project[] }>(projectsRaw);
export const tracks = projectsDoc.tracks;
export const projects = projectsDoc.projects;
export const projectsByTrack = (Object.keys(tracks) as Track[]).map((t) => ({
  track: t,
  label: tracks[t],
  items: projects.filter((p) => p.track === t),
}));

const talksDoc = load<{
  heading: string;
  intro: string;
  sessionize: { label: string; url: string };
  kinds: Record<string, string>;
  talks: Talk[];
}>(talksRaw);
export const talksMeta = talksDoc;

/** Sort key: known dates as-is; pending dates fall back to the year in the
 *  event name (e.g. "BSides Chicago 2025" -> "2025-00"), so they still land
 *  in the right year. */
function sortKey(date: string, fallbackText = ''): string {
  if (!isPending(date)) return String(date);
  const year = fallbackText.match(/20\d\d/)?.[0];
  return year ? `${year}-00` : '0000';
}
const newestFirst = <T>(items: T[], key: (x: T) => string) =>
  [...items].sort((a, b) => key(b).localeCompare(key(a)));

export const talkKey = (t: Talk) => sortKey(t.date, t.event);
/** Newest first. */
export const talks = newestFirst(talksDoc.talks, talkKey);
export const upcomingTalks = talks.filter((t) => t.status === 'upcoming');
export const pastTalks = talks.filter((t) => t.status !== 'upcoming');

export const articles = newestFirst(load<Article[]>(writingRaw), (a) => sortKey(a.date));
export const citations = newestFirst(load<Citation[]>(recognitionRaw), (c) => sortKey(c.date));

/** Group items by year, newest year first. */
export function byYear<T>(items: T[], key: (x: T) => string): { year: string; items: T[] }[] {
  const groups = new Map<string, T[]>();
  for (const item of items) {
    const year = key(item).slice(0, 4);
    groups.set(year, [...(groups.get(year) ?? []), item]);
  }
  return [...groups].map(([year, list]) => ({ year, items: list }));
}
export const profiles = load<{ label: string; url: string }[]>(profilesRaw);

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

/** "2026-06-11" or "2026-06" -> "Jun 2026". Pending dates render as "". */
export function monthYear(date: string): string {
  if (isPending(date) || !date) return '';
  const [y, m] = String(date).split('-');
  return m ? `${MONTHS[Number(m) - 1]} ${y}` : y;
}

/** Machine-readable value for <time datetime>. */
export const isoDate = (date: string) => (isPending(date) ? undefined : String(date));

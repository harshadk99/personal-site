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

export interface Project {
  slug: string;
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
export const projects = load<Project[]>(projectsRaw);

const talksDoc = load<{
  heading: string;
  intro: string;
  sessionize: { label: string; url: string };
  kinds: Record<string, string>;
  talks: Talk[];
}>(talksRaw);
export const talksMeta = talksDoc;

/** Newest first; talks with an unknown date keep their place from the file. */
export const talks = talksDoc.talks;

export const articles = load<Article[]>(writingRaw);
export const citations = load<Citation[]>(recognitionRaw);
export const profiles = load<{ label: string; url: string }[]>(profilesRaw);

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

/** "2026-06-11" or "2026-06" -> "Jun 2026". Pending dates render as "". */
export function monthYear(date: string): string {
  if (isPending(date)) return '';
  const [y, m] = String(date).split('-');
  return m ? `${MONTHS[Number(m) - 1]} ${y}` : y;
}

/** Machine-readable value for <time datetime>. */
export const isoDate = (date: string) => (isPending(date) ? undefined : String(date));

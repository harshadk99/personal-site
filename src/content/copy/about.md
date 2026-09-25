---
eyebrow: "About"
title: "Hello, I'm Harshad."

facts:
  - { label: "Location", value: "Austin, Texas" }
  - { label: "Research", value: "Deception engineering for AI agents" }
  - { label: "Day job", value: "[TBC: see the Indeed note below]" }
  - { label: "Contact", value: "harshad.surfer@gmail.com", href: "mailto:harshad.surfer@gmail.com" }

# ---------------------------------------------------------------------------
# INDEED NOTE — decide before launch.
# The paper says the research is independent and unconnected to any employer.
# The old site's Indeed section said you "built and scaled MCP Threat Trap"
# and "initiated and delivered FlareGuard" in that role. The site must say one
# consistent thing. Two drafts for the bio sentence:
#
#   A (recommended): "By day I'm a Senior Security Infrastructure Engineer at
#      Indeed, working on Zero Trust and SASE. My deception research is
#      independent: built on my own time and infrastructure, and published
#      openly."
#   B: Leave the employer out of the bio entirely and list it only under
#      Experience, with no mention of MCP Threat Trap or FlareGuard there.
#
# Whichever you choose, the Experience entries below avoid claiming the
# open-source tools as Indeed work until you've decided. Worth a check with
# your attorney too.
# ---------------------------------------------------------------------------

experience:
  - role: "Senior Security Infrastructure Engineer"
    org: "Indeed"
    dates: "Jun 2024 – present"
    note: "Zero Trust and SASE architecture across multi-cloud and edge environments."
  - role: "Information Security Manager, Platform Security"
    org: "Indeed"
    dates: "Nov 2023 – Jun 2024"
    note: "Platform security strategy and ZTNA maturity; roadmaps for ZTNA, RBI, CASB and boundary defense."
  - role: "Engineering Manager, Cloud Infrastructure"
    org: "Indeed"
    dates: "Jun 2021 – Nov 2023"
    note: "Led a global cloud infrastructure team across 7 AWS regions; migrated 30 PB to AWS."
  - role: "Cloud Infrastructure Network Engineer III / II"
    org: "Indeed"
    dates: "2017 – 2021"
    note: "Multi-region AWS networking (Tokyo, Sydney, Dublin) and data center security."
  - role: "Network Engineer"
    org: "[TBC: the old site lists 'Indeed, Austin & Reliance Communications, Mumbai' for 2013–2017, which overlaps your RIT degree (graduated Dec 2016). Which years were where?]"
    dates: "2013 – 2017"
    note: "Global office network builds and automation."

education:
  - degree: "M.S., Networking, Security and System Administration"
    school: "Rochester Institute of Technology"
    year: "2016"
    note: "GPA 3.96 · Graduate Merit Scholarship · Teaching Assistant"

certifications:
  active: ["CISM (ISACA)"]
  previous: ["AWS Solutions Architect Associate", "Terraform Certified", "Aviatrix Certified Engineer", "CCNP", "CCNA Security", "CCNA"]

community:
  - { role: "Founder & Chapter Lead", org: "AI Security Engineers, Austin", url: "https://www.meetup.com/ai-security-engineers-austin-tx/" }
  - { role: "Member, Emerging Trends Working Group", org: "ISACA", since: "Feb 2026" }
  - { role: "Member, Academic & Workforce Development Advisory Group", org: "ISACA", since: "May 2026" }
  - { role: "Mentor, BOOST cohort (25 participants)", org: "[TBC: which organization?]" }
  - { role: "Hackathon organizer (12 teams)", org: "[TBC: which event?]" }
  # [TBC: the old site also listed "Asian Network Ambassador" and "Brand
  # Ambassador, Austin". If these are Indeed employee programs, they may fit
  # better on your resume than on a research site. Keep or drop?]

speaker_kit:
  short: >-
    Harshad Sadashiv Kadam is a security researcher in Austin, Texas, working
    on deception engineering for autonomous AI agents. Creator of MCP Threat
    Trap and FlareGuard; speaker at OWASP, DevSecCon, Cloudflare Connect and
    BSides conferences.
  # [TBC: the long bio will be in the third person. Which pronouns should it use?]
  long: "[TBC: written after the bio below is final]"
  headshot: "/assets/avatar.png"   # [TBC: keep this photo or send a new one]
---

I'm a security engineer in Austin. I've spent more than a decade building
network, cloud and security infrastructure, and these days most of my
attention goes to one question: how do you tell an AI agent doing its job
from one mapping everything it can reach?

My answer has been deception. In May 2025 I released MCP Threat Trap, an
open-source honeypot for Model Context Protocol environments. Since then I've
turned it into a larger idea, deception at the registry layer, where real and
decoy MCP servers sit side by side and an agent can't tell which ones are
bait. I demonstrated it live at the OWASP 25th Anniversary Conference, and
Thinkst and Lenny Zeltser have both cited the work.

[TBC: one sentence on your day job — see the Indeed note above.]

I write about this for SC Media, speak at security conferences, and founded
the Austin chapter of AI Security Engineers. If you're working on the same
problem, I'd like to hear from you.

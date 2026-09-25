---
eyebrow: "About"
title: "Hello, I'm Harshad."

facts:
  - { label: "Location", value: "Austin, Texas" }
  - { label: "Research", value: "Deception engineering for AI agents" }
  - { label: "Day job", value: "Senior Security Infrastructure Engineer, Indeed" }
  - { label: "Contact", value: "harshad.surfer@gmail.com", href: "mailto:harshad.surfer@gmail.com" }

# DAY / NIGHT (decided Sept 24, 2026): name the day job, say nothing about the
# research being separate; "by night" carries that. Alternatives to the line
# used in the bio below:
#   B: "By day, I'm a Senior Security Infrastructure Engineer at Indeed, working
#      on Zero Trust and SASE. By night, I build things to see how they break.
#      Jack of all trades, master of a few."
#   C: "By day I secure infrastructure at Indeed. By night I tinker, build and
#      explore. Jack of all trades, master of a few."
# Experience entries below describe Indeed work only; the open-source tools
# live on the Projects page.

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

I'm a security engineer in Austin. By day I'm a Senior Security Infrastructure
Engineer at Indeed, working on Zero Trust and SASE. By night I build and
explore whatever has my curiosity: a jack of all trades, and a master of a few.

Lately most of those nights go to one question: how do you tell an AI agent
doing its job from one mapping everything it can reach? My answer has been
deception. In May 2025 I released MCP Threat Trap, an open-source honeypot for
Model Context Protocol environments. Since then I've turned it into a larger
idea, deception at the registry layer, where real and decoy MCP servers sit
side by side and an agent can't tell which ones are bait. I demonstrated it
live at the OWASP 25th Anniversary Conference, and Thinkst and Lenny Zeltser
have both cited the work.

I write about this for SC Media, speak at security conferences, and founded
the Austin chapter of AI Security Engineers. If you're working on the same
problem, I'd like to hear from you.

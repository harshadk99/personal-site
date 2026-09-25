---
# VERBATIM from the current site (legacy/index.html), Sept 24, 2026:
# "About Me", "Professional Experience", "Professional Background", "Connect With Me".
# Earlier drafts (day/night bio, trimmed experience) are in git history,
# commits 462ecfc and 8b19e48.

title: "About Me"

summary_heading: "Professional Summary"
summary:
  - >-
    Senior Security & Cloud Infrastructure Leader with 10+ years driving Zero
    Trust, SASE, and deception engineering across global multi-cloud
    environments.
  - >-
    Pioneered MCP-based deception honeypots on Cloudflare to detect AI-driven
    threats, architected global DaaS platforms (AWS WorkSpaces, Okta, AppStream
    2.0), and enforced RBI & microsegmentation — setting new Zero Trust
    standards across multi-cloud environments.
  - >-
    Passionate about building high-performing teams, optimizing cloud
    economics, and shaping the future of cybersecurity.

competencies_heading: "Leadership Competencies"
competencies:
  - "Zero Trust & SASE Strategy"
  - "Deception Engineering"
  - "Cloud Security Architecture"
  - "Multi-Cloud (AWS, Cloudflare)"
  - "AI Threat Detection"
  - "Incident & Risk Management"
  - "Change Leadership"
  - "Talent Development"
  - "Cloud Economics Optimization"

experience_heading: "Professional Experience"
experience:
  - dates: "June 2024 - Present"
    current: true
    role: "Senior Security Infrastructure Engineer"
    org: "Indeed Inc - Platform Security"
    summary: "Owning and driving Zero Trust and AI security strategy across global cloud and edge environments."
    bullets:
      - "Lead end-to-end design and execution of Zero Trust and SASE architectures across multi-cloud environments, influencing security standards and long-term platform direction."
      - "Defined and advanced AI security strategy by identifying emerging risks in MCP and agent-based systems, and translating them into deployable solutions such as deception-based detection frameworks."
      - "Built and scaled MCP Threat Trap, a production-grade deception layer on Cloudflare Workers, enabling visibility into previously unobservable AI-driven reconnaissance behaviors."
      - "Initiated and delivered FlareGuard, a platform for continuous edge posture validation, improving detection of misconfigurations across distributed security controls."
      - "Evaluated and architected Brokered Access solutions (AWS WorkSpaces, Okta, Cloudflare) aligned with Data Loss Prevention strategy, Zero Trust principles, and IR Runbooks — enabling enterprise-wide adoption of posture-aware, identity-driven access models."
      - "Led cross-functional collaboration with infrastructure, identity, and security teams to align Zero Trust implementations with business requirements and operational realities."
      - "Influenced vendor strategy and product direction through deep technical evaluations and hands-on prototyping across Cloudflare, CrowdStrike, and Okta ecosystems."
    # [TBC: CONFLICT — bullets 3 and 4 describe MCP Threat Trap and FlareGuard
    # as Indeed work. You chose (Sept 24) to present them as your own
    # "by night" projects. Keep these bullets for now, or remove them?]
    technologies: ["Zero Trust", "SASE", "AI Security", "MCP", "Cloudflare Workers", "Deception Engineering", "Brokered Access", "AWS WorkSpaces", "DLP", "Okta", "CrowdStrike"]

  - dates: "Nov 2023 - Jun 2024"
    role: "Information Security Manager, Platform Security"
    org: "Indeed Inc., Austin, TX"
    summary: "Directed platform security strategy and advanced ZTNA maturity."
    bullets:
      - "Directed platform security strategy, advancing ZTNA maturity through strategic partnerships with Cloudflare & Crowdstrike."
      - "Built product roadmaps, service catalogs & OKRs for ZTNA, RBI, CASB, and boundary defenses."
      - "Spearheaded internal AI security initiatives as part of Indeed's AI Guild."
    technologies: ["ZTNA", "Cloudflare", "Crowdstrike", "RBI", "CASB"]

  - dates: "Jun 2021 - Nov 2023"
    role: "Engineering Manager, Cloud Infrastructure"
    org: "Indeed Inc., Austin, TX"
    summary: "Built and led global cloud infrastructure team with significant cost savings."
    bullets:
      - "Built & led global team managing production across 7 AWS regions, improving SLA to 99.99% & reducing incident rates."
      - "Orchestrated migration of 30PB on-prem data & critical workloads to AWS, accelerating cloud adoption by 70%."
      - "Engineered self-service cloud catalog, reducing idea-to-production from months to <10 minutes, boosting developer velocity 10x."
      - "Secured ~$4M in cloud savings by driving proactive optimization and governance."
      - "Established boundary defense & CIS20 compliance, automating vulnerability tracking & improving audit readiness."
      - "Mentored engineers, revamped onboarding, cutting ramp time from 2 months to 2 weeks."
    technologies: ["AWS", "Cloud Infrastructure", "CIS20", "Self-service Platforms"]
    stats:
      - { value: "~$4M", label: "Cost Savings" }
      - { value: "30PB", label: "Data Migration" }
      - { value: "<10min", label: "Deployment Time" }

  - dates: "2017 - 2021"
    role: "Cloud Infrastructure Network Engineer III / II"
    org: "Indeed Inc., Austin, TX"
    summary: "Deployed multi-region AWS infrastructure and led major security initiatives."
    bullets:
      - "Deployed multi-region AWS footprints (Tokyo, Sydney, Dublin) with Aviatrix, Megaport & Direct Connect."
      - "Led 2.4B firewall migration & implemented IPS, enhancing data center security."
      - "Designed \"Office in a Box\" automation using Jinja2, streamlining new office builds."
      - "Executed office-to-cloud integrations with Palo Alto GlobalProtect, supporting scaling for app migrations."
    technologies: ["AWS", "Aviatrix", "Direct Connect", "Palo Alto", "Jinja2"]

  - dates: "2013 - 2017"
    role: "Network Engineer"
    org: "Indeed Inc., Austin, TX & Reliance Communications, Mumbai, India"
    summary: "Planned and deployed global offices with automation and monitoring improvements."
    bullets:
      - "Planned & deployed 8+ global offices, automating firewall & core switch upgrades, improving workflows & cost controls."
      - "Enhanced alerting & configuration mgmt with Statseeker, LibreNMS, AppNeta & Datadog."
    technologies: ["Network Automation", "Datadog", "LibreNMS", "AppNeta"]

background_heading: "Professional Background"
education:
  degree: "Master of Science in Networking Security and System Administration"
  school: "Rochester Institute of Technology, Rochester, New York"
  graduated: "December 2016"
  gpa: "3.96/4.0"
  achievements:
    - "Graduate Merit Scholarship"
    - "Organizational Leadership"
    - "Teaching Assistant"
    - "Intern: Kodak Alaris & Frontier Communications"

certifications:
  active: ["CISM"]
  previous: ["AWS Solutions Architect Associate", "Terraform Certified", "Aviatrix Certified Engineer", "CCNA", "CCNA Security", "CCNP"]

core_competencies_heading: "Technical Core Competencies"
core_competencies:
  Security: ["Zero Trust", "SASE Framework", "Deception Tech"]
  Engineering: ["Cloud Security", "Multi-Cloud", "Automation"]
  Leadership: ["Strategic Planning", "Team Development", "Cost Optimization"]

community_heading: "Organizational & Community Leadership"
community:
  - { text: "Founder & Chapter Lead — AI Security Engineers — Austin, TX", url: "https://www.meetup.com/ai-security-engineers-austin-tx/" }
  - { text: "ISACA Emerging Trends Working Group — since Feb 2026" }
  - { text: "ISACA Academic & Workforce Development Advisory Group — since May 2026" }
  - { text: "Asian Network Ambassador — Cultural visibility" }
  - { text: "Mentor — BOOST Cohort, 25 participants" }
  - { text: "Brand Ambassador — Austin" }
  - { text: "Hackathon organizer — 12 teams" }
---

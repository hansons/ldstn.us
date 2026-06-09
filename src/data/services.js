// Single source of truth for the six service lanes.
// Drives the home-page cards, the /services index, and each /services/[slug]
// deep-dive. Keep the voice outcome-led — AI is a method here, not the headline.

export const services = [
  {
    slug: 'knowledge-capture',
    name: 'Institutional knowledge capture',
    nav: 'Knowledge capture',
    summary:
      'Turn what your organization knows into what your organization owns. Tribal knowledge gets interviewed out of the people who hold it and written down in a form your next hire can actually use.',
    bullets: [
      'Subject-matter expert interviews and debriefs',
      'Process and workflow documentation',
      'Methodology codification — turning how you work into a how-we-work doc',
      'Role definitions, RACI, decision-rights mapping',
      'Searchable, versioned knowledge bases',
    ],
    lede:
      'The senior person who knows how everything really works is a single point of failure no org chart shows. We get what is in their head onto the page — structured, searchable, and usable by whoever comes next.',
    whatItIs: [
      "Every organization runs on knowledge that lives in a few people's heads: why the process is shaped the way it is, which exception actually matters, who to call when the system says no. It is the most valuable thing you own and the least protected. When those people leave — or just get busy — it walks out the door with them.",
      'We extract that knowledge deliberately. Structured interviews and working debriefs pull out the reasoning, not just the steps. Then we write it down in a form that survives turnover: organized, versioned, and pitched at the person who has to use it next, not the expert who already knows.',
    ],
    howItWorks: [
      'We start by mapping who holds what — the handful of people whose absence would hurt most. Then we sit with them: guided interviews, shadowing where it helps, and debriefs that capture the judgment behind the work, not just the click-path.',
      'The output is a structured knowledge base — searchable, cross-referenced, version-controlled — plus the methodology docs and role definitions that make it navigable. We build it so your team can keep adding to it after we leave.',
    ],
    deliverables: [
      'Subject-matter expert interviews and working debriefs',
      'Process and workflow documentation, end to end',
      'Methodology codification — how-you-work turned into a how-we-work doc',
      'Role definitions, RACI, and decision-rights mapping',
      'A searchable, versioned knowledge base your team can extend',
    ],
    whenYouWant: [
      'A key person is retiring, leaving, or simply irreplaceable',
      'Onboarding takes months because nothing is written down',
      'The same questions get re-answered by the same expert every week',
      "You're scaling and can't clone your best people",
    ],
    related: ['document-production', 'systems-engineering', 'ai-operations'],
  },

  {
    slug: 'audits',
    name: 'Audits & actionable intelligence',
    nav: 'Audits',
    summary:
      'An honest read on how your operation actually runs — or what a market, vendor, or investment opportunity actually looks like. Findings, prioritized recommendations, named tradeoffs. Not a report — an answer.',
    bullets: [
      'Process, operational, and documentation audits',
      'Regulatory and standards posture (HIPAA, ISO, NRC, FDA)',
      'Market research, competitive analysis, and vendor selection',
      'AI-readiness assessments and technical due diligence',
      'Strategy memos and risk assessments with named tradeoffs',
    ],
    lede:
      "You don't need another deck that restates what you already know. You need a clear-eyed read on how things actually stand and a ranked list of what to do about it.",
    whatItIs: [
      "An audit is a disciplined look at the gap between how your operation is supposed to work and how it actually works — or, pointed outward, at what a market, vendor, technology, or acquisition target really is underneath the pitch.",
      'We do the fieldwork: read the documents, walk the process, interview the people, check the claims. What comes back is not a neutral summary. It is findings ranked by what matters, with the tradeoffs named so you can decide — and the reasoning shown so you can trust it.',
    ],
    howItWorks: [
      "We scope the question first — is this real, where are we exposed, what should we buy, are we ready. Then we gather evidence from the inside and the outside, and pressure-test what we find rather than taking it at face value.",
      'The deliverable is built to be acted on: an executive summary that stands alone, findings ordered by priority, recommendations with the cost and the catch spelled out, and the evidence trail behind each one.',
    ],
    deliverables: [
      'Process, operational, and documentation audits',
      'Regulatory and standards-posture assessments (HIPAA, ISO, NRC, FDA)',
      'Market research, competitive analysis, and vendor selection',
      'AI-readiness assessments and technical due diligence',
      'Strategy memos and risk assessments with tradeoffs named',
    ],
    whenYouWant: [
      'You suspect the official process and the real one have drifted apart',
      "You're about to buy, build, or bet and want an outside read first",
      'A regulator, board, or investor is going to ask hard questions',
      'Everyone has an opinion and no one has the evidence',
    ],
    related: ['knowledge-capture', 'compliance', 'systems-engineering'],
  },

  {
    slug: 'document-production',
    name: 'Document production',
    nav: 'Document production',
    summary:
      'Briefs, memos, ConOps, SOPs, grant narratives, technical specs. Written for the audience that has to act on them — not to fill space in a binder.',
    bullets: [
      'Documentation primers — foundational doc packs for orgs starting from scratch',
      'Concept of Operations and product specifications',
      'Standard operating procedures and policy documents',
      'Decision memos, executive briefs, grant narratives',
      'Compliance artifacts that survive auditor scrutiny',
    ],
    lede:
      'Most documents are written to be filed, not used. We write the other kind — the brief that drives a decision, the SOP a new hire can actually follow, the spec a builder can actually build from.',
    whatItIs: [
      'A document earns its keep when the person who has to act on it can do so without a meeting to explain it. That is harder than it sounds: it takes knowing the subject, the audience, and the decision the document exists to serve.',
      'We produce the documents institutions run on — concepts of operations, specifications, standard operating procedures, policies, decision memos, grant narratives, compliance artifacts — written tight, structured for the reader, and accurate enough to survive scrutiny.',
    ],
    howItWorks: [
      'We take the source material however it exists — in someone’s head, in a thread, in a pile of half-finished drafts — and we do the structuring, not you. Where there is nothing to start from, our documentation primers stand up a foundational set from scratch.',
      'Drafts come back for review on a clear cadence, with revisions built into scope. You end with a document that is done — adopted and usable — not a draft that needs another month of your time.',
    ],
    deliverables: [
      'Documentation primers — foundational doc packs for orgs starting from zero',
      'Concept of Operations and product specifications',
      'Standard operating procedures and policy documents',
      'Decision memos, executive briefs, and grant narratives',
      'Compliance artifacts written to survive an auditor',
    ],
    whenYouWant: [
      'You need it in writing and no one has the time or the knack',
      'A new hire would onboard faster with real documentation',
      'A grant, board, or regulator needs a document that lands',
      'You’re starting from a blank page and need a foundation',
    ],
    related: ['knowledge-capture', 'systems-engineering', 'compliance'],
  },

  {
    slug: 'systems-engineering',
    name: 'Systems & requirements engineering',
    nav: 'Systems engineering',
    summary:
      "Classical systems engineering applied to whatever problem you've got — from process control and instrumentation to large-system architecture. The discipline that turns “we need a thing” into a buildable, traceable specification.",
    bullets: [
      'User needs development (IEEE 29148, ISO 9001 §8.3)',
      'Requirements documentation: SRS, SyRS, ICDs, traceability matrices',
      'Process and control systems design',
      'Systems architecture and integration design',
      'Verification & validation planning (IEEE 1012, IEEE 29119)',
    ],
    lede:
      'The gap between “we need a thing” and a thing that works is requirements. We do the unglamorous, decisive work of turning intent into a specification someone can build to — and verify against.',
    whatItIs: [
      'Systems engineering is the discipline of getting from a fuzzy need to a precise, buildable, testable definition of the solution — and keeping every requirement traceable from the need that spawned it to the test that proves it.',
      "We bring it to whatever you're building: software, a process, an instrumentation or control system, a large integrated architecture. The point is to find the contradictions and gaps on paper, where they're cheap, instead of in the build, where they're not.",
    ],
    howItWorks: [
      'We start at user needs — what the system must accomplish and for whom — and work down through system and software requirements, interfaces, and architecture, keeping a traceability spine the whole way so nothing gets orphaned and nothing gets smuggled in.',
      'Where it is regulated or safety-relevant, the artifacts are shaped to the standard from the start — IEEE 29148 for requirements, IEEE 1012 and 29119 for verification and validation — so they hold up downstream instead of needing a rewrite.',
    ],
    deliverables: [
      'User needs development (IEEE 29148, ISO 9001 §8.3)',
      'Requirements docs: SRS, SyRS, ICDs, and traceability matrices',
      'Process and control-systems design',
      'Systems architecture and integration design',
      'Verification & validation planning (IEEE 1012, IEEE 29119)',
    ],
    whenYouWant: [
      'A build is about to start and the requirements are vibes, not specs',
      'Scope keeps changing because no one pinned down the needs',
      'You need traceability a regulator or auditor will accept',
      'Two systems have to integrate and the interface is undefined',
    ],
    related: ['document-production', 'compliance', 'audits'],
  },

  {
    slug: 'ai-operations',
    name: 'AI-leveraged operations',
    nav: 'AI operations',
    summary:
      'Get your team set up with AI-assisted tooling so they do the work themselves, ongoing, after we leave. Self-sufficiency is the goal — not a recurring invoice.',
    bullets: [
      'VS Code + Claude Code installation and configuration',
      'Repository structure, conventions, role libraries',
      'Intake and documentation systems for non-technical operators',
      'Prompt engineering training for operators and decision-makers',
      'Migration and maintenance docs for your IT lead',
      'LLM architecture for teams building AI-powered systems',
    ],
    lede:
      "AI is most valuable when your own people wield it — not when it's a service you rent. We set your team up to do the work themselves, with the tooling, structure, and training to keep going after we're gone.",
    whatItIs: [
      'There are two ways to bring AI into an organization. One is to make yourself the permanent middleman. The other is to put the capability in your team’s hands and leave. We do the second.',
      'That means installing and configuring the tools, designing the repository structure and conventions that keep the work organized, building a role library tuned to how you actually operate, and training your operators — including the non-technical ones — to get useful answers out of it.',
    ],
    howItWorks: [
      'We set up the working environment — VS Code, Claude Code, and the structure around them — configured to your work rather than to a generic demo. We build intake and documentation systems a non-technical operator can run, and a role library that speaks your vocabulary and your constraints.',
      'Then we train your people on the part that actually matters: not which button to press, but how to ask a question that produces a useful answer. You leave with maintenance and migration docs so your IT lead can keep it running, refresh it, or move it — without us.',
      'For teams building AI-powered products rather than using AI internally, we also architect the system itself — model selection, retrieval, orchestration, and the deployment and compliance wrapper. Same work, one layer deeper.',
    ],
    deliverables: [
      'VS Code + Claude Code installation and configuration',
      'Repository structure, conventions, and a tailored role library',
      'Intake and documentation systems for non-technical operators',
      'Prompt-engineering training for operators and decision-makers',
      'Migration and maintenance docs for your IT lead',
      'LLM system architecture for teams building AI products',
    ],
    whenYouWant: [
      "Your team should be using AI and isn't, or is using it badly",
      'You want capability in-house, not another vendor dependency',
      'Non-technical staff need to produce structured work with AI help',
      "You're building an AI product and need the architecture right",
    ],
    related: ['knowledge-capture', 'document-production', 'compliance'],
  },

  {
    slug: 'compliance',
    name: 'Compliance-aware delivery',
    nav: 'Compliance',
    summary:
      'The same work, but the artifacts have to survive the auditor. Specialty lane for healthcare, nuclear, ITAR, and other settings where getting it wrong has consequences beyond a missed deadline.',
    bullets: [
      'HIPAA architecture: PHI handling, de-identification, BAA structuring',
      'Nuclear regulatory: 10 CFR 73.54 airgap, NRC cyber security, NQA-1',
      'FDA SaMD boundary analysis',
      'ISO/IEC software lifecycle artifacts (29148, 29119, 12207)',
      'Audit trail and explainability for regulated environments',
    ],
    lede:
      "In a regulated setting, “good work” isn't enough — the work has to be defensible. This is the lane where every artifact is built to stand up when someone with authority comes to check.",
    whatItIs: [
      'Most of what we do carries over directly into regulated environments. What changes is the standard of proof: the document does not just have to be right, it has to demonstrate that it is right to an auditor, a regulator, or a review board that arrives skeptical.',
      "We've built systems for environments where getting it wrong has real consequences — healthcare, nuclear energy, export-controlled work. That discipline shapes how we structure traceability, handle sensitive data, and design the audit trail from the first artifact, not bolted on at the end.",
    ],
    howItWorks: [
      'We work the compliance frame into the deliverable from the start: the regulation or standard that governs it, the evidence it has to produce, and the form an auditor expects to see. That is cheaper and more defensible than retrofitting compliance onto work that was not built for it.',
      'Across healthcare (HIPAA, PHI handling, de-identification, BAAs), nuclear (10 CFR 73.54 airgap, NRC cyber security, NQA-1), medical-device boundaries (FDA SaMD), and the ISO/IEC software lifecycle, the throughline is the same — artifacts that survive scrutiny because they were designed to.',
    ],
    deliverables: [
      'HIPAA architecture: PHI handling, de-identification, BAA structuring',
      'Nuclear regulatory: 10 CFR 73.54 airgap, NRC cyber security, NQA-1',
      'FDA Software-as-a-Medical-Device boundary analysis',
      'ISO/IEC software-lifecycle artifacts (29148, 29119, 12207)',
      'Audit trail and explainability for regulated environments',
    ],
    whenYouWant: [
      'An auditor, regulator, or review board is in your future',
      'You handle PHI, classified, or export-controlled information',
      'AI is entering a setting where mistakes are not just costly',
      'Your documentation has to satisfy a specific standard, by name',
    ],
    related: ['audits', 'systems-engineering', 'document-production'],
  },
];

export function getService(slug) {
  return services.find((s) => s.slug === slug);
}

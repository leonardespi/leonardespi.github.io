---
layout: page
title: Projects
permalink: /projects/
---


Welcome to my project showcase. Below are some of the key applications and tools I have developed or contributed to. Each project demonstrates different aspects of my skills in software development, user experience, and problem-solving.

---

## [POLQA (Politics Quality Assessment)](https://github.com/polqa-framework/politics-qa)

**Overview**
A modular CLI framework to evaluate LLM outputs with reproducible runs, curated datasets, and prompt variants—covering both functional and qualitative criteria.

**Technologies / Tools Used**

* Python, Shell
* Node.js / TypeScript
* YAML/JSONL datasets; deterministic seeds
* Pluggable providers, parsers, exporters

**Key Features**

* Tagged datasets with difficulty strata; seeded sampling
* Metrics: exact match, ROUGE-L/BLEU (lightweight), pass@k, rule-based checks
* Exporters for CSV/JSON and run manifests for auditability
* Extensible adapters for providers and scoring

**Outcome**
Enabled systematic, transparent evaluation of prompts and models, improving QA rigor and comparability across experiments.


---

## [Resume Builder](https://github.com/leonardespi/resume-builder)

**Overview**
A web application to create Harvard-style, ATS-friendly resumes with pixel-precise PDF export.

**Technologies Used**

* JavaScript/TypeScript, HTML5, CSS3
* **html2canvas** with DOM cloning (`prepareCloneForPdf`)
* Lightweight theming and `.pdf-compact` print styles

**Key Features**

* Live, structured editing with section presets
* Deterministic PDF export (**scale: 2**, stripped transitions/animations/transforms)
* Preserved margins and typography; consistent layout across exports
* Multi-profile variants via JSON schema (planned)

**Outcome**
Consistent, professional resumes generated rapidly and reliably, eliminating layout jitter and ensuring repeatable results.

---

## [SPA (System for Thought & Action)](https://github.com/leonardespi/spa)

**Overview**
A personal productivity architecture that unifies capture, organization, and execution. It fuses PARA, GTD, and lightweight SCRUM to translate long-term goals into actionable projects.

**Technologies Used**

* Obsidian (Markdown vaults), Mermaid
* Google Calendar / Google Tasks (timeboxing & execution)
* Node.js/TypeScript CLI helpers (scaffolding, reviews)

**Key Features**

* Hierarchy: **Core → Areas → Domains → Projects**
* **Cache filter** for short-lived inputs; **Vault** for persistent knowledge
* Tasks as the single source of execution; calendar strictly for output/time blocks
* Weekly/Monthly review templates with snapshots

**Outcome**
Reduced friction in planning and review, improved weekly throughput, and a reproducible workflow that scales with complexity.

---

*Feel free to reach out if you would like to explore any of these projects in more detail.*

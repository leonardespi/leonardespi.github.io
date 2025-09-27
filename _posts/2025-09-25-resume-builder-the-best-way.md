---
layout: post
title:  Resume Builder - The best way
date: 2025-09-25 15:01:35 +0300
author: Leonardo Espinosa
description: This guide shows how to write the ideal resume for tech jobs
image:
tags: [Projects]
tags_color: '#8cdd55ff'
featured: false
---
*Your Résumé Deserves Better: An Approach to ATS-Friendly Structure*

Landing your next role shouldn't be a battle against a robot. If you've ever felt like your résumé disappeared into a digital black hole after applying online, you're not alone. The secret to getting noticed isn't always about your experience (though that helps!), but about how your document is structured.

That's why I built Resume Builder. It's not a flashy design tool; it's a project focused on the fundamentals: clean structure, ATS compatibility, and professional clarity—all served up in a minimalist, Harvard-style package.

### The Unwritten Rules: Structure & the ATS Hurdle

Let's be honest: your résumé's first reader is a piece of software called an Applicant Tracking System (ATS). If the ATS can't read your file correctly, a human recruiter will never even see it.

**What an ATS Hates (and Loves)**

**Hates:** Fancy graphics, custom fonts, text boxes, tables, and complex multi-column layouts. (These elements confuse the parsing software, causing key data like dates or job titles) to drop out.

**Loves:** A simple, single-column layout with clear section headings (Experience, Education, Skills). It wants plain, readable text that it can easily index.

### Why Structure is Your Superpower

Recruiters spend seconds scanning résumés. A properly style template works because it's predictable. It prioritizes information and white space, guiding the reader's eye quickly to the most important parts:

* **Contact Info:** Name, email, phone, and professional links.
* **Professional Experience:** Clear start/end dates, company names, and action-verb-driven bullets that focus on quantifiable achievements, not just duties.
* **Education & Skills:** Easy-to-scan lists.

<br>
By adopting this minimal, data-first structure, you solve the machine problem and the human problem simultaneously.

### The Solution: resume-builder Explained

I built this project to take the headache out of formatting and file compatibility, using modern web tech you can trust.

**1) Truly ATS-Friendly PDF Output**

This is the key differentiator. We use pdfmake to generate the final file. Why is this important? It creates a text-based PDF.

Unlike PDFs exported from image-heavy tools (like Canvas or some design apps), our output retains a clean, structured text layer, t he ATS reads the text layer directly, which means your skills and job titles won't get garbled or lost.

**2) A Focused Builder, Not a Distracting Designer**

The tool is a minimalist form built with React, TypeScript, and Chakra UI. It guides you to input the right data in the right place, forcing you to focus on the content that matters. You control simple but crucial features, like toggling the visibility of hyperlinks for your contact info, also its important to notice that final PDF export is based on the last compiled snapshot, ensuring a consistent, reproducible document every time.

**3) Built for Openness and Future Growth**

The code is intentionally modular, not just for easy maintenance, but because I believe in the project's future. It's laid out cleanly , making it easy to jump in. It already supports English and Spanish via i18next, and the modular design paves the way for advanced features that actually help, like future integrations for AI content optimization or deeper ATS checks.


Want to see how it works? Visit the website [here](https://leonardespi.me/resume-builder/)

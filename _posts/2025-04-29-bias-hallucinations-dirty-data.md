---
layout: post
title:  Bias, hallucinations and dirty data
date: 2025-04-29 15:01:35 +0300
last_modified_at: 2025-04-29
categories: [AI]
tags: [ai]
---

**Errors are no longer always in the code…**

For years, the logic was clear: if something fails, it’s because the code has a bug. A poorly written conditional, an out-of-range index, an unvalidated input…
But in the era of artificial intelligence, errors no longer hide (only) between lines of code: they now live in the data, in the models, and—most worryingly—in undetected biases.

Today, the tester’s role is changing. We are moving away from being simple *functionality verifiers* to becoming *evaluators of judgment, context, and consequences*.

<br>

### What does it mean to test an AI model?

In traditional systems, a test fails if the system doesn’t behave as expected.
But with AI models—especially generative or predictive ones—**there isn’t a single “correct answer,”** but a range of possible outputs… and that changes everything.

**The new QA isn’t about checking whether something “works,” but whether it “makes sense.”**

One of the most common challenges when testing generative models (like LLMs or conversational AI) is detecting *incoherences*, *contradictions*, or *responses that simply don’t hold up*.

For example:

* A chatbot that recommends aspirin to someone allergic to NSAIDs.
* A generated summary that omits key points from the original text.
* An assistant AI that invents features that don’t exist.

These aren’t classic bugs. They are *reasoning* errors by the model. And to find them, **QA must adopt the role of a critical evaluator** rather than a purely technical verifier.

<br>

### When AI hallucinates

One of the best-documented problems with language models is their tendency to **hallucinate false information with complete confidence**.

Real example:
An AI generates a biography with achievements that never happened, books that don’t exist, or universities the user never attended.

These *hallucinations* are hard to test with automated scripts because they require:

* **Domain knowledge.**
* **Factual verification.**
* **Human judgment.**

Here, **QA becomes a detective**. We aren’t hunting syntax errors; we’re uncovering well-told fictions. And that’s a completely new challenge.

<br>

### Fairness, bias, and accessibility: the invisible testing    

This point is personal for me.
I grew up watching my mother—a deaf woman—constantly adapt to technology that wasn’t designed for her. From faulty auto-captions to voice assistants that never understood her.

That’s why, when testing AI systems, I find this question essential:
**Who was this model trained for? Who is it leaving out?**

Algorithmic biases can cause:

* Discrimination by gender, age, race, or language.
* Exclusion of users with disabilities.
* The reproduction of harmful stereotypes (even within the training data).

<br>
**QA must assume an ethical role**, not just a technical one.

Review should include fairness, dataset diversity, and impact assessment.

Because if the model was trained only on the voices of white men, **how can we expect it to understand other realities?**

<br>

### Are we ready?

The short answer: not entirely.
But this is precisely where QA has the opportunity to **lead the change**.

QA in the new era doesn’t just validate outputs. **It interprets results, anticipates consequences, and defends the real user experience**—the one so often ignored by models trained on impersonal data.

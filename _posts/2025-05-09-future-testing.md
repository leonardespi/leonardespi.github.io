---
layout: post
title:  The testing for the future
date: 2025-05-09 15:01:35 +0300
author: Leonardo Espinosa
description:  Blockchain, containers, accessibility. The new testing frontier is here.
image:
tags: [Testing]
tags_color: '#4A90E2'
featured: false
---

**Before, testing software meant making sure the buttons worked.**
Now it also means ensuring that a smart contract doesn’t lose millions, that an API survives in distributed production, or that a blind person can access your app without barriers.

**The QA of the future is already here.**

---

### Blockchain Testing: the immutable must be tested too

When we hear “blockchain,” many think of cryptocurrencies.
But from a QA perspective, **the real challenge lies in smart contracts**.
These small programs that run on Ethereum, Solana, or other networks **are immutable once deployed**.
An error doesn’t just break functionality—it can **cost millions or be exploited by attackers.**

Testing smart contracts isn’t just writing unit tests. It’s understanding:

* how **gas fees** are calculated,
* how a malicious user can manipulate a transaction,
* and how the system behaves in the face of forks, consensus failures, or Sybil attacks.

**Ganache**, **Hardhat**, and static analysis tools like **Mythril** or **Slither** become indispensable.
Here the QA turns into a **crypto-detective**: validation isn’t enough—you have to anticipate.

---

### Cloud-Native Testing: between containers and chaos

The promise of modern software is clear: auto-scale, survive failures, deploy in seconds.
But for that to work, **QA also has to become cloud-native**.

Today you no longer test “an app.” You test:

* a dozen microservices that communicate over REST APIs,
* running in pods inside Kubernetes,
* with real-time orchestrated data flows.

And functional tests aren’t enough. You must test:

* what happens if a microservice goes down (*fault injection*),
* how the system behaves under traffic spikes (*stress & scalability*),
* and how a version change impacts production (*canary testing*).

The toolkit shifts: **K6**, **Postman + Newman**, **LitmusChaos**, **Istio**, **TestContainers**…

Here QA **doesn’t sit back to test**: they dive into the cluster, monitor with Grafana, and break things to validate resilience.

---

### Advanced Accessibility Testing: because inclusion is not optional

I grew up watching technology ignore my mother, who is deaf.
And although we’ve made progress, many applications **still aren’t designed for everyone**.

Accessibility testing (A11y) is no longer just checking for `alt` labels.
It means validating:

* that screen readers don’t choke,
* that contrast allows reading with low vision,
* that keyboard navigation is complete,
* that forms work with assistive technologies.

Today, tools like **axe-core**, **WAVE**, **Lighthouse**, and even Figma plugins help…
But **nothing replaces real testing with diverse users.**
An app can pass every automated check and still be a nightmare for someone with dyslexia or paralysis.

**Accessibility isn’t a nice-to-have.
It’s part of quality. And if QA doesn’t test it, who will?**

---

It’s in our hands as testers to drive this change.

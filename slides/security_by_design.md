---
layout: slides.njk
title: Adopting Code Review - Edward Delaporte
slideimg: /slides/img/slidebg.jpg
---

<pre>


## The Path to Security By Design

1. First Steps
2. Difficult Meaningful Changes
3. Maturity

---

## First Steps

- Team commits to a written Software Development Lifecycle (SDLC).

[Example Development Standard](https://answers.uillinois.edu/illinois/106122)

---

## Milestones

- Products have a `CHANGELOG`
- `CHANGELOG` updates are routinely shared across the organization.
- Product code is in modern version control.
- All changes to the product are reviewed by three team members (including the author).
- Product has `Data Sources` and `Endpoint Connections` inventories.
- Product has an up to date `CONTIBUTING` guide.
- Product has supply chain vulnerability alerts enabled (i.e. GitHub Dependabot).
- Routine production updates are done via pipeline.
- Product has a regression test suite.
- Product has up to date data flow diagrams.

???

- CHANGELOG - talking about changes prevents defects
- version control - everything else depends on git
- code review - team awareness of all code reduces defects, improves quality, and drastically reduces mitigation costs for discovered defects
- data sources and endpoint connections inventories - knowing what data a product talks to increases agility and improves security and privacy outcomes
- contributing guide - onboarding new developers improves agility, reduces costs, reduces defects
- supply chain vuln alerts - are great. defense in depth
- pipeline - increased agility, fewer outages, dramatically faster defect cleanup - foundation for everything that comes later
- 

---


## Phases

- Complete the milestone list starting with `one critical product` for each line.
- Repeat with `critical products`, `all products updated this year`, then `all supported products`.

---



---- OLD STUFF ----

## 

-	Where to reach us
-	Overview of existing job aids
-	How/why/when to join our ensembles


## Adopting Code Review

- Benefits of Code Review
- Committing to Code Review
- Processes that Enhance Code Review

---

## Benefits of Code Review

- Cross Training
- Catches Bugs
- First Step toward Ensemble Agility

---

## Commit to Code Review

Discuss and agree to team-wide expectations.

- We prioritize reviewing each other's code, over writing new code.
- Team members commit to reviewing unreviewed code daily. One work day is the longest any non-draft pull request may sit without feedback.
- Code authors commit to be available to discuss the code.
- Managers commit to make time to train in technologies that team members are asked to review code in.
- Teams commit to providing additional reviewers when requested by the code author.
- Email securitysupport@illinois.edu to request code reviewers from Cybersecurity.

???

- Cybersecurity Development makes this same commitment to your team - we will provide additional code reviewers by request.

---

## Be a Great Reviewer

- Please do review code you don't fully understand.
- We encourage having a look at any open pull requests assigned to you each time
  you return from a coffee break.
- Pair and mob programming are forms of code review.
- Feel free to approve pull requests for work that you are satisfied with after
  any collaborative programming session.
- Review does not result in automatic approval, even when the work was done in a
  mob session.

---

## Create a Great Pull Request

- Submit small pull requests often.
- Request lots of reviewers: No one sees a pull request until reviewers are
  assigned.
- Use Github [commit keywords][26] to link issues.
- Add the GitHub Microsoft Teams reminder bot to all repositories.
- Always mention any ready-for-review unreviewed code during your daily
  stand-up.
- Some feedback merits opening a new issue, to keep the current pull request
 simple.

???

- No one ever got stuck on a pull request that was too small.
- GitHub commit keywords benefit both the PR and the git log.

---

## Fast Pull Requests

- Make Focused Topical Changes
- Use Pair and Ensemble Programming
- Use `git rebase -i` to squash history and achieve trivial merges.
- "I don't know." is an acceptable answer. Document, create a new backlog if needed, approve and move on.

---

## Key Points

- Request lots of Reviewers
- Use a reminder bot
- Expect Fast Feedback

---

## Questions and Answers

---

## Bonus Slide: LGTM

LGTM:

> "Looks Good to Me"

- Use LGTM as a reminder to discuss code review comfort levels at next retro.
- LGTM can be a sign of missed training opportunities.

???

- Some LGTM is fine.
- We do want to avoid a culture of LGTM.
- Thoughtful discussions are better.
- Treat LGTM as a process smell, but not a crisis.

---

## FAQ

Who reviews what at what criticality or seniority level?
> The impact of routine prioritized review vastly outweighs the impact of these decisions.
> Let anyone review anything and trust that lots of reviews are happening.

If the team spends twice as much time reviewing code as writing code, will all of our timelines triple?
> Leadership does need to be aware of and commit to supporting this up-front cost.
> Expect the timeline for the immediate next effort on a product that just implemented code review to triple, and then watch timelines quickly reduce to much shorter than before, for that product.
> Teams can avoid paying all of this cost upfront by only implementing code review on one code base at a time.


</pre>

---
layout: slides.njk
title: Adopting Code Review - Edward Delaporte
slideimg: /slides/img/slidebg.jpg
---

<pre>

## Adopting Code Review

Overview:
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

- Submit pull requests often. Try to keep each pull request to 20 lines of new
  non-boilerplate code or less.
- Link relevant GitHub issues to the pull request.
- We typically use Github [commit keywords][26] to link issues. This adds the
 issue history to our Git log.
- Request lots of reviewers: No one sees a pull request until reviewers are
  assigned.
- Feel free to request reviewers from other teams.
- Add the GitHub Teams reminder bot to all repositories.
- You are encouraged to remind colleagues of your open pull request.
- Always mention any ready-for-review unreviewed code during your daily
  stand-up.
- Some feedback merits opening a new issue, to keep the current pull request
 simple.

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

</pre>

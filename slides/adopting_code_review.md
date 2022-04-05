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

- Discuss and agree to team-wide expectations
- Request lots of Reviewers
- Use a reminder bot
- Expect Fast Feedback

???

---

## Be a Great Reviewer

- We prioritize reviewing each other's code, over writing new code.
- We encourage having a look at any open pull requests assigned to you each time
  you return from a coffee break.
- One work day is the longest we expect any non-draft pull request to sit
  without feedback.
- Please do review code you don't fully understand.
- Your manager will make time for you to train in languages that you are being
  asked to review code in.
- Pair and mob programming count as code review.
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
- Teams commit to providing additional reviewers when requested by pull request.
- Add the GitHub Teams reminder bot to all repositories.
- You are encouraged to remind colleagues of your open pull request.
- Be available in chat to discuss the code.
- Always mention any ready-for-review unreviewed code during your daily
  stand-up.
- Teams should commit to reviewing unreviewed code daily.
- Some feedback merits opening a new issue, to keep the current pull request
 simple.

---

## Fast Pull Requests

- Make Focused Topical Changes
- Use Pair and Ensemble Programming
- Use `git rebase -i` to squash history and achieve trivial merges.

</pre>

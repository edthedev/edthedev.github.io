---
layout: slides.njk
title: BTAA Presentation - Edward Delaporte
slideimg: /slides/img/slidebg.jpg
---

<pre>

# Cybersecurity Development

Enhancing the Cybersecurity Program 
to make University Software Development Safer

Presented by Edward Delaporte, June 2021

???


Overview:
+ COVID Success Stories
+ What to deliver through the SecDev program
+ What skillsets to hire to build a SecDev program
+ Our SecDev program Rules of Engagement

TODO: Take a pass to ensure notes are speaking to outcomes in each case.
TODO: Maybe sync the titles to these...

---

## Success Stories

Illinois COVID Response

+ Safer Illinois Mobile App
+ COVID Test Pipeline - Results in 6 hours.


???

+ 10k daily COVID tests delivered.
+ Emergency mobile app produces in 2 months.
+ Investments paid off.
+ Recent investment in partnership with the Rokwire team.
+ Long term investments by security in the Illinois developer community.
+ Long term investments by IAM in the Illinois developer community.

---

## Deliverables

+ Guides that connect best practices to available tools to campus standards and policies.
+ Presentations
+ Engagements

???

+ Raising awareness of practices and tools and policies all at once.
+ Presentations - Talk about the guides and talk about lessons learned. Tell the story of the journey we're on together.
+ Engagements - Join their stand-ups, join their working sessions, submit pull requests with code changes, share example exploits.
+ Engagements - Never police. Help people understand the risks and make a wise practical choice.
+ Engagements - Be a fun ally. This stuff is boring, dry and scary. It's not actually that hard to become the ally they really want to have in their corner.

---

## Build a Team

Skillsets desired:

+ Software Development Experience
+ People Skills
+ Generosity
+ Hacking
+ Continuous Deployment
+ Identity Management
+ Quality Assurance
+ Coding for Compliance

???

+ Must have done the work to advise other developers. - We don't currently have a junior level position.
+ Working with your team should be a privilege. Make people feel good about it.
+ Your team members need to prioritize their allies success over their own creations. This doesn't come naturally to all developers.
+ There's no substitute for breaking into something to get someone's attention.
+ Proactive solutions all revolve around CI/CD with git.
+ Refined solutions require experience with IAM, QA, and Static Code Analysis.

---

## Rules of Engagement

**Require Agile Practices before Engaging**

Teams must:
+ Hold daily stand-ups.

???

+ The simplest solution to being highly available is to join their daily stand-up.
+ Our biggest vulnerability preventions were caught during a daily stand-up discussion.
+ Stand-ups are a skill that requires leadership support to allow team members to practice and get good.
+ Anyone can benefit from a daily stand-up.
+ But a team of people practiced in attending stand-ups gains exceptional value from adding a security team member.

---

## Rules of Engagement

**Require Agile Practices before Engaging**

Teams must:
+ Hold daily stand-ups.
+ [Keep a Change Log.](https://keepachangelog.com/en/1.0.0/)

???

+ If your dev teams only change one thing - it should be committing to keeping a ChangeLog.
+ When the SecDevOps team stop complaining, the changelog has enough detail.
+ A sign of success is when ChangeLog notes are copied and pasted into formal Change Control.

---

## Rules of Engagement

**Require Agile Practices before Engaging**

Teams must:
+ Hold daily stand-ups.
+ Keep a Change Log.
+ Keep a backlog.

???

Story
+ One team we worked with was not keeping a backlog. 
+ There was no way to decide what to work with them on.
+ We made keeping a backlog a requirement for our assistance.
+ Their work velocity improved immediately.

Which backlog?
+ Any backlog. 
+ A shared Word Document will suffice on day one.
+ GitHub Issues is the "nobody ever got fired for buying IBM" of backlogs. 
+ The backlog tool you already have is the best one.
+ A backlog is not a work queue. It's not a ticketing system.
+ A backlog is a big pile of things we might someday do.

---

## Rules of Engagement

**Require Agile Practices before Engaging**

Teams must:
+ Hold daily stand-ups.
+ Keep a Change Log.
+ Keep a backlog.
+ Use `git`. 

???

+ `git` is a crucial collaboration protocol supported by all modern collaboration tools.
+ You can have any code collaboration protocol you want, as long as you want git.
+ You really can have any provider - GitHub, GitLab, Jenkins, Azure DevOps, AWS CodeDeploy.

---

## Some Self-Reflection 

+ We are developers whose main purpose is not development.
+ This is an Identity Management effort.
+ This is a Quality Assurance effort.
+ Realize opportunities to collaborate with Accessibility.

???

+ We have a set of products for the team to work on, to stay sharp and share recipes.
+ Our priority is being available to University of Illinois development teams.
+ Collaboration with IAMU and QA have been critical.
+ IAM solves a lot of problems before they grow bigger.
+ QA has some of our leaders who understand the shared purpose of reliability.
+ Accessibility has the same problems and interfaces many of the same ways. 

---

## Collaboration Opportunities

+ Job Aids we can share.
+ Community of Practice
+ Open Source Collaborations.

Email: delaport@illinois.edu

???

+ We are happy to share our Job aids for software development teams
+ Would love to establish a community of practice.

Our open source efforts are focused around the 
InCommon Trusted Access Platform
+ ncsa/bhr - black hole router
+ AWS CLI Login - Shibboleth integration for AWS command line

---

## Questions & Answers

---

## More Random Thoughts 


Lessons:
+ It was good to have a software product to rally around and practice on, but the real product is the program.
+ Demand agile practices before engaging - git use, a backlog, daily stand ups, a change log, etc. Doesn't have to be perfect, but if the team has no respect for their own time, they will be unable to respect your team's time.
+ Use git. It is now a protocol, not just free a tool. You must have support for the leading collaboration protocol to succeed.
+ This is a QA team.
+ This is an IAM team.
+ Boy do changelogs pay off. If you only do one thing - start enforcing changelogs.
+ bias toward open source - we are a small team and don't write much - guideline towards btaa contribution - particularly around IAM and QA.

Offer of mentorship - it pays off. A national program can take much higher swings than a local one. 



## BTAA talk thoughts

Build relationships.
Focus first only on tools that being both Cybersecurity and efficiency wins. There will be time for the Cybersecurity win with efficiency loss later, using the efficiencies you help free up now.

---


## The five love languages of software development:

+ Words of affirmation - flatter the teams you want to learn from. Identify them as bright spots and publicly interview then about how they did it.
+ Gifts - pay for tooling, and submit pull requests. Make CICD the priority - then add static code analysis, code review standards, automated testing, and ChatOps for security gains.
+ Touch - nope.
+ Acts of service - be there for them with highly available expertise. (HA has a staffing cost.)
+  Quality time - join their stand ups. Demand that they follow your (and industry prescribed best practices) for agile. Once they do, join their agile scrum.

---

Todo: section explaining all the security wins in a strong CICD pipeline.


---

## Two

???

+ Development done better. Mentorship.
+ Mentorship doesn't just mean better code - it can mean less code, more of the necessary code, etc.
+ 2800x faster security patch response time with a CICD pipeline and ChatOps in place.

---

</pre>
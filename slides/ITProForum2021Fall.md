---
layout: slides.njk
title: Unlocking the Future - Identifying, Paying, and Avoiding Technical Debt - Edward Delaporte
slideimg: /slides/img/slidebg.jpg
---

<pre>

# Unlocking the Future:
## Identifying, Paying, and Avoiding Technical Debt

- Glen Shere
- Carl Stephens
- Edward Delaporte

---

Things in CI/CD that reduce the accrual of technical debt:

...list here...

---

## Continuous Delivery / Frequent Deployment

+ Delivery is not Deployment.

???

+ No one needs a firehose of developer cleverness spraying into their production environment.
+ Delivery is not deployment.
+ It takes a computer to really screw things up.

---

## Continuous Delivery / Frequent Deployment

+ Delivery is not Deployment.
+ Let the person who answers the on-call phone push the release button.

???

+ Set the expectation that they push the release button frequently.
+ It takes hard work to be ready to deploy that often.
+ It is worth every minute.

---

## Continuous Delivery / Frequent Deployment

+ Delivery is not Deployment.
+ Let the person who answers the on-call phone push the release button.
+ One outage can cost a team more time than it takes to setup CI/CD.

???

+ Some of these investments do not pay back in time, but in better outcomes.
+ CI/CD pays back in time.
+ You always get back the time you invest in CI/CD.
+ "But my deployments don't take very long!" 
+ What you're really saying is 
+ "when they don't go completely sideways and disrupt everyone's work for hours or days."


---

## Too busy dealing with "That System" to set up CI/CD.

> "Making any change to **that system** is time consuming and dangerous."

???

*About That System*
+ We can't reliably test changes to it.
+ It is behind on patches.
+ You know, in your heart, that it relies on a production Perl script everyone has forgotten.

CICD is how you deal with "That System".
+ CICD is a way to make changes auditable and reversible.
+ CICD gives us back time.

---

## Confusion costs time.

> Set up mandatory change review.

???

+ On a bad day, effective responders are those who understand what happened.
+ Mandatory change reviews cause more people to actually understand what changed.

---

## Rework costs time.

> Learn regression testing.

???

Your CI/CD system should check lots of things before and after each production change.

If you're verifying a product with a web or mobile interface, learn RobotFramework.

If you're not sure where to start, Learn PowerShell.
+ PowerShell can do almost anything.
+ More importantly, PowerShell can verify almost anything.
+ Start using PowerShell to verify that past production change mistakes don't happen again.
+ It runs on every platform.
+ It is readable and widely supported.
+ Use the documentation standards.


---

## Choose Products with Strong Available Support

> You will use it.

---

## Ambiguitiy costs time

> Set up request templates.

???

+ Most ticketing systems allow templates. Use them.

---

## Exploits cost time.

> Turn on GitHub Dependabot

[Job Aid: Cybersecurity, GitHub Dependabot security alerts](https://answers.uillinois.edu/illinois/110071)

---


+ Lint/Style tools
+ Automated rebuild with minor releases. Make it one command, or make it automated.
+ Mandatory code review - Tour of GitHub review requiremnts and branch protections here.

???

Ed to pre-record a demo.

+ Aim for 10-12 minutes
+ Proactively pay technical debt via integration documentation, test suites, regression,
CI/CD. (Dependabot)

What to demo:

+ CICD
+ Automated regression tests.
+ Dependabot update pull request.

## For Ed's Outline


</pre>

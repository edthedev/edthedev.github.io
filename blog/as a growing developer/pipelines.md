---
layout: book.njk
title: Coding is Stupid by Edward Delaporte
---

CI/CD stands for Continuous Integration and Continuous Deployment – a tool for delivering updates to software products with high frequency and low friction.

A CI/CD pipeline is like running water - as long as it keeps moving, flaws and
 vulnerabilities can fall out like dirt or sand in a running stream.
Problems don't get the same chance to grow as in a stale rarely updated product.

We saw this recently with some of our own library dependencies.

- GitHub Dependabot identified a chain of dependencies that included vulnerable libraries.
- Modernization of our solution continued as a monthly habit - made frictionless by our pipeline.
- Routine processes resulted in updated dependencies and a rebuilt installation every 2 weeks.
- The vulnerable libraries fell out of use in development use, then test use and then out of production use.

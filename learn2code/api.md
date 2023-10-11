---
layout: blog.njk
title: API Resources - Edward Delaporte's Guide
---

## About

Here's a quick write-up of some resources for folks exploring APIs.

## API Tools

I would start with a quick crash course in a tool like Hoppscotch.io (https://hoppscotch.io/) for API exploration.

I gave about a presentation on the Hoppscotch, and the recording is here:
https://cybersecurity.illinois.edu/nuts-and-bolts-talks/

## Recommended APIs

A good API to work with while learning the ropes of APIs in general is (of course), the Magic the Gathering API.
https://docs.magicthegathering.io/

MagicTheGathering.io is nice because it is Restful and un-authenticated. 

I run several examples with this API during the recording linked above.
MTG API Docs
Documentation for the Magic: The Gathering API are at 
https://docs.magicthegathering.io

Another good one to try out is (also demo-ed in the recording above) is https://restful-api.dev/ - This one let's you submit bits of data and fetch them back without any auth. 

Using Restful-API.dev is a bit more nuanced, so here is an example file you can import into Hoppscotch.io to try out. Note that anywhere you see a token, it has surely expired and you will need to update with tokens returned from your own calls.

```json
{% include 'examples/api/restful-api-dev.json' %}
```

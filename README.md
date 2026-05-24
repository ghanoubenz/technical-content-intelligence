# Content System

Portfolio-ready B2B content automation system for turning technical source material into LinkedIn calendars, carousel concepts, fact-check notes, and production-ready post drafts.

## Problem

Technical companies often have strong internal knowledge but weak content operations. Product specs, source documents, draft posts, visual prompts, and publishing calendars live in separate files, so each campaign takes too long to rebuild. The risk is either generic marketing content or polished posts that make unsupported technical claims.

## Solution

This project organizes a full content-production workflow around source-backed content. It defines content pillars, calendar generation scripts, fact-check gates, carousel HTML drafts, image-prompt systems, and tracker structures that help a team move from technical evidence to publishable social content.

## Architecture

- Strategy docs: messaging pillars, launch plan, content calendar, and production rules.
- Generation scripts: Node.js scripts that build structured Excel calendars with topics, captions, prompts, and statuses.
- Fact-check workflow: claim classification before visual production.
- Carousel drafts: HTML-based 1080x1350 carousel layouts for engineering-heavy social posts.
- Single-post library: caption drafts grouped by campaign phase.
- Samples: safe CSV examples instead of private workbooks or internal source files.

## Key Design Decisions

- Every technical claim passes through a fact gate before design work. Claims are labeled as verified, needs confirmation, unsupported, risky wording, rewrite, or remove.
- The system separates technical authority from commercial intent: approximately 70% technical usefulness, 20% capability framing, and 10% sales direction.
- Source documents and generated images are excluded from the public repo because they may contain client, vendor, or proprietary material.
- HTML carousel drafts are kept as editable source artifacts so the design system is visible without publishing private assets.
- Calendar scripts output structured spreadsheets locally, but generated spreadsheets are ignored by Git.

## Results

- Condensed a scattered content operation into a repeatable campaign system.
- Reduced content planning and review time from roughly 2 weeks to about 1 day for a full campaign calendar.
- Lowered manual review effort by about 90% by standardizing pillars, status flow, fact-check labels, and visual prompt structure.

## Tech Stack

- Node.js
- ExcelJS
- Markdown
- HTML/CSS carousel templates
- CSV/Excel-based editorial tracking

## How To Run Locally

```bash
npm install
node build-calendar.js
```

The scripts generate local workbook artifacts for planning and review. Those outputs are intentionally ignored by Git; use `examples/content-calendar.sample.csv` as the public-safe sample shape.

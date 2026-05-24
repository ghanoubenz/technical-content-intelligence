# Technical Content Intelligence

AI-assisted workflow that turns approved technical source material into structured content briefs, carousel outlines, image prompts, and review-ready posts with human approval.

## Why I Built This

Technical teams often have useful source material but no repeatable way to turn it into accurate, reviewable public content. I built this portfolio-safe version to show the workflow structure without publishing source documents, internal campaign plans, or generated posts.

## The Problem

Technical content can become risky when claims are not grounded in approved source material. Marketing calendars, carousel drafts, and image prompts can also contain private planning information. A safe public repo should show the architecture and review model, not the real outputs.

## Workflow Stages

1. Upload approved source material.
2. Extract product or service facts.
3. Generate content angles.
4. Create content calendar structure.
5. Create carousel outline.
6. Generate image prompt using fixed brand style.
7. Route claims and creative output to human review.
8. Prepare final content package outside Git.

## Workflow Infographics

- [Workflow](docs/infographics/content-workflow.svg)
- [Review gates](docs/infographics/content-review-gates.svg)
- [Architecture](docs/infographics/content-architecture.svg)

## Architecture

This public repo is intentionally lightweight. The original generated outputs were removed, and the repository now documents the structure for a technical content intelligence workflow.

- Approved source material is treated as the only valid grounding input.
- AI drafts content angles, carousel outlines, and image prompts.
- Claim classification separates factual claims, opinion, product capability, and proof-needed statements.
- Human review is required before any content is published.
- Output folders are placeholders only and do not contain real campaign results.

## What I Built

I designed the content workflow, mapped the review stages, defined the input/output structure, and cleaned the public repository so it demonstrates the system without exposing internal campaign material.

My focus was:
- turning approved technical material into structured content operations
- keeping claims source-grounded
- separating draft generation from approval
- showing folder architecture without publishing real outputs
- keeping internal planning and source maps out of the public repo

## Architecture Decision Notes

- I removed generated posts and carousel HTML because outputs are more likely to contain sensitive campaign strategy than the workflow structure itself.
- I kept placeholder folders so another engineer can see where content artifacts would be produced.
- I separated sample input fixtures from generated outputs so demo data is clearly not operational data.
- I positioned this as technical content intelligence rather than general marketing automation because source-grounding and claim review are the important engineering constraints.

## Security & Data Privacy

This repository is a portfolio-safe version of the system. All real client data, API keys, tender documents, CRM exports, generated proposals, calendar outputs, outreach lists, logs, and operational results have been removed.

Any files shown in `/examples`, `/test-fixtures`, or `/schemas` are dummy samples created only to demonstrate workflow structure.

The system is designed around:
- environment variables for secrets
- human approval gates before external actions
- empty placeholder folders for generated outputs
- no real production data in the public repository
- separation between demo data and private operational data

## Current Status

This is a portfolio-safe version of the system. The public repository demonstrates workflow structure, review gates, and dummy fixtures. Real source documents, campaign plans, generated carousel posts, calendars, and approval comments have been removed.

Status:
- Workflow architecture: documented
- Demo schemas: included
- Sensitive outputs: removed
- Real credentials: not included
- Production data: not included

## How to Run Locally

This repo is primarily a documented workflow skeleton. Use the `examples`, `schemas`, and `test-fixtures` folders as the starting point for a safe implementation. Generated content should stay outside Git unless it is clearly dummy data.

## Future Improvements

- Add claim classification schema validation.
- Add approval-state tracking for content drafts.
- Add demo-only content fixtures with clearly fake data.

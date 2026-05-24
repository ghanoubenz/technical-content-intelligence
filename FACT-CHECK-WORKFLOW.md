# ACME Integrity Carousel Fact-Check Workflow

## Purpose

The existing carousel HTML files are useful for ideas, hooks, and early marketing structure. They are not technical source material.

Going forward, every carousel should be rebuilt from verified ACME Integrity material in `docs/source-materials\`, then rewritten for LinkedIn as client decision content.

## Source Priority

1. `docs/source-materials\` — source of truth.
2. ACME Integrity product catalogs, flyers, and technical presentations inside that folder.
3. `docs/source-materials\ACME Integrity-REFERENCE.md` — positioning reference only.
4. Existing carousel HTML — draft concept and design reference only.

## Fact Gate

Before generating images or redesigning a carousel, create a fact-check note in:

`docs/source-materials\carousel-fact-audit\`

Each audit must include:

- Carousel file being reviewed.
- Internal source documents used.
- Claims that are verified.
- Claims that are unsupported or need confirmation.
- Claims that are technically risky or too absolute.
- Claims that should be rewritten into client decision language.
- Tool image rule: whether the carousel needs a real tool image, a generated concept visual, or no image.
- Technical explanation check: whether the visual, defect type, inspection principle, sensor/tool logic, and application context are accurate.
- Business objective check: what client problem the post addresses, why it matters, how ACME Integrity addresses it, and what perception it should create.

## Claim Classification

Use these labels:

- `Verified` — directly supported by internal docs.
- `Needs confirmation` — likely true, but exact number or wording must be checked in the flyer/catalog/presentation.
- `Unsupported` — not found in the internal docs used.
- `Risky wording` — could be technically true but sounds absolute, comparative, or legally/engineering risky.
- `Rewrite` — useful idea, but should be reframed for client decision-making.
- `Remove` — not useful, wrong, or creates the wrong commercial message.

## Technical Explanation Gate

Do not only fact-check numbers. Also fact-check the explanation.

Before a carousel is approved, check:

- Does the visual explain the inspection principle correctly?
- Is the tool inspecting the correct threat?
- Is the defect type correct?
- Is the wave, signal, or sensor logic realistic?
- Is the tool image actually the correct ACME Integrity tool?
- Is the visual misleading even if it looks polished?

A technically wrong visual is worse than a simple visual.

Do not create detailed wave-path, signal-path, or sensor-mechanism diagrams unless the principle is verified from internal documents or confirmed by the user.

If unsure, simplify. Use safer visuals:

- Real tool photo/render.
- Pipe wall cross-section.
- Subtle crack or corrosion concept.
- Sensor close-up.
- Measurement/sizing concept.
- Decision-flow visual.
- Abstract data/signal visual.

Accuracy first. Design second.

## Rewrite Rules

- Do not say one ACME Integrity technology is weak or bad compared with another ACME Integrity technology.
- Explain the inspection question the technology answers.
- Explain why that answer matters to an operator decision: dig, defer, monitor, reduce uncertainty, plan repair, schedule reinspection, validate integrity.
- Avoid exact values unless verified from internal docs.
- Avoid universal claims like "always," "full proof," "complete certainty," or "finds everything."
- Keep the slide minimal. Split dense claims into multiple slides.

## Visual Rules

- If showing a ACME Integrity tool, use one specific reference image from the correct tool folder.
- Do not mix multiple tool photos/renders into the same GPT Image 2 prompt.
- Do not redesign the tool.
- Do not invent sensors, modules, rings, wheels, colors, or geometry.
- Keep the same tool identity, color, geometry, and structure.
- If exact tool geometry matters, place the real image into the design instead of asking GPT Image 2 to recreate it.
- If the concept can be explained without the tool, use a pipeline cross-section, measurement diagram, field environment, or text-only decision slide.
- If the correct tool image is not available, use a non-tool visual instead of creating a fake hybrid tool.

## Content Objective

The goal is not only branding. The goal is to build technical trust that can support future inquiries.

Every carousel must answer:

- What problem does the client care about?
- Why does it matter technically or operationally?
- How does ACME Integrity address it?
- What perception should this create about ACME Integrity?

The reader should think:

"ACME Integrity understands this inspection challenge and has the capability to handle it."

Not only:

"This is a nice carousel."

## Balance Rule

Each post should roughly balance:

- 70% technical authority.
- 20% ACME Integrity capability.
- 10% soft commercial intent.

Do not make the post too salesy. Do not make it generic education only.

## Production Order

1. Choose the carousel.
2. Identify the relevant internal documents.
3. Extract the old carousel claims.
4. Audit the claims against internal docs.
5. Classify each claim as verified, unsupported, risky, rewrite, or remove.
6. Rewrite the carousel from verified facts only.
7. Check the technical logic of the explanation.
8. Check the business objective of the post.
9. Select one correct tool reference image only, or choose a non-tool visual.
10. Generate/save final 3:4 images only after the fact gate is complete.
11. Review output for technical accuracy before finalizing.

## Final Audit Section

Before finalizing any carousel, add this section to the audit note:

- Verified facts used.
- Removed or rewritten claims.
- Risky claims avoided.
- Visual accuracy check.
- Tool image source used.
- Business objective of the post.

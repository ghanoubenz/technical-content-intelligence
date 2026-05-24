# ACME Integrity x Carbon Carousel Direction

## Design Position

The visual direction should feel like ACME Integrity engineering authority filtered through IBM Carbon discipline:

- ACME Integrity owns the subject matter: pipeline integrity, ILI tools, field reality, KSA/Middle East operations.
- Carbon inspires the system: strict grid, precise typography, restrained color, technical diagrams, generous negative space.
- The result should feel technical, executive, and calm. Not startup. Not oil-and-gas brochure. Not decorative.

## Core System

- Format: all generated carousel pages must use one consistent portrait size. Default going forward: 3:4 portrait.
- Typography: follow ACME Integrity brand fonts. Use Montserrat and Century Gothic. Montserrat should carry headlines and metadata; Century Gothic can carry supporting copy where it improves clarity.
- Color base: ACME Integrity navy `#0B1526`, ACME Integrity blue `#1456A0`, Carbon blue `#0F62FE`, cool gray `#F4F4F4`, white.
- Layout: 8-column editorial grid, visible technical grid allowed as a subtle background.
- Shapes: sharp rectangles, thin rules, line diagrams, cross-sections, data bands. Avoid rounded card-heavy layouts.
- Branding: `ACME Integrity` as quiet metadata, not a giant logo treatment.
- If an official ACME Integrity logo file is supplied, use it on the first and last carousel page.
- The last page should include a restrained CTA: `acme-integrity.example` or `info@acme-integrity.example`.
- Save every generated carousel page into `docs/source-materials/images\generated-carousel-pages\` in a dedicated folder for that carousel.
- Before generating any carousel, check the source post, ACME Integrity reference material, and relevant tool facts so the design does not invent technical claims.
- Treat existing carousel HTML as a creative draft only. It is not the source of technical truth.
- Treat `docs/source-materials\` as the source-of-truth library for tool capabilities, inspection methods, dimensions, sizing accuracy, application range, and service descriptions.
- Before any carousel is regenerated, create or update a fact-check note in `docs/source-materials\carousel-fact-audit\` that identifies verified claims, unsupported claims, risky wording, and required rewrites.
- The fact gate must check both technical data and technical explanation. A good-looking but misleading inspection visual is not acceptable.
- Do not generate final page images until the carousel passes the fact gate. Visual polish cannot rescue wrong technical information.
- Keep each page minimal. If a page carries too much information, split the idea into two pages. If an idea is simple, keep it as one strong page.
- Do not position one ACME Integrity technology as "bad" or weak against another ACME Integrity technology. Explain each technology positively by its intended measurement question, operating context, and decision value. Comparisons are allowed only when they help tool selection without undermining another ACME Integrity capability.

## Real Photo vs GPT Image 2

Use real photos when:

- The post announces a real tool, shipment, field activity, workshop assembly, launch, event, or customer-relevant proof point.
- The physical scale matters: 47-inch UTCD, 56-inch autonomous tool, crawler, MTM system, 2-inch tool.
- Authenticity is the hook. A real workshop photo will outperform a render.

## Tool Accuracy Rules

Never redesign ACME Integrity tools.

When a specific tool appears in a carousel image:

- Use one specific tool reference image from the correct tool folder. Do not combine multiple tool photos or renders in one generated prompt, because that causes hybrid/inaccurate tools.
- If a carousel is about UTWM, use only one selected image from `docs/source-materials/images\real-photos\UTWM\`. If it is about UTCD, use only one selected image from `docs/source-materials/images\real-photos\UTCD\`, and so on.
- Keep the same tool look, proportions, wheel layout, sensor bands, suspension arms, cups, modules, colors, and body geometry from the supplied reference.
- Do not invent a new tool shape, simplify the tool, change the number or placement of major parts, or make it look like a generic ILI tool.
- Do not invent sensors, rings, wheels, modules, colors, wave paths, or mechanical details.
- If the correct approved tool image is not available, use a non-tool visual: pipe wall, defect concept, measurement concept, clean diagram, or abstract data/signal visual.
- If the tool is shown inside a pipeline, it must fit the pipe diameter correctly.
- For crawler tools, the wheels must visibly touch the pipe wall. If the wheels do not contact the pipe wall, the image is technically wrong.
- The tool should not look too small inside the pipe unless the post is explicitly about a smaller tool in a larger pipeline, which should usually be avoided.
- For diameter-specific posts, the tool and pipe relationship must communicate the correct fit: 56-inch tool in 56-inch pipeline, 47-inch tool in 47-inch pipeline, etc.
- If GPT Image 2 cannot preserve the exact tool faithfully enough, use the real tool photo/render as the image element and design the carousel around it instead of regenerating the tool.

Use GPT Image 2 when:

- The post explains invisible physics: flux leakage, ultrasonic reflection, SCC, pinhole corrosion, coating disbondment.
- The story needs an abstract technical visual, pipeline cross-section, threat diagram, or concept image.
- A real photo would distract from the engineering lesson.
- The technical principle has been verified, or the visual is simplified enough that it does not imply an unverified mechanism.

Use no image when:

- The slide is a decision framework, checklist, comparison, quote, or sharp technical claim.
- Type and diagram structure carry the idea better than photography.

## Slide Roles

1. Cover: strong assumption-challenging hook, optional real photo crop.
2. Problem: what operators often assume incorrectly.
3. Physics: what the inspection method actually measures.
4. Blind spot: what remains unanswered.
5. ACME Integrity capability: only after the engineering logic is clear.
6. Deployment/context: where the capability matters.
7. Closing principle: memorable technical takeaway.

## Pilot File

Test carousel:

`docs/source-materials\carousels\UTCD-47-OPTION-B-carbon-acme-test.html`

This file embeds one GPT Image 2 prompt per slide in HTML comments. Slides 1 and 6 include explicit photo slots where real UTCD photos should be dropped in if available.

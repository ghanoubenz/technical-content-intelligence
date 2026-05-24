# Fact Audit: 11-utwm-accuracy-changes-decision

## Carousel Reviewed

`docs/source-materials\carousels\11-utwm-accuracy-changes-decision.html`

## Relevant Internal Sources

- `docs/source-materials\FLYERS\ACME Integrity TOOLS & SERVICES FLYER\UTWM FLYER\UTWM FLYER.pdf`
- Any UTWM-related catalog or presentation added later under `docs/source-materials\`
- Tool visual folder: `docs/source-materials/images\real-photos\UTWM\`

## Current Risk

The HTML presents several exact technical values and operating ranges as final facts. These must not be used in a final carousel until confirmed directly against the UTWM flyer/catalog.

## Claims To Verify Before Reuse

| Slide | Claim From Current HTML | Status | Action |
|---|---|---|---|
| 1 | Difference between +/-0.4 mm and +/-0.3 mm changes the integrity decision | Unsupported | Remove. The extracted flyer text supports 0.4 mm sizing tolerance for depth, not +/-0.3 mm. |
| 3 | UTWM measures wall thickness directly using time of flight | Rewrite | The flyer supports ultrasonic sensors emitting high-frequency sound waves into the pipe wall and directly measuring thickness. Avoid unverified "time of flight" mechanism wording unless confirmed. |
| 3 | 4 mm circumferential resolution | Verified | Flyer text says circumferential resolution down to 4 mm. |
| 3 | 0.75 mm axial sampling | Verified | Flyer text says axial sampling of .75, 1.5, and 3 mm. |
| 4 | A feature sized at 45% vs 50% wall loss may cross a repair threshold | Risky wording | Keep as decision logic only if phrased as an example, not as a universal threshold. |
| 4 | Higher accuracy produces fewer unnecessary digs and fewer missed threats | Risky wording | Rewrite. Avoid promising fewer missed threats unless supported. Better: "reduces uncertainty in dig/defer decisions." |
| 5 | +/-0.3 mm depth sizing across the full measurement range | Unsupported | Remove. Use verified "0.4 mm (0.016 in.) sizing tolerance for depth" only if included carefully. |
| 5 | Wall range 3 mm to 40 mm, liquid pipelines, 2 in to 56 in | Unsupported | Remove until directly confirmed. |
| 5 | Minimum 0.4 mm depth at POD 90% | Unsupported | Remove until directly confirmed. |
| 5 | UTWM available on tethered crawler for low-flow and unpiggable lines | Needs confirmation | Verify against crawler/tethered tool docs. |

## Verified Facts From UTWM Flyer Text Extraction

- ACME Integrity positions UTWM for high-measurement accuracy of metal loss in pipelines.
- Ultrasonic measurement technology is described as a proven direct measurement method.
- ACME Integrity UTWM tools provide a direct measurement ILI solution for detection and sizing of metal loss.
- UTWM tools are equipped with ultrasonic sensors.
- The ultrasonic sensors emit high-frequency ultrasonic sound waves from the tool into the pipe wall.
- Thickness is directly measured with a high degree of accuracy.
- Circumferential resolution can be down to 4 mm.
- Axial sampling options include .75, 1.5, and 3 mm.
- The flyer states sizing tolerance for depth as much as 0.4 mm (0.016 in.).
- The flyer mentions combo tool and dual-diameter options, POF-compliant and customizable UT wall thickness measurement tools.

## Better LinkedIn Direction

This carousel should not feel like a specification sheet. It should explain the client decision:

- The operator does not buy UTWM because a number is smaller.
- The operator needs confidence in remaining wall thickness.
- Remaining wall thickness affects MAOP calculations, repair priority, reassessment planning, and whether a feature is monitored or excavated.
- UTWM should be introduced as the technology that answers the wall-thickness question when direct thickness measurement matters.

## Proposed Revised Story

1. Cover: "Accuracy is not the selling point. The decision is."
2. Decision problem: remaining wall thickness drives repair, defer, and reassessment choices.
3. Measurement principle: UTWM uses ultrasonic wall measurement to assess remaining wall thickness.
4. Client risk: when margins are tight, uncertainty can become an excavation, shutdown, or delayed repair decision.
5. ACME Integrity capability: insert only verified UTWM specs from the official flyer/catalog.
6. Closing CTA: "When wall thickness drives the decision, measure the wall directly." Add `acme-integrity.example` or `info@acme-integrity.example`.

## Visual Strategy

- Use one UTWM reference image only from `docs/source-materials/images\real-photos\UTWM\`.
- Do not mix UTWM photos/renders.
- Do not ask GPT Image 2 to redesign the UTWM tool.
- Recommended combination:
  - Slides 1 and 5: use a real UTWM tool image as the fixed visual anchor if tool visibility helps.
  - Slides 2, 3, and 4: use generated wall-thickness diagrams or text-led decision layouts.
  - Slide 6: text-led CTA, logo if official logo file is available.

## Required Before Generation

- Replace all unverified exact numbers with verified values or remove them.
- Rewrite risky claims into decision-confidence language.
- Do not create detailed wave-path diagrams. Use a simple measurement concept only.
- Then generate the final 3:4 pages.

## Final Audit Gate

### Verified facts used

- UTWM is an ultrasonic wall measurement method for direct measurement of wall thickness.
- UTWM supports detection and sizing of metal loss.
- UTWM uses ultrasonic sensors emitting high-frequency sound waves into the pipe wall.
- Verified resolution/sampling claims from extracted flyer text: circumferential resolution down to 4 mm; axial sampling of .75, 1.5, and 3 mm.
- Verified depth sizing tolerance claim from extracted flyer text: as much as 0.4 mm (0.016 in.).

### Removed or rewritten claims

- Removed unsupported +/-0.3 mm claim.
- Removed unsupported wall range, diameter range, and POD claims.
- Rewrote "fewer missed threats" into "reduces uncertainty in integrity decisions."
- Rewrote universal repair threshold example into general decision-margin language.

### Risky claims avoided

- No promise of finding every threat.
- No claim of guaranteed fewer digs.
- No unverified pipe diameter range.
- No unverified crawler availability claim.
- No detailed wave-path mechanism diagram.

### Visual accuracy check

- Use real UTWM tool image as fixed identity anchor.
- Use only simple pipe wall / thickness / decision visuals for generated pages.
- Avoid fake sensor geometry, invented tool parts, or unrealistic wave mechanics.

### Tool image source used

`docs/source-materials/images\real-photos\UTWM\UTWM.png`

### Business objective of the post

Show operators that UTWM is not just an accuracy specification. It is a decision-confidence tool when remaining wall thickness affects repair planning, reassessment, and integrity management.

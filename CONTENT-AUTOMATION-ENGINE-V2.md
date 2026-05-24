# Content Automation Engine v2
## B2B Pipeline Inspection / ILI Tools — LinkedIn Content System (Refined)

---

# PART 1: SYSTEM ARCHITECTURE

```
┌──────────────────────────────────────────────────────────────────────────┐
│                     CONTENT AUTOMATION ENGINE v2                         │
├──────────────────────────────────────────────────────────────────────────┤
│                                                                          │
│  ┌───────────────┐   ┌────────────────┐   ┌───────────────────────┐     │
│  │  INPUT LAYER   │   │ STRATEGY LAYER │   │  OUTPUT LAYER         │     │
│  │               │   │                │   │                       │     │
│  │ 1. Internal   │──▶│ • 5 Pillars    │──▶│ • 6-Slide Carousels  │     │
│  │    (PRIMARY)  │   │ • Psychology   │   │ • Single Posts        │     │
│  │ 2. Industry   │   │ • Topic-Tool   │   │ • Video Ideas         │     │
│  │    Research   │   │   Matching     │   │ • HTML Output         │     │
│  │ 3. Competitor │   │ • Calendar     │   │                       │     │
│  │    (LAST)     │   │                │   │                       │     │
│  └───────────────┘   └────────────────┘   └───────────┬───────────┘     │
│                                                        │                 │
│                                    ┌───────────────────┴────────────┐   │
│                                    │  DISTRIBUTION LAYER            │   │
│                                    │                                │   │
│                                    │  LinkedIn ──▶ Website Traffic  │   │
│                                    │  Email   ──▶ Outreach Support  │   │
│                                    │  Docs    ──▶ Client Comms      │   │
│                                    └───────────────┬────────────────┘   │
│                                                    │                    │
│                              ┌─────────────────────┴──────────┐        │
│                              │  TRACKING + IMPROVEMENT LOOP   │        │
│                              │  Google Sheets → Analytics →   │        │
│                              │  Monthly Review → Adjust       │        │
│                              └────────────────────────────────┘        │
└──────────────────────────────────────────────────────────────────────────┘
```

---

# PART 2: INPUT SOURCES (Priority Order)

## Priority 1: Internal Knowledge (PRIMARY)

This is the foundation. Every post should trace back to what you actually do.

| Source | What to Extract | Use In |
|--------|----------------|--------|
| Tool specs (UTCD, EMAT, MFL, UTWM) | Detection capabilities, pipe size range, accuracy | Tool-based carousels, technical posts |
| Flyers (technical + general) | Key differentiators, specs, use cases | Problem-to-solution posts |
| Brochures | Company positioning, service descriptions | Brand posts, email content |
| Website content | Service pages, case studies, terminology | All content types |
| Field experience | Real inspection scenarios (anonymized) | Problem-based posts, credibility |
| Cleaning tool data | Pre-inspection requirements, data quality impact | Educational posts |

**Master Reference Table:**

| Tool | Detects | How (Simple) | Best For | Doesn't Do |
|------|---------|-------------|----------|------------|
| UTCD | Cracks — SCC, fatigue, seam weld | Ultrasonic pulses find crack-like features | Liquid pipelines with crack threats | Metal loss measurement |
| EMAT | Coating disbondment, cracks, corrosion | Electromagnetic acoustic waves, no couplant | Dry gas pipelines | Precise wall thickness |
| MFL | Metal loss — corrosion, gouges, wall thinning | Magnetic field leaks at thin spots | Corrosion-dominant threats | Cracks |
| UTWM | Wall thickness, internal/external corrosion | Ultrasonic wall measurement | Precise remaining wall data | Crack detection |
| Cleaning | Debris, wax, scale, deposits | Mechanical + magnetic pigs | Pre-ILI preparation | Defect detection |

---

## Priority 2: Industry Research

Topics to track (2025-2026 level):

| Topic Area | Specific Angles | Content Use |
|-----------|----------------|-------------|
| Pipeline failures | Corrosion incidents, crack ruptures, leak reports | Problem-based posts |
| ILI technology | AI/ML in defect detection, robotic ILI, sensor miniaturization | Insight posts |
| Unpiggable pipelines | 40% of world pipelines can't run conventional tools | Problem posts |
| Hydrogen transition | New pipeline materials, different inspection needs | Industry insight posts |
| Regulatory changes | PHMSA rules, API standards, ASME updates | Authority posts |
| Digital integrity | Predictive models, digital twins, data analytics | Insight posts |
| Subsea pipelines | Deepwater inspection challenges, hybrid PIGs | Technical posts |

**Sources:** Pipeline & Gas Journal, Pipeline Technology Journal, Inspectioneering, PHMSA reports, PRCI research, AMPP/NACE publications

---

## Priority 3: Competitor Inspiration (LAST — never copy)

### Competitor Analysis Summary

| Company | What They Do Well | Gap We Can Fill |
|---------|------------------|-----------------|
| **Baker Hughes** | Massive scale messaging ("2M+ km inspected, 50+ years"), VECTRA HD MFL branding, crack management positioning | They're corporate-heavy. We can be more practical, direct, educational |
| **ROSEN** | Education platform (Competence Club), technical tutorials, strong brand hashtag (#empoweredbytechnology), employee spotlights | Good at education but formal. We can be simpler, more operator-focused |
| **NDT Global** | Data-driven messaging ("best data-driven insights"), ultrasonic focus, 25-year milestone content | Very product-focused. We can lead with problems, not products |
| **Intero Integrity** | Phased array tech (Phasix XR), robotic ILI (Explorer), milestone celebrations | Innovation-forward but thin on explaining why it matters to operators |

### How to Use Competitors (Rules)

```
DO:
  ✓ Note what topics they post about
  ✓ See what gets engagement
  ✓ Identify gaps they don't cover
  ✓ Use as inspiration for angles

DON'T:
  ✗ Copy their wording
  ✗ Mimic their post structure
  ✗ Use their branded terms
  ✗ React to their content directly
```

### Competitive Content Gaps We Fill

| They Post About | We Post About Instead |
|----------------|----------------------|
| "Our technology is industry-leading" | "Here's what this technology actually detects and why" |
| Product announcements | Problem explanations with tool connections |
| Award wins and event booths | Technical breakdowns an engineer can learn from |
| "We inspected X million km" | "Here's what we found in those inspections" |
| Generic integrity messaging | Specific defect types, specific tools, specific scenarios |

---

# PART 3: CONTENT STRATEGY — 5 PILLARS

## Psychology Applied to B2B Industrial Buyers

| Principle | Application | Example |
|-----------|------------|---------|
| **Loss Aversion** | Fear of failure > desire for upgrades | "What happens to uninspected pipelines" |
| **Authority Bias** | Technical depth = trust | Lead with engineering, not marketing |
| **Reciprocity** | Free education → future business | Give knowledge before asking anything |
| **Status-Quo Bias** | "We always use MFL" is real | Don't attack — show what they might be missing |
| **Confirmation Bias** | Operators believe their method works | Align first, then expand their view |
| **Mere Exposure** | Consistency builds recognition | 2-3x/week, every week, no gaps |
| **Pratfall Effect** | Admitting limits builds trust | "UTCD isn't for every pipeline" |
| **Contrast Effect** | Before/after makes value visible | Show what inspection data reveals vs. blind operation |

---

## Pillar 1: Educational (Core) — 30%

**Goal:** Explain ILI tools, defects, pipeline problems in plain language.
**Voice:** Senior engineer explaining to a colleague.
**Format:** Carousel (primary), technical breakdown posts.

Topics:
- How MFL works — no textbook language
- Types of pipeline cracks: SCC, fatigue, seam weld
- What happens during an ILI run (step by step)
- Internal vs. external corrosion — why it matters
- Why cleaning before inspection matters
- How ultrasonic testing measures wall thickness

---

## Pillar 2: Problem Awareness — 25%

**Goal:** Make the audience feel the urgency. Real pipeline problems.
**Voice:** Honest, direct, backed by data.
**Format:** Carousel, single posts.

Topics:
- Corrosion growth between inspections
- The cost of skipping inspection
- Why cracks are harder to detect than corrosion
- Pipeline failures that were preventable
- The 40% unpiggable problem
- Dent + corrosion interaction risk

---

## Pillar 3: Product/Tool Content — 20%

**Goal:** Show what tools do based on real capability. No marketing fluff.
**Voice:** Practical comparison, honest about limitations.
**Format:** Carousel (tool comparisons), technical posts.

Topics:
- UTCD vs. MFL — when to use which
- EMAT: why no-couplant matters for gas pipelines
- Cleaning tools: the unsung hero of ILI data quality
- Tool selection: matching threat to technology
- UTWM precision: preventing over-conservatism
- Combined runs: why multi-technology matters

---

## Pillar 4: Industry Insights — 15%

**Goal:** Position as a thinking company, not just a tool provider.
**Voice:** Informed opinion, practical perspective.
**Format:** Single posts (primary), carousel for trends.

Topics:
- AI in inspection — where it actually helps
- Hydrogen pipeline inspection challenges
- Robotic ILI: solving unpiggable pipelines
- Predictive integrity management vs. reactive
- Digital twins — practical or buzzword?
- Regulatory trends affecting operators

---

## Pillar 5: Event / Human / Brand — 10%

**Goal:** Human side. Build warmth alongside technical credibility.
**Voice:** Authentic, personal.
**Format:** Photo posts, single posts.

Topics:
- PPIM / PTC conference takeaways
- Team spotlights
- Special days (World Engineering Day, etc.)
- Company milestones
- Behind the scenes: field operations

---

# PART 4: CONTENT FORMATS

## Format 1: Carousel Posts (PRIMARY — 6 slides max)

### Mandatory Structure

```
┌─────────────────────────────────────┐
│ SLIDE 1: TITLE                      │
│ Hook question or bold statement     │
│ Stop the scroll. One idea.          │
├─────────────────────────────────────┤
│ SLIDE 2: PROBLEM                    │
│ What's the real-world issue?        │
│ Make the reader feel it.            │
├─────────────────────────────────────┤
│ SLIDE 3: REALITY                    │
│ What most people get wrong or miss  │
│ The gap between belief and truth    │
├─────────────────────────────────────┤
│ SLIDE 4: INSIGHT                    │
│ The useful information              │
│ Data, explanation, or framework     │
├─────────────────────────────────────┤
│ SLIDE 5: TECHNICAL LINK (TOOL)      │
│ Connect to specific tool/service    │
│ How the tool addresses this         │
├─────────────────────────────────────┤
│ SLIDE 6: TAKEAWAY                   │
│ Summary + soft CTA                  │
│ "Follow for more" / "Save this"    │
└─────────────────────────────────────┘
```

### Design Specs (HTML Output)
- **Size:** 1080 x 1350px (portrait — best LinkedIn ratio)
- **Background:** Dark (#0F1923 navy-black)
- **Accent:** #F59E0B (amber/industrial orange)
- **Text:** White (#FFFFFF) primary, #94A3B8 (grey) secondary
- **Font:** System sans-serif, bold headings
- **Logo:** Bottom-right, small, consistent
- **No:** Stock photos. No clip art. No walls of text.

---

## Format 2: Single Posts

```
HOOK (line 1-2) ← Must work in <210 characters
↓
BODY (3-6 short lines, one sentence each)
↓
INSIGHT (1-2 lines)
↓
SOFT CTA (question or save prompt)
↓
#hashtags (3-5)
```

**Rules:**
- One sentence per line
- Blank line between paragraphs
- No external links in post body (link in comments)
- 3-5 hashtags: #PipelineIntegrity #ILI #InlineInspection #OilAndGas #AssetIntegrity

---

## Format 3: Simple Video Ideas

Short-form video concepts (30-90 seconds) for future production:

| Video Type | Example | Script Approach |
|-----------|---------|----------------|
| **Tool Explainer** | "How MFL works in 60 seconds" | Voiceover + animation/diagram of magnetic flux |
| **Problem Visual** | "What corrosion looks like inside a pipe" | Real or illustrated cross-section, growth over time |
| **Before/After** | "Pipeline before vs. after cleaning" | Side-by-side of dirty data vs. clean data results |
| **Myth Buster** | "Can MFL detect cracks?" | Quick answer: No. Here's why. Here's what can. |
| **Field Clip** | "ILI tool being launched into pipeline" | 15-sec real footage + text overlay explaining steps |
| **FAQ Answer** | "How often should you inspect?" | Direct answer with factors that change the answer |
| **Comparison** | "UTCD vs. MFL in 45 seconds" | Split-screen showing different detection methods |

**Video Rules:**
- Subtitles always (most LinkedIn video watched on mute)
- First 3 seconds must hook
- End with text CTA ("Follow for more ILI breakdowns")
- Keep technical but simple
- No corporate intro/outro longer than 3 seconds

---

# PART 5: WRITING STYLE GUIDE

## The Voice

**Think:** Senior integrity engineer explaining to a colleague over coffee.

Not a professor. Not a salesperson. Not a chatbot.

## Rules Table

| DO | DON'T |
|----|-------|
| "MFL detects metal loss by measuring changes in magnetic field" | "Our innovative MFL technology leverages cutting-edge magnetic flux analysis" |
| "Cracks grow. If you don't catch them early, they become failures." | "It is imperative to implement proactive crack detection methodologies" |
| "UTCD finds cracks that MFL can't see" | "Our leading UTCD solution provides superior detection capabilities" |
| "40% of pipelines can't run conventional pigs" | "A significant portion of global pipeline infrastructure remains unpiggable" |
| Short sentences. Real numbers. Direct language. | Long paragraphs. Vague claims. Corporate jargon. |

## Banned Words

❌ "Leading company" / "industry leader"
❌ "Innovative solutions" / "cutting-edge"
❌ "Synergy" / "leverage" / "paradigm" / "holistic"
❌ "We are pleased to announce" / "Excited to share"
❌ "In today's rapidly evolving landscape"
❌ "Best-in-class" / "world-class"
❌ "Comprehensive suite of solutions"

## Use Instead

✅ "Here's what actually happens when..."
✅ "Most operators don't know that..."
✅ "The difference between [A] and [B] is..."
✅ "This is why [problem] keeps happening..."
✅ "We've inspected [X] km. Here's what we learned."
✅ "[Tool] does [specific thing]. Here's how."

---

# PART 6: 10 EXAMPLE POST IDEAS (Refined)

| # | Pillar | Topic | Format | Tool | Hook |
|---|--------|-------|--------|------|------|
| 1 | Educational | How MFL actually works | Carousel | MFL | "MFL is the most used ILI tech in the world. But most people outside inspection can't explain how it works." |
| 2 | Problem | Corrosion grows between inspections | Carousel | UTWM | "Your last ILI was 3 years ago. The pipeline isn't the same pipe anymore." |
| 3 | Product | UTCD vs. MFL — honest comparison | Carousel | UTCD + MFL | "MFL or UTCD? Wrong question." |
| 4 | Industry | AI in pipeline inspection | Single Post | General | "AI won't replace pipeline inspectors. But it's changing how we read the data." |
| 5 | Educational | Types of pipeline cracks | Carousel | UTCD | "Not all cracks behave the same. SCC, fatigue, seam weld — different threats, different behavior." |
| 6 | Problem | Unpiggable pipelines | Single Post | General | "40% of the world's pipelines can't run a conventional ILI tool. So what happens to them?" |
| 7 | Product | Why cleaning before ILI matters | Carousel | Cleaning | "Garbage in, garbage out. ILI accuracy starts before the tool enters the pipe." |
| 8 | Industry | Hydrogen pipeline challenges | Single Post | EMAT | "Hydrogen is coming to pipelines. The inspection playbook hasn't caught up yet." |
| 9 | Event | PPIM 2026 takeaways | Single Post | General | "3 things that stood out at PPIM this year (and 1 thing nobody talked about)" |
| 10 | Educational | What EMAT detects and why it's different | Carousel | EMAT | "No liquid. No couplant. EMAT inspects gas pipelines in a way MFL and UT can't." |

---

# PART 7: 3 FULL CAROUSEL EXAMPLES (6-Slide Format + HTML)

---

## CAROUSEL 1: "How MFL Actually Works"
**Pillar:** Educational | **Tool:** MFL

### LinkedIn Caption:
```
MFL is the most widely used ILI technology in the world.

But if you asked most people how it actually works,
you'd get a vague answer.

Here's MFL explained in 6 slides.
No textbook. No jargon. Just the mechanics.

Save this for your next integrity discussion.

#PipelineIntegrity #MFL #InlineInspection #ILI #OilAndGas
```

### Slide Content:

**Slide 1 — TITLE:**
"How MFL Actually Works — Explained Simply"

**Slide 2 — PROBLEM:**
"MFL is the most used ILI technology. But most people can't explain what happens inside the pipe. That's a problem. Because if you don't understand how MFL works, you can't understand what it misses."

**Slide 3 — REALITY:**
"The tool carries powerful magnets that saturate the pipe wall with a magnetic field. Where the wall is intact, the field flows smoothly. Where there's metal loss, the field leaks out. Sensors measure that leakage. That's MFL."

**Slide 4 — INSIGHT:**
"MFL detects: internal corrosion, external corrosion, gouges, general wall thinning. It does NOT detect: cracks, coating condition, or precise wall thickness. No single tool does everything."

**Slide 5 — TECHNICAL LINK:**
"For cracks, you need UTCD. For coating, EMAT. For wall thickness, UTWM. MFL is essential for corrosion — but tool selection starts with knowing your threat."

**Slide 6 — TAKEAWAY:**
"MFL works because of physics, not magic. Understanding what it detects — and what it doesn't — is the first step in real pipeline integrity. Follow for more ILI breakdowns."

---

### HTML Output — Carousel 1:

```html
<!-- CAROUSEL 1: How MFL Actually Works -->
<!-- Size: 1080x1350px per slide | Save as images or convert to PDF -->

<!-- SLIDE 1: TITLE -->
<div style="width:1080px;height:1350px;background:#0F1923;display:flex;flex-direction:column;justify-content:center;align-items:center;padding:80px;font-family:system-ui,-apple-system,sans-serif;color:#FFFFFF;text-align:center;position:relative;">
  <div style="position:absolute;top:60px;left:80px;right:80px;height:4px;background:linear-gradient(90deg,#F59E0B,transparent);"></div>
  <div style="font-size:22px;color:#F59E0B;font-weight:700;letter-spacing:3px;margin-bottom:40px;">PIPELINE INSPECTION EXPLAINED</div>
  <h1 style="font-size:72px;font-weight:900;line-height:1.15;margin:0;max-width:900px;">How MFL Actually Works</h1>
  <p style="font-size:28px;color:#94A3B8;margin-top:30px;max-width:700px;line-height:1.5;">Explained simply. No jargon. No textbook.</p>
  <div style="position:absolute;bottom:60px;right:80px;font-size:16px;color:#475569;">SLIDE 1/6</div>
  <!-- LOGO: place company logo bottom-left -->
  <div style="position:absolute;bottom:60px;left:80px;font-size:14px;color:#475569;">[YOUR LOGO]</div>
</div>

<!-- SLIDE 2: PROBLEM -->
<div style="width:1080px;height:1350px;background:#0F1923;display:flex;flex-direction:column;justify-content:center;padding:80px;font-family:system-ui,-apple-system,sans-serif;color:#FFFFFF;position:relative;">
  <div style="font-size:18px;color:#F59E0B;font-weight:700;letter-spacing:2px;margin-bottom:30px;">THE PROBLEM</div>
  <h2 style="font-size:52px;font-weight:800;line-height:1.2;margin:0 0 40px 0;">MFL is the most used ILI technology in the world.</h2>
  <p style="font-size:30px;color:#CBD5E1;line-height:1.6;margin:0 0 30px 0;">But most people can't explain what actually happens inside the pipe.</p>
  <p style="font-size:30px;color:#CBD5E1;line-height:1.6;margin:0;">If you don't understand how MFL works, you can't understand what it misses.</p>
  <div style="position:absolute;bottom:60px;right:80px;font-size:16px;color:#475569;">SLIDE 2/6</div>
  <div style="position:absolute;bottom:60px;left:80px;font-size:14px;color:#475569;">[YOUR LOGO]</div>
</div>

<!-- SLIDE 3: REALITY -->
<div style="width:1080px;height:1350px;background:#0F1923;display:flex;flex-direction:column;justify-content:center;padding:80px;font-family:system-ui,-apple-system,sans-serif;color:#FFFFFF;position:relative;">
  <div style="font-size:18px;color:#F59E0B;font-weight:700;letter-spacing:2px;margin-bottom:30px;">THE REALITY</div>
  <div style="margin-bottom:35px;">
    <div style="font-size:28px;color:#F59E0B;margin-bottom:10px;">1.</div>
    <p style="font-size:30px;color:#CBD5E1;line-height:1.5;margin:0;">The tool carries powerful magnets that saturate the pipe wall with a magnetic field.</p>
  </div>
  <div style="margin-bottom:35px;">
    <div style="font-size:28px;color:#F59E0B;margin-bottom:10px;">2.</div>
    <p style="font-size:30px;color:#CBD5E1;line-height:1.5;margin:0;">Where the wall is intact, the field flows smoothly through the steel.</p>
  </div>
  <div style="margin-bottom:35px;">
    <div style="font-size:28px;color:#F59E0B;margin-bottom:10px;">3.</div>
    <p style="font-size:30px;color:#CBD5E1;line-height:1.5;margin:0;">Where there's metal loss, the field "leaks" outward.</p>
  </div>
  <div>
    <div style="font-size:28px;color:#F59E0B;margin-bottom:10px;">4.</div>
    <p style="font-size:30px;color:#CBD5E1;line-height:1.5;margin:0;">Sensors on the tool measure that leakage. That's MFL.</p>
  </div>
  <div style="position:absolute;bottom:60px;right:80px;font-size:16px;color:#475569;">SLIDE 3/6</div>
  <div style="position:absolute;bottom:60px;left:80px;font-size:14px;color:#475569;">[YOUR LOGO]</div>
</div>

<!-- SLIDE 4: INSIGHT -->
<div style="width:1080px;height:1350px;background:#0F1923;display:flex;flex-direction:column;justify-content:center;padding:80px;font-family:system-ui,-apple-system,sans-serif;color:#FFFFFF;position:relative;">
  <div style="font-size:18px;color:#F59E0B;font-weight:700;letter-spacing:2px;margin-bottom:30px;">THE INSIGHT</div>
  <h2 style="font-size:40px;font-weight:800;margin:0 0 40px 0;">What MFL Finds:</h2>
  <div style="margin-bottom:15px;font-size:28px;color:#4ADE80;">&#10003; Internal corrosion</div>
  <div style="margin-bottom:15px;font-size:28px;color:#4ADE80;">&#10003; External corrosion</div>
  <div style="margin-bottom:15px;font-size:28px;color:#4ADE80;">&#10003; Gouges and dents with metal loss</div>
  <div style="margin-bottom:15px;font-size:28px;color:#4ADE80;">&#10003; General wall thinning</div>
  <div style="height:40px;"></div>
  <h2 style="font-size:40px;font-weight:800;margin:0 0 40px 0;">What MFL Does NOT Find:</h2>
  <div style="margin-bottom:15px;font-size:28px;color:#F87171;">&#10007; Cracks</div>
  <div style="margin-bottom:15px;font-size:28px;color:#F87171;">&#10007; Coating condition</div>
  <div style="margin-bottom:15px;font-size:28px;color:#F87171;">&#10007; Precise wall thickness</div>
  <div style="position:absolute;bottom:60px;right:80px;font-size:16px;color:#475569;">SLIDE 4/6</div>
  <div style="position:absolute;bottom:60px;left:80px;font-size:14px;color:#475569;">[YOUR LOGO]</div>
</div>

<!-- SLIDE 5: TECHNICAL LINK -->
<div style="width:1080px;height:1350px;background:#0F1923;display:flex;flex-direction:column;justify-content:center;padding:80px;font-family:system-ui,-apple-system,sans-serif;color:#FFFFFF;position:relative;">
  <div style="font-size:18px;color:#F59E0B;font-weight:700;letter-spacing:2px;margin-bottom:30px;">THE TOOL CONNECTION</div>
  <h2 style="font-size:42px;font-weight:800;line-height:1.2;margin:0 0 50px 0;">No single tool does everything. That's why tool selection matters.</h2>
  <div style="background:#1E293B;border-left:4px solid #F59E0B;padding:25px 30px;margin-bottom:20px;border-radius:0 8px 8px 0;">
    <span style="font-size:26px;color:#F59E0B;font-weight:700;">Cracks?</span>
    <span style="font-size:26px;color:#CBD5E1;"> → UTCD</span>
  </div>
  <div style="background:#1E293B;border-left:4px solid #F59E0B;padding:25px 30px;margin-bottom:20px;border-radius:0 8px 8px 0;">
    <span style="font-size:26px;color:#F59E0B;font-weight:700;">Coating?</span>
    <span style="font-size:26px;color:#CBD5E1;"> → EMAT</span>
  </div>
  <div style="background:#1E293B;border-left:4px solid #F59E0B;padding:25px 30px;margin-bottom:20px;border-radius:0 8px 8px 0;">
    <span style="font-size:26px;color:#F59E0B;font-weight:700;">Wall thickness?</span>
    <span style="font-size:26px;color:#CBD5E1;"> → UTWM</span>
  </div>
  <div style="background:#1E293B;border-left:4px solid #F59E0B;padding:25px 30px;border-radius:0 8px 8px 0;">
    <span style="font-size:26px;color:#F59E0B;font-weight:700;">Metal loss?</span>
    <span style="font-size:26px;color:#CBD5E1;"> → MFL</span>
  </div>
  <div style="position:absolute;bottom:60px;right:80px;font-size:16px;color:#475569;">SLIDE 5/6</div>
  <div style="position:absolute;bottom:60px;left:80px;font-size:14px;color:#475569;">[YOUR LOGO]</div>
</div>

<!-- SLIDE 6: TAKEAWAY -->
<div style="width:1080px;height:1350px;background:#0F1923;display:flex;flex-direction:column;justify-content:center;align-items:center;padding:80px;font-family:system-ui,-apple-system,sans-serif;color:#FFFFFF;text-align:center;position:relative;">
  <div style="font-size:18px;color:#F59E0B;font-weight:700;letter-spacing:2px;margin-bottom:30px;">TAKEAWAY</div>
  <h2 style="font-size:48px;font-weight:800;line-height:1.3;margin:0 0 40px 0;max-width:850px;">MFL works because of physics, not magic.</h2>
  <p style="font-size:28px;color:#CBD5E1;line-height:1.6;max-width:750px;margin:0 0 50px 0;">Understanding what it detects — and what it doesn't — is the first step in real pipeline integrity.</p>
  <div style="border:2px solid #F59E0B;padding:20px 40px;border-radius:8px;font-size:24px;color:#F59E0B;">Follow for more ILI breakdowns</div>
  <div style="position:absolute;bottom:60px;right:80px;font-size:16px;color:#475569;">SLIDE 6/6</div>
  <div style="position:absolute;bottom:60px;left:80px;font-size:14px;color:#475569;">[YOUR LOGO]</div>
</div>
```

---

## CAROUSEL 2: "What Grows Between Inspections"
**Pillar:** Problem Awareness | **Tool:** UTWM + UTCD

### LinkedIn Caption:
```
Your last ILI was 3 years ago.
Everything looked fine.

But defects don't stop growing
because you stopped looking.

Here are 5 threats that get worse
between inspection intervals.

#PipelineIntegrity #Corrosion #AssetIntegrity #ILI #InlineInspection
```

### Slide Content:

**Slide 1 — TITLE:**
"Your Pipeline Passed Its Last Inspection. But That Was 3 Years Ago."

**Slide 2 — PROBLEM:**
"ILI gives you a snapshot. A single moment in time. Between inspections, corrosion doesn't pause. Cracks don't wait. Pressure cycles keep accumulating. The pipe you inspected 3 years ago is not the same pipe today."

**Slide 3 — REALITY:**
"What grows between inspections: Internal corrosion (0.1-0.5 mm/year, faster in wet gas). SCC — silent until it ruptures. Fatigue cracks at seam welds from pressure cycling. External corrosion under failed coating. Dent + metal loss interaction becoming critical."

**Slide 4 — INSIGHT:**
"The real risk isn't the defect you found last time. It's how much it has grown since. A minor corrosion feature at 20% wall loss can reach 50%+ in 5 years. A small crack can propagate to critical length in fewer pressure cycles than you'd expect."

**Slide 5 — TECHNICAL LINK:**
"UTWM tracks wall thickness changes with sub-millimeter accuracy — so you see exactly how much corrosion has grown. UTCD detects and sizes cracks before they propagate to failure. The right re-inspection interval depends on growth rate, not calendar."

**Slide 6 — TAKEAWAY:**
"The question isn't 'did the pipeline pass last time?' The question is 'what has changed since?' Re-inspection intervals matter. Growth rate matters. Save this for your next integrity review."

### HTML Output — Carousel 2:

```html
<!-- CAROUSEL 2: What Grows Between Inspections -->

<!-- SLIDE 1: TITLE -->
<div style="width:1080px;height:1350px;background:#0F1923;display:flex;flex-direction:column;justify-content:center;align-items:center;padding:80px;font-family:system-ui,-apple-system,sans-serif;color:#FFFFFF;text-align:center;position:relative;">
  <div style="position:absolute;top:60px;left:80px;right:80px;height:4px;background:linear-gradient(90deg,#F59E0B,transparent);"></div>
  <div style="font-size:22px;color:#F59E0B;font-weight:700;letter-spacing:3px;margin-bottom:40px;">PIPELINE INTEGRITY</div>
  <h1 style="font-size:60px;font-weight:900;line-height:1.15;margin:0;max-width:900px;">Your Pipeline Passed Its Last Inspection.</h1>
  <p style="font-size:36px;color:#F87171;margin-top:30px;font-weight:700;">But That Was 3 Years Ago.</p>
  <div style="position:absolute;bottom:60px;right:80px;font-size:16px;color:#475569;">SLIDE 1/6</div>
  <div style="position:absolute;bottom:60px;left:80px;font-size:14px;color:#475569;">[YOUR LOGO]</div>
</div>

<!-- SLIDE 2: PROBLEM -->
<div style="width:1080px;height:1350px;background:#0F1923;display:flex;flex-direction:column;justify-content:center;padding:80px;font-family:system-ui,-apple-system,sans-serif;color:#FFFFFF;position:relative;">
  <div style="font-size:18px;color:#F59E0B;font-weight:700;letter-spacing:2px;margin-bottom:30px;">THE PROBLEM</div>
  <h2 style="font-size:48px;font-weight:800;line-height:1.2;margin:0 0 40px 0;">ILI gives you a snapshot.</h2>
  <p style="font-size:30px;color:#CBD5E1;line-height:1.7;margin:0 0 25px 0;">A single moment in time.</p>
  <p style="font-size:30px;color:#CBD5E1;line-height:1.7;margin:0 0 25px 0;">Between inspections, corrosion doesn't pause.</p>
  <p style="font-size:30px;color:#CBD5E1;line-height:1.7;margin:0 0 25px 0;">Cracks don't wait.</p>
  <p style="font-size:30px;color:#CBD5E1;line-height:1.7;margin:0 0 25px 0;">Pressure cycles keep accumulating.</p>
  <div style="margin-top:40px;border-top:2px solid #F59E0B;padding-top:30px;">
    <p style="font-size:32px;color:#F59E0B;font-weight:700;margin:0;">The pipe you inspected 3 years ago is not the same pipe today.</p>
  </div>
  <div style="position:absolute;bottom:60px;right:80px;font-size:16px;color:#475569;">SLIDE 2/6</div>
  <div style="position:absolute;bottom:60px;left:80px;font-size:14px;color:#475569;">[YOUR LOGO]</div>
</div>

<!-- SLIDE 3: REALITY -->
<div style="width:1080px;height:1350px;background:#0F1923;display:flex;flex-direction:column;justify-content:center;padding:80px;font-family:system-ui,-apple-system,sans-serif;color:#FFFFFF;position:relative;">
  <div style="font-size:18px;color:#F59E0B;font-weight:700;letter-spacing:2px;margin-bottom:30px;">THE REALITY</div>
  <h2 style="font-size:38px;font-weight:800;margin:0 0 40px 0;">What grows between inspections:</h2>
  <div style="background:#1E293B;padding:20px 25px;margin-bottom:15px;border-radius:8px;border-left:4px solid #F87171;">
    <span style="font-size:24px;color:#FFFFFF;font-weight:700;">Internal corrosion</span>
    <span style="font-size:22px;color:#94A3B8;"> — 0.1 to 0.5 mm/year (faster in wet gas/CO2)</span>
  </div>
  <div style="background:#1E293B;padding:20px 25px;margin-bottom:15px;border-radius:8px;border-left:4px solid #F87171;">
    <span style="font-size:24px;color:#FFFFFF;font-weight:700;">SCC</span>
    <span style="font-size:22px;color:#94A3B8;"> — silent until it ruptures</span>
  </div>
  <div style="background:#1E293B;padding:20px 25px;margin-bottom:15px;border-radius:8px;border-left:4px solid #F87171;">
    <span style="font-size:24px;color:#FFFFFF;font-weight:700;">Fatigue cracks</span>
    <span style="font-size:22px;color:#94A3B8;"> — from pressure cycling at seam welds</span>
  </div>
  <div style="background:#1E293B;padding:20px 25px;margin-bottom:15px;border-radius:8px;border-left:4px solid #F87171;">
    <span style="font-size:24px;color:#FFFFFF;font-weight:700;">External corrosion</span>
    <span style="font-size:22px;color:#94A3B8;"> — under failed coating + CP shielding</span>
  </div>
  <div style="background:#1E293B;padding:20px 25px;border-radius:8px;border-left:4px solid #F87171;">
    <span style="font-size:24px;color:#FFFFFF;font-weight:700;">Dent + metal loss</span>
    <span style="font-size:22px;color:#94A3B8;"> — interaction becomes critical over time</span>
  </div>
  <div style="position:absolute;bottom:60px;right:80px;font-size:16px;color:#475569;">SLIDE 3/6</div>
  <div style="position:absolute;bottom:60px;left:80px;font-size:14px;color:#475569;">[YOUR LOGO]</div>
</div>

<!-- SLIDE 4: INSIGHT -->
<div style="width:1080px;height:1350px;background:#0F1923;display:flex;flex-direction:column;justify-content:center;padding:80px;font-family:system-ui,-apple-system,sans-serif;color:#FFFFFF;position:relative;">
  <div style="font-size:18px;color:#F59E0B;font-weight:700;letter-spacing:2px;margin-bottom:30px;">THE INSIGHT</div>
  <h2 style="font-size:44px;font-weight:800;line-height:1.2;margin:0 0 50px 0;">The real risk isn't the defect you found last time.</h2>
  <p style="font-size:36px;color:#F59E0B;font-weight:700;line-height:1.4;margin:0 0 50px 0;">It's how much it has grown since.</p>
  <div style="background:#1E293B;padding:30px;border-radius:8px;margin-bottom:25px;">
    <p style="font-size:26px;color:#CBD5E1;margin:0;line-height:1.5;">A minor feature at <span style="color:#F59E0B;font-weight:700;">20% wall loss</span> can reach <span style="color:#F87171;font-weight:700;">50%+</span> in 5 years.</p>
  </div>
  <div style="background:#1E293B;padding:30px;border-radius:8px;">
    <p style="font-size:26px;color:#CBD5E1;margin:0;line-height:1.5;">A small crack can propagate to <span style="color:#F87171;font-weight:700;">critical length</span> in fewer pressure cycles than you'd expect.</p>
  </div>
  <div style="position:absolute;bottom:60px;right:80px;font-size:16px;color:#475569;">SLIDE 4/6</div>
  <div style="position:absolute;bottom:60px;left:80px;font-size:14px;color:#475569;">[YOUR LOGO]</div>
</div>

<!-- SLIDE 5: TECHNICAL LINK -->
<div style="width:1080px;height:1350px;background:#0F1923;display:flex;flex-direction:column;justify-content:center;padding:80px;font-family:system-ui,-apple-system,sans-serif;color:#FFFFFF;position:relative;">
  <div style="font-size:18px;color:#F59E0B;font-weight:700;letter-spacing:2px;margin-bottom:30px;">THE TOOL CONNECTION</div>
  <div style="background:#1E293B;padding:35px;border-radius:8px;margin-bottom:25px;border-left:4px solid #4ADE80;">
    <h3 style="font-size:30px;color:#4ADE80;margin:0 0 15px 0;">UTWM</h3>
    <p style="font-size:24px;color:#CBD5E1;margin:0;line-height:1.5;">Tracks wall thickness changes with sub-millimeter accuracy. See exactly how much corrosion has grown.</p>
  </div>
  <div style="background:#1E293B;padding:35px;border-radius:8px;margin-bottom:25px;border-left:4px solid #4ADE80;">
    <h3 style="font-size:30px;color:#4ADE80;margin:0 0 15px 0;">UTCD</h3>
    <p style="font-size:24px;color:#CBD5E1;margin:0;line-height:1.5;">Detects and sizes cracks before they propagate to failure. Catches SCC and fatigue cracks early.</p>
  </div>
  <div style="margin-top:30px;border-top:2px solid #334155;padding-top:30px;">
    <p style="font-size:26px;color:#F59E0B;font-weight:600;margin:0;">The right re-inspection interval depends on growth rate, not calendar.</p>
  </div>
  <div style="position:absolute;bottom:60px;right:80px;font-size:16px;color:#475569;">SLIDE 5/6</div>
  <div style="position:absolute;bottom:60px;left:80px;font-size:14px;color:#475569;">[YOUR LOGO]</div>
</div>

<!-- SLIDE 6: TAKEAWAY -->
<div style="width:1080px;height:1350px;background:#0F1923;display:flex;flex-direction:column;justify-content:center;align-items:center;padding:80px;font-family:system-ui,-apple-system,sans-serif;color:#FFFFFF;text-align:center;position:relative;">
  <div style="font-size:18px;color:#F59E0B;font-weight:700;letter-spacing:2px;margin-bottom:30px;">TAKEAWAY</div>
  <p style="font-size:30px;color:#94A3B8;margin:0 0 20px 0;">The question isn't:</p>
  <p style="font-size:34px;color:#94A3B8;text-decoration:line-through;margin:0 0 30px 0;">"Did the pipeline pass last time?"</p>
  <p style="font-size:30px;color:#94A3B8;margin:0 0 20px 0;">The question is:</p>
  <h2 style="font-size:48px;font-weight:800;color:#F59E0B;margin:0 0 50px 0;max-width:800px;">"What has changed since?"</h2>
  <div style="border:2px solid #F59E0B;padding:20px 40px;border-radius:8px;font-size:24px;color:#F59E0B;">Save this for your next integrity review</div>
  <div style="position:absolute;bottom:60px;right:80px;font-size:16px;color:#475569;">SLIDE 6/6</div>
  <div style="position:absolute;bottom:60px;left:80px;font-size:14px;color:#475569;">[YOUR LOGO]</div>
</div>
```

---

## CAROUSEL 3: "UTCD vs. MFL — When to Use Which"
**Pillar:** Product/Tool | **Tools:** UTCD + MFL

### LinkedIn Caption:
```
"Should I use MFL or UTCD?"

This is one of the most common questions
in pipeline integrity.

The answer isn't one or the other.
It starts with knowing what you're looking for.

Here's a simple breakdown.

#ILI #UTCD #MFL #PipelineIntegrity #CrackDetection
```

### Slide Content:

**Slide 1 — TITLE:**
"MFL or UTCD? Wrong Question. Here's the Right One."

**Slide 2 — PROBLEM:**
"Operators ask 'which tool is better?' But that's the wrong question. MFL and UTCD detect different things. Choosing the wrong tool means running an inspection and still missing real threats."

**Slide 3 — REALITY:**
"MFL = metal loss detection. Magnetic field saturates pipe wall. Leakage at thin spots = corrosion, gouges, wall thinning. UTCD = crack detection. Ultrasonic pulses find crack-like features. SCC, fatigue cracks, seam weld anomalies. Different physics. Different purpose."

**Slide 4 — INSIGHT:**
"MFL finds: corrosion, gouges, general thinning. MFL misses: cracks. UTCD finds: SCC, fatigue, seam weld cracks. UTCD misses: broad corrosion mapping. Running MFL and expecting it to find cracks is like using a metal detector to find glass."

**Slide 5 — TECHNICAL LINK:**
"When your threat assessment shows corrosion risk → MFL. When it shows crack risk → UTCD. When it shows both → run both. High-consequence areas and aging pipelines often need combined technology. Tool selection starts with threat assessment, not habit."

**Slide 6 — TAKEAWAY:**
"Don't ask 'which tool?' Ask 'what threat?' The right inspection starts with the right question. Follow for more honest ILI breakdowns."

### HTML Output — Carousel 3:

```html
<!-- CAROUSEL 3: UTCD vs. MFL -->

<!-- SLIDE 1: TITLE -->
<div style="width:1080px;height:1350px;background:#0F1923;display:flex;flex-direction:column;justify-content:center;align-items:center;padding:80px;font-family:system-ui,-apple-system,sans-serif;color:#FFFFFF;text-align:center;position:relative;">
  <div style="position:absolute;top:60px;left:80px;right:80px;height:4px;background:linear-gradient(90deg,#F59E0B,transparent);"></div>
  <div style="font-size:22px;color:#F59E0B;font-weight:700;letter-spacing:3px;margin-bottom:40px;">TOOL COMPARISON</div>
  <h1 style="font-size:68px;font-weight:900;line-height:1.15;margin:0;">MFL or UTCD?</h1>
  <p style="font-size:36px;color:#94A3B8;margin-top:20px;">Wrong question.</p>
  <p style="font-size:42px;color:#F59E0B;font-weight:700;margin-top:20px;">Here's the right one.</p>
  <div style="position:absolute;bottom:60px;right:80px;font-size:16px;color:#475569;">SLIDE 1/6</div>
  <div style="position:absolute;bottom:60px;left:80px;font-size:14px;color:#475569;">[YOUR LOGO]</div>
</div>

<!-- SLIDE 2: PROBLEM -->
<div style="width:1080px;height:1350px;background:#0F1923;display:flex;flex-direction:column;justify-content:center;padding:80px;font-family:system-ui,-apple-system,sans-serif;color:#FFFFFF;position:relative;">
  <div style="font-size:18px;color:#F59E0B;font-weight:700;letter-spacing:2px;margin-bottom:30px;">THE PROBLEM</div>
  <h2 style="font-size:46px;font-weight:800;line-height:1.2;margin:0 0 40px 0;">Operators ask:<br/>"Which tool is better?"</h2>
  <p style="font-size:30px;color:#CBD5E1;line-height:1.6;margin:0 0 30px 0;">But MFL and UTCD detect completely different things.</p>
  <p style="font-size:30px;color:#CBD5E1;line-height:1.6;margin:0 0 30px 0;">Choosing the wrong tool means running a full inspection...</p>
  <p style="font-size:34px;color:#F87171;font-weight:700;margin:0;">...and still missing real threats.</p>
  <div style="position:absolute;bottom:60px;right:80px;font-size:16px;color:#475569;">SLIDE 2/6</div>
  <div style="position:absolute;bottom:60px;left:80px;font-size:14px;color:#475569;">[YOUR LOGO]</div>
</div>

<!-- SLIDE 3: REALITY -->
<div style="width:1080px;height:1350px;background:#0F1923;display:flex;flex-direction:column;justify-content:center;padding:80px;font-family:system-ui,-apple-system,sans-serif;color:#FFFFFF;position:relative;">
  <div style="font-size:18px;color:#F59E0B;font-weight:700;letter-spacing:2px;margin-bottom:30px;">THE REALITY</div>
  <div style="display:flex;gap:30px;">
    <div style="flex:1;background:#1E293B;padding:35px;border-radius:12px;border-top:4px solid #3B82F6;">
      <h3 style="font-size:36px;color:#3B82F6;margin:0 0 20px 0;">MFL</h3>
      <p style="font-size:20px;color:#94A3B8;margin:0 0 15px 0;">METAL LOSS DETECTION</p>
      <p style="font-size:22px;color:#CBD5E1;line-height:1.5;margin:0 0 10px 0;">Magnetic field saturates pipe wall</p>
      <p style="font-size:22px;color:#CBD5E1;line-height:1.5;margin:0 0 10px 0;">Leakage at thin spots</p>
      <p style="font-size:22px;color:#CBD5E1;line-height:1.5;margin:0;">= corrosion, gouges, thinning</p>
    </div>
    <div style="flex:1;background:#1E293B;padding:35px;border-radius:12px;border-top:4px solid #F59E0B;">
      <h3 style="font-size:36px;color:#F59E0B;margin:0 0 20px 0;">UTCD</h3>
      <p style="font-size:20px;color:#94A3B8;margin:0 0 15px 0;">CRACK DETECTION</p>
      <p style="font-size:22px;color:#CBD5E1;line-height:1.5;margin:0 0 10px 0;">Ultrasonic pulses find cracks</p>
      <p style="font-size:22px;color:#CBD5E1;line-height:1.5;margin:0 0 10px 0;">SCC, fatigue, seam weld</p>
      <p style="font-size:22px;color:#CBD5E1;line-height:1.5;margin:0;">= crack-like features</p>
    </div>
  </div>
  <p style="font-size:28px;color:#F59E0B;font-weight:700;text-align:center;margin-top:40px;">Different physics. Different purpose.</p>
  <div style="position:absolute;bottom:60px;right:80px;font-size:16px;color:#475569;">SLIDE 3/6</div>
  <div style="position:absolute;bottom:60px;left:80px;font-size:14px;color:#475569;">[YOUR LOGO]</div>
</div>

<!-- SLIDE 4: INSIGHT -->
<div style="width:1080px;height:1350px;background:#0F1923;display:flex;flex-direction:column;justify-content:center;padding:80px;font-family:system-ui,-apple-system,sans-serif;color:#FFFFFF;position:relative;">
  <div style="font-size:18px;color:#F59E0B;font-weight:700;letter-spacing:2px;margin-bottom:30px;">THE INSIGHT</div>
  <div style="margin-bottom:25px;">
    <p style="font-size:26px;margin:0 0 8px 0;"><span style="color:#4ADE80;">MFL finds:</span> <span style="color:#CBD5E1;">corrosion, gouges, general thinning</span></p>
    <p style="font-size:26px;margin:0;"><span style="color:#F87171;">MFL misses:</span> <span style="color:#CBD5E1;">cracks</span></p>
  </div>
  <div style="height:2px;background:#334155;margin:20px 0;"></div>
  <div style="margin-bottom:40px;">
    <p style="font-size:26px;margin:0 0 8px 0;"><span style="color:#4ADE80;">UTCD finds:</span> <span style="color:#CBD5E1;">SCC, fatigue, seam weld cracks</span></p>
    <p style="font-size:26px;margin:0;"><span style="color:#F87171;">UTCD misses:</span> <span style="color:#CBD5E1;">broad corrosion mapping</span></p>
  </div>
  <div style="background:#1E293B;padding:30px;border-radius:8px;border-left:4px solid #F59E0B;">
    <p style="font-size:28px;color:#F59E0B;font-weight:700;margin:0;line-height:1.4;">Running MFL and expecting it to find cracks is like using a metal detector to find glass.</p>
  </div>
  <div style="position:absolute;bottom:60px;right:80px;font-size:16px;color:#475569;">SLIDE 4/6</div>
  <div style="position:absolute;bottom:60px;left:80px;font-size:14px;color:#475569;">[YOUR LOGO]</div>
</div>

<!-- SLIDE 5: TECHNICAL LINK -->
<div style="width:1080px;height:1350px;background:#0F1923;display:flex;flex-direction:column;justify-content:center;padding:80px;font-family:system-ui,-apple-system,sans-serif;color:#FFFFFF;position:relative;">
  <div style="font-size:18px;color:#F59E0B;font-weight:700;letter-spacing:2px;margin-bottom:30px;">WHEN TO USE WHICH</div>
  <div style="background:#1E293B;padding:30px;border-radius:8px;margin-bottom:20px;border-left:4px solid #3B82F6;">
    <p style="font-size:26px;margin:0;"><span style="color:#3B82F6;font-weight:700;">Corrosion risk →</span> <span style="color:#CBD5E1;">MFL</span></p>
  </div>
  <div style="background:#1E293B;padding:30px;border-radius:8px;margin-bottom:20px;border-left:4px solid #F59E0B;">
    <p style="font-size:26px;margin:0;"><span style="color:#F59E0B;font-weight:700;">Crack risk →</span> <span style="color:#CBD5E1;">UTCD</span></p>
  </div>
  <div style="background:#1E293B;padding:30px;border-radius:8px;margin-bottom:20px;border-left:4px solid #A855F7;">
    <p style="font-size:26px;margin:0;"><span style="color:#A855F7;font-weight:700;">Both risks →</span> <span style="color:#CBD5E1;">Run both</span></p>
  </div>
  <div style="margin-top:30px;border-top:2px solid #334155;padding-top:30px;">
    <p style="font-size:28px;color:#CBD5E1;margin:0 0 15px 0;">High-consequence areas and aging pipelines often need combined technology.</p>
    <p style="font-size:28px;color:#F59E0B;font-weight:600;margin:0;">Tool selection starts with threat assessment, not habit.</p>
  </div>
  <div style="position:absolute;bottom:60px;right:80px;font-size:16px;color:#475569;">SLIDE 5/6</div>
  <div style="position:absolute;bottom:60px;left:80px;font-size:14px;color:#475569;">[YOUR LOGO]</div>
</div>

<!-- SLIDE 6: TAKEAWAY -->
<div style="width:1080px;height:1350px;background:#0F1923;display:flex;flex-direction:column;justify-content:center;align-items:center;padding:80px;font-family:system-ui,-apple-system,sans-serif;color:#FFFFFF;text-align:center;position:relative;">
  <div style="font-size:18px;color:#F59E0B;font-weight:700;letter-spacing:2px;margin-bottom:30px;">TAKEAWAY</div>
  <p style="font-size:32px;color:#94A3B8;margin:0 0 15px 0;text-decoration:line-through;">Don't ask "which tool?"</p>
  <h2 style="font-size:52px;font-weight:800;color:#F59E0B;margin:0 0 50px 0;">Ask "what threat?"</h2>
  <p style="font-size:28px;color:#CBD5E1;line-height:1.5;max-width:750px;margin:0 0 50px 0;">The right inspection starts with the right question.</p>
  <div style="border:2px solid #F59E0B;padding:20px 40px;border-radius:8px;font-size:24px;color:#F59E0B;">Follow for more honest ILI breakdowns</div>
  <div style="position:absolute;bottom:60px;right:80px;font-size:16px;color:#475569;">SLIDE 6/6</div>
  <div style="position:absolute;bottom:60px;left:80px;font-size:14px;color:#475569;">[YOUR LOGO]</div>
</div>
```

---

# PART 8: POSTING STRATEGY

## Weekly Schedule (2-3 Posts/Week)

| Day | Type | Mix Category |
|-----|------|-------------|
| **Tuesday** | Carousel or Single Post | Problem-based OR Educational |
| **Thursday** | Carousel | Tool-based OR Product comparison |
| **Saturday** (optional) | Single Post | Insight-based OR Event/Brand |

## Monthly Rotation

| Week | Tuesday | Thursday | Saturday |
|------|---------|----------|----------|
| 1 | Problem carousel | Tool breakdown carousel | Industry insight |
| 2 | Educational carousel | Product comparison carousel | Event or brand post |
| 3 | Problem single post | Tool deep-dive carousel | Industry opinion |
| 4 | Educational carousel | Product carousel | Special day or milestone |

## Posting Times

| Region | Best Times |
|--------|-----------|
| GCC / Middle East | 8-9 AM GST, 12 PM GST |
| North America | 7-8 AM CST, 12 PM CST |
| Europe | 8-9 AM CET, 5 PM CET |

**After posting:** Engage in comments for 30-60 minutes. This drives the algorithm harder than the post itself.

---

# PART 9: OUTREACH INTEGRATION

## Content Supports Sales — Not Just Social

Every piece of content should be reusable across channels:

```
┌──────────────────────────────────────────────────────┐
│              CONTENT REUSE MAP                        │
│                                                       │
│  LinkedIn Post ──┬──▶ Email outreach follow-up       │
│                  ├──▶ Website blog / resource page    │
│                  ├──▶ Cold email insert (value piece) │
│                  └──▶ Client communication reference  │
│                                                       │
│  Carousel ───────┬──▶ PDF download (lead magnet)     │
│                  ├──▶ Email attachment                │
│                  └──▶ Website resource library        │
│                                                       │
│  Video Idea ─────┬──▶ Email embed / GIF preview      │
│                  └──▶ Website hero content            │
└──────────────────────────────────────────────────────┘
```

## Email Outreach Integration

### How to Use LinkedIn Content in Cold Emails

| Email Stage | Content Use | Example |
|-------------|------------|---------|
| **First touch** | Link to educational carousel as value-add | "We put together a simple breakdown of how MFL works — thought your team might find it useful: [link]" |
| **Follow-up** | Reference problem-based post | "We recently shared data on corrosion growth rates between inspections. Given your pipeline is due for re-inspection, it might be relevant: [link]" |
| **Nurture** | Share industry insight post | "Thought this was worth sharing — our take on hydrogen pipeline inspection challenges: [link]" |
| **Pre-meeting** | Send tool comparison carousel | "Before our call Thursday, this 6-slide breakdown on UTCD vs. MFL might be useful context: [link]" |

### Content-to-Email Templates

**Template 1: Value-First Outreach**
```
Subject: Quick breakdown — [topic relevant to their pipeline]

Hi [Name],

We recently put together a simple visual breakdown on
[topic — e.g., "what grows between pipeline inspections"].

It's not a sales pitch — just a technical explanation
that might be useful for your integrity planning.

Here it is: [LinkedIn post link or PDF attachment]

Happy to discuss if any of it is relevant to your operations.

[Signature]
```

**Template 2: Follow-Up with Content**
```
Subject: Re: [previous subject]

Hi [Name],

Following up on my last message.

In the meantime, thought this might be useful —
a comparison of when to use MFL vs. UTCD based
on threat type: [link]

Worth a look if you're planning upcoming inspections.

[Signature]
```

**Template 3: Post-Meeting Resource**
```
Subject: Resources from our conversation

Hi [Name],

Good speaking with you.

As discussed, here are a few technical breakdowns
that cover what we talked about:

1. [Carousel: How MFL Actually Works]
2. [Carousel: Defects That Grow Between Inspections]
3. [Post: Tool Selection Guide]

Let me know if you'd like more detail on any of these.

[Signature]
```

## Website Traffic Strategy

| Action | How |
|--------|-----|
| Link in comments | Every LinkedIn post → "Full technical details on our website: [link]" in first comment |
| Carousel → Blog | Expand each carousel into a full blog post on website |
| PDF Downloads | Offer carousels as downloadable PDFs (captures email) |
| Resource Library | Build website page with all educational content organized by topic |
| SEO | Blog versions of carousels target keywords: "MFL pipeline inspection", "UTCD crack detection", etc. |

## Lead Capture Flow

```
LinkedIn post (educational)
  └──▶ Comment: "Download the full guide on our website"
        └──▶ Website landing page
              └──▶ PDF download (email required)
                    └──▶ Email nurture sequence
                          └──▶ Sales follow-up
```

---

# PART 10: AUTOMATION FLOW & TOOLS

## Tool Stack (Free-First — No Canva)

| Function | Free Tool | Notes |
|----------|-----------|-------|
| Content Calendar | **Google Sheets** | Template structure below |
| Carousel Design | **HTML → Screenshot** (this system) | Use browser/puppeteer to convert HTML to images |
| Alternative Design | **Google Slides** | Free, team-friendly, export as images |
| Post Scheduling | **Buffer Free** (3 channels) | Or post manually from LinkedIn |
| AI Writing | **Claude Code** (this system) | Generate all content from prompts |
| Analytics | **LinkedIn Native Analytics** | Free, export monthly |
| Approval Flow | **Google Sheets comments** | Team reviews in spreadsheet |
| Email Outreach | **Google Workspace** or existing CRM | Integrate content links |
| Website Blog | **Existing website CMS** | Publish expanded versions |

### HTML to Image Conversion (Free Methods)

| Method | How |
|--------|-----|
| **Browser screenshot** | Open HTML file → browser screenshot at 1080x1350 |
| **Puppeteer script** | Node.js script to batch-convert HTML slides to PNG |
| **Google Chrome DevTools** | Device toolbar → set custom size → screenshot |
| **html2canvas** | JavaScript library for HTML-to-image |

## Google Sheets Content Tracker

### Sheet 1: Content Calendar

| Column | Description |
|--------|-------------|
| Post ID | POST-2026-W15-01 |
| Week # | Week number |
| Planned Date | Target publish date |
| Pillar | Educational / Problem / Product / Industry / Event |
| Mix Category | Problem-based / Tool-based / Insight-based |
| Topic | Post topic |
| Tool Link | UTCD / MFL / EMAT / UTWM / Cleaning / General |
| Format | Carousel / Single Post / Video Idea |
| Hook | First 2 lines |
| Status | IDEA → DRAFTED → DESIGNED → APPROVED → POSTED |
| Caption | Full text |
| HTML/Slides Link | Link to carousel file |
| Approved By | Name |
| Post URL | LinkedIn URL |
| Reuse: Email | Y/N — used in outreach? |
| Reuse: Website | Y/N — published as blog? |
| Reuse: PDF | Y/N — available as download? |

### Sheet 2: Performance

| Column | Description |
|--------|-------------|
| Post ID | Links to Calendar |
| Impressions | LinkedIn analytics |
| Reactions | All reaction types |
| Comments | Count |
| Shares | Reposts |
| Engagement Rate | (Reactions + Comments + Shares) / Impressions |
| Saves | If trackable |
| Website Clicks | From comment link |
| Best Comment Theme | What resonated |
| Learning | What to repeat or avoid |

### Sheet 3: Outreach Tracker

| Column | Description |
|--------|-------------|
| Post ID | Which content piece |
| Used In Email? | Y/N |
| Email Campaign | Campaign name |
| Replies/Opens | Email performance when content was included |
| Meeting Booked? | Y/N |
| Notes | What worked |

---

# PART 11: CONTINUOUS IMPROVEMENT LOOP

## Monthly Review (30 minutes)

```
1. PULL DATA
   → Export LinkedIn analytics
   → Update Performance sheet
   → Check outreach tracker

2. FIND PATTERNS
   → Top 3 posts: why did they work?
   → Bottom 3: what missed?
   → Which pillar performed best?
   → Which format got most engagement?
   → Which posts drove website traffic?
   → Which posts were reused in emails?

3. DECIDE ACTIONS
   → More of what worked
   → Less of what didn't
   → Test one new thing next month
   → Adjust pillar % if needed

4. UPDATE PLAN
   → Pre-select next month's 8-12 topics
   → Assign to calendar
   → Flag special days
   → Identify outreach integration opportunities
```

## Key Metrics

| Metric | Target | If Below Target |
|--------|--------|----------------|
| Impressions/post | 1,000+ (growing) | Improve hooks, test posting times |
| Engagement rate | 3-5% | Stronger CTAs, better discussion prompts |
| Comments/post | 5+ | End with real questions, not generic asks |
| Follower growth | 2-5%/month | Post more consistently, engage on others' posts |
| Website clicks | Track via UTM | Improve comment CTAs, make resource pages compelling |
| Email reply rate (with content) | Higher than without | Test different content types in emails |
| Carousel save rate | 1%+ | Make content more reference-worthy |

## Quarterly Strategy Review

| Question | Action |
|----------|--------|
| Which pillar converts best? | Shift % allocation |
| Are we repeating topics? | Add new research topics |
| Is content supporting sales? | Get sales team feedback |
| Are competitors doing something we're missing? | Refresh competitor analysis |
| What does the audience ask in comments? | Create content from real questions |
| Which content works best in outreach emails? | Prioritize those formats |

---

# PART 12: CONTENT QUALITY CHECKLIST

## Before Every Post:

| # | Check | Pass? |
|---|-------|-------|
| 1 | Hook works in <210 characters? | ☐ |
| 2 | Based on real pipeline problem or real tool capability? | ☐ |
| 3 | Written in simple, direct language? | ☐ |
| 4 | No banned words used? | ☐ |
| 5 | Would an integrity engineer actually learn something? | ☐ |
| 6 | Has a soft, relevant CTA? | ☐ |
| 7 | Formatted for mobile (short lines, spacing)? | ☐ |
| 8 | 3-5 relevant hashtags? | ☐ |
| 9 | Can this be reused in email outreach? | ☐ |
| 10 | Does this support website traffic or lead capture? | ☐ |

## The Content Rule:

```
80% VALUE                          20% BRAND
├── Problem explanations           ├── Company milestones
├── Technical education            ├── Event presence
├── Honest tool comparisons        ├── Team spotlights
├── Industry insights              └── Soft product mentions
└── Practical operator knowledge
```

---

# QUICK START: FIRST 4 WEEKS

| Week | Tuesday | Thursday | Saturday |
|------|---------|----------|----------|
| **1** | Carousel: "How MFL Actually Works" (Educational) | Single Post: "AI in pipeline inspection" (Insight) | — |
| **2** | Carousel: "What Grows Between Inspections" (Problem) | Carousel: "UTCD vs. MFL" (Product) | Single Post: Team intro |
| **3** | Carousel: "What EMAT Detects" (Educational) | Single Post: "40% unpiggable problem" (Problem) | Single Post: Industry trend |
| **4** | Carousel: "Why Cleaning Before ILI Matters" (Educational) | Carousel: "Pipeline Cracks Explained" (Educational) | Single Post: Special day or milestone |

**After each post:** Save carousel as PDF. Add to outreach library. Note what works.

---

*Content Automation Engine v2*
*Built for: B2B pipeline inspection / ILI company*
*Goal: Build authority + support sales + generate leads through educational content*
*Not just posting — building a system that drives business.*

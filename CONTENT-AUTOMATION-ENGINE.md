# Content Automation Engine
## B2B Pipeline Inspection / ILI Tools — LinkedIn Content System

---

# PART 1: SYSTEM ARCHITECTURE

```
┌─────────────────────────────────────────────────────────────────────┐
│                    CONTENT AUTOMATION ENGINE                        │
├─────────────────────────────────────────────────────────────────────┤
│                                                                     │
│  ┌──────────────┐   ┌──────────────┐   ┌──────────────────────┐    │
│  │  INPUT LAYER  │   │ STRATEGY     │   │  OUTPUT LAYER        │    │
│  │              │   │ LAYER        │   │                      │    │
│  │ • Internal   │──▶│ • Pillars    │──▶│ • Carousel Posts     │    │
│  │   Data       │   │ • Psychology │   │ • Single Posts       │    │
│  │ • Industry   │   │ • Calendar   │   │ • Technical Posts    │    │
│  │   Research   │   │ • Matching   │   │                      │    │
│  │ • Events     │   │              │   │                      │    │
│  └──────────────┘   └──────────────┘   └──────────┬───────────┘    │
│                                                     │               │
│                    ┌──────────────────┐              │               │
│                    │ TRACKING LAYER   │◀─────────────┘               │
│                    │                  │                              │
│                    │ • Google Sheets  │                              │
│                    │ • Status Flow    │──▶ IMPROVEMENT LOOP          │
│                    │ • Analytics      │                              │
│                    └──────────────────┘                              │
└─────────────────────────────────────────────────────────────────────┘
```

---

# PART 2: INPUT SOURCES

## A. Internal Data (PRIMARY — most important)

| Source Type | Content | How to Use |
|-------------|---------|------------|
| Tool Specs | UTCD, EMAT, MFL, UTWM, Cleaning Tools | Extract capabilities, detection ranges, pipe size compatibility |
| Flyers | Technical + general product flyers | Pull key selling points, specs, differentiators |
| Brochures | Company & service brochures | Extract company positioning, service descriptions |
| Website | Service pages, about, case studies | Mine for messaging, proof points, terminology |

**Action:** Create a master reference doc with all tool capabilities in one place:

| Tool | What It Detects | How It Works (Simple) | Pipe Types | Key Advantage |
|------|----------------|----------------------|------------|---------------|
| UTCD | Cracks (SCC, fatigue, seam weld) | Ultrasonic pulses detect crack-like features | Gas, oil, product | Finds cracks before they become failures |
| EMAT | Coating disbondment, cracks, corrosion under insulation | Electromagnetic acoustic waves — no couplant needed | Dry gas, uncoated | Works without liquid couplant |
| MFL | Metal loss, corrosion, gouges | Magnetic field detects wall thickness changes | Oil, gas, water | Industry standard for metal loss |
| UTWM | Wall thickness, internal/external corrosion | Ultrasonic wall measurement | All types | Precise wall thickness mapping |
| Cleaning | Debris, wax, scale buildup | Mechanical + magnetic cleaning pigs | All types | Prepares pipeline for accurate ILI |

---

## B. Industry Research (AI-Powered)

Topics to monitor continuously:

- Pipeline failures and incidents (corrosion, cracks, leaks)
- ILI technology advancements (AI/ML in defect detection, robotic ILI, miniaturized sensors)
- Regulatory changes (PHMSA, API, ASME standards)
- Asset integrity management trends
- Unpiggable pipeline solutions (~40% of world pipelines are unpiggable)
- Digital twin and predictive maintenance in pipelines
- Hydrogen pipeline challenges (new materials, different inspection needs)

**Research Sources:**
- Pipeline & Gas Journal
- Pipeline Technology Journal
- Inspectioneering
- NACE/AMPP publications
- PRCI research updates
- PHMSA incident reports

---

## C. Event-Based Content

### Industry Events Calendar

| Event | When | Where | Content Angle |
|-------|------|-------|--------------|
| PPIM Conference | Jan 19-22, 2026 | Houston, TX | Pigging & integrity management |
| Pipeline Technology Conference (PTC) | Apr 27-30, 2026 | Berlin | European pipeline tech |
| ADIPEC | Nov 2026 | Abu Dhabi | Middle East oil & gas |
| OTC (Offshore Technology) | May 2026 | Houston | Offshore pipelines |
| World Pipeline Congress | TBD | Various | Global pipeline community |

### Special Days (Global + Regional)

| Day | Date | Content Connection |
|-----|------|--------------------|
| World Engineering Day | March 4 | Celebrate pipeline engineering |
| World Environment Day | June 5 | Pipeline integrity prevents leaks/spills |
| International Day of Safety | April 28 | Pipeline safety culture |
| UAE National Day | December 2 | Regional presence, localized post |
| Saudi National Day | September 23 | Regional engagement |
| World Energy Day | October 22 | Energy infrastructure integrity |
| Engineers Week | February | Technical team spotlight |

---

# PART 3: CONTENT STRATEGY — 5 PILLARS

## Psychology Foundation (Applied from Marketing Psychology)

Before creating content, understand how B2B industrial buyers think:

| Psychological Principle | How It Applies | Content Approach |
|------------------------|----------------|-----------------|
| **Authority Bias** | Engineers trust expertise, not marketing | Lead with technical depth, not claims |
| **Loss Aversion** | Fear of pipeline failure > desire for upgrades | Frame: "what happens if you DON'T inspect" |
| **Confirmation Bias** | Operators believe their current method works | Don't attack — educate on what they might be missing |
| **Reciprocity** | Give knowledge freely → they come to you when buying | Educational content first, no hard selling |
| **Status-Quo Bias** | "We've always done MFL" is a real objection | Show what MFL misses, not why it's bad |
| **Mere Exposure Effect** | Consistent presence builds trust over time | Post 2-3x/week, every week, without gaps |
| **Pratfall Effect** | Admitting limitations builds more trust | "UTCD isn't for every pipeline — here's when to use it" |

---

## Pillar 1: Educational (Core) — 30% of content

**Goal:** Explain ILI tools, defects, and pipeline problems simply.

**Psychology:** Reciprocity + Authority Bias. Give knowledge → build trust → become the go-to.

**Topics:**
- What UTCD actually detects (and what it doesn't)
- How MFL works — explained in plain English
- Types of pipeline cracks: SCC, fatigue, seam weld
- Internal vs. external corrosion — why it matters for inspection
- What happens during an ILI run (step by step)
- Why cleaning before inspection changes everything

**Format:** Carousel posts (primary), technical breakdown posts

---

## Pillar 2: Problem Awareness — 25% of content

**Goal:** Make the audience feel the urgency of pipeline integrity problems.

**Psychology:** Loss Aversion + Availability Heuristic. Make pipeline failures vivid and top-of-mind.

**Topics:**
- Corrosion doesn't wait — what 1mm of metal loss means
- The cost of an uninspected pipeline (financial + environmental)
- Why cracks are harder to detect than corrosion
- Pipeline failures that could have been prevented
- The gap between inspection intervals — what grows in between
- Unpiggable pipelines: the 40% problem

**Format:** Single posts with strong hooks, carousel posts

---

## Pillar 3: Product/Tool Content — 20% of content

**Goal:** Show what your tools do — based on real technical capability, not marketing fluff.

**Psychology:** Contrast Effect + Commitment & Consistency. Show before/after of inspection data. Small technical trust → larger buying decision.

**Topics:**
- UTCD vs. MFL — when to use which (honest comparison)
- EMAT: why no-couplant matters for gas pipelines
- Cleaning tools: the unsung hero of accurate ILI data
- UTWM precision: how accurate wall measurement prevents over-conservatism
- Tool selection guide: matching the right tool to the right threat
- Real inspection data examples (anonymized)

**Format:** Carousel posts (tool breakdowns), technical posts

---

## Pillar 4: Industry Insights — 15% of content

**Goal:** Position as a thinking company, not just a tool provider.

**Psychology:** Authority Bias + Unity Principle. Speak the language of the industry → "they're one of us."

**Topics:**
- AI in pipeline inspection — where it actually helps (not hype)
- The hydrogen pipeline challenge: new fuels, new inspection needs
- Digital twins in pipeline integrity — practical or buzzword?
- Robotic ILI: solving the unpiggable problem
- Regulatory trends: what's changing in pipeline integrity management
- The shift from reactive to predictive integrity management

**Format:** Single posts (opinion/insight), carousel posts

---

## Pillar 5: Event / Human / Brand — 10% of content

**Goal:** Show the human side. Build brand warmth alongside technical credibility.

**Psychology:** Liking/Similarity Bias + Mere Exposure Effect. People buy from people they relate to.

**Topics:**
- Conference recaps (PPIM, PTC, ADIPEC)
- Team spotlights — engineers behind the tools
- Special day posts (World Engineering Day, etc.)
- Company milestones (projects completed, new markets)
- Behind-the-scenes: tool manufacturing, R&D, field operations

**Format:** Photo + story posts, single posts

---

# PART 4: CONTENT TYPES — DETAILED STRUCTURE

## 1. Carousel Posts (PRIMARY FORMAT)

### Structure Template

```
┌─────────────────────────────────────┐
│ SLIDE 1: HOOK                       │
│ Bold question or surprising fact    │
│ Large text, minimal design          │
│ Goal: STOP the scroll               │
├─────────────────────────────────────┤
│ SLIDE 2: CONTEXT / PROBLEM          │
│ Set up the problem or situation     │
│ "Here's what most operators miss"   │
├─────────────────────────────────────┤
│ SLIDE 3-5: EXPLANATION              │
│ Core educational content            │
│ One idea per slide                  │
│ Use visuals, diagrams, simple text  │
├─────────────────────────────────────┤
│ SLIDE 6-7: INSIGHT / TAKEAWAY       │
│ "So what does this mean?"           │
│ Practical implication               │
│ Connect to real operations          │
├─────────────────────────────────────┤
│ SLIDE 8: SOFT CTA                   │
│ NOT "Contact us for a quote"        │
│ Instead: "Follow for more ILI       │
│ insights" or "Save this for your    │
│ next integrity review"              │
└─────────────────────────────────────┘
```

### Design Guidelines
- **Size:** 1080 x 1350px (portrait, best for LinkedIn)
- **Colors:** Dark background (navy/black) + accent color (orange/yellow for industry feel)
- **Font:** Sans-serif, bold headlines, clean body text
- **Branding:** Small logo bottom-right, consistent across all slides
- **No:** Stock photos of handshakes. No clip art. No walls of text.

---

## 2. Single Posts

### Structure
```
HOOK (line 1-2) ← Must work before "...see more"
↓
BODY (3-8 short lines)
↓
INSIGHT (1-2 lines)
↓
CTA (question or save prompt)
↓
#hashtags (3-5)
```

### Formatting Rules
- One sentence per line
- Blank line between paragraphs
- Max 3,000 characters (aim for 1,200-1,800)
- No external links in post body (put in comments)
- 3-5 hashtags: #PipelineIntegrity #ILI #InlineInspection #OilAndGas #AssetIntegrity

---

## 3. Technical Breakdown Posts

### Structure
```
TOOL NAME + what it does (1 line)
↓
HOW it works (2-3 simple sentences)
↓
WHAT it detects (bullet list)
↓
WHEN to use it vs. alternatives
↓
ONE real-world scenario
```

---

# PART 5: WRITING STYLE GUIDE

## The Voice

Think: **Senior integrity engineer explaining to a colleague over coffee.**

Not a professor. Not a salesperson. Not an AI.

## Rules

| DO | DON'T |
|----|-------|
| "MFL detects metal loss by measuring changes in magnetic field" | "Our innovative MFL technology leverages cutting-edge magnetic flux analysis" |
| "Cracks grow. If you don't catch them early, they become failures." | "It is imperative to implement proactive crack detection methodologies" |
| "UTCD finds cracks that MFL can't see" | "Our leading UTCD solution provides superior detection capabilities" |
| "40% of pipelines can't run conventional pigs" | "A significant portion of global pipeline infrastructure remains unpiggable" |
| Short sentences. Real numbers. Direct language. | Long paragraphs. Vague claims. Corporate tone. |

## Banned Words & Phrases

❌ "Leading company" / "industry leader"
❌ "Innovative solutions"
❌ "Cutting-edge technology"
❌ "Synergy" / "leverage" / "paradigm"
❌ "We are pleased to announce"
❌ "In today's rapidly evolving landscape"
❌ "Holistic approach"
❌ "Best-in-class"
❌ "Excited to share"

## Power Phrases (Use These Instead)

✅ "Here's what actually happens when..."
✅ "Most operators don't know that..."
✅ "The difference between [A] and [B] is..."
✅ "This is why [problem] keeps happening..."
✅ "We've inspected [X] km of pipeline. Here's what we've learned."

---

# PART 6: 10 EXAMPLE POST IDEAS

| # | Pillar | Topic | Type | Tool Link | Hook |
|---|--------|-------|------|-----------|------|
| 1 | Educational | How MFL actually works | Carousel | MFL | "You've heard of MFL. But do you know what happens inside the pipe?" |
| 2 | Problem | Corrosion between inspections | Single Post | UTWM | "Your last ILI was 5 years ago. Here's what grew since then." |
| 3 | Product | UTCD vs. MFL comparison | Carousel | UTCD + MFL | "MFL finds metal loss. UTCD finds cracks. Here's why you might need both." |
| 4 | Industry | AI in pipeline inspection | Single Post | General | "AI won't replace pipeline inspectors. But inspectors using AI will replace those who don't." |
| 5 | Educational | Types of pipeline cracks | Carousel | UTCD | "Not all cracks are the same. SCC, fatigue, seam weld — here's the difference." |
| 6 | Problem | Unpiggable pipelines | Single Post | Cleaning + ILI | "40% of the world's pipelines can't run conventional ILI tools. What happens to them?" |
| 7 | Product | Why cleaning before ILI matters | Carousel | Cleaning Tools | "Garbage in, garbage out. Why cleaning is the most underrated step in pipeline inspection." |
| 8 | Industry | Hydrogen pipelines | Single Post | EMAT | "Hydrogen is coming to pipelines. But are we ready to inspect them?" |
| 9 | Event | PPIM 2026 recap | Photo + Story | General | "3 things we learned at PPIM this year" |
| 10 | Educational | What EMAT detects | Carousel | EMAT | "No couplant. No liquid. EMAT inspects gas pipelines differently. Here's how." |

---

# PART 7: 3 FULL CAROUSEL EXAMPLES

---

## CAROUSEL 1: "How MFL Actually Works"
**Pillar:** Educational | **Tool:** MFL | **Slides:** 8

### Caption:
```
You've probably heard of MFL.

But most people outside inspection don't know
what actually happens inside the pipe.

Here's MFL explained in 8 slides.
No jargon. No textbook language.
Just how it works and what it finds.

Save this if you work in pipeline integrity. 🔖

#PipelineIntegrity #MFL #InlineInspection #ILI #OilAndGas
```

### Slides:

**Slide 1 — HOOK**
```
"You've heard of MFL.
But do you actually know
what happens inside
the pipe?"

[Large bold text on dark background]
```

**Slide 2 — CONTEXT**
```
MFL = Magnetic Flux Leakage

It's the most widely used ILI technology
in the world.

But what does it actually detect?
And how?

Let's break it down.
```

**Slide 3 — HOW IT WORKS**
```
The MFL tool carries powerful magnets.

These magnets saturate the pipe wall
with a magnetic field.

When the wall is intact →
the field flows smoothly.

When there's metal loss →
the field "leaks" out.

Sensors on the tool measure that leakage.

[Simple diagram: magnet → pipe wall → flux leakage at defect]
```

**Slide 4 — WHAT IT FINDS**
```
MFL detects:

✓ Internal corrosion
✓ External corrosion
✓ Gouges and dents with metal loss
✓ Manufacturing defects
✓ General wall thinning

Each defect creates a different
signal pattern.
```

**Slide 5 — WHAT IT DOESN'T FIND**
```
MFL is NOT designed for:

✗ Cracks (use UTCD for that)
✗ Coating condition (use EMAT)
✗ Precise wall thickness (use UTWM)

No single tool does everything.
That's why tool selection matters.
```

**Slide 6 — WHY IT MATTERS**
```
Corrosion is the #1 cause
of pipeline failures worldwide.

MFL catches it before
it becomes a leak.

One inspection run can map
thousands of corrosion features
across hundreds of kilometers.
```

**Slide 7 — PRACTICAL INSIGHT**
```
But here's what most people miss:

MFL accuracy depends on:
→ Pipeline cleanliness
→ Tool speed control
→ Magnetization level
→ Sensor calibration

A dirty pipeline = noisy data.
Clean first. Inspect second.
```

**Slide 8 — SOFT CTA**
```
Pipeline inspection isn't magic.
It's physics + engineering + experience.

Follow for more ILI breakdowns
explained without the jargon.

[Company logo]
```

---

## CAROUSEL 2: "5 Pipeline Defects That Grow Between Inspections"
**Pillar:** Problem Awareness | **Tool:** UTWM + UTCD | **Slides:** 8

### Caption:
```
Your last ILI run was 3 years ago.
Everything looked fine.

But defects don't stop growing
because you stopped looking.

Here are 5 defects that get worse
between inspection intervals.

And what to do about it.

#PipelineIntegrity #Corrosion #AssetIntegrity #ILI #InlineInspection
```

### Slides:

**Slide 1 — HOOK**
```
"Your pipeline passed
its last inspection.

But that was 3 years ago.

Here's what's been growing
since then."

[Dark background, yellow warning accent]
```

**Slide 2 — CONTEXT**
```
ILI gives you a snapshot in time.

Between inspections, defects
don't pause. They grow.

Corrosion rates. Crack propagation.
Pressure cycles. Temperature changes.

The pipe you inspected 3 years ago
is not the same pipe today.
```

**Slide 3 — DEFECT 1: INTERNAL CORROSION**
```
#1: Internal Corrosion

Growth rate: 0.1 - 0.5 mm/year
(sometimes faster in wet gas or CO2)

In 5 years, a minor feature
can become a critical defect.

→ UTWM tracks wall thickness
   with sub-millimeter accuracy.
```

**Slide 4 — DEFECT 2: SCC (Stress Corrosion Cracking)**
```
#2: Stress Corrosion Cracking

SCC is silent. It doesn't leak
until it ruptures.

Growth depends on:
• Soil conditions
• Coating condition
• Operating stress

→ UTCD is designed specifically
   to detect and size SCC.
```

**Slide 5 — DEFECT 3: FATIGUE CRACKS**
```
#3: Fatigue Cracks

Every pressure cycle
is a stress cycle.

Over thousands of cycles,
cracks initiate and grow
— especially at seam welds.

→ Regular ILI with crack detection
   catches them before they propagate.
```

**Slide 6 — DEFECT 4: EXTERNAL CORROSION**
```
#4: External Corrosion
(under coating disbondment)

When coating fails,
the pipe is exposed.

CP (cathodic protection) shielding
makes it worse.

→ EMAT can detect coating
   disbondment without couplant.
→ MFL measures the resulting
   metal loss.
```

**Slide 7 — DEFECT 5: DENT + CORROSION INTERACTION**
```
#5: Dent + Metal Loss Combo

A dent alone might be acceptable.
Corrosion alone might be acceptable.

Together? The interaction
can be critical.

→ Combined MFL + geometry tools
   identify these interaction threats.
```

**Slide 8 — TAKEAWAY + CTA**
```
The question isn't:
"Did the pipeline pass last time?"

The question is:
"What has changed since?"

Re-inspection intervals matter.
Tool selection matters.
Data quality matters.

Save this for your next
integrity review. 🔖

[Company logo]
```

---

## CAROUSEL 3: "UTCD vs. MFL — When to Use Which"
**Pillar:** Product/Tool | **Tools:** UTCD + MFL | **Slides:** 8

### Caption:
```
"Should I use MFL or UTCD?"

This is one of the most common
questions in pipeline integrity.

The answer isn't one or the other.
It's about knowing what you're looking for.

Here's a simple breakdown.

#ILI #UTCD #MFL #PipelineIntegrity #CrackDetection
```

### Slides:

**Slide 1 — HOOK**
```
"MFL or UTCD?

Wrong question.

Here's the right one."

[Bold text, split-screen design]
```

**Slide 2 — THE RIGHT QUESTION**
```
Don't ask: "Which tool is better?"

Ask: "What threats am I looking for?"

MFL and UTCD detect
different things.

Choosing the wrong tool
means missing real defects.
```

**Slide 3 — MFL: WHAT IT DOES**
```
MFL is built for METAL LOSS.

✓ Internal corrosion
✓ External corrosion
✓ Gouges
✓ General wall thinning

Think: "How much wall is left?"

MFL answers that question.
```

**Slide 4 — UTCD: WHAT IT DOES**
```
UTCD is built for CRACKS.

✓ Stress corrosion cracking (SCC)
✓ Fatigue cracks
✓ Seam weld anomalies
✓ Hook cracks

Think: "Are there cracks growing?"

UTCD answers that question.
```

**Slide 5 — SIDE BY SIDE**
```
         MFL          UTCD
         ───          ────
Detects: Metal loss   Cracks
Method:  Magnetic     Ultrasonic
Best for: Corrosion   SCC/fatigue
Couplant: No          Yes (liquid)
Pipeline: Oil/gas     Liquid lines

Different physics.
Different purpose.
Both essential.
```

**Slide 6 — WHEN YOU NEED BOTH**
```
Some pipelines need both.

If your threat assessment shows:
→ Corrosion AND crack risk
→ High-consequence area
→ Aging infrastructure
→ Prior SCC history

Run MFL for metal loss.
Run UTCD for cracks.

Complete picture.
```

**Slide 7 — THE REAL INSIGHT**
```
The biggest mistake in ILI?

Running the wrong tool
and thinking you're covered.

MFL won't find cracks.
UTCD won't map corrosion.

Tool selection starts with
threat assessment — not habit.
```

**Slide 8 — CTA**
```
Good inspection starts
with the right question.

Not "which tool?"
But "what threat?"

Follow for more ILI breakdowns.

[Company logo]
```

---

# PART 8: POSTING STRATEGY

## Weekly Schedule

| Day | Type | Pillar | Format | Example |
|-----|------|--------|--------|---------|
| **Tuesday** | Educational / Problem | Pillar 1 or 2 | Carousel | "How MFL Actually Works" |
| **Thursday** | Tool / Industry | Pillar 3 or 4 | Carousel or Single Post | "UTCD vs. MFL Comparison" |
| **Saturday/Sunday** | Insight / Event | Pillar 4 or 5 | Single Post | Industry observation |

## Posting Times (Target Audience Timezone)

| Audience Region | Best Times |
|----------------|------------|
| Middle East (GCC) | 8:00-9:00 AM GST, 12:00 PM GST |
| North America | 7:00-8:00 AM CST, 12:00 PM CST |
| Europe | 8:00-9:00 AM CET, 5:00 PM CET |

**Rule:** Post → then engage in comments for 30-60 minutes. This matters more than the post itself.

## Monthly Content Mix

| Week | Tuesday | Thursday | Weekend |
|------|---------|----------|---------|
| Week 1 | Educational carousel | Tool breakdown | Industry insight |
| Week 2 | Problem awareness carousel | Industry trend post | Event/brand post |
| Week 3 | Educational carousel | Tool comparison | Industry insight |
| Week 4 | Problem awareness carousel | Tool deep-dive | Special day / milestone |

---

# PART 9: SPECIAL DAYS SYSTEM

## How It Works

```
INPUT: Special days list (global + regional)
  ↓
FILTER: Is this relevant to pipeline/energy/engineering?
  ↓
  YES → Generate post connecting day to our industry
  NO  → Skip (don't force irrelevant content)
  ↓
OUTPUT: Drafted post ready for approval
```

## Relevance Matching Rules

| Day Category | Match To | Example Post |
|-------------|----------|--------------|
| Engineering / Science days | Our technical work | "World Engineering Day → the engineers behind ILI tools" |
| Environmental days | Pipeline integrity prevents spills | "World Environment Day → how inspection prevents pipeline leaks" |
| Safety days | Pipeline safety culture | "Safety Day → what 'safe' means in pipeline operations" |
| National days (regional) | Local operations, team | "UAE National Day → proud to support energy infrastructure in the region" |
| Energy days | Industry relevance | "World Energy Day → pipelines carry 70% of the world's energy" |
| Random holidays | SKIP | Don't force "Happy Valentine's Day from your pipeline inspector" |

## Annual Special Days Calendar (Pre-loaded)

```
January   → None typical (PPIM conference prep content)
February  → Engineers Week
March     → World Engineering Day (Mar 4), World Water Day (Mar 22)
April     → World Day for Safety & Health at Work (Apr 28)
May       → International Workers' Day (May 1)
June      → World Environment Day (Jun 5)
July      → —
August    → —
September → Saudi National Day (Sep 23)
October   → World Energy Day (Oct 22)
November  → World Quality Day (2nd Thu)
December  → UAE National Day (Dec 2)
```

---

# PART 10: AUTOMATION FLOW

## Recommended Tools (Free-First Approach)

| Function | Free Tool | Paid Upgrade |
|----------|-----------|-------------|
| Content Calendar & Tracking | **Google Sheets** | Notion, Airtable |
| Carousel Design | **Canva Free** | Canva Pro ($13/mo) |
| Post Scheduling | **Buffer Free** (3 channels) | Buffer Essentials ($6/mo) |
| AI Research & Writing | **Claude Code** (this system) | — |
| Image Generation | **Canva** / **Google Slides** | Figma |
| Analytics | **LinkedIn Native Analytics** | Shield App ($8/mo) |
| Approval Workflow | **Google Sheets + Comments** | Notion |
| Hashtag Research | **LinkedIn search** | Hashtagify |

## Google Sheets Content Tracker — Structure

### Sheet 1: Content Calendar

| Column | Purpose |
|--------|---------|
| Post ID | Unique ID (e.g., POST-2026-W15-01) |
| Week | Week number |
| Date | Planned publish date |
| Pillar | Educational / Problem / Product / Industry / Event |
| Topic | Post topic |
| Tool Link | Which tool/service it connects to |
| Type | Carousel / Single Post / Technical |
| Hook | First 2 lines |
| Status | IDEA → DRAFTED → DESIGNED → APPROVED → POSTED |
| Caption | Full post text |
| Slides | Link to carousel file (if applicable) |
| Designed? | Y/N |
| Approved By | Name |
| Posted Date | Actual post date |
| Post URL | LinkedIn URL after posting |

### Sheet 2: Performance Tracking

| Column | Purpose |
|--------|---------|
| Post ID | Link to Calendar |
| Impressions | From LinkedIn analytics |
| Reactions | Likes, celebrates, etc. |
| Comments | Number of comments |
| Shares | Number of reposts |
| Engagement Rate | (Reactions + Comments + Shares) / Impressions |
| Click-throughs | If applicable |
| Top Comment Theme | What resonated |
| Notes | Learnings |

### Sheet 3: Special Days

| Column | Purpose |
|--------|---------|
| Date | Special day date |
| Name | Day name |
| Region | Global / UAE / KSA / US / Europe |
| Relevant? | Y/N |
| Connection | How it links to our industry |
| Status | SKIP / DRAFT / POSTED |

---

## Content Production Workflow

```
WEEK -2: PLANNING
  │
  ├── Review upcoming dates & events
  ├── Check industry news for trending topics
  ├── Select 3 topics from content pillars
  └── Add to Google Sheets as IDEA
  │
WEEK -1: CREATION
  │
  ├── Write captions + carousel content (Claude Code)
  ├── Design carousels in Canva
  ├── Update status → DRAFTED → DESIGNED
  └── Submit for approval
  │
POST WEEK: PUBLISH
  │
  ├── Approved → Schedule in Buffer
  ├── Post goes live
  ├── Engage in comments 30-60 min after
  ├── Update status → POSTED
  └── Add post URL
  │
WEEK +1: REVIEW
  │
  ├── Pull analytics
  ├── Update Performance sheet
  ├── Note what worked / didn't
  └── Feed insights into next cycle
```

---

# PART 11: CONTENT GENERATION LOGIC

## For Each Post, Follow This Process:

```
STEP 1: PICK TOPIC
  │
  ├── From content pillar rotation
  ├── From trending industry news
  └── From special days calendar
  │
STEP 2: MATCH WITH TOOL/SERVICE
  │
  ├── Corrosion topic → MFL or UTWM
  ├── Crack topic → UTCD
  ├── Gas pipeline → EMAT
  ├── Data quality → Cleaning tools
  └── General → Company capabilities
  │
STEP 3: DEFINE ANGLE
  │
  ├── Educational: "Here's how it works"
  ├── Problem: "Here's what goes wrong"
  ├── Insight: "Here's what's changing"
  └── Human: "Here's who we are"
  │
STEP 4: GENERATE
  │
  ├── Write hook (must work in <210 characters)
  ├── Write carousel slides OR post body
  ├── Write caption
  ├── Select hashtags (3-5)
  └── Define CTA (question or save prompt)
```

## Topic-to-Tool Matching Table

| If Topic Involves... | Connect To... | Angle |
|---------------------|--------------|-------|
| Corrosion (internal) | MFL, UTWM | Problem → Tool solution |
| Corrosion (external) | MFL, EMAT | Problem → Detection method |
| Cracks (SCC) | UTCD | Educational → How UTCD finds SCC |
| Cracks (fatigue) | UTCD | Problem → Pressure cycling risk |
| Coating failure | EMAT | Technical → Why EMAT works without couplant |
| Data quality | Cleaning Tools | Educational → Clean first, inspect second |
| Wall thickness | UTWM | Technical → Precision measurement |
| Pipeline failure | Any relevant tool | Problem → Prevention message |
| AI/technology trend | General | Insight → Industry perspective |
| Hydrogen pipelines | EMAT, General | Insight → Future challenges |
| Unpiggable lines | Cleaning + ILI | Problem → Solutions available |

---

# PART 12: CONTINUOUS IMPROVEMENT LOOP

## Monthly Review Process

```
┌─────────────────────────────────────────────┐
│           MONTHLY REVIEW CYCLE              │
│                                             │
│  1. COLLECT DATA                            │
│     • Export LinkedIn analytics             │
│     • Update Performance sheet              │
│     • Calculate engagement rates            │
│                                             │
│  2. ANALYZE PATTERNS                        │
│     • Top 3 posts: why did they work?       │
│     • Bottom 3 posts: what missed?          │
│     • Best day/time combinations            │
│     • Best pillar performance               │
│     • Carousel vs. single post performance  │
│                                             │
│  3. IDENTIFY ACTIONS                        │
│     • Double down on winning topics         │
│     • Adjust underperforming pillars        │
│     • Test new hook formulas                │
│     • Refine posting times                  │
│                                             │
│  4. UPDATE SYSTEM                           │
│     • Update topic priority list            │
│     • Adjust pillar % if needed             │
│     • Add new topics from research          │
│     • Remove topics that don't resonate     │
│                                             │
│  5. PLAN NEXT MONTH                         │
│     • Pre-select 8-12 topics               │
│     • Assign to calendar slots              │
│     • Flag special days                     │
│     • Set improvement hypothesis            │
│                                             │
└─────────────────────────────────────────────┘
```

## Key Metrics to Track

| Metric | Target | Action If Below |
|--------|--------|----------------|
| Impressions per post | 1,000+ (growing monthly) | Check hooks, posting times, hashtags |
| Engagement rate | 3-5% | Improve CTAs, ask better questions |
| Comments per post | 5+ | End with stronger discussion prompts |
| Follower growth | 2-5% monthly | Increase posting frequency, engage more |
| Carousel completion rate | 40%+ slide views | Improve slide hooks, reduce slides |
| Save rate | 1%+ | Make content more reference-worthy |

## Quarterly Strategy Review

Every 3 months, review:

1. **Pillar performance** — Is one pillar consistently outperforming? Shift % allocation.
2. **Topic saturation** — Are we repeating topics? Refresh with new research.
3. **Audience growth** — Are we attracting the right people? Check follower profiles.
4. **Sales alignment** — Is content supporting the sales team? Get feedback.
5. **Competitive positioning** — What are competitors posting? Where's our gap?

---

# PART 13: WHAT NOT TO DO vs. WHAT WORKS

## Content Quality Checklist (Before Every Post)

| Check | Pass? |
|-------|-------|
| Hook works in under 210 characters? | ☐ |
| Written in simple, clear language? | ☐ |
| No banned words/phrases used? | ☐ |
| Connected to a real tool or capability? | ☐ |
| Provides actual value (not just promotion)? | ☐ |
| Has a clear CTA or discussion prompt? | ☐ |
| Formatted for mobile (short lines, spacing)? | ☐ |
| 3-5 relevant hashtags? | ☐ |
| Would an integrity engineer actually save this? | ☐ |

## The 80/20 Content Rule

```
80% VALUE
├── Educational content
├── Problem explanations
├── Industry insights
├── Technical breakdowns
└── Honest tool comparisons

20% BRAND
├── Company milestones
├── Event presence
├── Team spotlights
└── Soft product mentions
```

---

# QUICK START: FIRST 4 WEEKS

## Week 1
- **Tue:** Carousel — "How MFL Actually Works" (Educational)
- **Thu:** Single Post — "AI in pipeline inspection — hype vs. reality" (Industry)
- **Sat:** Single Post — Industry observation on corrosion challenge

## Week 2
- **Tue:** Carousel — "5 Defects That Grow Between Inspections" (Problem)
- **Thu:** Carousel — "UTCD vs. MFL — When to Use Which" (Product)
- **Sat:** Single Post — Team spotlight or event prep

## Week 3
- **Tue:** Carousel — "What EMAT Detects" (Educational)
- **Thu:** Single Post — "The 40% unpiggable pipeline problem" (Problem)
- **Sat:** Single Post — Industry trend or special day

## Week 4
- **Tue:** Carousel — "Why Cleaning Before ILI Changes Everything" (Educational)
- **Thu:** Carousel — "Pipeline Cracks Explained: SCC vs. Fatigue" (Educational)
- **Sat:** Single Post — Monthly recap or brand post

---

*System designed for: B2B pipeline inspection / ILI company*
*Goal: Build authority + support sales through educational LinkedIn content*
*Built with: Marketing Ideas + LinkedIn Content + Marketing Psychology + Social Content skills*

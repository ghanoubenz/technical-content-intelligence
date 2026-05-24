const ExcelJS = require('exceljs');
const path = require('path');

const NAVY = 'FF0B1526';
const BLUE = 'FF1456A0';
const LIGHT = 'FFF0F2F6';
const STEEL = 'FF7AA3D6';
const RULE = 'FF1B3A66';
const WHITE = 'FFFFFFFF';
const TEXT = 'FF0B1526';
const MUTED = 'FF5A6B7E';

const wb = new ExcelJS.Workbook();
wb.creator = 'ACME Integrity Strategy V4';
wb.created = new Date();

// ---------- Helpers ----------
const fillSolid = (color) => ({ type: 'pattern', pattern: 'solid', fgColor: { argb: color } });
const border = (color = RULE) => ({ top: { style: 'thin', color: { argb: color } }, left: { style: 'thin', color: { argb: color } }, bottom: { style: 'thin', color: { argb: color } }, right: { style: 'thin', color: { argb: color } } });
const setRow = (ws, rowIdx, values, opts = {}) => {
  const row = ws.getRow(rowIdx);
  values.forEach((v, i) => { row.getCell(i + 1).value = v; });
  if (opts.fill) row.eachCell((c) => { c.fill = fillSolid(opts.fill); });
  if (opts.font) row.eachCell((c) => { c.font = opts.font; });
  if (opts.align) row.eachCell((c) => { c.alignment = { ...opts.align, wrapText: true }; });
  if (opts.border) row.eachCell((c) => { c.border = border(opts.border === true ? RULE : opts.border); });
  if (opts.height) row.height = opts.height;
  return row;
};
const headerStyle = { fill: NAVY, font: { name: 'Calibri', size: 11, bold: true, color: { argb: WHITE } }, align: { vertical: 'middle', horizontal: 'left' }, height: 28 };
const sectionStyle = { fill: BLUE, font: { name: 'Calibri', size: 13, bold: true, color: { argb: WHITE } }, align: { vertical: 'middle', horizontal: 'left' }, height: 32 };
const titleStyle = { fill: NAVY, font: { name: 'Calibri', size: 22, bold: true, color: { argb: WHITE } }, align: { vertical: 'middle', horizontal: 'left' }, height: 56 };

// ============================================================
// SHEET 1 — STRATEGY DOCTRINE
// ============================================================
const s1 = wb.addWorksheet('Strategy', { properties: { tabColor: { argb: BLUE } }, views: [{ showGridLines: false }] });
s1.columns = [{ width: 4 }, { width: 38 }, { width: 90 }];

let r = 1;
s1.mergeCells(r, 1, r, 3);
setRow(s1, r, ['', '', ''], titleStyle);
s1.getCell(r, 1).value = '  ACME Integrity 2026 — LinkedIn Content Strategy V4';
r += 2;

s1.mergeCells(r, 1, r, 3);
setRow(s1, r, ['  1. Strategic Frame'], sectionStyle);
r++;
const frameRows = [
  ['Audience reality', 'Integrity engineers don\'t engage publicly — bosses, vendors, and regulators watch. The metric that matters is save rate and DM rate, not likes. We write for the lurker who screenshots a slide and names ACME Integrity in a tool selection meeting 6 months later.'],
  ['Not education', 'We are not "educating" the market. Educators are commodities. We take positions defensible by a senior ILI engineer in a room of skeptics.'],
  ['Compete on judgment', 'Every vendor claims MFL/UT/Caliper. Almost none publish how they think about tool selection, defect interaction, or sizing limits. That gap is our category.'],
  ['Trade in specificity', '"High resolution" is marketing noise. "2.4 mm axial sample spacing, sensor pitch 8 mm" is a credential. Numbers, codes, and named mechanisms travel — adjectives don\'t.'],
  ['Product is the proof', 'A post that walks through how we handled SCC in a 30" sour line in KSA does more selling than ten posts saying we do EMAT.']
];
frameRows.forEach(([k, v]) => {
  setRow(s1, r, ['', k, v], { font: { name: 'Calibri', size: 11 }, align: { vertical: 'top', horizontal: 'left' }, height: 60 });
  s1.getCell(r, 2).font = { name: 'Calibri', size: 11, bold: true, color: { argb: BLUE } };
  r++;
});
r++;

s1.mergeCells(r, 1, r, 3);
setRow(s1, r, ['  2. Audience Map'], sectionStyle);
r++;
setRow(s1, r, ['', 'Reader', 'Reads for / Trigger to act'], headerStyle);
r++;
const audience = [
  ['Integrity engineer (IC)', 'Tool physics, defect mechanics, sizing limits, code references → saves the post; cites it in internal review'],
  ['Integrity / inspection manager', 'Decision frameworks, tool selection logic, risk language → forwards to IC; books a call'],
  ['Pipeline operations / pigging engineer', 'Cleaning, geometry, run feasibility, tethered/unpiggable → DMs about a specific line'],
  ['Asset / VP-level', 'Reinspection interval, MAOP exposure, audit defensibility → asks team "have we looked at ACME Integrity"'],
  ['Competitor analyst / consultant', 'Anything we publish → free distribution to operators']
];
audience.forEach(([k, v]) => {
  setRow(s1, r, ['', k, v], { font: { name: 'Calibri', size: 11 }, align: { vertical: 'top', horizontal: 'left' }, height: 44, border: true });
  s1.getCell(r, 2).font = { name: 'Calibri', size: 11, bold: true, color: { argb: TEXT } };
  r++;
});
r++;

s1.mergeCells(r, 1, r, 3);
setRow(s1, r, ['  3. Five Content Pillars'], sectionStyle);
r++;
setRow(s1, r, ['', 'Pillar', 'Scope / Mix'], headerStyle);
r++;
const pillars = [
  ['Tool Physics & Limits (30%)', 'What MFL/UT/UTCD/EMAT/Caliper actually see and miss. Sample pitch, POD curves, sizing tolerance, blind spots.'],
  ['Defect Forensics (25%)', 'Named mechanisms — SCC, SSWC, HIC, hook cracks, mid-wall lams, dent-with-ML interaction. What killed a real line; what tool would have caught it.'],
  ['Inspection Planning & Cleaning (15%)', 'Cleaning trains, multi-diameter, reduced-bore, AGM placement, speed control. The unsexy work that decides whether the run was worth the money.'],
  ['Data Confidence & Reporting (15%)', 'API 1163 L1/L2/L3, POD vs POI vs sizing accuracy, ILI-to-dig correlation, sizing bands, why two vendors disagree on the same anomaly.'],
  ['Integrity Decisions (15%)', 'RSTRENG/B31G, API 579, 49 CFR 192/195 response timelines, RBI inputs, reinspection interval math, MAOP exposure.']
];
pillars.forEach(([k, v]) => {
  setRow(s1, r, ['', k, v], { font: { name: 'Calibri', size: 11 }, align: { vertical: 'top', horizontal: 'left' }, height: 50, border: true });
  s1.getCell(r, 2).font = { name: 'Calibri', size: 11, bold: true, color: { argb: BLUE } };
  r++;
});
r++;

s1.mergeCells(r, 1, r, 3);
setRow(s1, r, ['  4. Monthly Themes (May–Dec 2026)'], sectionStyle);
r++;
setRow(s1, r, ['Month', 'Theme', 'Strategic Intent'], headerStyle);
r++;
const themes = [
  ['May', 'The Question Before the Tool', 'Reframe tool selection as a defect-taxonomy problem. Establish ACME Integrity as the vendor that thinks before quoting.'],
  ['Jun', 'When the Tool Lies', 'POD/POI honesty, sizing band reality, blind spots. Builds trust by admitting limits competitors won\'t.'],
  ['Jul', 'Cleaning Decides Everything', 'Most ILI runs fail on cleanliness, not technology. Owns the planning conversation operators wish vendors had earlier.'],
  ['Aug', 'The Sour Side', 'HIC, SSC, SCC, EMAT physics, UTCD coverage. Targets KSA/GCC sour-service operators directly.'],
  ['Sep', 'Geometry & the Unpiggable', 'Multi-diameter, reduced bore, tight bends, tethered tools. Speaks to the lines no one else wants.'],
  ['Oct', 'Multi-Tech Reality', 'When one tool is not enough — combined MFL+UT, MFL+EMAT, sequencing logic. Justifies higher-spec scope.'],
  ['Nov', 'The Numbers That Matter', 'Corrosion growth from repeat runs, MAOP, reinspection intervals, RBI inputs. Aimed at managers/VPs.'],
  ['Dec', 'Plan 2027 Like You Mean It', 'Annual integrity planning, budget cycles, 5-year lookback, audit defensibility. Drives Q1 pipeline.']
];
themes.forEach(([m, t, intent]) => {
  setRow(s1, r, [m, t, intent], { font: { name: 'Calibri', size: 11 }, align: { vertical: 'top', horizontal: 'left' }, height: 44, border: true });
  s1.getCell(r, 1).font = { name: 'Calibri', size: 11, bold: true, color: { argb: BLUE } };
  s1.getCell(r, 2).font = { name: 'Calibri', size: 11, bold: true, color: { argb: TEXT } };
  r++;
});
r++;

s1.mergeCells(r, 1, r, 3);
setRow(s1, r, ['  5. Weekly Cadence'], sectionStyle);
r++;
const cadence = [
  ['Tue — Position post', 'A claim, a framework, or a contrarian take. Single image or text-only. The piece that makes someone screenshot.'],
  ['Wed — Technical carousel', '6–7 slides, IBM/BCG corporate theme. One mechanism, one decision, or one comparison done deeply.'],
  ['Thu — Field artifact', 'A photograph from a workshop, launcher, or dig site. One paragraph caption. Highest organic reach because it can\'t be faked.'],
  ['Mon / Fri — silent', 'Engineering audiences don\'t read marketing on Mondays or Fridays. Don\'t burn content on dead air.']
];
cadence.forEach(([k, v]) => {
  setRow(s1, r, ['', k, v], { font: { name: 'Calibri', size: 11 }, align: { vertical: 'top', horizontal: 'left' }, height: 40, border: true });
  s1.getCell(r, 2).font = { name: 'Calibri', size: 11, bold: true, color: { argb: BLUE } };
  r++;
});
r++;

s1.mergeCells(r, 1, r, 3);
setRow(s1, r, ['  6. What to Avoid (Kill List)'], sectionStyle);
r++;
const kill = [
  '"Did you know..." openers, "In today\'s fast-paced world...", any AI throat-clearing.',
  'Generic safety-month / holiday filler ("Happy Eid from the team") unless it ties to a real integrity theme.',
  '"Proud to announce" tonality.',
  'Stock photos of pipelines at sunset.',
  'Capability lists ("we offer MFL, UT, caliper, geometry").',
  'Carousels where slide 2 is "What is corrosion?" — assume the reader knows.',
  'Anything an HR or social media intern at a competitor could publish.',
  'Emoji in captions.',
  'More than one CTA per post.',
  '"Drop a 🔥 in the comments if you agree."'
];
kill.forEach((k) => {
  s1.mergeCells(r, 2, r, 3);
  setRow(s1, r, ['', '— ' + k], { font: { name: 'Calibri', size: 11, color: { argb: TEXT } }, align: { vertical: 'top', horizontal: 'left' }, height: 22, border: RULE });
  r++;
});

// ============================================================
// SHEET 2 — CALENDAR
// ============================================================
const s2 = wb.addWorksheet('Calendar', { views: [{ showGridLines: false, state: 'frozen', xSplit: 0, ySplit: 1 }] });
s2.columns = [
  { header: '#', key: 'n', width: 5 },
  { header: 'Date', key: 'date', width: 12 },
  { header: 'Day', key: 'day', width: 6 },
  { header: 'Month Theme', key: 'theme', width: 28 },
  { header: 'Pillar', key: 'pillar', width: 26 },
  { header: 'Format', key: 'format', width: 22 },
  { header: 'Target Reader', key: 'reader', width: 22 },
  { header: 'Hook / Headline', key: 'hook', width: 60 },
  { header: 'Full Caption', key: 'caption', width: 90 },
  { header: 'Why It Matters', key: 'why', width: 50 },
  { header: 'GPT Image Prompt', key: 'gpt', width: 90 },
  { header: 'Claude Design Prompt', key: 'claude', width: 90 },
  { header: 'Existing Carousel File', key: 'file', width: 40 },
  { header: 'Webinar Tie-in', key: 'webinar', width: 26 }
];
const hdr = s2.getRow(1);
hdr.eachCell((c) => {
  c.fill = fillSolid(NAVY);
  c.font = { name: 'Calibri', size: 11, bold: true, color: { argb: WHITE } };
  c.alignment = { vertical: 'middle', horizontal: 'left', wrapText: true };
  c.border = border(NAVY);
});
hdr.height = 32;

const posts = [
  {
    n: 1, date: '2026-05-05', day: 'Tue',
    theme: 'May — The Question Before the Tool',
    pillar: 'Tool Physics & Limits',
    format: 'Position post (single image)',
    reader: 'Integrity manager',
    hook: '"High-resolution MFL" is not a specification. Ask for the axial sample spacing in mm. If the vendor pauses, you have your answer.',
    caption: `Three vendors quoted an operator in the GCC last year. All three said "high-resolution MFL." Axial sample spacing came back at 2.0 mm, 3.3 mm, and 5.0 mm.

The 5.0 mm tool would not have resolved the pitting cluster that drove the integrity case. It still met the marketing definition.

The phrase "high-resolution" was useful in 2005. In 2026 it hides a 2.5x range in actual detection capability. Before you accept a quote, ask:

— Axial sample spacing (mm)
— Circumferential sensor pitch (mm)
— Minimum detectable general metal loss at 80% POD
— Sizing tolerance at the wall thickness of YOUR line, not the spec sheet line

If the vendor cannot answer these in writing, you are not buying inspection. You are buying paperwork.`,
    why: 'Gives the integrity manager four exact questions to put in their next RFQ. They will. That is the post working.',
    gpt: `Studio macro photograph of a single MFL sensor head detached on matte black laboratory surface, lit from upper-left with a single soft 60° key light at 5200K, fill from a small silver bounce card, shallow depth of field with sharp focus on the Hall-effect sensor face, pole pieces visible in soft defocus to the right, faint reflection of the sensor on the surface, scale ruler in millimetres along the bottom edge of the frame in soft focus, color palette: cool steel grey, deep navy shadow, single warm amber highlight on the sensor face, no logos, no people, no text, shot on Sony A7R IV with Sigma 105mm f/2.8 macro lens, f/5.6, ISO 200, 4:5 aspect ratio (1080x1350), photorealistic, museum-grade product photography.`,
    claude: `1080x1350 single tile, IBM/BCG corporate theme. Background #0B1526 navy. 6px top accent bar #1456A0. Bottom 80px branding band: small white "ACME Integrity" left, page number "01 / —" right, both in IBM Plex Sans Medium 14pt letter-spacing 0.08em. Main composition: top 35% of canvas — display headline in IBM Plex Serif 48pt bold, color #F0F2F6, line-height 1.1, max width 880px, left aligned, x-margin 100px: "'High-resolution' is not a specification." Below at 380px from top: a 4-column grid 760px wide, each column 180x220px card, 1px border #1B3A66, padding 20px. Each card: small uppercase label in #7AA3D6 IBM Plex Sans 11pt letter-spacing 0.12em ("AXIAL SPACING", "SENSOR PITCH", "POD @ 80%", "SIZING BAND"), then large numeric placeholder in IBM Plex Mono 28pt bold #F0F2F6 ("? mm", "? mm", "?%", "± ?% wt"). Below grid at 720px from top: kicker line in IBM Plex Sans 18pt italic #A8B8CC: "Ask the four questions. The pause is the answer." Subtle vertical 1px rule #1B3A66 separating columns. No icons. No gradients. Single color accent only.`,
    file: '(new build required)',
    webinar: '—'
  },
  {
    n: 2, date: '2026-05-06', day: 'Wed',
    theme: 'May — The Question Before the Tool',
    pillar: 'Defect Forensics',
    format: 'Technical carousel (7 slides)',
    reader: 'Integrity engineer (IC)',
    hook: 'The Defect Decides the Tool — A Decision Tree You Can Defend',
    caption: `Tool selection is a defect-taxonomy problem, not a procurement problem.

Slide outline:
1. Cover. "Most tool selection failures start before the tool is chosen."
2. The wrong question: "Which tool is best?" — crossed out. The right question: "Which defect mechanism dominates this line, at this age, in this service?"
3. Mechanism → Tool table. General ML / pinhole pitting → MFL high-res. Mid-wall lamination → UT or UTCD. Axial cracking, SCC, fatigue → EMAT or UTCD. Circumferential cracking → circumferential MFL or EMAT-C. Dents and ovality → caliper / IMU. Sour-service HIC → UT-based.
4. The trap. MFL is blind to tight planar cracks regardless of resolution. A "clean MFL run" on an SCC-susceptible line is not a clean line. It is an unmeasured line.
5. Service context overrides defect probability. Sour service + ERW seam = SSWC + hook cracks. Dry gas = MFL fine; UT needs gel coupling or UTCD. High-pH cathodic + coating disbondment = SCC colonies on the 6 o'clock.
6. The five-question screen. Service fluid? Seam type? Coating + CP history? Age + previous repairs? Failure mechanisms in this basin? Answer those before requesting a quote.
7. Closer. "If the vendor recommends a tool before asking these five questions, they are selling inventory, not inspection."

The five-question screen on slide 6 takes 10 minutes per line and changes which tool is on the launcher. Use it before the next RFQ.`,
    why: 'The IC walks away with a defendable framework they can present to their manager. That is how vendors become trusted.',
    gpt: `Top-down architectural diagram aesthetic, dark navy #0B1526 background, faint blueprint grid at 5% opacity, six small isometric line drawings of pipeline defects arranged left-to-right along the bottom 15% of the frame in pale steel-blue line art #7AA3D6: (1) hemispherical pit cluster, (2) axial planar crack, (3) shallow dent with adjacent metal loss, (4) mid-wall lamination cross-section, (5) SCC colony fingerprint pattern, (6) dent-on-girth-weld interaction. Each icon 80x80px, 3px stroke, no fill. Above them: empty negative space for headline. No people, no logos, no color other than navy and pale steel-blue. 1080x1350.`,
    claude: `7-slide carousel, 1080x1350 each. IBM/BCG corporate theme. Slide-background rotation: 1 navy #0B1526, 2 light gray #F0F2F6, 3 white, 4 navy, 5 light gray, 6 white, 7 blue #1456A0. Every slide: 6px top accent bar #1456A0 (white on the blue slide), bottom 80px branding band with "ACME Integrity" wordmark and slide counter "n / 7" in IBM Plex Sans Medium 13pt. Typography: headlines IBM Plex Serif 42pt bold; body IBM Plex Sans 18pt; data and tables IBM Plex Mono 16pt. Slide 3 (mechanism→tool table): 5-row table, 1px hairline rules #1B3A66 on light bg / #A8B8CC on dark, left column "Defect Mechanism" bold, right column "Recommended Primary Tool" mono, no zebra stripes, no shadows. Slide 5: split-screen 50/50, left half listing service contexts in a vertical stack, right half listing resulting mechanisms, connected by a single thin horizontal arrow #1456A0 between paired items. Slide 7 closer: large centered serif quote, 56pt, white on blue, max width 720px, em-dash attribution "— ACME Integrity Integrity Engineering" in 16pt sans below at 60% opacity. No icons except the small defect icons on slide 1. No gradients, no drop shadows, no rounded corners on any container.`,
    file: '(new build required)',
    webinar: '—'
  },
  {
    n: 3, date: '2026-05-07', day: 'Thu',
    theme: 'May — The Question Before the Tool',
    pillar: 'Inspection Planning & Cleaning',
    format: 'Field artifact (single photo)',
    reader: 'Pipeline operations / pigging engineer',
    hook: 'Cleaning is not a step before inspection. Cleaning is the inspection\'s first sensor.',
    caption: `This is what came back on the cleaning train before the UTCD run on a 30" sour line in the Eastern Province last month. Twelve kilograms of black iron sulfide scale, paraffin, and produced solids — and this is run number four of six.

If we had launched the tool after run two, the sensor stand-off would have been compromised across roughly 18% of the line. The data would have looked like the tool was failing. The tool was not the problem. The line was not ready.

Cleaning is not a step before inspection. Cleaning is the inspection's first sensor.`,
    why: 'Operations engineers know this in their bones and will share it internally. Builds trust faster than any technical claim because it shows we understand their reality.',
    gpt: `Documentary photograph, mid-distance, of a steel cleaning pig retrieval tray in a Saudi Aramco-style pig receiver bay, the tray covered in dense black iron-sulfide scale mixed with brown waxy paraffin and dark grey produced solids, the cleaning pig itself partially visible at the back of the tray with worn yellow polyurethane discs streaked black, harsh midday desert light through an open bay door at frame-left producing a hard shadow across the tray, dust particles visible in the light shaft, concrete floor, faded yellow safety lines, no people in frame, color palette: warm sand, oil-black, faded safety yellow, steel grey, photographic realism, shot on Canon R5 with 35mm f/1.4 at f/5.6, ISO 400, slight handheld feel, 4:5 aspect ratio. No logos, no faces, no text overlays. Frame should feel like it was taken by an inspection engineer on shift, not a marketing photographer.`,
    claude: `(photo-led — no graphic design required. If overlay needed: lower-third translucent navy #0B1526 band at 70% opacity, single line of IBM Plex Sans Medium 16pt white text "RUN 4 OF 6 — 30" SOUR LINE, EASTERN PROVINCE", left-aligned with 40px margin. Otherwise leave the photograph clean.)`,
    file: '(field photo — to be sourced)',
    webinar: '—'
  },
  {
    n: 4, date: '2026-05-12', day: 'Tue',
    theme: 'May — The Question Before the Tool',
    pillar: 'Data Confidence & Reporting',
    format: 'Position post (text-led)',
    reader: 'Integrity manager / VP',
    hook: 'A "clean ILI report" is not evidence the line is clean. It is evidence the tool you ran did not detect anything it was capable of detecting.',
    caption: `Three things that a clean MFL report does not rule out:

1. Tight axial cracks in the seam weld. MFL fields run circumferentially through the wall — they barely see a planar feature aligned with the field. SCC and hook cracks live in this blind spot.

2. Mid-wall laminations from the rolling process. MFL integrates flux through the full wall. A lamination at 50% depth and zero ID/OD signature looks like sound steel.

3. Early-stage SCC colonies under disbonded coating. No mass loss yet. No flux disturbance. A clean report on a high-pH-CP line with disbondment history is a timing problem, not a safety conclusion.

A clean report on the right tool is a strong piece of evidence. A clean report on the wrong tool is a liability with a date stamp on it.

If your last inspection was MFL-only and your line is sour, ERW pre-1980, or has documented coating disbondment, the report you have answers a question you didn't ask.`,
    why: 'Reframes the manager\'s relationship with their own report archive. Generates DMs from people who suddenly want a second opinion on a line.',
    gpt: `Editorial photograph, top-down flat-lay, of a single printed ILI inspection report on a dark walnut conference table, the report cover partly visible with the title obscured, a yellow highlighter and a black fine-liner pen resting beside it, a half-full glass of water with condensation at the upper-right corner casting a soft refraction onto the report, single warm tungsten desk lamp from upper-left producing a long soft shadow across the table, color palette: deep walnut brown, warm cream paper, single yellow highlighter accent, ambient amber, photographic realism, shot on Hasselblad X2D with 55mm at f/4, ISO 200, 4:5 aspect ratio. No logos, no readable text on the report, no people. The image should feel like the moment before a difficult meeting, not after.`,
    claude: `1080x1350 single tile, light gray #F0F2F6 background. 6px top accent bar #1456A0. Headline top-left at 100x140px in IBM Plex Serif 44pt bold #0B1526, max width 880px, line-height 1.1: "A clean report is not proof. It is the absence of a finding by the tool you chose to run." Beneath the headline at 480px from top: three numbered rows, each 880px wide, 1px top border #1B3A66, 32px padding top and bottom. Row format: large numeral "01 / 02 / 03" in IBM Plex Mono 36pt #1456A0 left-aligned in a 100px column; right column contains a 14pt uppercase label in #1456A0 letter-spacing 0.12em ("AXIAL CRACKS IN SEAM"), then below it a 17pt sans body line #0B1526 describing the blind spot in one sentence. Bottom 80px branding band: ACME Integrity wordmark left, "TOOL PHYSICS & LIMITS — 04 / —" right. No icons. No gradients. The whole tile should read like an internal engineering memo, not a social media graphic.`,
    file: '(new build required)',
    webinar: '—'
  }
];

posts.forEach((p, idx) => {
  const row = s2.addRow(p);
  row.eachCell((c) => {
    c.alignment = { vertical: 'top', horizontal: 'left', wrapText: true };
    c.font = { name: 'Calibri', size: 10, color: { argb: TEXT } };
    c.border = border(RULE);
  });
  row.getCell('n').font = { name: 'Calibri', size: 10, bold: true, color: { argb: BLUE } };
  row.getCell('date').font = { name: 'Calibri', size: 10, bold: true };
  row.getCell('pillar').font = { name: 'Calibri', size: 10, bold: true, color: { argb: BLUE } };
  row.getCell('format').font = { name: 'Calibri', size: 10, italic: true };
  row.getCell('hook').font = { name: 'Calibri', size: 11, bold: true, color: { argb: NAVY } };
  if (idx % 2 === 0) row.eachCell((c) => { if (!c.fill || !c.fill.fgColor) c.fill = fillSolid('FFFAFBFD'); });
  row.height = 220;
});

// ============================================================
// SHEET 3 — WEBINARS
// ============================================================
const s3 = wb.addWorksheet('Webinars', { views: [{ showGridLines: false }] });
s3.columns = [{ width: 4 }, { width: 18 }, { width: 50 }, { width: 80 }];
let r3 = 1;
s3.mergeCells(r3, 1, r3, 4); setRow(s3, r3, ['', '', '', ''], titleStyle);
s3.getCell(r3, 1).value = '  Webinars 2026 — Three, no more.';
r3 += 2;

const webinars = [
  ['Q2 — June', 'Sizing You Can Defend: How to Read an ILI Report Like an Auditor',
    `Walks through a real (anonymized) report. POD claim vs. dig correlation, sizing band misuse, where API 1163 L2 ends and L3 begins.
Co-host: senior ACME Integrity data analyst.
Targets: integrity managers preparing for regulator audits.
Execution: LinkedIn Live or Zoom Webinar, 45 min + 15 min Q&A. Two presenters max. Slide deck reused as 10-slide carousel post-webinar. Recording gated behind email; transcript ungated as blog post. Promote with 3 carousels in the 3 weeks prior, no spam.`],
  ['Q3 — September', 'Sour Service & SCC: Why MFL Alone Is a Compliance Risk',
    `EMAT and UTCD physics, real defect catches, KSA case study. Targets ARAMCO/ADNOC supply chain.
Execution: same format as Q2. Closing slide = direct invitation to scope a sour-service line. This is the only post of the year with a hard CTA.`],
  ['Q4 — November', 'Planning 2027: A Workshop on Reinspection Intervals',
    `Working session — operators bring one line, leave with a defensible interval. Limit 30 attendees, application required.
Execution: Zoom (not Live) for breakout-room interactivity. 90 min. ACME Integrity provides a worksheet template (corrosion growth rate, MAOP, last-run findings). Attendees fill it out live. Output: every attendee leaves with a one-page interval justification on their letterhead.
This format generates higher commercial intent than any webinar — you've already worked on their line.`]
];
setRow(s3, r3, ['', 'Slot', 'Title', 'Execution'], headerStyle); r3++;
webinars.forEach(([slot, title, exec]) => {
  setRow(s3, r3, ['', slot, title, exec], { font: { name: 'Calibri', size: 11 }, align: { vertical: 'top', horizontal: 'left' }, height: 130, border: true });
  s3.getCell(r3, 2).font = { name: 'Calibri', size: 11, bold: true, color: { argb: BLUE } };
  s3.getCell(r3, 3).font = { name: 'Calibri', size: 11, bold: true, color: { argb: TEXT } };
  r3++;
});

// ============================================================
// SHEET 4 — CAROUSEL INVENTORY (placeholder for mapping)
// ============================================================
const s4 = wb.addWorksheet('Carousel Inventory', { views: [{ showGridLines: false }] });
s4.columns = [
  { header: '#', key: 'n', width: 5 },
  { header: 'Filename', key: 'f', width: 60 },
  { header: 'Topic / Mechanism', key: 't', width: 40 },
  { header: 'Status', key: 's', width: 20 },
  { header: 'Mapped To Calendar Date', key: 'd', width: 22 },
  { header: 'Notes', key: 'no', width: 50 }
];
const h4 = s4.getRow(1);
h4.eachCell((c) => { c.fill = fillSolid(NAVY); c.font = { name: 'Calibri', size: 11, bold: true, color: { argb: WHITE } }; c.alignment = { vertical: 'middle', horizontal: 'left', wrapText: true }; c.border = border(NAVY); });
h4.height = 28;

const inv = [
  ['UTCD-47-OPTION-B-clean-report-not-proof.html', 'UTCD 47" tool announcement (chosen design)', 'Ready', '', 'IBM/BCG corporate style — use as reference for V4 builds'],
  ['UTCD-47-OPTION-A-detection-is-not-enough.html', 'UTCD 47" tool — alt design', 'Rejected', '—', 'Do not use'],
  ['NEW-TOOL-OPTION-1-one-tool-doesnt-see-everything.html', 'Multi-tech reasoning', 'Reserve', '', 'Possible Oct theme'],
  ['NEW-TOOL-OPTION-2-sour-service-cracking.html', 'Sour service / cracking', 'Reserve', '', 'Possible Aug theme'],
  ['NEW-TOOL-OPTION-3-silent-threats.html', 'Silent threats / SCC', 'Reserve', '', 'Possible Aug theme'],
  ['POST-03 through POST-38 (36 files)', 'Various', 'To be re-audited', '', 'Audit each against V4 monthly themes; relabel pillar; rewrite captions to V4 tone'],
  ['BONUS-B, BONUS-C', 'Bonus carousels', 'To be re-audited', '', 'Same as above'],
  ['06-coating-disbondment through 21-crawler-reaches (16 files)', 'Original plan', 'To be re-audited', '', 'Older format — likely needs design refresh to IBM/BCG theme']
];
inv.forEach((row, i) => {
  const r = s4.addRow({ n: i + 1, f: row[0], t: row[1], s: row[2], d: row[3], no: row[4] });
  r.eachCell((c) => { c.alignment = { vertical: 'top', horizontal: 'left', wrapText: true }; c.font = { name: 'Calibri', size: 10 }; c.border = border(RULE); });
  r.getCell('s').font = { name: 'Calibri', size: 10, bold: true, color: { argb: row[2] === 'Ready' ? BLUE : (row[2] === 'Rejected' ? 'FFB00020' : MUTED) } };
  r.height = 36;
});

// ============================================================
// SHEET 5 — README / HOW TO USE
// ============================================================
const s5 = wb.addWorksheet('Read Me', { views: [{ showGridLines: false }] });
s5.columns = [{ width: 4 }, { width: 110 }];
let r5 = 1;
s5.mergeCells(r5, 1, r5, 2); setRow(s5, r5, [''], titleStyle); s5.getCell(r5, 1).value = '  How to use this workbook'; r5 += 2;
const readme = [
  ['STATUS', 'V4 — first cut. Strategy + 4 fully-spec\'d example posts (May 5, 6, 7, 12) at the new quality bar.'],
  ['NEXT', 'Pending your sign-off on depth/tone, build the remaining ~92 posts (rest of May + Jun–Dec) at this density.'],
  ['SHEETS', 'Strategy: doctrine, audience, pillars, monthly themes, cadence, kill list. Calendar: post-by-post breakdown — 14 columns. Webinars: 3 ideas + execution. Carousel Inventory: existing 42 files to be mapped.'],
  ['DESIGN SYSTEM', 'IBM/BCG corporate — Navy #0B1526, Blue #1456A0, Light gray #F0F2F6, Steel blue #7AA3D6, Hairline rule #1B3A66. Typography: IBM Plex Serif (headlines), IBM Plex Sans (body), IBM Plex Mono (data).'],
  ['CADENCE', '3 posts/week — Tue (position) / Wed (carousel) / Thu (field artifact). Mon and Fri silent.'],
  ['CTA RULE', '70% no CTA, 20% soft CTA in first comment, 10% direct CTA — webinars only.'],
  ['SAVE LOCATION', 'C:\\Outreach\\ACME Integrity-2026-CONTENT-CALENDAR-V4.xlsx — move to OneDrive/Desktop/Files/Events/ if you want.']
];
readme.forEach(([k, v]) => {
  setRow(s5, r5, ['', `${k}  —  ${v}`], { font: { name: 'Calibri', size: 11 }, align: { vertical: 'top', horizontal: 'left' }, height: 38 });
  s5.getCell(r5, 2).font = { name: 'Calibri', size: 11 };
  r5++;
});

// ---------- Save ----------
const out = path.join('C:/Outreach', 'ACME Integrity-2026-CONTENT-CALENDAR-V4.xlsx');
wb.xlsx.writeFile(out).then(() => {
  console.log('Wrote: ' + out);
}).catch((e) => { console.error(e); process.exit(1); });

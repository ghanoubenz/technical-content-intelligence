const ExcelJS = require('exceljs');

const INPUT = 'C:/Outreach/ACME Integrity-2026-CONTENT-CALENDAR-V6.xlsx';
const OUTPUT = 'C:/Outreach/ACME Integrity-2026-CONTENT-CALENDAR-V7-MANAGEMENT.xlsx';

const NAVY = 'FF0B1526';
const BLUE = 'FF1456A0';
const CARBON = 'FF0F62FE';
const LIGHT = 'FFF4F4F4';
const ALT = 'FFFAFBFD';
const WHITE = 'FFFFFFFF';
const GRAY = 'FF525252';
const BORDER = 'FFD6DAE2';
const GREEN = 'FFE8F5E9';
const YELLOW = 'FFFFF8E1';
const RED = 'FFFFEBEE';

const fill = (argb) => ({ type: 'pattern', pattern: 'solid', fgColor: { argb } });
const border = {
  top: { style: 'thin', color: { argb: BORDER } },
  left: { style: 'thin', color: { argb: BORDER } },
  bottom: { style: 'thin', color: { argb: BORDER } },
  right: { style: 'thin', color: { argb: BORDER } },
};

const headerFont = { name: 'Montserrat', bold: true, color: { argb: WHITE }, size: 11 };
const bodyFont = { name: 'Century Gothic', size: 10, color: { argb: 'FF161616' } };
const boldFont = { name: 'Montserrat', bold: true, size: 10, color: { argb: NAVY } };
const whiteTitle = { name: 'Montserrat', bold: true, color: { argb: WHITE }, size: 18 };
const whiteSmall = { name: 'Century Gothic', color: { argb: WHITE }, size: 10 };
const wrap = { vertical: 'top', wrapText: true };
const center = { vertical: 'middle', horizontal: 'center', wrapText: true };

function value(cell) {
  const v = cell.value;
  if (!v) return '';
  if (v.text) return v.text;
  if (v.richText) return v.richText.map((x) => x.text).join('');
  return v;
}

function basePrompt(subject) {
  return `${subject} Create one complete LinkedIn carousel page in consistent 3:4 portrait. ACME Integrity x Carbon style: Montserrat headline, Century Gothic support, strict grid, thin technical rules, ACME Integrity navy #0B1526, ACME Integrity blue #1456A0, Carbon blue #0F62FE, cool gray #F4F4F4. Minimal, client-decision focused. No IBM logo, no fake logos, no emojis. Use real ACME Integrity tool asset only if tool accuracy can be preserved; otherwise use diagrams, cross-sections, or text-only.`;
}

function designDirection(role, visual) {
  return `${role}. Build as client-decision slides, not a technical brochure. 3:4 portrait. Use ACME Integrity fonts: Montserrat + Century Gothic. Keep each slide under 40 words. Mix: tool proof where useful, diagrams for invisible physics, one text-only slide when the insight is strong. Last slide has restrained CTA: acme-integrity.example | info@acme-integrity.example. Visual approach: ${visual}`;
}

const updates = {
  'UTCD': {
    title: 'A Clean ILI Report Is Not Proof of Integrity',
    client: 'A clean report may only prove the selected inspection question was answered.',
    cta: 'Soft CTA in first comment: ask for detection-limit review.',
    visual: 'Use real 47" UTCD photo/render on cover or capability slide. Use crack/report-limit diagrams on middle slides.',
    caption: 'A clean report is only meaningful inside the tool’s detection limits. The operator question: did the inspection method match the credible threat?',
    gpt: basePrompt('UTCD 47 launch: real tool proof plus ultrasonic crack-detection diagrams. Show detection limits and planar crack reflection without making another ACME Integrity technology look weak.'),
    claude: designDirection('7-slide launch carousel', 'cover with real UTCD tool; report-limit slide; crack physics; KSA deployment context; final principle.'),
  },
  'P13': {
    client: 'Operators need to define whether the threat is volumetric loss, planar cracking, or both.',
    cta: 'No CTA. Pure education.',
    visual: 'Cross-section comparison of defect geometry, not technology weakness.',
    caption: 'Metal loss and cracking are different integrity questions. The right inspection plan starts by naming the threat geometry, not by naming a tool.',
    gpt: basePrompt('Show two pipe-wall defect geometries: rounded corrosion pit and thin planar crack. Present as threat definition, not a technology comparison.'),
    claude: designDirection('6-slide threat-definition carousel', 'clean cross-sections, minimal labels, no negative comparison language.'),
  },
  'P04': {
    client: 'Multiple active threats can require one coordinated inspection strategy.',
    cta: 'Soft CTA in first comment: discuss combo run planning.',
    visual: 'Use accurate real tool assets only if available; otherwise show tool-train architecture diagram.',
    caption: 'A combo run is not “more tools.” It is one inspection strategy designed around multiple integrity questions in the same operational window.',
    gpt: basePrompt('Combo inspection strategy: tool-train architecture, one run, multiple integrity answers. Preserve actual tool designs if shown.'),
    claude: designDirection('6-slide strategy carousel', 'decision map first, capability after; avoid cost-only framing.'),
  },
  'P17': {
    client: 'Sour service changes the threat register from corrosion-only to cracking mechanisms.',
    cta: 'Soft CTA in first comment for sour-service threat review.',
    visual: 'H2S mechanism diagrams; do not position one ACME Integrity technology against another.',
    caption: 'H2S environments can create HIC, SOHIC, and SSC. The inspection question is not “corrosion or cracking.” It is whether the campaign covers the sour-service mechanisms present.',
    gpt: basePrompt('Sour service mechanism: hydrogen entering steel, HIC/SOHIC/SSC visualized in pipe wall. No technology attack language.'),
    claude: designDirection('6-slide KSA-relevant education carousel', 'mechanism first, decision impact second, ACME Integrity capability last.'),
  },
  'P01': {
    client: 'Disbondment tells operators where future corrosion or SCC can develop.',
    cta: 'No CTA.',
    visual: 'Coating/steel cross-sections and one text-only insight slide.',
    caption: 'Coating disbondment is not a defect today. It is a future defect location because it creates a shielded environment against bare steel.',
    gpt: basePrompt('Coating disbondment cross-section: coating lifted from steel, trapped moisture, CP shielding, early corrosion conditions.'),
    claude: designDirection('6-slide blind-spot carousel', 'cover visual, mechanism sequence, text-only insight, EMAT concept without invented tool body.'),
  },
  'P07': {
    client: 'SCC risk grows quietly, so inspection planning must account for silent threats.',
    cta: 'No CTA.',
    visual: 'Branching crack and disbonded coating diagrams.',
    caption: 'SCC does not announce itself. The operator decision is whether the inspection plan includes technology designed for crack-like features.',
    gpt: basePrompt('Stress corrosion cracking beneath coating: fine branching cracks, no obvious external warning, precise engineering cross-section.'),
    claude: designDirection('6-slide silent-threat carousel', 'slow reveal from condition to consequence to decision.'),
  },
  'P09': {
    client: 'Velocity is part of measurement quality, not just operations scheduling.',
    cta: 'No CTA.',
    visual: 'Speed vs sampling/resolution diagram; avoid “tool misses” drama.',
    caption: 'ILI velocity is a measurement parameter. The right speed range protects data quality and reduces the chance of compromised coverage.',
    gpt: basePrompt('ILI speed control concept: sensor sampling density at controlled velocity, bypass/speed-control diagram, no exaggerated failure visual.'),
    claude: designDirection('6-slide field-reality carousel', 'velocity curve, operating window, decision consequence.'),
  },
  'P03': {
    client: 'Reinspection planning needs measured feature growth, not global assumptions.',
    cta: 'Soft CTA in first comment: ask for growth review.',
    visual: 'Three time points and feature-level growth curves.',
    caption: 'Corrosion growth is rarely uniform. Successive inspections turn a snapshot into feature-level growth data.',
    gpt: basePrompt('Same corrosion feature across three inspection dates with measured growth curve and confidence band.'),
    claude: designDirection('6-slide data-confidence carousel', 'time sequence, growth-rate calculation, planning decision.'),
  },
  'P02': {
    client: 'Gas service changes the inspection planning constraints.',
    cta: 'No CTA.',
    visual: 'Dry gas pipeline diagrams and positive roles for MFL, TFI, EMAT.',
    caption: 'Gas pipelines have fewer inspection options because the operating environment changes the physics. The decision is matching each credible threat to the right gas-applicable method.',
    gpt: basePrompt('Dry gas pipeline inspection planning: MFL, TFI, EMAT shown as three positive measurement questions, no weakness language.'),
    claude: designDirection('6-slide decision carousel', 'include one text-only insight slide; avoid saying one ACME Integrity technology is bad.'),
  },
  'P10': {
    client: 'Small measurement differences can change repair, monitoring, and reassessment decisions.',
    cta: 'Soft CTA in first comment: review decision thresholds.',
    visual: 'Use real UTWM tool image on cover/capability slide; use ultrasonic time-of-flight diagrams on explanation slides.',
    caption: 'Wall thickness accuracy is not a specification detail. At decision thresholds, ±0.3 mm can change whether a feature is monitored, reassessed, or repaired.',
    gpt: basePrompt('UTWM accuracy: include real UTWM tool asset where useful and exact; show ultrasonic time-of-flight wall measurement and repair/monitor threshold. No comparison to other technologies.'),
    claude: designDirection('6-slide client-decision carousel', 'cover with real UTWM tool; calculation chain; measurement physics; text-only threshold slide; capability; CTA.'),
  },
  'P05': {
    client: 'Cleaning is the first data-quality control in an inspection campaign.',
    cta: 'Soft CTA in first comment for cleaning/ILI prep review.',
    visual: 'Before/after pipeline interior and sensor-contact concept.',
    caption: 'Cleaning is not separate from inspection. Deposits, wax, or black powder can turn a planned ILI run into a data-quality problem.',
    gpt: basePrompt('Pipeline cleaning sequence: debris/wax/black powder before, clean steel after, sensor contact/coupling protected.'),
    claude: designDirection('6-slide field-reality carousel', 'problem chain: deposit, sensor interference, data consequence, prep solution.'),
  },
  'P20': {
    client: 'Small localized corrosion requires measurement resolution, not just overall coverage.',
    cta: 'No CTA.',
    visual: 'Sensor-density and localized-depth diagrams with positive framing.',
    caption: 'Pinhole corrosion is small in footprint but serious in consequence. The planning question is whether resolution matches the feature size you care about.',
    gpt: basePrompt('Pinhole corrosion measurement: localized deep feature, sensor resolution grid, high-density measurement concept. No negative competitor language.'),
    claude: designDirection('6-slide spec-awareness carousel', 'show resolution as decision variable, not technology attack.'),
  },
  'P08': {
    client: 'Seam welds need their own integrity question, not an assumption from pipe-body inspection.',
    cta: 'No CTA.',
    visual: 'Seam weld cross-sections and feature-orientation diagrams.',
    caption: 'Seam weld integrity is a separate question. Manufacturing history, orientation, and stress conditions determine what needs to be assessed.',
    gpt: basePrompt('Longitudinal seam weld cross-section with possible weld-line anomalies and orientation markers. Positive tool-selection framing.'),
    claude: designDirection('6-slide seam-weld carousel', 'avoid “X was not built for this”; use “this question requires this measurement approach.”'),
  },
  'P14': {
    client: 'Geometry features matter because they can concentrate strain and interact with other threats.',
    cta: 'No CTA.',
    visual: 'Dent/ovality/strain maps and clean caliper capability.',
    caption: 'A dent is not only a shape change. In the wrong context, it becomes a strain and fatigue question.',
    gpt: basePrompt('Pipeline geometry inspection: dent, ovality, buckle, strain-field overlay, clean engineering visualization.'),
    claude: designDirection('6-slide decision carousel', 'deformation types, strain consequence, assessment logic.'),
  },
  'P06': {
    client: 'Operators need prioritization, not just a feature list.',
    cta: 'Soft CTA in first comment for assessment review.',
    visual: 'Feature-to-decision flow and risk ranking.',
    caption: 'An anomaly is not automatically a threat. Assessment turns feature data into repair, monitor, or defer decisions.',
    gpt: basePrompt('ILI feature assessment flow: feature data into engineering assessment and prioritized action categories.'),
    claude: designDirection('6-slide client-decision carousel', 'report is input, decision is output; avoid dense standards text.'),
  },
  'P33': {
    client: 'Feature orientation affects the measurement question.',
    cta: 'No CTA.',
    visual: 'Magnetization orientations as positive options.',
    caption: 'Orientation matters. Axial, circumferential, and tri-axial measurements each answer different feature-orientation questions.',
    gpt: basePrompt('Three magnetic measurement orientations on pipe wall: axial, circumferential, radial/tri-axial as complementary options.'),
    claude: designDirection('6-slide orientation carousel', 'teach selection logic without saying one option is weak.'),
  },
  'P11': {
    client: 'Diameter transitions require purpose-engineered tool behavior.',
    cta: 'Soft CTA in first comment for complex-line review.',
    visual: 'Use accurate dual-diameter tool asset only if available; otherwise show mechanical adaptation diagram.',
    caption: 'Dual-diameter inspection is an engineering problem: sensor coverage, cups, arms, and measurement quality must remain stable through the transition.',
    gpt: basePrompt('Dual-diameter pipeline transition: purpose-engineered ILI configuration maintaining sensor contact and coverage through 36/42 inch transition.'),
    claude: designDirection('6-slide complex-line carousel', 'avoid “standard gets stuck”; show required design conditions.'),
  },
  'P12': {
    client: 'First-run success protects budget, schedule, and integrity data availability.',
    cta: 'Soft CTA in first comment for campaign planning.',
    visual: 'Real field/tool preparation photos preferred.',
    caption: 'First-run success is an operational requirement. It starts before launch: cleaning, geometry review, flow modeling, speed control, and field execution.',
    gpt: basePrompt('Realistic field preparation and ILI launch workflow: tool prep, checklist, launch barrel, monitoring, data download.'),
    claude: designDirection('6-slide field-reality carousel', 'use real photos when possible; show pre-run engineering checklist.'),
  },
  'P24': {
    client: 'Black powder can compromise inspection data before analysis begins.',
    cta: 'Soft CTA in first comment for gas-line cleaning strategy.',
    visual: 'Gas pipeline black powder and cleaning sequence.',
    caption: 'Black powder is not only a flow problem. It can affect sensor contact, signal quality, and the reliability of inspection data.',
    gpt: basePrompt('Gas pipeline interior with black powder deposits, progressive cleaning, clean steel path behind tool.'),
    claude: designDirection('6-slide gas operations carousel', 'before/after, data-quality consequence, cleaning strategy.'),
  },
  'P23': {
    client: 'Weld anomalies need classification before action.',
    cta: 'No CTA.',
    visual: 'Girth weld feature taxonomy and decision tree.',
    caption: 'Not all weld anomalies mean the same thing. The decision depends on feature type, location, stress, and whether it can grow.',
    gpt: basePrompt('Girth weld cross-section with classified anomaly types and clean risk decision path.'),
    claude: designDirection('6-slide assessment carousel', 'classification, significance, action path; keep text sparse.'),
  },
  'P15': {
    client: 'Trend confidence improves with successive inspections.',
    cta: 'Soft CTA in first comment for Predicta/growth analysis.',
    visual: 'Three-run trend and confidence band.',
    caption: 'One inspection gives condition. Two begin to show growth. Three improve trend confidence and planning quality.',
    gpt: basePrompt('Predictive integrity visual: three inspection data points, growth curve, confidence band, remaining life zones.'),
    claude: designDirection('6-slide data-confidence carousel', 'snapshot to trend to planning decision.'),
  },
  'P22': {
    client: 'The report is not the same as the engineering decision.',
    cta: 'Soft CTA in first comment for assessment support.',
    visual: 'Report-to-assessment-to-action flow.',
    caption: 'An ILI report lists features. The management decision comes after engineering assessment, interaction review, growth, and consequence ranking.',
    gpt: basePrompt('Raw ILI report feature table transforming into engineering assessment dashboard and prioritized action plan.'),
    claude: designDirection('6-slide report-to-decision carousel', 'no generic dashboard; show decision handoff.'),
  },
  'P19': {
    client: 'Unpiggable describes conditions, not a permanent lack of options.',
    cta: 'Soft CTA in first comment for unpiggable assessment.',
    visual: 'Use exact crawler assets if shown; otherwise show access-condition map.',
    caption: '“Unpiggable” is not a final classification. It is a set of constraints that can be engineered around.',
    gpt: basePrompt('Unpiggable pipeline options: no launcher, no receiver, low/no flow, access constraints, matched to crawler/MTM approach. Use exact crawler asset only if preserved.'),
    claude: designDirection('6-slide access-problem carousel', 'constraint map first, solution family second.'),
  },
  'P16': {
    client: 'Low pressure changes propulsion and speed-control assumptions.',
    cta: 'No CTA.',
    visual: 'Pressure differential and speed-control diagrams.',
    caption: 'Low pressure does not reduce integrity risk. It changes how the inspection campaign must be engineered.',
    gpt: basePrompt('Low-pressure pipeline inspection: pressure differential, bypass/speed-control concept, tool movement stability.'),
    claude: designDirection('6-slide field-reality carousel', 'problem, mechanism, campaign engineering.'),
  },
  'P18': {
    client: 'High temperature changes material, sensor, and electronics requirements.',
    cta: 'Soft CTA in first comment for high-temp project review.',
    visual: 'Temperature-rated tool/environment visual; use real tool only if accurate.',
    caption: 'At elevated temperature, the tool must survive the environment before it can measure the pipe.',
    gpt: basePrompt('High-temperature pipeline inspection: thermal gradient, elastomer/electronics/sensor protection, heavy crude environment.'),
    claude: designDirection('6-slide harsh-condition carousel', 'engineering constraints and adaptation.'),
  },
  'P25': {
    client: 'Reinspection timing should be based on measured risk, not a default interval.',
    cta: 'Soft CTA in first comment for interval review.',
    visual: 'Policy interval vs data-driven interval timeline.',
    caption: 'The right reinspection interval may be shorter or longer than policy default. The decision should come from measured growth and consequence.',
    gpt: basePrompt('Two timelines: fixed policy interval versus data-driven interval adjusted by measured corrosion growth.'),
    claude: designDirection('6-slide planning carousel', 'interval decision framework, not fear messaging.'),
  },
  'B-B': {
    client: 'Scale matters when it becomes pattern recognition and better planning.',
    cta: 'Soft CTA in first comment: ask for regional experience examples.',
    visual: 'Global pipeline knowledge map with data patterns.',
    caption: '800,000 km is not only a number. It is a knowledge base of signal patterns, operating conditions, and integrity decisions.',
    gpt: basePrompt('Global pipeline knowledge base: subtle map, data streams, inspected km becoming engineering insight.'),
    claude: designDirection('6-slide authority carousel', 'large stat, then what the experience teaches clients.'),
  },
};

function enhance(row) {
  const id = row['Post #'];
  const u = updates[id] || {};
  const isEvent = row.Pillar === 'EVENT' || row.Format?.includes('greeting') || row['Post #'] === '—';
  if (isEvent && !u.client) {
    u.client = 'Relationship and regional presence post. Supports trust, not direct lead generation.';
    u.cta = 'No hard CTA unless event attendance requires contact.';
    u.visual = 'Use official logo when supplied, team photo when available, respectful regional design.';
    u.gpt = basePrompt(`${row['Post Title / Hook']}: event/relationship graphic. Use official cultural colors carefully and brand-accurate ACME Integrity identity.`);
    u.claude = designDirection('Single image or simple event graphic', 'minimal, respectful, brand-led; avoid generic holiday template look.');
  }
  return {
    ...row,
    'Post Title / Hook': u.title || row['Post Title / Hook'],
    'Client Decision / Problem': u.client || 'Client decision lens to be confirmed before production.',
    'CTA Strategy': u.cta || 'No CTA unless tied to webinar, event, or first-comment soft conversion.',
    'Visual / Asset Strategy': u.visual || 'Use the best visual for the client decision: real tool proof, diagram, or text-only.',
    'Caption Direction': u.caption || String(row['Caption Direction'] || '').replace(/MFL can't find|MFL wasn't|Standard ILI can't handle it|12mm spacing can miss/gi, 'the inspection plan must account for'),
    'GPT Image Prompt': u.gpt || basePrompt(String(row['GPT Image Prompt'] || '').replace('1080x1350', '3:4 portrait')),
    'Claude Design Direction': u.claude || designDirection('6-slide carousel', String(row['Claude Design Direction'] || 'minimal decision-focused design')),
    'Production Notes': 'Before production: verify technical facts, decide real tool vs diagram, keep slide copy minimal, save generated images to /images/generated-carousel-pages.',
  };
}

function styleHeader(row) {
  row.eachCell((c) => {
    c.fill = fill(NAVY);
    c.font = headerFont;
    c.alignment = center;
    c.border = border;
  });
  row.height = 32;
}

function styleSheet(ws) {
  ws.views = [{ state: 'frozen', ySplit: 1, showGridLines: false }];
  ws.getRow(1).height = 32;
  styleHeader(ws.getRow(1));
  for (let r = 2; r <= ws.rowCount; r++) {
    const row = ws.getRow(r);
    row.eachCell((c) => {
      c.font = bodyFont;
      c.alignment = wrap;
      c.border = border;
    });
    if (r % 2 === 1) row.eachCell((c) => { if (!c.fill) c.fill = fill(ALT); });
    row.height = Math.max(row.height || 42, 68);
  }
}

async function main() {
  const src = new ExcelJS.Workbook();
  await src.xlsx.readFile(INPUT);

  const wb = new ExcelJS.Workbook();
  wb.creator = 'ACME Integrity Content Strategy V7';
  wb.created = new Date();

  const overview = wb.addWorksheet('Management Overview', { views: [{ showGridLines: false }] });
  overview.columns = [
    { width: 28 }, { width: 80 }, { width: 28 }, { width: 38 },
  ];
  overview.mergeCells('A1:D1');
  overview.getCell('A1').value = 'ACME Integrity 2026 LinkedIn Calendar — Management Version';
  overview.getCell('A1').fill = fill(NAVY);
  overview.getCell('A1').font = whiteTitle;
  overview.getCell('A1').alignment = { vertical: 'middle', horizontal: 'left' };
  overview.getRow(1).height = 42;

  const overviewRows = [
    ['Goal', 'Generate qualified trust with pipeline operators, integrity engineers, and technical decision-makers by turning ACME Integrity technology into client decision frameworks.', 'Primary Market', 'KSA / Middle East, with global authority support'],
    ['Content Thesis', 'Every post answers: what does ACME Integrity know that helps the client make a better integrity decision?', 'Cadence', 'Weekly, May–December 2026'],
    ['Commercial Logic', 'Expose a real operator problem → explain the physics/decision risk → show ACME Integrity capability → convert softly when useful.', 'CTA Mix', 'Mostly no CTA; soft first-comment CTA for high-intent posts; direct CTA for events/webinars'],
    ['Design Direction', 'ACME Integrity x Carbon: minimalist, technical, decision-led. 3:4 portrait. Montserrat + Century Gothic. Tool images only when accurate.', 'Production Rule', 'No generated tool redesigns; use real tool assets where geometry matters'],
    ['Management Decision Needed', 'Approve V7 calendar structure, then prioritize carousel production by month and commercial value.', 'Next Step', 'Build final carousel images and captions starting with May–July'],
  ];
  overview.addRows(overviewRows);
  for (let r = 2; r <= overview.rowCount; r++) {
    overview.getRow(r).height = 66;
    overview.getRow(r).eachCell((c, col) => {
      c.border = border;
      c.alignment = wrap;
      c.font = col === 1 || col === 3 ? boldFont : bodyFont;
      if (col === 1 || col === 3) c.fill = fill(LIGHT);
    });
  }

  const pillars = wb.addWorksheet('Strategy Map', { views: [{ state: 'frozen', ySplit: 1, showGridLines: false }] });
  pillars.columns = [
    { header: 'Pillar', width: 18 },
    { header: 'Share', width: 12 },
    { header: 'Role in Client Conversion', width: 62 },
    { header: 'Example Calendar Topics', width: 70 },
  ];
  pillars.addRows([
    ['Blind Spots', '30%', 'Make operators question whether current practice is answering the real threat.', 'Clean report is not proof; coating disbondment; SCC silence; report is not deliverable'],
    ['Decisions', '25%', 'Give managers and engineers reusable frameworks for tool selection and campaign planning.', 'Gas pipeline decisions; combo run; reinspection timing; every inspection starts with a question'],
    ['Field Reality', '20%', 'Show ACME Integrity understands operational constraints beyond textbook inspection.', 'Speed control; cleaning; low pressure; first-run success; high temperature'],
    ['Data Confidence', '15%', 'Connect measurement quality to repair, monitoring, and budget decisions.', 'UTWM accuracy; corrosion growth; pinhole resolution; predictive integrity'],
    ['Capability', '10%', 'Show proof of what ACME Integrity can execute after the client understands the need.', 'UTCD 47; autonomous crawler; 2-inch/3-inch tools; MTM; dual diameter'],
  ]);
  styleSheet(pillars);

  const srcCalendar = src.getWorksheet('Content Calendar');
  const headers = srcCalendar.getRow(1).values.slice(1).map((v) => (v && v.text) || v);
  const rawRows = [];
  for (let r = 2; r <= srcCalendar.rowCount; r++) {
    const o = {};
    headers.forEach((h, i) => { o[h] = value(srcCalendar.getRow(r).getCell(i + 1)); });
    rawRows.push(o);
  }
  const rows = rawRows.map(enhance);

  const cal = wb.addWorksheet('Content Calendar', { views: [{ state: 'frozen', ySplit: 1, showGridLines: false }] });
  cal.columns = [
    { header: 'Week', key: 'Week', width: 7 },
    { header: 'Date', key: 'Date', width: 12 },
    { header: 'Month', key: 'Month', width: 10 },
    { header: 'Pillar', key: 'Pillar', width: 14 },
    { header: 'Post #', key: 'Post #', width: 10 },
    { header: 'Post Title / Hook', key: 'Post Title / Hook', width: 46 },
    { header: 'Client Decision / Problem', key: 'Client Decision / Problem', width: 52 },
    { header: 'Carousel File', key: 'Carousel File', width: 44 },
    { header: 'Format', key: 'Format', width: 20 },
    { header: 'Purpose', key: 'Purpose', width: 44 },
    { header: 'Caption Direction', key: 'Caption Direction', width: 56 },
    { header: 'CTA Strategy', key: 'CTA Strategy', width: 36 },
    { header: 'Visual / Asset Strategy', key: 'Visual / Asset Strategy', width: 48 },
    { header: 'GPT Image Prompt', key: 'GPT Image Prompt', width: 64 },
    { header: 'Claude Design Direction', key: 'Claude Design Direction', width: 60 },
    { header: 'Production Notes', key: 'Production Notes', width: 48 },
    { header: 'Status', key: 'Status', width: 14 },
  ];
  rows.forEach((r) => cal.addRow(r));
  styleSheet(cal);
  for (let r = 2; r <= cal.rowCount; r++) {
    const row = cal.getRow(r);
    row.getCell(1).alignment = center;
    row.getCell(4).alignment = center;
    row.getCell(5).alignment = center;
    row.getCell(17).alignment = center;
    row.getCell(6).font = boldFont;
    row.getCell(7).fill = fill(r % 2 ? 'FFEAF1FA' : 'FFFFFFFF');
    row.getCell(12).fill = fill(r % 2 ? GREEN : 'FFFFFFFF');
    row.height = 118;
  }

  ['Events 2026', 'Reserve Carousels', 'Holidays & Events', 'Performance Tracking'].forEach((name) => {
    const source = src.getWorksheet(name);
    if (!source) return;
    const ws = wb.addWorksheet(name, { views: [{ state: 'frozen', ySplit: 1, showGridLines: false }] });
    ws.columns = source.getRow(1).values.slice(1).map((h) => ({ header: (h && h.text) || h, width: 24 }));
    for (let r = 2; r <= source.rowCount; r++) {
      ws.addRow(source.getRow(r).values.slice(1).map((_, idx) => value(source.getRow(r).getCell(idx + 1))));
    }
    styleSheet(ws);
  });

  const qa = wb.addWorksheet('Content QA Rules', { views: [{ state: 'frozen', ySplit: 1, showGridLines: false }] });
  qa.columns = [
    { header: 'Rule', width: 36 },
    { header: 'Why It Matters', width: 70 },
    { header: 'Pass Criteria', width: 70 },
  ];
  qa.addRows([
    ['Client decision first', 'The content must create commercial trust, not just explain technology.', 'Every post names the client problem, wrong assumption, and decision impact.'],
    ['Positive technology framing', 'ACME Integrity should not undermine its own portfolio.', 'No “our technology A is bad” language. Each tool is framed by intended measurement question.'],
    ['Tool accuracy', 'Wrong tool geometry damages credibility.', 'Use real tool assets where geometry matters. Generated images must not change tool design or scale.'],
    ['Minimal slide load', 'Engineers save clear frameworks, not dense posters.', 'One idea per slide. Under 40 words where possible. Split complex ideas.'],
    ['3:4 consistent size', 'The campaign should feel like one system.', 'All generated carousel pages use the same portrait 3:4 size.'],
    ['CTA discipline', 'Trust comes before conversion.', 'CTA only on last slide or first comment when commercially appropriate.'],
    ['Brand system', 'Management needs a consistent, premium campaign.', 'ACME Integrity fonts: Montserrat + Century Gothic. ACME Integrity x Carbon grid and color system.'],
  ]);
  styleSheet(qa);

  wb.eachSheet((ws) => {
    ws.eachRow((row) => row.eachCell((cell) => {
      if (typeof cell.value === 'string') {
        cell.value = cell.value
          .replace(/1080x1350(px)?/gi, '3:4 portrait')
          .replace(/Dark bg/gi, 'ACME Integrity navy technical background');
      }
    }));
  });

  await wb.xlsx.writeFile(OUTPUT);
  console.log(OUTPUT);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});

const ExcelJS = require('exceljs');

async function build() {
  const wb = new ExcelJS.Workbook();
  wb.creator = 'ACME Integrity';

  const blue = '1456A0';
  const headerFill = { type: 'pattern', pattern: 'solid', fgColor: { argb: blue } };
  const altFill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'F5F7FA' } };
  const headerFont = { bold: true, color: { argb: 'FFFFFF' }, size: 11, name: 'Arial' };
  const bodyFont = { size: 10, name: 'Arial' };
  const boldFont = { bold: true, size: 10, name: 'Arial' };
  const wrapAlign = { vertical: 'top', wrapText: true };
  const centerAlign = { vertical: 'middle', horizontal: 'center', wrapText: true };
  const border = {
    top: { style: 'thin', color: { argb: 'D6DAE2' } },
    bottom: { style: 'thin', color: { argb: 'D6DAE2' } },
    left: { style: 'thin', color: { argb: 'D6DAE2' } },
    right: { style: 'thin', color: { argb: 'D6DAE2' } }
  };

  const pillarColors = {
    'TECH': { type: 'pattern', pattern: 'solid', fgColor: { argb: 'E3F2FD' } },
    'PEOPLE': { type: 'pattern', pattern: 'solid', fgColor: { argb: 'F3E5F5' } },
    'INSIGHT': { type: 'pattern', pattern: 'solid', fgColor: { argb: 'E8F5E9' } },
    'BTS': { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FFF8E1' } },
    'EVENT': { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FBE9E7' } },
    'TECH+EVENT': { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FFF3E0' } }
  };

  // ═══════════════════════════════════════
  // SHEET 1: Content Calendar (May–Dec 2026)
  // ═══════════════════════════════════════
  const s1 = wb.addWorksheet('Content Calendar', { views: [{ state: 'frozen', ySplit: 1 }] });
  s1.columns = [
    { header: 'Week', key: 'week', width: 7 },
    { header: 'Date', key: 'date', width: 12 },
    { header: 'Month', key: 'month', width: 10 },
    { header: 'Pillar', key: 'pillar', width: 12 },
    { header: 'Post #', key: 'postnum', width: 9 },
    { header: 'Post Title / Hook', key: 'title', width: 48 },
    { header: 'Carousel File', key: 'file', width: 45 },
    { header: 'Format', key: 'format', width: 20 },
    { header: 'Purpose', key: 'purpose', width: 42 },
    { header: 'Caption Direction', key: 'caption', width: 55 },
    { header: 'GPT Image Prompt', key: 'gpt', width: 60 },
    { header: 'Claude Design Direction', key: 'claude', width: 50 },
    { header: 'HR Action', key: 'hr', width: 32 },
    { header: 'Status', key: 'status', width: 14 }
  ];
  s1.getRow(1).eachCell(c => { c.fill = headerFill; c.font = headerFont; c.alignment = centerAlign; c.border = border; });
  s1.getRow(1).height = 30;

  const posts = [
    // ═══ MAY ═══
    { week: 1, date: 'May 4', month: 'MAY', pillar: 'TECH', postnum: 'UTCD', title: 'A Clean ILI Report Is Not Proof of Integrity', file: 'UTCD-47-OPTION-B-clean-report-not-proof.html', format: 'Carousel (7 slides)', purpose: 'Launch new UTCD 47" tool. Position through education, not announcement.', caption: 'Clean report ≠ clean pipeline. Detection limits define what you found — not what exists. UTCD 47" assembled, shipping to KSA.', gpt: 'Pipeline wall cross-section. MFL flux passing through crack undetected vs UTCD shear wave reflecting off crack. Dark bg. 1080x1350.', claude: 'IBM-style corporate. Navy/white/blue alternating. Simulated report card on slide 4. Tool spec bar slide 6.', hr: '' },
    { week: 2, date: 'May 11', month: 'MAY', pillar: 'TECH', postnum: 'P13', title: 'Metal Loss and Cracking Aren\'t the Same Threat', file: '09-metal-loss-vs-cracking.html', format: 'Carousel (6 slides)', purpose: 'Establish the MFL vs UTCD distinction. Foundation post.', caption: 'Corrosion pit = volume removed. Crack = plane separated. Different geometry, different physics, different tool.', gpt: 'Two defect types side by side. Left: rounded corrosion pit. Right: thin planar crack. Dark bg, engineering viz. 1080x1350.', claude: 'Dark theme. Side-by-side comparison slides. Blue accent cards.', hr: '' },
    { week: 3, date: 'May 18', month: 'MAY', pillar: 'TECH', postnum: 'P04', title: 'One Run. Three Technologies. One Baseline.', file: '10-combo-run-one-strategy.html', format: 'Carousel (6 slides)', purpose: 'Educate on combo run strategy before OTC.', caption: 'MFL + UTCD + Caliper in one tool train. One mobilization, one baseline dataset. Not just cost savings — integrity advantage.', gpt: 'Combo ILI tool train inside pipeline. MFL + UTCD + Caliper sections connected. Dark bg. 1080x1350.', claude: 'Dark/light alternating. Tool train diagram. Cost comparison card.', hr: '' },
    { week: 4, date: 'May 25', month: 'MAY', pillar: 'TECH+EVENT', postnum: 'P17', title: 'H₂S Doesn\'t Just Corrode. It Cracks. + Eid al-Adha', file: 'POST-17-sour-service.html', format: 'Carousel + Eid greeting', purpose: 'Sour service education (KSA relevant) + Eid celebration.', caption: 'HIC, SOHIC, SSC — three forms of sour service damage MFL can\'t find. UTCD was designed for this threat.', gpt: 'Pipeline wall with HIC blisters. H2S molecules at surface, hydrogen atoms in grain structure. Dark bg. 1080x1350.', claude: 'Dark navy. H₂S mechanism diagram. Three threat cards. Also prepare separate Eid greeting graphic.', hr: 'Eid al-Adha greeting graphic + MENA celebration photos' },

    // ═══ JUNE ═══
    { week: 5, date: 'Jun 1', month: 'JUN', pillar: 'TECH', postnum: 'P01', title: 'Coating Disbondment: The Threat You Can\'t See From the Surface', file: '06-coating-disbondment-future-threat.html', format: 'Carousel (6 slides)', purpose: 'External corrosion education. Foundation authority post.', caption: 'Under disbonded coating, moisture reaches bare steel. Corrosion begins where no one can see it. Until it\'s too late.', gpt: 'Pipeline wall cross-section showing coating disbondment. Moisture trapped, early corrosion pitting. Dark bg. 1080x1350.', claude: 'Dark theme. Cross-section visualization. Coating layers diagram.', hr: '' },
    { week: 6, date: 'Jun 8', month: 'JUN', pillar: 'TECH', postnum: 'P07', title: 'SCC Develops in Silence', file: '08-scc-develops-in-silence.html', format: 'Carousel (6 slides)', purpose: 'SCC awareness. Position crack detection capability.', caption: 'Fine branching cracks grow under disbonded coating. No bulge. No pressure drop. No warning. Until rupture.', gpt: 'SCC beneath disbonded coating. Fine branching cracks from external surface inward. No external damage. Dark bg. 1080x1350.', claude: 'Dark theme. SCC mechanism slides. "Silent threat" narrative arc.', hr: '' },
    { week: 7, date: 'Jun 15', month: 'JUN', pillar: 'TECH', postnum: 'P09', title: 'Running at 5 m/s Saves Time. It Also Misses Defects.', file: 'POST-09-inspection-speed.html', format: 'Carousel (6 slides)', purpose: 'Speed control education. Counter "run fast" instinct.', caption: 'Every ILI technology has an optimal speed. Speed is a measurement parameter — not a schedule parameter.', gpt: 'ILI tool with speed visualization. Motion blur at high speed. Bypass valve system. Speed indicator arrows. Dark bg. 1080x1350.', claude: 'Light gray slides. Speed vs resolution curve. Technology speed comparison table.', hr: '' },
    { week: 8, date: 'Jun 22', month: 'JUN', pillar: 'TECH', postnum: 'P03', title: 'Corrosion Doesn\'t Grow at the Same Rate Everywhere', file: 'POST-03-corrosion-growth.html', format: 'Carousel (6 slides)', purpose: 'Growth rate education. Position re-inspection data value.', caption: 'A single inspection gives a snapshot. Successive runs give growth rates — feature by feature, not assumed globally.', gpt: 'Pipeline wall showing same corrosion feature at three time points. Progressive deepening. Growth arrows. Dark bg. 1080x1350.', claude: 'Dark theme. Three time-point comparison. Growth rate visualization.', hr: '' },
    { week: 9, date: 'Jun 29', month: 'JUN', pillar: 'PEOPLE', postnum: '—', title: 'What Does a ACME Integrity Field Engineer Actually Do?', file: '— (photo post)', format: 'Photo series + caption', purpose: 'Recruitment + humanization. Real field work.', caption: 'Real day: 5:30 AM site arrival → tool prep → launch → monitoring → data download. Not glamorized — real.', gpt: 'Day-in-the-Life collage. 4 photos: Morning Prep, Tool Launch, Monitoring, Data Download. Light gray bg. 1080x1350.', claude: 'Light background. 4-panel grid with timestamps. Name + role at bottom.', hr: 'Field team photos during real inspection campaign' },

    // ═══ JULY ═══
    { week: 10, date: 'Jul 6', month: 'JUL', pillar: 'TECH', postnum: 'P02', title: 'Gas Pipeline? The Inspection Decision Is Different.', file: '07-gas-pipeline-inspection-decisions.html', format: 'Carousel (6 slides)', purpose: 'Gas vs liquid pipeline inspection differences.', caption: 'Dry environment. No liquid couplant. Different physics. MFL, TFI, EMAT — each designed for gas-specific challenges.', gpt: 'Gas pipeline interior — dry. Three ILI technologies: MFL, TFI, EMAT. Clean gas environment. Dark bg. 1080x1350.', claude: 'Dark theme. Three technology cards. Gas-specific challenges.', hr: '' },
    { week: 11, date: 'Jul 13', month: 'JUL', pillar: 'TECH', postnum: 'P10', title: 'When ±0.3mm Changes the Decision', file: '11-utwm-accuracy-changes-decision.html', format: 'Carousel (6 slides)', purpose: 'UTWM accuracy education. Show measurement precision impact.', caption: 'A corrosion feature at the boundary between repair and monitor. ±0.3mm makes the difference. Accuracy isn\'t a spec — it\'s a decision.', gpt: 'Pipeline wall with ultrasonic beam measuring wall thickness. Digital readout ±0.3mm. Corrosion at boundary. Dark bg. 1080x1350.', claude: 'Dark theme. Ultrasonic measurement visualization. Decision boundary diagram.', hr: '' },
    { week: 12, date: 'Jul 20', month: 'JUL', pillar: 'TECH', postnum: 'P05', title: 'The Cleaning Run You Skip Today Becomes Tomorrow\'s Data Problem', file: 'POST-05-pipeline-cleaning.html', format: 'Carousel (6 slides)', purpose: 'Connect cleaning to data quality. Phase 1 of integrity.', caption: 'Debris reduces sensor coupling. Creates false signals. A cleaning campaign isn\'t maintenance — it\'s Phase 1 of inspection.', gpt: 'Progressive cleaning operation. Foam pig → brush pig → scraper. Debris pushed ahead. Clean steel behind. Dark bg. 1080x1350.', claude: 'Dark theme. Before/after visual. Three-card chain: coupling → signals → features.', hr: '' },
    { week: 13, date: 'Jul 27', month: 'JUL', pillar: 'TECH', postnum: 'P20', title: 'A 5mm Defect in a 30-Inch Pipe. Can Your Tool See It?', file: 'POST-20-pinhole-corrosion.html', format: 'Carousel (6 slides)', purpose: 'Sensor density / pinhole corrosion deep-dive.', caption: 'Standard 12mm spacing can miss pinhole corrosion. 3mm spacing catches what others miss. Ask about sensor density before every run.', gpt: 'Pipeline wall from above. Two sensor arrays: 12mm (missing defect) vs 3mm (detecting). Blue/red. Dark bg. 1080x1350.', claude: 'White slides. Sensor spacing comparison. "What your spec should include" checklist.', hr: '' },

    // ═══ AUGUST ═══
    { week: 14, date: 'Aug 3', month: 'AUG', pillar: 'EVENT', postnum: '—', title: 'Happy Swiss National Day from Our Headquarters in Baar', file: '— (greeting graphic)', format: 'Designed graphic + photo', purpose: 'Celebrate Swiss roots. Show HQ culture.', caption: 'Brief, warm. Founded in Switzerland. Acknowledge the day, show the Baar team.', gpt: 'Swiss National Day. White bg, red/white Swiss cross accent. Mountain silhouette. ACME Integrity logo. 1080x1350.', claude: 'White + red accents. Swiss cross subtle. Team photo space.', hr: 'Baar office celebration photo by Jul 28' },
    { week: 15, date: 'Aug 10', month: 'AUG', pillar: 'TECH', postnum: 'P08', title: 'Seam Weld Integrity: The Defect That Lives in the Weld Line', file: 'POST-08-seam-weld-integrity.html', format: 'Carousel (6 slides)', purpose: 'Seam weld education. Position TFI + EMAT.', caption: 'Longitudinal seam welds are where cracks hide. TFI + EMAT were built to find them. MFL wasn\'t.', gpt: 'Longitudinal seam weld cross-section. TFI circumferential magnetization detecting defect. Flux lines disturbed. Dark bg. 1080x1350.', claude: 'Dark theme. Seam weld diagram. TFI/EMAT/Combo cards.', hr: '' },
    { week: 16, date: 'Aug 17', month: 'AUG', pillar: 'EVENT', postnum: '—', title: 'Happy Independence Day to Our India Team and Partners', file: '— (greeting graphic)', format: 'Graphic + team photo', purpose: 'Regional celebration. India presence.', caption: 'Brief, respectful. India team contributions highlighted.', gpt: 'India Independence Day. Dark navy + tricolor ribbon. Modern typography. ACME Integrity logo. 1080x1350.', claude: 'Navy base. Tricolor accent. Team photo space.', hr: 'India office celebration photo by Aug 10' },
    { week: 17, date: 'Aug 24', month: 'AUG', pillar: 'TECH', postnum: 'P14', title: 'A Dent Is Not Just a Dent. It\'s a Strain Concentrator.', file: 'POST-14-geometry-inspection.html', format: 'Carousel (6 slides)', purpose: 'Geometry inspection education. Dent interaction awareness.', caption: 'Dent + corrosion + pressure = fatigue cracking. Caliper tools identify geometry threats before they become critical.', gpt: 'Pipeline cross-section with dent, ovality, buckle. Wireframe vs perfect circle overlay. Strain indicators. Dark bg. 1080x1350.', claude: 'White/light slides. Deformation types. Strain visualization. Caliper capability card.', hr: '' },
    { week: 18, date: 'Aug 31', month: 'AUG', pillar: 'TECH', postnum: 'P06', title: 'Not Every Anomaly Is a Threat. The Assessment Decides.', file: 'POST-06-not-every-anomaly.html', format: 'Carousel (6 slides)', purpose: 'FFS education. Report vs assessment distinction.', caption: 'Some features are benign. Some need monitoring. A few need immediate action. The ILI report lists them. The assessment ranks them.', gpt: 'Pipeline wall with anomalies at varying severity. Green (benign), yellow (monitor), red (critical). Assessment overlay. Dark bg. 1080x1350.', claude: 'Dark theme. Traffic-light severity coding. FFS flow diagram.', hr: '' },

    // ═══ SEPTEMBER ═══
    { week: 19, date: 'Sep 7', month: 'SEP', pillar: 'TECH', postnum: 'P33', title: 'Same Principle. Three Orientations. Different Detection.', file: '20-triaxial-mfl.html', format: 'Carousel (6 slides)', purpose: 'Clarify MFL variants — axial, TFI, tri-axial.', caption: 'Axial MFL → circumferential defects. TFI → longitudinal. Tri-Axial = both + radial. Orientation determines what you detect.', gpt: 'Three magnetic orientations on pipeline. Axial, circumferential, radial. Each labeled with defect type. Blue on dark. 1080x1350.', claude: 'Dark navy. One orientation per slide. Tri-Axial combined. "When to use which."', hr: '' },
    { week: 20, date: 'Sep 14', month: 'SEP', pillar: 'TECH', postnum: 'P11', title: 'The Pipeline Changes Diameter. Your Tool Adapts — Or Gets Stuck.', file: 'POST-11-dual-diameter.html', format: 'Carousel (6 slides)', purpose: 'Dual-diameter capability. Real operational challenge.', caption: 'Trunk lines change from 36" to 42". Standard ILI can\'t handle it. Sensor arms and cups adapt in real time.', gpt: 'Dual-diameter ILI tool transitioning 36" to 42". Sensor arms extending. Cross-section. Dark bg. 1080x1350.', claude: 'Dark slides. Diameter transition diagram. Challenge + capability cards.', hr: '' },
    { week: 21, date: 'Sep 21', month: 'SEP', pillar: 'EVENT', postnum: '—', title: 'Happy Saudi National Day — Vision and Progress', file: '— (greeting graphic)', format: 'Graphic + team celebration', purpose: 'Major regional celebration. KSA market strength.', caption: 'Respectful, celebratory. Kingdom\'s energy leadership + ACME Integrity\'s partnership.', gpt: 'Saudi National Day. Green + gold. Palm and swords emblem. Arabic + English. ACME Integrity logo. 1080x1350.', claude: 'Deep green + gold. Clean typography. Team photo space. Dignified.', hr: 'KSA team celebration photos by Sep 18' },
    { week: 22, date: 'Sep 28', month: 'SEP', pillar: 'TECH', postnum: 'P12', title: 'First-Run Success Isn\'t Luck. It\'s Engineering.', file: 'POST-12-first-run-success.html', format: 'Carousel (6 slides)', purpose: 'Operational competence. First-run success differentiation.', caption: 'Stuck tool = $200K-$500K+ in delays. Pre-run engineering: geometry analysis, flow modeling, speed control, cleaning program.', gpt: 'ILI tool being launched into pipeline. All sensors deployed. Operations crew. Industrial setting. 1080x1350.', claude: 'Alternating slides. Step-by-step cards. Large success rate stat.', hr: '' },

    // ═══ OCTOBER ═══
    { week: 23, date: 'Oct 5', month: 'OCT', pillar: 'TECH', postnum: 'P24', title: 'Black Powder: The Contaminant That Blinds Your ILI Tool', file: 'POST-24-black-powder.html', format: 'Carousel (6 slides)', purpose: 'Universal gas pipeline problem. Cleaning + ILI solution.', caption: 'Iron sulfide deposits coat sensors, reduce coupling, generate false signals. Progressive cleaning program required before ILI.', gpt: 'Gas pipeline interior with black powder. Cleaning pig approaching. Clean steel behind. Dark bg. 1080x1350.', claude: 'Dark slides. Before/after cleaning. Problem chain: Deposits → Interference → Data Loss.', hr: '' },
    { week: 24, date: 'Oct 12', month: 'OCT', pillar: 'TECH', postnum: 'P23', title: 'Not All Weld Anomalies Are Equal. Some Are Growing.', file: 'POST-23-girth-weld.html', format: 'Carousel (6 slides)', purpose: 'Girth weld integrity education.', caption: 'Porosity = benign. Root concavity = monitor. Fatigue crack at weld toe = critical. Know which to watch.', gpt: 'Girth weld cross-section. Porosity (green), concavity (yellow), fatigue crack (red). Weld cap + HAZ visible. Dark bg. 1080x1350.', claude: 'White/light slides. Weld diagram. Traffic-light coding. Decision tree.', hr: '' },
    { week: 25, date: 'Oct 19', month: 'OCT', pillar: 'TECH', postnum: 'P15', title: 'Two Inspections Give You Data. Three Give You a Trend.', file: 'POST-15-predictive-integrity.html', format: 'Carousel (6 slides)', purpose: 'Predictive integrity. Repeat inspection value.', caption: 'Single = snapshot. Two = growth rate. Three = trend + confidence. Predicta software. Reactive → planned.', gpt: 'Remaining life curves. Three data points, trend projection. Green/yellow/red zones. Dark bg. 1080x1350.', claude: 'Dark slides. Growth curve visualization. Color zones. "Reduces unnecessary digs by X%."', hr: '' },
    { week: 26, date: 'Oct 26', month: 'OCT', pillar: 'TECH', postnum: 'P22', title: 'You Received the Report. The Assessment Hasn\'t Started Yet.', file: '14-report-is-not-the-deliverable.html', format: 'Carousel (6 slides)', purpose: 'Report vs assessment. Data → decisions gap.', caption: 'The report lists features. The assessment ranks them. FFS, growth analysis, repair prioritization — that\'s the deliverable.', gpt: 'Data flowing from raw ILI report to assessment dashboard. Stack of data → refined digital screen. Dark bg. 1080x1350.', claude: 'Dark navy. Process flow visualization. "Report gives" vs "Assessment gives" cards.', hr: '' },

    // ═══ NOVEMBER ═══
    { week: 27, date: 'Nov 2', month: 'NOV', pillar: 'TECH', postnum: 'P19', title: 'Unpiggable Is a Solvable Problem', file: '13-unpiggable-is-solvable.html', format: 'Carousel (6 slides)', purpose: 'Crawler technology for unpiggable pipelines.', caption: 'No flow, no launcher — self-propelled crawlers operate independently. 8" to 56". Access point is all you need.', gpt: 'Self-propelled crawler in dry pipeline. Motorized wheels pressing wall. Battery + electronics. Dark bg. 1080x1350.', claude: 'Dark slides. "Conventional requires: flow, launcher, receiver." "Crawler requires: access point."', hr: '' },
    { week: 28, date: 'Nov 9', month: 'NOV', pillar: 'EVENT', postnum: '—', title: 'Happy Diwali from ACME Integrity', file: '— (greeting graphic)', format: 'Designed greeting', purpose: 'Celebrate with Indian team and clients. Diwali is Nov 8.', caption: 'Warm, brief. Light and prosperity.', gpt: 'Diwali card. Navy + gold/orange diya. Modern geometric. ACME Integrity logo. 1080x1350.', claude: 'Navy + gold/orange. Diya illustration. Clean. Minimal.', hr: 'India team celebration photos' },
    { week: 29, date: 'Nov 16', month: 'NOV', pillar: 'PEOPLE', postnum: '—', title: 'Meet Us at ADIPEC 2026 — Abu Dhabi', file: '— (event graphic)', format: 'Event graphic + team', purpose: 'ADIPEC promotion. MENA market signal.', caption: 'Biggest ME energy event. Team specialties. "Find us at [location]."', gpt: 'ADIPEC 2026 Abu Dhabi. Navy + gold. 4 team portraits with name/specialty. Premium. 1080x1350.', claude: 'Navy + gold. Team photos with labels. Clean, premium.', hr: 'Team headshots + booth details 3 weeks before ADIPEC' },
    { week: 30, date: 'Nov 23', month: 'NOV', pillar: 'TECH', postnum: 'P16', title: 'Low Pressure Doesn\'t Mean Low Risk', file: '12-low-pressure-harder-not-easier.html', format: 'Carousel (6 slides)', purpose: 'Low-pressure inspection challenges. Operational expertise.', caption: 'Low pressure = insufficient differential across sealing cups. The tool stalls. Speed control and bypass design solve it.', gpt: 'ILI tool stalling in low-pressure pipeline. Pressure gauge low. Flow arrows showing weak push. Dark bg. 1080x1350.', claude: 'Dark slides. Pressure differential diagram. Bypass valve explanation.', hr: '' },

    // ═══ DECEMBER ═══
    { week: 31, date: 'Dec 1', month: 'DEC', pillar: 'EVENT', postnum: '—', title: 'Happy UAE National Day', file: '— (greeting graphic)', format: 'Graphic + team photo', purpose: 'UAE celebration. Regional presence.', caption: 'Brief, respectful. UAE vision + ACME Integrity partnership.', gpt: 'UAE National Day. Red, green, white, black. Modern geometric. Arabic + English. 1080x1350.', claude: 'UAE flag colors as accents. Clean typography. Team photo space.', hr: 'UAE team photos by Nov 28' },
    { week: 32, date: 'Dec 7', month: 'DEC', pillar: 'TECH', postnum: 'P18', title: 'Inspecting at 60°C Changes Everything About the Tool', file: 'POST-18-high-temperature.html', format: 'Carousel (6 slides)', purpose: 'High-temperature inspection. Niche capability.', caption: 'Elastomers degrade >50°C. Electronics need thermal protection. Coupling changes. Three challenges, three solutions.', gpt: 'ILI tool in hot pipeline. Heat haze. Temperature gradient blue→orange/red. Heavy crude. Dark bg. 1080x1350.', claude: 'Dark slides + warm gradient. Temperature challenge cards. Limit comparison.', hr: '' },
    { week: 33, date: 'Dec 14', month: 'DEC', pillar: 'TECH', postnum: 'P25', title: 'Re-Inspection Timing Should Be Calculated, Not Defaulted', file: '15-reinspection-timing-calculated.html', format: 'Carousel (6 slides)', purpose: 'Data-driven re-inspection intervals.', caption: 'Policy says 5 years. Data says 3. Or 7. Intervals calculated from measured growth rates — not policy defaults.', gpt: 'Timeline with data-driven inspection intervals. Compressed where growth is fast, wider where slow. Green→red. Dark bg. 1080x1350.', claude: 'Dark theme. Two timelines: policy vs data-driven. Stat: savings from optimized intervals.', hr: '' },
    { week: 34, date: 'Dec 21', month: 'DEC', pillar: 'INSIGHT', postnum: 'B-B', title: '800,000 km of Inspected Pipeline. Here\'s What We\'ve Learned.', file: 'BONUS-B-800k-km-knowledge.html', format: 'Carousel (6 slides)', purpose: 'Year-end authority post. Scale + knowledge.', caption: 'Not just km inspected — knowledge accumulated. Patterns across continents, products, diameters. Data becomes wisdom at scale.', gpt: 'Global map with illuminated pipeline routes. Data streams flowing to central point. Dark globe, blue accent. 1080x1350.', claude: 'Dark globe visualization. Large stat per slide. Clean, IBM-style.', hr: '' },
    { week: 35, date: 'Dec 28', month: 'DEC', pillar: 'EVENT', postnum: '—', title: 'Thank You for 2026. See You in 2027.', file: '— (greeting graphic)', format: 'Designed greeting', purpose: 'Year-end gratitude. Relationship maintenance.', caption: 'Brief, warm. Thank clients, partners, team. "See you in 2027."', gpt: 'Year-end greeting. Navy + gold sparkle. "Thank You for 2026." "See You in 2027." ACME Integrity logo. 1080x1350.', claude: 'Navy + gold. Clean. Warm. Minimal.', hr: '' }
  ];

  posts.forEach((p, i) => {
    const row = s1.addRow([p.week, p.date, p.month, p.pillar, p.postnum, p.title, p.file, p.format, p.purpose, p.caption, p.gpt, p.claude, p.hr, '']);
    row.eachCell(c => { c.font = bodyFont; c.alignment = wrapAlign; c.border = border; });
    row.getCell(1).alignment = centerAlign;
    row.getCell(4).alignment = centerAlign;
    row.getCell(5).alignment = centerAlign;
    row.getCell(14).alignment = centerAlign;
    if (pillarColors[p.pillar]) row.getCell(4).fill = pillarColors[p.pillar];
    row.getCell(4).font = boldFont;
    row.getCell(6).font = boldFont;
    // Highlight rows with existing carousel files
    if (p.file && !p.file.startsWith('—')) {
      row.getCell(7).font = { size: 10, name: 'Arial', color: { argb: '1456A0' }, bold: true };
    } else {
      row.getCell(7).font = { size: 10, name: 'Arial', color: { argb: '999999' }, italic: true };
    }
    if (i % 2 === 1) {
      [1,2,3,5,8,14].forEach(ci => { if (row.getCell(ci).fill === undefined || !row.getCell(ci).fill?.fgColor) row.getCell(ci).fill = altFill; });
    }
    row.height = 80;
  });

  for (let r = 2; r <= 40; r++) {
    s1.getCell(r, 14).dataValidation = { type: 'list', allowBlank: true, formulae: ['"Draft,Design,Review,Scheduled,Published"'] };
  }

  // ═══════════════════════════════════════
  // SHEET 2: Remaining Carousels (not yet scheduled)
  // ═══════════════════════════════════════
  const s2 = wb.addWorksheet('Reserve Carousels', { views: [{ state: 'frozen', ySplit: 1 }] });
  s2.columns = [
    { header: 'Post #', key: 'num', width: 10 },
    { header: 'Post Title', key: 'title', width: 50 },
    { header: 'Carousel File', key: 'file', width: 48 },
    { header: 'Topic', key: 'topic', width: 40 },
    { header: 'Best Use', key: 'use', width: 45 },
    { header: 'Status', key: 'status', width: 14 }
  ];
  s2.getRow(1).eachCell(c => { c.fill = headerFill; c.font = headerFont; c.alignment = centerAlign; c.border = border; });
  s2.getRow(1).height = 28;

  const reserve = [
    ['P21', 'Every Inspection Starts with a Question', 'POST-21-every-inspection-starts-with-question.html', 'Threat assessment drives tool selection', 'Use as decision-framework post or pre-campaign pitch'],
    ['P26', 'Can You Inspect a 2-Inch Pipeline?', 'POST-26-two-inch-inspection.html', 'Small-diameter ILI capability', 'Use when winning small-diameter project or showcasing range'],
    ['P27', 'Where Are Your Worst Features? GIS Knows.', 'POST-27-gis-integration.html', 'GIS + ILI data integration', 'Use when highlighting spatial analytics or field verification'],
    ['P28', 'Carbon Fiber Repair: When Replacement Isn\'t an Option', '16-carbon-fiber-repair.html', 'Composite repair technology', 'Use when completing a repair project or ASME B31.8 topic'],
    ['P29', 'Furnace Tubes Are Pipelines Too', 'POST-29-furnace-tube.html', 'Refinery / furnace tube inspection', 'Use when targeting downstream/refinery clients'],
    ['P30', 'An Inspection Without an Integrity Program Is Just Data', '17-inspection-vs-integrity-program.html', 'Full lifecycle integrity management', 'Use as year-end thought leadership or pitch support'],
    ['P31', 'Unpiggable: Crawler + MTM Side by Side', '19-unpiggable-crawler-mtm.html', 'Two approaches to unpiggable pipelines', 'Use when promoting MTM or crawler combined offering'],
    ['P32', 'Internal Cracking: The Threat That Starts From the Inside', 'POST-32-internal-cracking.html', 'Internal surface cracking / hydrogen damage', 'Use for sour service or hydrogen pipeline discussions'],
    ['P34', 'MTM: Non-Contact Pipeline Assessment', 'POST-34-mtm-non-contact.html', 'Magnetic Tomography Method', 'Use when promoting above-ground survey capabilities'],
    ['P35', '56-Inch Autonomous Inspection', 'POST-35-56inch-autonomous.html', 'Large-diameter autonomous crawler', 'Use when winning a large-diameter project or decom inspection'],
    ['P36', 'Hydrogen Changes the Question', 'POST-36-hydrogen-changes-question.html', 'Hydrogen pipeline readiness / embrittlement', 'Use for energy transition thought leadership'],
    ['P37', 'The Crawler Reaches Where ILI Cannot', '21-crawler-reaches-where-ili-cannot.html', 'Crawler range: 8" to 56"', 'Use alongside W28 (unpiggable) or as standalone crawler pitch'],
    ['P38', 'The Smallest Pipelines Still Need Inspection', 'POST-38-smallest-pipelines.html', 'Small-bore MFL capability', 'Pair with P26 for small-diameter campaign week'],
    ['B-A', 'Hydrogen Pipeline Readiness Assessment', '18-hydrogen-pipeline-readiness.html', 'H2 readiness / repurposing assessment', 'Use for energy transition events or hydrogen project wins'],
    ['B-C', 'Two Runs Are Better Than One', 'BONUS-C-two-runs-better.html', 'Value of successive ILI runs / growth analysis', 'Pair with P15 (predictive) or P25 (re-inspection timing)'],
    ['NEW-1', 'One Tool Doesn\'t See Everything', 'NEW-TOOL-OPTION-1-one-tool-doesnt-see-everything.html', 'MFL vs UTCD — tool selection', 'Alternative UTCD launch post'],
    ['NEW-2', 'H₂S Doesn\'t Just Corrode. It Cracks.', 'NEW-TOOL-OPTION-2-sour-service-cracking.html', 'Sour service + new UTCD tool', 'KSA-targeted UTCD post'],
    ['NEW-3', 'Silent Threats Need Loud Tools', 'NEW-TOOL-OPTION-3-silent-threats.html', 'SCC + new UTCD tool', 'Emotional/shareable UTCD post'],
    ['OPT-A', 'Detection Is Not Enough (design v1)', 'UTCD-47-OPTION-A-detection-is-not-enough.html', 'Crack sizing vs detection', 'Alternative design style for UTCD'],
  ];

  reserve.forEach((r, i) => {
    const row = s2.addRow(r);
    row.eachCell(c => { c.font = bodyFont; c.alignment = wrapAlign; c.border = border; });
    row.getCell(1).alignment = centerAlign;
    row.getCell(3).font = { size: 10, name: 'Arial', color: { argb: '1456A0' }, bold: true };
    if (i % 2 === 1) row.eachCell(c => { c.fill = altFill; });
    row.height = 45;
  });

  // ═══════════════════════════════════════
  // SHEET 3: Holidays & Events
  // ═══════════════════════════════════════
  const s3 = wb.addWorksheet('Holidays & Events', { views: [{ state: 'frozen', ySplit: 1 }] });
  s3.columns = [
    { header: 'Date', key: 'date', width: 16 },
    { header: 'Holiday / Event', key: 'name', width: 40 },
    { header: 'Type', key: 'type', width: 14 },
    { header: 'Region', key: 'region', width: 20 },
    { header: 'Post Planned', key: 'planned', width: 14 },
    { header: 'Calendar Week', key: 'week', width: 14 },
    { header: 'Notes', key: 'notes', width: 35 }
  ];
  s3.getRow(1).eachCell(c => { c.fill = headerFill; c.font = headerFont; c.alignment = centerAlign; c.border = border; });

  const holidays = [
    ['May 1', 'Labour Day', 'Holiday', 'Global (excl USA)', 'No', '', ''],
    ['May 4-7', 'OTC Houston', 'Industry', 'USA', 'No', '', 'Could add if attending'],
    ['May 27-30', 'Eid al-Adha', 'Religious', 'Muslim', 'Yes', 'W4', 'Combined with P17 sour service post'],
    ['Jun 5', 'World Environment Day', 'Sustainability', 'Global (UN)', 'No', '', 'See sustainability section below'],
    ['Jun 17', 'Islamic New Year', 'Religious', 'Muslim', 'No', '', 'Optional greeting'],
    ['Jul 4', 'US Independence Day', 'Holiday', 'USA', 'No', '', ''],
    ['Aug 1', 'Swiss National Day', 'Holiday', 'Switzerland', 'Yes', 'W14', 'Week 14 greeting'],
    ['Aug 15', 'India Independence Day', 'Holiday', 'India', 'Yes', 'W16', 'Week 16 greeting'],
    ['Sep 14-17', 'PTC Berlin', 'Industry', 'Global', 'No', '', 'Add if presenting'],
    ['Sep 23', 'Saudi National Day', 'Holiday', 'Saudi Arabia', 'Yes', 'W21', 'Week 21 post'],
    ['Oct 2', 'Gandhi Jayanti', 'Holiday', 'India', 'No', '', ''],
    ['Oct (TBC)', 'NACE/AMPP', 'Industry', 'USA', 'No', '', 'Add if attending'],
    ['Nov 8', 'Diwali', 'Holiday', 'India', 'Yes', 'W28', 'Week 28 greeting (Nov 9 post)'],
    ['Nov 9-12', 'ADIPEC Abu Dhabi', 'Industry', 'UAE/Global', 'Yes', 'W29', 'Week 29 — team at event'],
    ['Nov 26', 'Thanksgiving', 'Holiday', 'USA', 'No', '', ''],
    ['Nov 30', 'Commemoration Day', 'Holiday', 'UAE', 'No', '', 'Combined with National Day'],
    ['Dec 2', 'UAE National Day', 'Holiday', 'UAE', 'Yes', 'W31', 'Week 31 greeting'],
    ['Dec 25', 'Christmas', 'Holiday', 'Global', 'No', '', 'Combined with year-end W35'],
    // ═══ SUSTAINABILITY / SDG / ENVIRONMENT DAYS ═══
    ['Jun 5', 'World Environment Day', 'Sustainability', 'Global (UN)', 'No', '', 'HR photo opportunity — green/sustainability content'],
    ['Jun 8', 'World Oceans Day', 'Sustainability', 'Global (UN)', 'No', '', 'Subsea/offshore pipeline angle possible'],
    ['Jun 17', 'World Day to Combat Desertification', 'Sustainability', 'Global (UN)', 'No', '', 'Relevant for KSA/MENA operations'],
    ['Jul 28', 'World Nature Conservation Day', 'Sustainability', 'Global', 'No', '', 'Pipeline integrity protects environment'],
    ['Sep 7', 'International Day of Clean Air', 'Sustainability', 'Global (UN)', 'No', '', 'Leak prevention = emissions reduction'],
    ['Sep 16', 'International Day for Preservation of the Ozone Layer', 'Sustainability', 'Global (UN)', 'No', '', 'Optional — emissions angle'],
    ['Sep 21', 'Zero Emissions Day', 'Sustainability', 'Global', 'No', '', 'Pipeline integrity prevents fugitive emissions'],
    ['Sep 25', 'UN SDGs Anniversary (SDG Action Day)', 'Sustainability', 'Global (UN)', 'No', '', 'SDG 9 (Infrastructure), SDG 12 (Responsible Production), SDG 13 (Climate)'],
    ['Oct 5', 'World Habitat Day', 'Sustainability', 'Global (UN)', 'No', '', 'Pipeline safety protects communities & habitats'],
    ['Oct 24', 'United Nations Day / Climate Action Week', 'Sustainability', 'Global (UN)', 'No', '', 'Broad sustainability messaging opportunity'],
    ['Nov 6', 'Intl Day for Preventing Exploitation of Environment in War', 'Sustainability', 'Global (UN)', 'No', '', 'Infrastructure protection angle'],
    ['Dec 5', 'World Soil Day', 'Sustainability', 'Global (UN)', 'No', '', 'External corrosion / coating disbondment tie-in'],
    ['Dec 11', 'International Mountain Day', 'Sustainability', 'Global (UN)', 'No', '', 'Optional — Swiss HQ mountains angle'],
  ];

  holidays.forEach((h, i) => {
    const row = s3.addRow(h);
    row.eachCell(c => { c.font = bodyFont; c.alignment = wrapAlign; c.border = border; });
    row.getCell(5).alignment = centerAlign;
    row.getCell(6).alignment = centerAlign;
    if (h[4] === 'Yes') row.getCell(5).font = { bold: true, color: { argb: '2E7D32' }, size: 10, name: 'Arial' };
    row.height = 26;
  });

  // ═══════════════════════════════════════
  // SHEET 4: HR Content Collection
  // ═══════════════════════════════════════
  const s4 = wb.addWorksheet('HR Content Collection', { views: [{ state: 'frozen', ySplit: 1 }] });
  s4.columns = [
    { header: 'Deadline', key: 'deadline', width: 16 },
    { header: 'Content Needed', key: 'content', width: 42 },
    { header: 'Office / Region', key: 'region', width: 20 },
    { header: 'Use In', key: 'use', width: 35 },
    { header: 'Assigned To', key: 'assigned', width: 18 },
    { header: 'Collected', key: 'collected', width: 12 }
  ];
  s4.getRow(1).eachCell(c => { c.fill = headerFill; c.font = headerFont; c.alignment = centerAlign; c.border = border; });

  const hrItems = [
    ['May 20', 'Eid al-Adha celebration photos', 'MENA offices', 'W4 — Eid greeting', '', ''],
    ['Jun 20', 'Field engineer day-in-the-life photos (4+)', 'Field ops', 'W9 — Field Engineer Day', '', ''],
    ['Jul 28', 'Swiss National Day office photo', 'Baar', 'W14 — Swiss National Day', '', ''],
    ['Aug 10', 'India Independence Day team photo', 'India', 'W16 — India Independence Day', '', ''],
    ['Aug 25', 'PTC speaker headshot + title (if presenting)', 'R&D', 'PTC Berlin (optional)', '', ''],
    ['Sep 18', 'Saudi National Day team celebration', 'KSA', 'W21 — Saudi National Day', '', ''],
    ['Oct 25', 'ADIPEC team headshots + booth details', 'MENA team', 'W29 — ADIPEC 2026', '', ''],
    ['Nov 1', 'Diwali celebration photos', 'India', 'W28 — Diwali (Nov 8)', '', ''],
    ['Nov 28', 'UAE National Day team photos', 'UAE', 'W31 — UAE National Day', '', ''],
    ['Dec 1', 'Year-end recognition nominees + photos', 'All managers', 'Year-end post (reserve)', '', ''],
    // ═══ SUSTAINABILITY / SDG CONTENT ═══
    ['May 28', 'Sustainability initiatives photos (recycling, HSE, ISO 14001)', 'All offices', 'Jun 5 — World Environment Day', '', ''],
    ['Jun 1', 'Subsea/offshore pipeline integrity photos', 'Field ops', 'Jun 8 — World Oceans Day (optional)', '', ''],
    ['Aug 28', 'Leak prevention / emissions reduction case photos', 'Engineering', 'Sep 7 — Intl Day of Clean Air', '', ''],
    ['Sep 18', 'SDG alignment content (infra, safety, climate)', 'Marketing / ESG', 'Sep 25 — UN SDGs Anniversary', '', ''],
  ];

  hrItems.forEach((h, i) => {
    const row = s4.addRow(h);
    row.eachCell(c => { c.font = bodyFont; c.alignment = wrapAlign; c.border = border; });
    row.getCell(6).alignment = centerAlign;
    if (i % 2 === 1) row.eachCell(c => { c.fill = altFill; });
    row.height = 30;
  });

  for (let r = 2; r <= 16; r++) {
    s4.getCell(r, 6).dataValidation = { type: 'list', allowBlank: true, formulae: ['"Yes,No,In Progress"'] };
  }

  // ═══════════════════════════════════════
  // SHEET 5: Performance Tracking
  // ═══════════════════════════════════════
  const s5 = wb.addWorksheet('Performance Tracking', { views: [{ state: 'frozen', ySplit: 1, xSplit: 1 }] });
  const months = ['Metric', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'H2 Avg'];
  s5.addRow(months);
  s5.getRow(1).eachCell(c => { c.fill = headerFill; c.font = headerFont; c.alignment = centerAlign; c.border = border; });
  s5.getColumn(1).width = 26;
  for (let i = 2; i <= 10; i++) s5.getColumn(i).width = 13;

  const metrics = ['Impressions (total)', 'Avg Impressions / Post', 'Engagement Rate (%)', 'Follower Growth', 'Total Followers', 'Profile Visits', 'Website Clicks', 'DMs / Inquiries', 'Posts Published', 'Carousels Published'];

  metrics.forEach((m, i) => {
    const row = s5.addRow([m, '', '', '', '', '', '', '', '', '']);
    row.eachCell(c => { c.font = bodyFont; c.alignment = centerAlign; c.border = border; });
    row.getCell(1).alignment = { vertical: 'middle', horizontal: 'left' };
    row.getCell(1).font = boldFont;
    if (i % 2 === 0) row.eachCell(c => { c.fill = altFill; });
    if (i < 8) {
      const rn = i + 2;
      row.getCell(10).value = { formula: `IF(COUNTA(B${rn}:I${rn})>0,AVERAGE(B${rn}:I${rn}),"")` };
    }
    row.height = 28;
  });

  await wb.xlsx.writeFile('C:\\Outreach\\ACME Integrity-2026-CONTENT-CALENDAR-V2.xlsx');
  console.log('Calendar v2 saved!');
}

build().catch(e => console.error(e));

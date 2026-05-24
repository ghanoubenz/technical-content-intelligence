const ExcelJS = require('exceljs');

async function build() {
  const wb = new ExcelJS.Workbook();
  wb.creator = 'ACME Integrity';

  const blue = '1456A0';
  const navy = '0B1526';
  const white = 'FFFFFF';
  const lightGray = 'F0F2F6';
  const headerFill = { type: 'pattern', pattern: 'solid', fgColor: { argb: blue } };
  const altFill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'F5F7FA' } };
  const headerFont = { bold: true, color: { argb: white }, size: 11, name: 'Arial' };
  const bodyFont = { size: 10, name: 'Arial' };
  const boldFont = { bold: true, size: 10, name: 'Arial' };
  const wrapAlign = { vertical: 'top', wrapText: true };
  const centerAlign = { vertical: 'middle', horizontal: 'center', wrapText: true };
  const thinBorder = {
    top: { style: 'thin', color: { argb: 'D6DAE2' } },
    bottom: { style: 'thin', color: { argb: 'D6DAE2' } },
    left: { style: 'thin', color: { argb: 'D6DAE2' } },
    right: { style: 'thin', color: { argb: 'D6DAE2' } }
  };

  // ═══════════════════════════════════════
  // SHEET 1: Calendar Overview
  // ═══════════════════════════════════════
  const s1 = wb.addWorksheet('Calendar Overview', { views: [{ state: 'frozen', ySplit: 1 }] });

  const cols = [
    { header: 'Week #', key: 'week', width: 8 },
    { header: 'Date', key: 'date', width: 12 },
    { header: 'Month', key: 'month', width: 10 },
    { header: 'Pillar', key: 'pillar', width: 10 },
    { header: 'Theme', key: 'theme', width: 32 },
    { header: 'Post Title / Hook', key: 'title', width: 45 },
    { header: 'Format', key: 'format', width: 22 },
    { header: 'Purpose', key: 'purpose', width: 40 },
    { header: 'Caption Direction', key: 'caption', width: 55 },
    { header: 'GPT Image Prompt', key: 'gpt', width: 65 },
    { header: 'Claude Design Direction', key: 'claude', width: 55 },
    { header: 'HR Action', key: 'hr', width: 35 },
    { header: 'Status', key: 'status', width: 14 }
  ];
  s1.columns = cols;

  // Style header
  s1.getRow(1).eachCell(c => {
    c.fill = headerFill;
    c.font = headerFont;
    c.alignment = centerAlign;
    c.border = thinBorder;
  });
  s1.getRow(1).height = 30;

  const posts = [
    { week: 1, date: 'Jan 5', month: 'January', pillar: 'TECH', theme: 'Cost of wrong inspection tool', title: 'The Most Expensive Inspection Is the One That Misses the Threat', format: 'Carousel (7 slides)', purpose: 'Open the year with authority. Set the tone.', caption: 'Cheapest ILI run can be the most expensive decision if it doesn\'t match the threat profile. Metal loss tool on a cracking-prone line. End with principle, not pitch.', gpt: 'Corporate infographic, dark navy background, cost comparison diagram — two paths: Right Tool → green check, Wrong Tool → red X with escalating costs. Minimal, professional. 1080x1350px.', claude: 'Dark navy base, alternating navy/white/blue slides. IBM-style geometric accents. Large stat on slide 3. Clean card layout.', hr: '' },
    { week: 2, date: 'Jan 12', month: 'January', pillar: 'PEOPLE', theme: 'New Year, global team', title: '12 Offices. 6 Time Zones. One Mission.', format: 'Employee photo collage', purpose: 'Humanize the brand. Show global reach through people.', caption: 'Short, warm. Name individuals. "From Houston to Jeddah, from Baar to Mumbai." Personal, not corporate-speak.', gpt: 'World map with glowing dots at office locations. Dark background, blue accent lines connecting dots. "12 Offices. One Mission." 1080x1350px.', claude: 'Light gray background. Grid of employee photos (3x3) with name + location labels. ACME Integrity branding subtle.', hr: 'Collect selfies/team photos from each office in December' },
    { week: 3, date: 'Jan 19', month: 'January', pillar: 'INSIGHT', theme: 'Re-inspection intervals', title: 'Your 5-Year Re-Inspection Interval Might Be 3 Years Too Late — Or 2 Years Too Early', format: 'Carousel (7 slides)', purpose: 'Challenge common industry practice. Data-driven approach.', caption: 'Policy-driven intervals vs data-driven. Calculated from measured corrosion growth rates, feature by feature.', gpt: 'Two timelines side by side. Top: evenly spaced (policy). Bottom: unevenly spaced (data-driven). Blue/white on light gray. 1080x1350px.', claude: 'White/light slides. Two timeline bars. Stat card: "42% didn\'t need re-inspection that early." BCG-style.', hr: '' },
    { week: 4, date: 'Jan 26', month: 'January', pillar: 'EVENT', theme: 'India Republic Day', title: 'Happy Republic Day to Our Team and Partners Across India', format: 'Designed graphic + team photo', purpose: 'Regional connection. Cultural respect.', caption: 'Brief, respectful. Celebrate India team\'s contribution.', gpt: 'Republic Day greeting with Indian tricolor ribbon on dark navy. Subtle geometric pattern. ACME Integrity logo. Professional. 1080x1350px.', claude: 'Dark navy. Indian tricolor stripe accent. Clean typography. Team photo space.', hr: 'Collect India office team photo by Jan 20' },
    { week: 5, date: 'Feb 2', month: 'February', pillar: 'TECH', theme: 'Combo runs', title: 'One Run. Three Technologies. One Baseline.', format: 'Carousel (7 slides)', purpose: 'Educate on combo run strategy. Multi-technology capability.', caption: 'MFL + UTCD + Caliper in one tool train. Operational and integrity advantages — not just cost savings.', gpt: 'Three ILI tool sections connected in a tool train inside pipeline. Labeled: MFL, UTCD, Caliper. Blue on dark. 1080x1350px.', claude: 'Alternating dark/light. Tool train diagram. Cost comparison (3 runs vs 1 combo). Large stat on savings.', hr: '' },
    { week: 6, date: 'Feb 9', month: 'February', pillar: 'PEOPLE', theme: 'Engineer spotlight', title: 'Meet [Name]: 15 Years of Reading Pipeline Data', format: 'Professional photo + caption', purpose: 'Build personal brand for employees. Show expertise depth.', caption: 'Interview style. Most interesting problem solved. What people don\'t understand about ILI data analysis.', gpt: 'Employee spotlight template. Light gray background. Portrait space, name, title, quote. Blue accent. 1080x1350px.', claude: 'Light background. Large photo placeholder. Name, title, quote card. Blue accent bar.', hr: 'Interview one data analyst. Get professional headshot.' },
    { week: 7, date: 'Feb 16', month: 'February', pillar: 'INSIGHT', theme: 'Ramadan operational planning', title: 'Inspection Campaigns Don\'t Pause for the Calendar. Planning Does.', format: 'Single image + caption', purpose: 'Cultural awareness AND operational competence.', caption: 'Schedule mobilization pre-Ramadan, data analysis during, field verification post. Practical, not a greeting.', gpt: 'Project timeline with highlighted Ramadan block. Pre/during/post phases. Blue and gold on white. 1080x1350px.', claude: 'White background, gold + blue accents. Gantt-chart timeline. Subtle crescent motif. Respectful.', hr: '' },
    { week: 8, date: 'Feb 23', month: 'February', pillar: 'EVENT', theme: 'Saudi Founding Day', title: 'Celebrating Saudi Founding Day with Our KSA Team', format: 'Designed graphic + team photo', purpose: 'Regional celebration. KSA market presence.', caption: 'Respectful. Kingdom\'s pipeline infrastructure and energy transformation.', gpt: 'Saudi Founding Day — dark green and gold. Geometric Islamic pattern border. Arabic + English. 1080x1350px.', claude: 'Deep green. Gold accent typography. KSA team photo space. Minimal.', hr: 'Collect KSA team photos by Feb 20' },
    { week: 9, date: 'Mar 2', month: 'March', pillar: 'TECH', theme: 'Pipeline cleaning = inspection decision', title: 'The Cleaning Run You Skip Today Becomes the Data Quality Problem Tomorrow', format: 'Carousel (7 slides)', purpose: 'Connect cleaning to ILI data quality.', caption: 'Debris reduces sensor coupling, creates false signals. Cleaning is Phase 1 of integrity. Cause-effect chain.', gpt: 'Split comparison: dirty pipeline interior vs clean. Before/After divider. Engineering style. Dark background. 1080x1350px.', claude: 'Dark hook slide. Before/after visual. Three cards: Poor coupling, False signals, Missed features. IBM-style.', hr: '' },
    { week: 10, date: 'Mar 8', month: 'March', pillar: 'EVENT', theme: 'International Women\'s Day', title: 'The Women Engineering Pipeline Integrity at ACME Integrity', format: 'Multi-photo + profiles', purpose: 'Celebrate women in engineering. Attract diverse talent.', caption: 'Feature 3-5 women. Short technical quotes. "What\'s the hardest problem you solved this year?"', gpt: 'IWD graphic. Purple + white. Space for 4 portrait photos. "The Women Engineering Pipeline Integrity." 1080x1350px.', claude: 'Light lavender/white. Photo grid with name + role. Short quote cards. Purple accent. Dignified.', hr: 'Collect profiles/photos from 4-5 women by Feb 25. Permission + short quote.' },
    { week: 11, date: 'Mar 16', month: 'March', pillar: 'INSIGHT', theme: 'ILI report vs integrity assessment', title: 'You Received the Report. The Assessment Hasn\'t Started Yet.', format: 'Carousel (7 slides)', purpose: 'Educate: report is input, assessment is output.', caption: 'Report = raw data. Assessment = FFS, growth analysis, repair prioritization. Show the gap between data and decisions.', gpt: 'Process flow: ILI Data → Feature Extraction → FFS → Growth → Prioritization → Decision. Blue/white on dark. 1080x1350px.', claude: 'Dark navy. Process flow across slides. Cards: report gives vs assessment gives. Stat: 2,000+ features.', hr: '' },
    { week: 12, date: 'Mar 20', month: 'March', pillar: 'EVENT', theme: 'Eid al-Fitr', title: 'Eid Mubarak from ACME Integrity', format: 'Designed greeting graphic', purpose: 'Celebrate with Muslim colleagues and clients.', caption: 'Warm, brief. Peace and joy.', gpt: 'Eid al-Fitr card. Navy + gold crescent moon, geometric Islamic pattern. Modern calligraphy. ACME Integrity logo. 1080x1350px.', claude: 'Navy + gold. Large crescent. Clean typography. No busy patterns.', hr: 'Collect Eid celebration photos from MENA offices' },
    { week: 13, date: 'Apr 6', month: 'April', pillar: 'TECH', theme: 'First-run success', title: 'First-Run Success Isn\'t Luck. It\'s Engineering.', format: 'Carousel (7 slides)', purpose: 'Show operational competence. Differentiate on reliability.', caption: 'Stuck tool costs $200K-$500K+. Pre-run engineering: geometry analysis, flow modeling, speed control, cleaning.', gpt: 'Pipeline launch sequence. Steps: 1. Geometry Review → 5. Tool Launch. Blue/white on navy. Clean cards. 1080x1350px.', claude: 'Alternating slides. Step-by-step cards. Large stat: "98.5% first-run success rate." BCG-style.', hr: '' },
    { week: 14, date: 'Apr 13', month: 'April', pillar: 'PEOPLE', theme: 'Field engineer day-in-the-life', title: 'What Does a ACME Integrity Field Engineer Actually Do?', format: 'Photo series (3-4) + caption', purpose: 'Recruitment + humanization. Show field reality.', caption: 'Real day: 5:30 AM site arrival, tool prep, launch, monitoring, data download. Real, not glamorized.', gpt: 'Day-in-the-Life collage. 4 photo placeholders: Morning Prep, Tool Launch, Monitoring, Data Download. 1080x1350px.', claude: 'Light background. 4-panel photo grid with timestamps. Clean labels. Name + role at bottom.', hr: 'Arrange field team photos during real inspection campaign in Q1' },
    { week: 15, date: 'Apr 20', month: 'April', pillar: 'INSIGHT', theme: 'Dual-diameter pipelines', title: 'The Pipeline Changes Diameter. Your ILI Tool Has to Adapt — Or Get Stuck.', format: 'Carousel (7 slides)', purpose: 'Show real operational challenge and solution.', caption: 'Trunk lines change from 36" to 42". Standard ILI can\'t handle it. Mechanical challenge + ACME Integrity\'s dual-diameter tools.', gpt: 'Pipeline transitioning 36" to 42". ILI tool at transition with extending sensor arms. Blue/white on dark. 1080x1350px.', claude: 'Dark slides. Cross-section showing diameter change. Challenge cards. ACME Integrity capability card.', hr: '' },
    { week: 16, date: 'Apr 27', month: 'April', pillar: 'BTS', theme: 'Tool assembly facility', title: 'Where ILI Tools Are Built', format: 'Photo/video + caption', purpose: 'Show manufacturing capability. Build trust through transparency.', caption: 'Sensor calibration, electronics integration, pressure testing, final QC. Visual, minimal text.', gpt: 'Large ILI tool being assembled. Bright overhead lighting, clean floor, engineers in safety gear. Editorial. 1080x1350px.', claude: 'Dark background. Large photo center, thin blue border. "Assembly Floor. Baar, Switzerland." Editorial.', hr: 'Photo/video session at assembly facility. Tool components, calibration, final assembled tool.' },
    { week: 17, date: 'May 4', month: 'May', pillar: 'TECH', theme: 'Geometry inspection — dents', title: 'A Dent Is Not Just a Dent. It\'s a Strain Concentrator.', format: 'Carousel (7 slides)', purpose: 'Educate on geometry threats. Underestimated dents.', caption: 'Dent + corrosion + pressure = fatigue cracking. Caliper tools identify these before critical. Cause-effect chain.', gpt: 'Pipeline cross-section showing dent. Strain concentration in red/orange at boundary. Cool blue elsewhere. Dark bg. 1080x1350px.', claude: 'White/light slides. Dent cross-section. "Dent + Corrosion = Interaction" card. Caliper capabilities.', hr: '' },
    { week: 18, date: 'May 11', month: 'May', pillar: 'PEOPLE', theme: 'OTC Conference', title: 'Find Us at OTC 2026 — Booth [#]', format: 'Event graphic + team photo', purpose: 'Event promotion. Networking.', caption: '"Come talk to us about your next inspection campaign." List 3-4 team members + specialties.', gpt: 'OTC 2026 Houston. Dark navy, bold white text. Booth number in blue box. 3-4 portrait placeholders. 1080x1350px.', claude: 'Dark navy. Large event name. Team photos in circular frames. Blue accent. QR code if available.', hr: 'Get team headshots + booth number 2 weeks before OTC' },
    { week: 19, date: 'May 18', month: 'May', pillar: 'INSIGHT', theme: 'Real cost of a pipeline leak', title: 'A Leak Costs More Than the Repair. It Costs the License to Operate.', format: 'Carousel (7 slides)', purpose: 'Reframe inspection value. Regulatory, reputational, environmental.', caption: 'Cascade: leak → shutdown → investigation → remediation → scrutiny → license risk. Inspection = license insurance.', gpt: 'Cascading cost diagram. Leak → Shutdown → Investigation → Remediation → Reputation → License Risk. Escalating red. Dark bg. 1080x1350px.', claude: 'Dark slides. Waterfall chart slides 2-4. Large stat on slide 5. "Inspection cost vs incident cost." IBM-style.', hr: '' },
    { week: 20, date: 'May 25', month: 'May', pillar: 'EVENT', theme: 'Eid al-Adha', title: 'Eid al-Adha Mubarak', format: 'Designed greeting graphic', purpose: 'Celebrate Eid. Connect with MENA clients.', caption: 'Warm, brief. Blessed celebration.', gpt: 'Eid al-Adha card. Deep navy + gold. Geometric Islamic star pattern border. Modern calligraphy. 1080x1350px.', claude: 'Navy + gold. Geometric accent. Clean typography. Minimal.', hr: 'Collect MENA celebration photos if possible' },
    { week: 21, date: 'Jun 1', month: 'June', pillar: 'TECH', theme: 'Sour service — HIC, SOHIC', title: 'H₂S Doesn\'t Just Corrode. It Cracks.', format: 'Carousel (7 slides)', purpose: 'Deep technical education. Position UTCD for sour service.', caption: 'Atomic hydrogen enters steel lattice → HIC, SOHIC, SSC. MFL won\'t find these. UTCD designed for this threat.', gpt: 'Pipeline wall showing HIC. H2S molecules, hydrogen atoms in grain structure, internal blisters. Dark bg, blue/white. 1080x1350px.', claude: 'Dark navy. H₂S mechanism diagram. Three threat cards (HIC, SOHIC, SSC). MFL vs crack comparison.', hr: '' },
    { week: 22, date: 'Jun 8', month: 'June', pillar: 'PEOPLE', theme: 'New graduates / interns', title: 'Welcome to the Team: Our 2026 Engineering Intake', format: 'Group photo + intro cards', purpose: 'Employer branding. Next generation investment.', caption: 'Introduce 3-6 new members. Name, university, team. Specific, not "we\'re excited to welcome."', gpt: 'Employee welcome graphic. White + blue accent. 6 portrait placeholders with name/university. "Class of 2026." 1080x1350px.', claude: 'White background. Clean photo grid. Blue accent labels. Modern, fresh.', hr: 'Collect photos, names, universities, roles by end of May' },
    { week: 23, date: 'Jun 15', month: 'June', pillar: 'INSIGHT', theme: 'Inspection speed matters', title: 'Running an ILI Tool at 5 m/s Saves Time. It Also Misses Defects.', format: 'Carousel (7 slides)', purpose: 'Counter "run fast" instinct. Physics of speed control.', caption: 'UTCD: 0.3-2.0 m/s. MFL: up to 5.0 m/s but resolution drops. Speed is a measurement parameter, not schedule.', gpt: 'Sensor resolution vs speed chart. Curve drops at high speed. Optimal zone in blue. Dark background. 1080x1350px.', claude: 'Light gray slides. Speed vs resolution curve. Technology speed comparison table. "Speed is a measurement parameter."', hr: '' },
    { week: 24, date: 'Jun 22', month: 'June', pillar: 'BTS', theme: 'Data analysis center', title: 'The Tool Comes Out. The Real Work Begins.', format: 'Photo/video + caption', purpose: 'Show post-inspection value. Differentiate.', caption: 'Terabytes of raw data → calibrated feature list → FFS → repair recommendation. Show people and screens.', gpt: 'Data analysis center. Multiple monitors with pipeline scan data, feature maps, 3D wall thickness. Modern office. 1080x1350px.', claude: 'Dark background. Large photo placeholder. Caption: "Data Analysis Center — [Location]." Blue accent.', hr: 'Photo session at data center. Capture screens (non-sensitive), analysts at work.' },
    { week: 25, date: 'Jul 6', month: 'July', pillar: 'TECH', theme: 'Pinhole corrosion — sensor spacing', title: 'A 5mm Defect in a 30-Inch Pipe. Can Your Tool See It?', format: 'Carousel (7 slides)', purpose: 'Technical deep-dive. Sensor density advantage.', caption: 'Standard 12mm spacing can miss pinholes. High-res 3mm spacing detects them. The spec to ask about before every run.', gpt: 'Pipeline wall from above. Two sensor arrays: coarse 12mm (missing defect) vs fine 3mm (detecting it). Blue/red. Dark bg. 1080x1350px.', claude: 'White slides. Sensor spacing comparison visual. "What your spec sheet should include" checklist. BCG-style.', hr: '' },
    { week: 26, date: 'Jul 13', month: 'July', pillar: 'PEOPLE', theme: 'Americas team spotlight', title: 'Our Americas Team: Houston, Calgary, and Beyond', format: 'Team photo + highlights', purpose: 'Regional spotlight. North American market presence.', caption: 'Americas operations — Houston, Canadian projects, Latin American work. 2-3 team members + specialties.', gpt: 'Dark navy. North America map with Houston/Calgary marked. 3 portrait circles with name/role. ACME Integrity Americas. 1080x1350px.', claude: 'Navy base. Subtle map background. Photo circles with labels. Blue accent.', hr: 'Collect Americas team photos and bios' },
    { week: 27, date: 'Jul 20', month: 'July', pillar: 'INSIGHT', theme: 'Hydrogen pipeline readiness', title: 'Before You Convert a Pipeline to Hydrogen, You Need to Know What\'s Already There', format: 'Carousel (7 slides)', purpose: 'Thought leadership on #1 industry topic. Position for repurposing assessments.', caption: 'Hydrogen embrittlement changes threat profile. Need baseline: crack mapping, wall thickness, material grade. UTCD + UTWM.', gpt: 'Pipeline transitioning gas (blue) to hydrogen (green). Checklist at transition: Crack Baseline, Wall Thickness, Material Verification. Dark bg. 1080x1350px.', claude: 'Navy-to-green gradient across slides. Checklist cards. ACME Integrity capability card. Forward-looking.', hr: '' },
    { week: 28, date: 'Jul 27', month: 'July', pillar: 'BTS', theme: 'Tool calibration process', title: 'Before Every Run, There\'s a Calibration. Here\'s What That Looks Like.', format: 'Photo series + caption', purpose: 'Show rigor behind results. Trust through process.', caption: 'Measurement validation against known reference flaws. Calibration bench, reference plates, measured vs actual.', gpt: 'ILI tool calibration. Reference plate with defects, sensor array above, digital readout. Industrial setting. 1080x1350px.', claude: 'Light gray. Photo + caption card: "Measured: 4.2mm. Actual: 4.1mm. Tolerance: ±0.3mm." Data-driven.', hr: 'Capture calibration photos during next tool prep' },
    { week: 29, date: 'Aug 3', month: 'August', pillar: 'EVENT', theme: 'Swiss National Day', title: 'Happy Swiss National Day from Our Headquarters in Baar', format: 'Designed graphic + photo', purpose: 'Celebrate Swiss roots. HQ culture.', caption: 'Brief, warm. Founded in Switzerland. Acknowledge the day.', gpt: 'Swiss National Day. White background, red/white Swiss cross accent. Mountain silhouette. ACME Integrity logo. 1080x1350px.', claude: 'White + red accents. Swiss cross subtle. Team photo space.', hr: 'Baar office celebration photo' },
    { week: 30, date: 'Aug 10', month: 'August', pillar: 'TECH', theme: 'EMAT for gas pipelines', title: 'No Liquid Couplant? No Problem. That\'s What EMAT Was Built For.', format: 'Carousel (7 slides)', purpose: 'Position EMAT. Gas pipeline operator pain point.', caption: 'UTCD/UTWM need couplant. Gas lines don\'t have it. EMAT = electromagnetic acoustic transduction. Physics explanation.', gpt: 'Two sensors compared. Left: ultrasonic + couplant (Liquid Lines). Right: EMAT no couplant (Gas Lines). Blue/white on dark. 1080x1350px.', claude: 'Dark slides. Side-by-side comparison. "Why gas operators have fewer options — and what EMAT changes."', hr: '' },
    { week: 31, date: 'Aug 17', month: 'August', pillar: 'EVENT', theme: 'India Independence Day', title: 'Happy Independence Day to Our India Team and Partners', format: 'Graphic + team photo', purpose: 'Regional celebration. Strengthen India presence.', caption: 'Brief, respectful. India team contributions.', gpt: 'India Independence Day. Dark navy + Indian tricolor ribbon accent. Modern typography. ACME Integrity logo. 1080x1350px.', claude: 'Navy base. Tricolor accent stripe. Team photo space below.', hr: 'India office celebration photo' },
    { week: 32, date: 'Aug 24', month: 'August', pillar: 'INSIGHT', theme: 'Girth weld anomalies', title: 'Not All Weld Anomalies Are Equal. Some Are Growing.', format: 'Carousel (7 slides)', purpose: 'Girth weld integrity — underserved topic.', caption: 'Most welds have benign anomalies. Some develop fatigue cracks at weld toe. Which to watch, which to leave.', gpt: 'Girth weld cross-section. Three anomaly types: porosity (green), root concavity (yellow), fatigue crack (red). Dark bg. 1080x1350px.', claude: 'White/light slides. Weld diagram. Traffic-light color coding. Decision tree on slide 5. BCG-style.', hr: '' },
    { week: 33, date: 'Sep 7', month: 'September', pillar: 'TECH', theme: 'MFL vs TFI vs Tri-Axial MFL', title: 'Same Principle. Three Orientations. Completely Different Detection.', format: 'Carousel (7 slides)', purpose: 'Clarify MFL variants. Most operators confused.', caption: 'Axial MFL → circumferential defects. TFI → longitudinal defects. Tri-Axial = both + radial. Orientation determines detection.', gpt: 'Three magnetic orientations on pipeline. Axial, Circumferential, Radial. Each with defect type. Blue on dark. 1080x1350px.', claude: 'Dark navy. One orientation per slide (2-4). Tri-Axial combined. "When to use which." Clean cards.', hr: '' },
    { week: 34, date: 'Sep 14', month: 'September', pillar: 'PEOPLE', theme: 'PTC Berlin conference', title: 'This Week at PTC Berlin: What We\'re Presenting', format: 'Event graphic + speaker photo', purpose: 'Conference presence. Technical authority.', caption: 'Presentation topic. What attendees will learn. Speaker photo. Connect at the event.', gpt: 'PTC Berlin 2026. Dark background. Speaker photo + name + presentation title. ACME Integrity logo. Blue accent. 1080x1350px.', claude: 'Dark navy. Large event name. Speaker photo + title card. Blue accent.', hr: 'Speaker headshot + presentation title 3 weeks before PTC' },
    { week: 35, date: 'Sep 21', month: 'September', pillar: 'EVENT', theme: 'Saudi National Day', title: 'Happy Saudi National Day — 93 Years of Vision and Progress', format: 'Graphic + team celebration', purpose: 'Major regional celebration. KSA relationships.', caption: 'Respectful, celebratory. Kingdom\'s energy leadership + ACME Integrity\'s role.', gpt: 'Saudi National Day. Green + gold. Saudi palm and swords emblem. Arabic + English. ACME Integrity logo. 1080x1350px.', claude: 'Deep green + gold. Clean typography. Team photo space. Dignified.', hr: 'KSA team celebration photos by Sep 20' },
    { week: 36, date: 'Sep 28', month: 'September', pillar: 'BTS', theme: 'Pre-run pipeline survey', title: 'Before the Tool, There\'s a Survey. Here\'s Why It Matters.', format: 'Photo series + caption', purpose: 'Show pre-inspection engineering. Process trust.', caption: 'Launcher/receiver dims, bend radii, valves, elevation, flow. This determines tool config and success probability.', gpt: 'Pipeline survey in progress. Engineers measuring launcher with calipers/laser. Industrial facility. Natural lighting. 1080x1350px.', claude: 'Light background. Photo + data overlay cards: "Launcher ID: 30.5", Min Bend Radius: 1.5D." Technical overlay.', hr: 'Capture pre-run survey photos during a real project' },
    { week: 37, date: 'Oct 5', month: 'October', pillar: 'TECH', theme: 'Black powder in gas pipelines', title: 'Black Powder: The Contaminant That Blinds Your ILI Tool', format: 'Carousel (7 slides)', purpose: 'Universal gas pipeline problem. Cleaning + inspection solution.', caption: 'Iron sulfide/oxide coats sensors, reduces coupling, generates false signals. Progressive cleaning required before ILI.', gpt: 'Gas pipeline interior with black powder deposits at 6 o\'clock. Cleaning pig approaching, clean steel behind. Dark bg. 1080x1350px.', claude: 'Dark slides. Before/after cleaning. Three-card problem chain: Deposits → Interference → Data Loss.', hr: '' },
    { week: 38, date: 'Oct 12', month: 'October', pillar: 'PEOPLE', theme: 'Engineer spotlight — data analyst', title: 'What Does a Pipeline Integrity Engineer Actually Look At?', format: 'Screen capture + photo + caption', purpose: 'Demystify the role. Attract talent.', caption: 'Anonymized data screen. Feature clusters, growth patterns, interaction zones. "800,000 data points become a decision."', gpt: 'Split layout: sanitized pipeline data viz (wall thickness map) on left. Portrait placeholder, name, role, quote on right. Blue accent. 1080x1350px.', claude: 'Light background. Split layout. Data viz left, person right. Montserrat typography. Blue accent.', hr: 'Interview integrity engineer. Sanitized screen capture + explanation.' },
    { week: 39, date: 'Oct 19', month: 'October', pillar: 'INSIGHT', theme: 'Predictive integrity', title: 'Two Inspections Give You Data. Three Give You a Trend.', format: 'Carousel (7 slides)', purpose: 'Position predictive capabilities. Repeat inspection value.', caption: 'Single = snapshot. Two = growth rate. Three = trend with confidence. Predicta software. Reactive → planned.', gpt: 'Remaining life curve. Three data points, trend line into future. Confidence interval shaded. Green/yellow/red zones. Dark bg. 1080x1350px.', claude: 'Dark slides. Growth curve. Three inspection points + projection. Color zones. "Reduces unnecessary digs by X%." IBM-style.', hr: '' },
    { week: 40, date: 'Oct 26', month: 'October', pillar: 'BTS', theme: 'Shipping an ILI tool — logistics', title: 'Getting a 12-Ton Tool to a Remote Pipeline Isn\'t Simple Logistics. It\'s Engineering.', format: 'Photo/video + caption', purpose: 'Show operational scale. Unique BTS content.', caption: 'Custom transport frames, oversized permits, crane lifts, climate-controlled electronics. 12 tons, thousands of km, one chance.', gpt: 'Large ILI tool on flatbed truck. Crane operation. Industrial yard. Scale evident. Golden hour. Editorial. 1080x1350px.', claude: 'Dark background. Large photo, blue border. "12 tons. 4,000 km. One chance." Caption card below.', hr: 'Capture transport/logistics photos during next tool shipment' },
    { week: 41, date: 'Nov 2', month: 'November', pillar: 'EVENT', theme: 'Diwali', title: 'Happy Diwali from ACME Integrity', format: 'Designed greeting graphic', purpose: 'Celebrate with Indian colleagues and clients.', caption: 'Warm, brief. Light and prosperity.', gpt: 'Diwali card. Dark navy + gold/orange diya illustration. Modern geometric. "Happy Diwali." ACME Integrity logo. 1080x1350px.', claude: 'Navy + gold/orange. Diya illustration. Clean. Minimal.', hr: 'India team celebration photos if available' },
    { week: 42, date: 'Nov 9', month: 'November', pillar: 'TECH', theme: 'Crawler inspection', title: 'No Flow? No Launcher? No Problem.', format: 'Carousel (7 slides)', purpose: 'Position crawler for unpiggable pipelines.', caption: 'Self-propelled crawlers. No product flow, no launcher. 8" to 56". Where crawlers solve what conventional ILI can\'t.', gpt: 'Self-propelled crawler inside dry pipeline. Motorized wheels on pipe wall. Battery/electronics. Dark bg. 1080x1350px.', claude: 'Dark slides. "Conventional ILI requires: flow, launcher, receiver." "Crawler requires: access point." Size range.', hr: '' },
    { week: 43, date: 'Nov 16', month: 'November', pillar: 'PEOPLE', theme: 'ADIPEC conference', title: 'Meet Us at ADIPEC 2026 — Abu Dhabi', format: 'Event graphic + team lineup', purpose: 'Event promotion. MENA market signal.', caption: 'Biggest ME energy event. Who will be there + specialties. "Find us at [location]."', gpt: 'ADIPEC 2026 Abu Dhabi. Dark navy + gold. ACME Integrity logo. 4 team portraits with name/specialty. Premium. 1080x1350px.', claude: 'Navy + gold. Team photos with labels. Premium.', hr: 'Team headshots + booth details 3 weeks before ADIPEC' },
    { week: 44, date: 'Nov 23', month: 'November', pillar: 'INSIGHT', theme: 'Threat assessment before purchase order', title: 'Your Inspection Strategy Should Start with a Threat Assessment — Not a Purchase Order', format: 'Carousel (7 slides)', purpose: 'Challenge operators buying ILI on availability vs threat profile.', caption: 'First question: credible threats? Corrosion → MFL, Cracking → UTCD/EMAT, Geometry → Caliper, Multiple → Combo.', gpt: 'Decision flow: "What are the credible threats?" → branches to technologies. Blue/white on dark. 1080x1350px.', claude: 'Dark slides. Decision tree. Each branch = technology card. "Start with threat. Technology follows."', hr: '' },
    { week: 45, date: 'Dec 1', month: 'December', pillar: 'EVENT', theme: 'UAE National Day', title: 'Happy UAE National Day', format: 'Graphic + UAE team photo', purpose: 'Regional celebration. UAE presence.', caption: 'Brief, respectful. UAE\'s vision + ACME Integrity partnership.', gpt: 'UAE National Day. Red, green, white, black (UAE colors). Modern geometric. Arabic + English. ACME Integrity logo. 1080x1350px.', claude: 'UAE flag colors as accents. Clean typography. Team photo space.', hr: 'UAE team photos by Nov 28' },
    { week: 46, date: 'Dec 7', month: 'December', pillar: 'TECH', theme: 'High-temperature inspection', title: 'Inspecting at 60°C Changes Everything About the Tool Design', format: 'Carousel (7 slides)', purpose: 'Technical niche. Challenging conditions capability.', caption: 'Elastomers degrade >50°C. Electronics need thermal protection. Sensor coupling changes. Three challenges, three solutions.', gpt: 'Temperature gradient on ILI tool. Cool blue (electronics) to hot orange/red (pipe wall). Labeled zones. Dark bg. 1080x1350px.', claude: 'Dark slides + warm gradient. Temperature challenge cards. "Standard limit vs ACME Integrity high-temp." Technical.', hr: '' },
    { week: 47, date: 'Dec 14', month: 'December', pillar: 'PEOPLE', theme: 'Year-end employee recognition', title: 'The People Who Made 2026 Happen', format: 'Multi-photo + caption', purpose: 'Internal recognition. Employer branding.', caption: 'Recognize 5-8 contributions. Stories, not awards. Specific, meaningful achievements per person.', gpt: 'Year-end recognition. Grid of 6-8 portraits with one-line achievement. "2026: The People Who Made It Happen." Gold accent. 1080x1350px.', claude: 'Light background. Gold accent. Photo grid with achievement labels. Clean, warm.', hr: 'Collect nominations + photos from regional managers by Dec 1' },
    { week: 48, date: 'Dec 21', month: 'December', pillar: 'INSIGHT', theme: '2026 year in review — by the numbers', title: '2026: The Numbers Behind the Year', format: 'Carousel (7 slides) — data', purpose: 'Year-end milestone. Show scale and impact.', caption: 'Key metrics: km inspected, countries, technologies, reports, success rate, new capabilities. End with 2027 preview.', gpt: 'Year-in-review infographic. Dark navy. Large stats: "XX,000 km inspected", "XX countries", "XX% success." Blue/white. 1080x1350px.', claude: 'Dark navy. Large stats per slide (BCG-style). Km, countries, tech, team growth, 2027 preview. Blue + gold.', hr: '' },
    { week: 49, date: 'Dec 28', month: 'December', pillar: 'EVENT', theme: 'Holiday greeting + New Year', title: 'Thank You for 2026. See You in 2027.', format: 'Designed greeting graphic', purpose: 'Year-end gratitude. Relationship maintenance.', caption: 'Brief, warm. Thank clients, partners, team. No corporate-speak. "See you in 2027."', gpt: 'Year-end greeting. Dark navy + gold sparkle. "Thank You for 2026." Subtext: "See You in 2027." ACME Integrity logo. 1080x1350px.', claude: 'Navy + gold. Clean. Warm. Minimal. No busy holiday graphics.', hr: '' }
  ];

  // Add pillar color coding
  const pillarColors = {
    'TECH': { type: 'pattern', pattern: 'solid', fgColor: { argb: 'E3F2FD' } },
    'PEOPLE': { type: 'pattern', pattern: 'solid', fgColor: { argb: 'F3E5F5' } },
    'INSIGHT': { type: 'pattern', pattern: 'solid', fgColor: { argb: 'E8F5E9' } },
    'BTS': { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FFF8E1' } },
    'EVENT': { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FBE9E7' } }
  };

  posts.forEach((p, i) => {
    const row = s1.addRow([p.week, p.date, p.month, p.pillar, p.theme, p.title, p.format, p.purpose, p.caption, p.gpt, p.claude, p.hr, '']);
    row.eachCell(c => { c.font = bodyFont; c.alignment = wrapAlign; c.border = thinBorder; });
    row.getCell(1).alignment = centerAlign;
    row.getCell(4).alignment = centerAlign;
    row.getCell(13).alignment = centerAlign;
    if (pillarColors[p.pillar]) row.getCell(4).fill = pillarColors[p.pillar];
    row.getCell(4).font = boldFont;
    row.getCell(6).font = boldFont;
    if (i % 2 === 1) {
      [1,2,3,5,7,8,13].forEach(ci => { row.getCell(ci).fill = altFill; });
    }
    row.height = 85;
  });

  // Data validation for Status column
  for (let r = 2; r <= 50; r++) {
    s1.getCell(r, 13).dataValidation = {
      type: 'list',
      allowBlank: true,
      formulae: ['"Draft,Design,Review,Scheduled,Published"']
    };
  }

  // ═══════════════════════════════════════
  // SHEET 2: Holidays & Events
  // ═══════════════════════════════════════
  const s2 = wb.addWorksheet('Holidays & Events', { views: [{ state: 'frozen', ySplit: 1 }] });
  s2.columns = [
    { header: 'Date', key: 'date', width: 16 },
    { header: 'Holiday / Event', key: 'name', width: 42 },
    { header: 'Type', key: 'type', width: 14 },
    { header: 'Region', key: 'region', width: 22 },
    { header: 'Post Planned', key: 'planned', width: 14 },
    { header: 'Week #', key: 'week', width: 10 },
    { header: 'Notes', key: 'notes', width: 35 }
  ];
  s2.getRow(1).eachCell(c => { c.fill = headerFill; c.font = headerFont; c.alignment = centerAlign; c.border = thinBorder; });
  s2.getRow(1).height = 28;

  const holidays = [
    ['Jan 1', 'New Year\'s Day', 'Holiday', 'Global', 'No', '', 'Company closed'],
    ['Jan 19', 'MLK Day', 'Holiday', 'USA', 'No', '', ''],
    ['Jan 26', 'India Republic Day', 'Holiday', 'India', 'Yes', '4', 'Week 4 post'],
    ['Feb 18-Mar 19', 'Ramadan', 'Religious', 'Muslim', 'Yes', '7', 'Operational planning post W7'],
    ['Feb 22', 'Saudi Founding Day', 'Holiday', 'Saudi Arabia', 'Yes', '8', 'Week 8 post'],
    ['Mar 8', 'International Women\'s Day', 'Global', 'Global', 'Yes', '10', 'Week 10 post — women profiles'],
    ['Mar 20-22', 'Eid al-Fitr', 'Religious', 'Muslim', 'Yes', '12', 'Week 12 greeting'],
    ['Apr 3', 'Good Friday', 'Holiday', 'Global', 'No', '', ''],
    ['Apr 5', 'Easter', 'Holiday', 'Global', 'No', '', ''],
    ['May 1', 'Labour Day', 'Holiday', 'Global (excl USA)', 'No', '', ''],
    ['May 4-7', 'OTC Houston', 'Industry', 'USA', 'Yes', '18', 'Week 18 — team at booth'],
    ['May 25', 'Memorial Day', 'Holiday', 'USA', 'No', '', 'Combined with Eid al-Adha week'],
    ['May 27-30', 'Eid al-Adha', 'Religious', 'Muslim', 'Yes', '20', 'Week 20 greeting'],
    ['Jun 5', 'World Environment Day', 'Global', 'Global', 'No', '', 'Optional — could add'],
    ['Jun 17', 'Islamic New Year (1448 AH)', 'Religious', 'Muslim', 'No', '', 'Optional greeting'],
    ['Jul 4', 'Independence Day', 'Holiday', 'USA', 'No', '', 'Americas spotlight W26 instead'],
    ['Aug 1', 'Swiss National Day', 'Holiday', 'Switzerland', 'Yes', '29', 'Week 29 post'],
    ['Aug 15', 'India Independence Day', 'Holiday', 'India', 'Yes', '31', 'Week 31 post'],
    ['Sep 14-17', 'PTC Berlin', 'Industry', 'Global', 'Yes', '34', 'Week 34 — speaker announcement'],
    ['Sep 23', 'Saudi National Day', 'Holiday', 'Saudi Arabia', 'Yes', '35', 'Week 35 post'],
    ['Oct 2', 'Gandhi Jayanti', 'Holiday', 'India', 'No', '', ''],
    ['Oct (TBC)', 'NACE/AMPP Conference', 'Industry', 'USA', 'No', '', 'Optional — add if attending'],
    ['Nov 1', 'Diwali (approx.)', 'Holiday', 'India', 'Yes', '41', 'Week 41 greeting'],
    ['Nov 9-12', 'ADIPEC Abu Dhabi', 'Industry', 'UAE/Global', 'Yes', '43', 'Week 43 — team at event'],
    ['Nov 26', 'Thanksgiving', 'Holiday', 'USA', 'No', '', ''],
    ['Nov 30', 'Commemoration Day', 'Holiday', 'UAE', 'No', '', 'Combined with National Day'],
    ['Dec 2', 'UAE National Day', 'Holiday', 'UAE', 'Yes', '45', 'Week 45 post'],
    ['Dec 25', 'Christmas', 'Holiday', 'Global', 'No', '', 'Combined with year-end W49'],
  ];

  const typeColors = {
    'Holiday': { type: 'pattern', pattern: 'solid', fgColor: { argb: 'E3F2FD' } },
    'Religious': { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FFF8E1' } },
    'Industry': { type: 'pattern', pattern: 'solid', fgColor: { argb: 'E8F5E9' } },
    'Global': { type: 'pattern', pattern: 'solid', fgColor: { argb: 'F3E5F5' } }
  };

  holidays.forEach((h, i) => {
    const row = s2.addRow(h);
    row.eachCell(c => { c.font = bodyFont; c.alignment = wrapAlign; c.border = thinBorder; });
    row.getCell(5).alignment = centerAlign;
    row.getCell(6).alignment = centerAlign;
    if (typeColors[h[2]]) row.getCell(3).fill = typeColors[h[2]];
    if (h[4] === 'Yes') row.getCell(5).font = { bold: true, color: { argb: '2E7D32' }, size: 10, name: 'Arial' };
    row.height = 28;
  });

  // ═══════════════════════════════════════
  // SHEET 3: HR Content Collection
  // ═══════════════════════════════════════
  const s3 = wb.addWorksheet('HR Content Collection', { views: [{ state: 'frozen', ySplit: 1 }] });
  s3.columns = [
    { header: 'Collection Month', key: 'month', width: 18 },
    { header: 'Content Needed', key: 'content', width: 45 },
    { header: 'Office / Region', key: 'region', width: 22 },
    { header: 'Use In Post', key: 'use', width: 28 },
    { header: 'Deadline', key: 'deadline', width: 16 },
    { header: 'Assigned To', key: 'assigned', width: 18 },
    { header: 'Collected', key: 'collected', width: 12 }
  ];
  s3.getRow(1).eachCell(c => { c.fill = headerFill; c.font = headerFont; c.alignment = centerAlign; c.border = thinBorder; });
  s3.getRow(1).height = 28;

  const hrItems = [
    ['December 2025', 'Team New Year messages/selfies from each office', 'All offices', 'W2 — 12 Offices, One Mission', 'Dec 20, 2025', '', ''],
    ['January', 'India Republic Day team photo', 'India', 'W4 — Republic Day', 'Jan 20', '', ''],
    ['January', 'Data analyst/integrity engineer interview + headshot', 'Any office', 'W6 — Engineer Spotlight', 'Jan 25', '', ''],
    ['February', 'Women engineer profiles + photos (4-5 people)', 'All offices', 'W10 — International Women\'s Day', 'Feb 25', '', ''],
    ['February', 'KSA team celebration photos', 'KSA', 'W8 — Saudi Founding Day', 'Feb 20', '', ''],
    ['March', 'Eid al-Fitr celebration photos', 'MENA offices', 'W12 — Eid Mubarak', 'Mar 19', '', ''],
    ['Q1', 'Field engineer day-in-the-life photos (4+ shots)', 'Field ops team', 'W14 — Field Engineer Day', 'Mar 31', '', ''],
    ['April', 'Assembly facility photo/video session', 'Baar / manufacturing', 'W16 — Where Tools Are Built', 'Apr 15', '', ''],
    ['April', 'OTC team headshots + booth number', 'Houston', 'W18 — OTC 2026', 'Apr 25', '', ''],
    ['May', 'Eid al-Adha celebration photos', 'MENA offices', 'W20 — Eid al-Adha', 'May 25', '', ''],
    ['May', 'New graduate/intern photos + bios', 'All offices', 'W22 — Engineering Intake', 'May 31', '', ''],
    ['June', 'Data analysis center photo session', 'Analysis center', 'W24 — The Real Work Begins', 'Jun 15', '', ''],
    ['June', 'Americas team photos + bios', 'Houston / Calgary', 'W26 — Americas Spotlight', 'Jun 30', '', ''],
    ['July', 'Calibration process photos', 'Workshop', 'W28 — Calibration Process', 'Jul 15', '', ''],
    ['July', 'Swiss National Day office photo', 'Baar', 'W29 — Swiss National Day', 'Jul 28', '', ''],
    ['August', 'India Independence Day team photo', 'India', 'W31 — India Independence Day', 'Aug 10', '', ''],
    ['August', 'PTC speaker headshot + presentation title', 'R&D / speakers', 'W34 — PTC Berlin', 'Aug 25', '', ''],
    ['September', 'Saudi National Day team celebration', 'KSA', 'W35 — Saudi National Day', 'Sep 20', '', ''],
    ['September', 'Pre-run survey photos from real project', 'Field ops', 'W36 — Pipeline Survey', 'Sep 25', '', ''],
    ['October', 'Integrity engineer interview + sanitized screen', 'Analysis center', 'W38 — What Engineers Look At', 'Oct 5', '', ''],
    ['October', 'Tool transport/shipping photos', 'Logistics', 'W40 — Shipping a Tool', 'Oct 20', '', ''],
    ['October', 'ADIPEC team headshots + booth details', 'MENA team', 'W43 — ADIPEC 2026', 'Oct 25', '', ''],
    ['November', 'Diwali celebration photos', 'India', 'W41 — Diwali', 'Oct 28', '', ''],
    ['November', 'UAE National Day team photos', 'UAE', 'W45 — UAE National Day', 'Nov 28', '', ''],
    ['November', 'Year-end recognition nominees + photos', 'All regional managers', 'W47 — People Who Made 2026', 'Dec 1', '', ''],
  ];

  hrItems.forEach((h, i) => {
    const row = s3.addRow(h);
    row.eachCell(c => { c.font = bodyFont; c.alignment = wrapAlign; c.border = thinBorder; });
    row.getCell(7).alignment = centerAlign;
    if (i % 2 === 1) row.eachCell(c => { c.fill = altFill; });
    row.height = 35;
  });

  for (let r = 2; r <= 26; r++) {
    s3.getCell(r, 7).dataValidation = { type: 'list', allowBlank: true, formulae: ['"Yes,No,In Progress"'] };
  }

  // ═══════════════════════════════════════
  // SHEET 4: Performance Tracking
  // ═══════════════════════════════════════
  const s4 = wb.addWorksheet('Performance Tracking', { views: [{ state: 'frozen', ySplit: 1, xSplit: 1 }] });
  const months = ['Metric', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'YTD Avg'];
  s4.addRow(months);
  s4.getRow(1).eachCell(c => { c.fill = headerFill; c.font = headerFont; c.alignment = centerAlign; c.border = thinBorder; });
  s4.getRow(1).height = 30;

  s4.getColumn(1).width = 28;
  for (let i = 2; i <= 14; i++) s4.getColumn(i).width = 12;

  const metrics = [
    'Impressions (total)',
    'Avg Impressions / Post',
    'Engagement Rate (%)',
    'Follower Growth',
    'Total Followers',
    'Profile Visits',
    'Website Clicks',
    'DMs / Inquiries',
    'Posts Published',
    'Carousels Published',
    'Top Performing Post',
    'Top Pillar (by engagement)'
  ];

  const targetRow = ['TARGET', '8,000+', '8,000+', '8,000+', '8,000+', '8,000+', '8,000+', '8,000+', '8,000+', '8,000+', '8,000+', '8,000+', '8,000+', ''];
  const targetFill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FFF3E0' } };

  // Add target row first
  const tRow = s4.addRow(targetRow);
  tRow.eachCell(c => { c.fill = targetFill; c.font = { bold: true, size: 10, name: 'Arial', color: { argb: 'E65100' } }; c.alignment = centerAlign; c.border = thinBorder; });

  metrics.forEach((m, i) => {
    const vals = [m, '', '', '', '', '', '', '', '', '', '', '', '', ''];
    const row = s4.addRow(vals);
    row.eachCell(c => { c.font = bodyFont; c.alignment = centerAlign; c.border = thinBorder; });
    row.getCell(1).alignment = { vertical: 'middle', horizontal: 'left' };
    row.getCell(1).font = boldFont;
    if (i % 2 === 0) row.eachCell(c => { c.fill = altFill; });
    // YTD Average formula for numeric rows (rows 4-11, metrics 0-7)
    if (i < 8) {
      const rowNum = i + 4; // accounting for header, target, and 1-indexing
      row.getCell(14).value = { formula: `IF(COUNTA(B${rowNum}:M${rowNum})>0,AVERAGE(B${rowNum}:M${rowNum}),"")` };
    }
    row.height = 30;
  });

  // Add a separator and quarterly summary
  s4.addRow([]);
  const qHeader = s4.addRow(['QUARTERLY SUMMARY', 'Q1 (Jan-Mar)', '', '', 'Q2 (Apr-Jun)', '', '', 'Q3 (Jul-Sep)', '', '', 'Q4 (Oct-Dec)', '', '', 'FULL YEAR']);
  qHeader.eachCell(c => { c.fill = headerFill; c.font = headerFont; c.alignment = centerAlign; c.border = thinBorder; });

  const qMetrics = ['Total Impressions', 'Avg Engagement Rate', 'Follower Growth', 'Website Clicks', 'DMs / Inquiries', 'Posts Published'];
  qMetrics.forEach((m, i) => {
    const row = s4.addRow([m, '', '', '', '', '', '', '', '', '', '', '', '', '']);
    row.eachCell(c => { c.font = bodyFont; c.alignment = centerAlign; c.border = thinBorder; });
    row.getCell(1).alignment = { vertical: 'middle', horizontal: 'left' };
    row.getCell(1).font = boldFont;
    if (i % 2 === 0) row.eachCell(c => { c.fill = altFill; });
    row.height = 28;
  });

  // Save
  await wb.xlsx.writeFile('C:\\Outreach\\ACME Integrity-2026-CONTENT-CALENDAR.xlsx');
  console.log('Calendar saved successfully!');
}

build().catch(e => console.error(e));

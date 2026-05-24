const ExcelJS = require('exceljs');

const INPUT = 'C:/Outreach/ACME Integrity-2026-CONTENT-CALENDAR-V7-MANAGEMENT.xlsx';
const OUTPUT = 'C:/Outreach/ACME Integrity-2026-CONTENT-CALENDAR-V8-RANKED.xlsx';

const NAVY = 'FF0B1526';
const BLUE = 'FF1456A0';
const LIGHT = 'FFF4F4F4';
const ALT = 'FFFAFBFD';
const WHITE = 'FFFFFFFF';
const GREEN = 'FFE8F5E9';
const YELLOW = 'FFFFF8E1';
const RED = 'FFFFEBEE';
const BORDER = 'FFD6DAE2';

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
const wrap = { vertical: 'top', wrapText: true };
const center = { vertical: 'middle', horizontal: 'center', wrapText: true };

function cellValue(cell) {
  const v = cell.value;
  if (!v) return '';
  if (v.text) return v.text;
  if (v.richText) return v.richText.map((x) => x.text).join('');
  return v;
}

function styleSheet(ws) {
  ws.views = [{ state: 'frozen', ySplit: 1, showGridLines: false }];
  ws.getRow(1).eachCell((c) => {
    c.fill = fill(NAVY);
    c.font = headerFont;
    c.alignment = center;
    c.border = border;
  });
  ws.getRow(1).height = 34;
  for (let r = 2; r <= ws.rowCount; r++) {
    const row = ws.getRow(r);
    row.eachCell((c) => {
      c.font = bodyFont;
      c.alignment = wrap;
      c.border = border;
    });
    if (r % 2 === 1) row.eachCell((c) => { if (!c.fill) c.fill = fill(ALT); });
    row.height = Math.max(row.height || 64, 74);
  }
}

const scores = {
  UTCD: [5, 5, 5, 5, 5, 'KEEP / PRIORITY 1', 'Flagship launch. Real tool proof + client blind spot.'],
  P13: [4, 4, 4, 4, 3, 'KEEP / REWORK', 'Good foundation topic, but frame as threat geometry and tool-selection logic, not one technology versus another.'],
  P10: [5, 5, 4, 4, 4, 'KEEP / PRIORITY 1', 'Directly links UTWM accuracy to repair/monitor decisions. Add real UTWM tool image.'],
  P02: [5, 5, 4, 4, 4, 'KEEP / PRIORITY 1', 'Gas operators recognize this immediately. Keep positive technology framing.'],
  P01: [5, 4, 4, 5, 4, 'KEEP / PRIORITY 1', 'Strong invisible-threat education. Useful for World Environment Day angle too.'],
  P07: [5, 4, 4, 5, 4, 'KEEP / PRIORITY 1', 'Silent SCC is a strong client fear. Good save/share potential.'],
  P22: [5, 5, 4, 4, 4, 'KEEP / PRIORITY 1', 'Turns reports into commercial assessment value. High buyer relevance.'],
  P12: [5, 4, 5, 4, 4, 'KEEP / PRIORITY 1', 'Operational pain and management cost. Use real field visuals.'],
  P19: [5, 4, 5, 5, 4, 'KEEP / PRIORITY 1', 'Unpiggable/access constraints are high-intent problems. Tool accuracy required.'],
  P04: [4, 5, 5, 4, 4, 'KEEP', 'Strong strategy post. Avoid making combo only about cost savings.'],
  P05: [4, 4, 4, 4, 4, 'KEEP', 'Cleaning is practical and client-recognizable. Good for operations audience.'],
  P03: [4, 4, 4, 4, 4, 'KEEP', 'Growth rates connect to planning and budget. Needs strong charts.'],
  P20: [4, 4, 4, 4, 4, 'KEEP', 'Sensor resolution is important, but avoid attacking other tools.'],
  P11: [4, 4, 5, 5, 4, 'KEEP', 'Complex-line capability. Must use accurate tool/diameter visuals.'],
  P15: [4, 4, 4, 4, 4, 'KEEP', 'Predictive integrity supports long-term conversion. Needs data confidence story.'],
  P25: [5, 4, 4, 3, 4, 'KEEP', 'Very management-friendly year-end planning post.'],
  P17: [4, 4, 4, 4, 5, 'KEEP / REWORK', 'KSA relevance is high. Remove “X cannot find” language.'],
  P09: [4, 4, 4, 3, 3, 'KEEP / REWORK', 'Good field reality post, but current hook is too negative.'],
  P08: [4, 4, 4, 4, 3, 'KEEP / REWORK', 'Good topic. Must avoid “MFL was not” language.'],
  P14: [4, 4, 4, 4, 3, 'KEEP', 'Geometry/strain is a useful problem, but needs client scenario.'],
  P06: [4, 5, 4, 3, 3, 'KEEP', 'Assessment topic is commercially strong, visual must be simple.'],
  P33: [3, 4, 4, 4, 3, 'KEEP / REWORK', 'Technical value is good. Needs client decision lens, less orientation lecture.'],
  P24: [4, 4, 4, 4, 3, 'KEEP', 'Black powder is practical and gas-specific. Good operations pain.'],
  P23: [3, 4, 3, 3, 3, 'REVIEW', 'May be too niche unless linked to weld-specific operators.'],
  P16: [4, 4, 4, 4, 4, 'KEEP', 'Low pressure is a clear operational challenge.'],
  P18: [3, 4, 4, 4, 3, 'REVIEW', 'Good niche capability. Keep if high-temp clients are priority.'],
  'B-B': [3, 3, 4, 4, 4, 'KEEP / REWORK', 'Authority post, but must say what 800,000 km teaches clients.'],
};

async function main() {
  const wb = new ExcelJS.Workbook();
  await wb.xlsx.readFile(INPUT);
  const cal = wb.getWorksheet('Content Calendar');
  const headers = cal.getRow(1).values.slice(1).map((v) => (v && v.text) || v);
  const rows = [];
  for (let r = 2; r <= cal.rowCount; r++) {
    const obj = {};
    headers.forEach((h, i) => { obj[h] = cellValue(cal.getRow(r).getCell(i + 1)); });
    rows.push(obj);
  }

  const ranked = rows
    .filter((r) => r.Pillar !== 'EVENT' && r['Post #'] !== '—')
    .map((r) => {
      const s = scores[r['Post #']] || [3, 3, 3, 3, 3, 'REVIEW', 'Needs manual scoring.'];
      const total = s.slice(0, 5).reduce((a, b) => a + b, 0);
      return {
        Week: r.Week,
        Date: r.Date,
        Month: r.Month,
        'Post #': r['Post #'],
        'Post Title / Hook': r['Post Title / Hook'],
        'Client Decision / Problem': r['Client Decision / Problem'],
        'Client Pain': s[0],
        'Commercial Value': s[1],
        'ACME Integrity Differentiation': s[2],
        'Visual Strength': s[3],
        'Timing / Market Fit': s[4],
        'Total / 25': total,
        Recommendation: s[5],
        'Review Notes': s[6],
      };
    })
    .sort((a, b) => b['Total / 25'] - a['Total / 25']);

  const oldRank = wb.getWorksheet('Post Ranking');
  if (oldRank) wb.removeWorksheet(oldRank.id);
  const ws = wb.addWorksheet('Post Ranking', { views: [{ state: 'frozen', ySplit: 1, showGridLines: false }] });
  ws.columns = [
    { header: 'Rank', key: 'Rank', width: 7 },
    { header: 'Week', key: 'Week', width: 7 },
    { header: 'Date', key: 'Date', width: 12 },
    { header: 'Month', key: 'Month', width: 10 },
    { header: 'Post #', key: 'Post #', width: 10 },
    { header: 'Post Title / Hook', key: 'Post Title / Hook', width: 46 },
    { header: 'Client Decision / Problem', key: 'Client Decision / Problem', width: 55 },
    { header: 'Client Pain', key: 'Client Pain', width: 12 },
    { header: 'Commercial Value', key: 'Commercial Value', width: 15 },
    { header: 'ACME Integrity Differentiation', key: 'ACME Integrity Differentiation', width: 20 },
    { header: 'Visual Strength', key: 'Visual Strength', width: 15 },
    { header: 'Timing / Market Fit', key: 'Timing / Market Fit', width: 16 },
    { header: 'Total / 25', key: 'Total / 25', width: 12 },
    { header: 'Recommendation', key: 'Recommendation', width: 18 },
    { header: 'Review Notes', key: 'Review Notes', width: 58 },
  ];
  ranked.forEach((r, i) => ws.addRow({ ...r, Rank: i + 1 }));
  styleSheet(ws);
  for (let r = 2; r <= ws.rowCount; r++) {
    const rec = String(ws.getRow(r).getCell(14).value || '');
    ws.getRow(r).getCell(13).font = { ...boldFont, color: { argb: BLUE } };
    if (rec.includes('PRIORITY')) ws.getRow(r).getCell(14).fill = fill(GREEN);
    else if (rec.includes('REWORK')) ws.getRow(r).getCell(14).fill = fill(YELLOW);
    else if (rec.includes('REVIEW')) ws.getRow(r).getCell(14).fill = fill(RED);
  }

  const oldUpcoming = wb.getWorksheet('Upcoming Opportunities');
  if (oldUpcoming) wb.removeWorksheet(oldUpcoming.id);
  const up = wb.addWorksheet('Upcoming Opportunities', { views: [{ state: 'frozen', ySplit: 1, showGridLines: false }] });
  up.columns = [
    { header: 'Date', key: 'Date', width: 16 },
    { header: 'Opportunity', key: 'Opportunity', width: 30 },
    { header: 'Recommendation', key: 'Recommendation', width: 24 },
    { header: 'Client Decision Angle', key: 'Client Decision Angle', width: 58 },
    { header: 'Post Concept', key: 'Post Concept', width: 48 },
    { header: 'Format', key: 'Format', width: 22 },
    { header: 'CTA', key: 'CTA', width: 34 },
    { header: 'Notes', key: 'Notes', width: 54 },
  ];
  up.addRows([
    {
      Date: 'June 5, 2026',
      Opportunity: 'World Environment Day',
      Recommendation: 'Prepare light-touch post',
      'Client Decision Angle': 'Pipeline integrity protects the environment by preventing leaks before they become incidents.',
      'Post Concept': 'The most sustainable spill response is the one you never need.',
      Format: 'Single image or 3-slide mini-carousel',
      CTA: 'No hard CTA; first comment can link to pipeline integrity services.',
      Notes: 'UNEP confirms World Environment Day is June 5, 2026, hosted by Azerbaijan. Theme may need final official check before publishing.',
    },
    {
      Date: 'June 16/17, 2026',
      Opportunity: 'Islamic New Year 1448 AH',
      Recommendation: 'Prepare greeting post',
      'Client Decision Angle': 'Relationship and regional respect for KSA/Middle East audience.',
      'Post Concept': 'Wishing our partners, clients, and teams a blessed Hijri New Year.',
      Format: 'Single greeting graphic',
      CTA: 'No CTA.',
      Notes: 'Date varies by calendar/moon sighting. Umm al-Qura sources indicate June 16, other calendars show June 17. Confirm locally before scheduling.',
    },
    {
      Date: 'June 8, 2026',
      Opportunity: 'World Oceans Day',
      Recommendation: 'Optional if offshore focus',
      'Client Decision Angle': 'Offshore pipeline integrity protects marine environments.',
      'Post Concept': 'Offshore integrity is environmental protection before it becomes cleanup.',
      Format: 'Single image',
      CTA: 'No CTA.',
      Notes: 'Use only if it does not crowd the June technical calendar.',
    },
  ]);
  styleSheet(up);

  await wb.xlsx.writeFile(OUTPUT);
  console.log(OUTPUT);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});

// Step 2: Add Events 2026 sheet (no price). Save as V6.
const ExcelJS = require('exceljs');

const NAVY = 'FF0B1526', BLUE = 'FF1456A0', RULE = 'FF1B3A66', WHITE = 'FFFFFFFF', ALT = 'FFFAFBFD';

(async () => {
  const wb = new ExcelJS.Workbook();
  await wb.xlsx.readFile('C:\\Outreach\\ACME Integrity-2026-CONTENT-CALENDAR-V5.xlsx');

  // Remove existing Events sheet if any
  const existing = wb.getWorksheet('Events 2026');
  if (existing) wb.removeWorksheet(existing.id);

  const fillSolid = (c) => ({ type: 'pattern', pattern: 'solid', fgColor: { argb: c } });
  const border = { top: { style: 'thin', color: { argb: RULE } }, left: { style: 'thin', color: { argb: RULE } }, bottom: { style: 'thin', color: { argb: RULE } }, right: { style: 'thin', color: { argb: RULE } } };
  const headerFont = { bold: true, color: { argb: WHITE }, size: 11, name: 'Calibri' };
  const bodyFont = { size: 10, name: 'Calibri' };
  const wrapAlign = { vertical: 'top', wrapText: true };
  const centerAlign = { vertical: 'middle', horizontal: 'center', wrapText: true };

  const s = wb.addWorksheet('Events 2026', { views: [{ state: 'frozen', ySplit: 1, showGridLines: false }] });
  s.columns = [
    { header: 'Date', key: 'date', width: 18 },
    { header: 'Event', key: 'event', width: 50 },
    { header: 'Country', key: 'country', width: 14 },
    { header: 'ACME Integrity Role', key: 'role', width: 30 },
    { header: 'Team', key: 'team', width: 32 },
    { header: 'Status', key: 'status', width: 14 },
    { header: 'Notes', key: 'notes', width: 40 }
  ];
  const h = s.getRow(1);
  h.eachCell(c => { c.fill = fillSolid(NAVY); c.font = headerFont; c.alignment = centerAlign; c.border = border; });
  h.height = 30;

  // Chronological — only upcoming after today (Apr 28 2026). PTC Germany ending today included as "recap window".
  const events = [
    ['Apr 27–30', 'PTC Germany', 'DE', 'Booth + Technical Paper', 'Edwin, Paule, Katerina, Paper Author', 'Live now', 'Wraps Apr 30 — recap content immediately after'],
    ['May 4–7', 'OTC Houston', 'US', 'Awareness only', '—', 'Not attending', 'Industry signal post optional'],
    ['Jun 29 – Jul 3', 'Nigeria Oil & Gas Conference', 'NG', 'Option with MJD (local partner)', 'Abdullah', 'Pending decision', 'Confirm participation by early Jun'],
    ['Aug 27–28', 'PIPETECH 2026', 'IN', 'Booth + Option to present', 'Paritosh, Prateek, Harsh', 'Confirmed', 'India market — pair with India Independence Day post'],
    ['Sep 3–4', 'Angola Oil & Gas Conference', 'AO', 'Delegate', 'Abdullah', 'Confirmed', 'Africa expansion signal'],
    ['Sep 22', 'IPCE Canada', 'CA', 'Planned', 'Edwin, Joseph, Dr. Taher, Mekhail', 'Planned', 'Major event — high investment, plan content arc'],
    ['Oct 1', 'CORCON 2026', 'IN', 'Booth + Kit Sponsor', 'Paritosh, Prateek, Harsh', 'Confirmed', 'Premier corrosion event — sponsor visibility'],
    ['Oct 9', 'PRCI USA', 'US', 'B2B', 'Joseph', 'Confirmed', 'Operator-focused'],
    ['Oct 12–16', 'Africa Energy Week', 'ZA', 'Delegate', 'Abdullah', 'Confirmed', 'Same week as PRCI — split team'],
    ['Oct 21–22', 'Türkiye & Black Sea Oil & Gas', 'TR', 'Delegate', 'TBD', 'Confirmed', 'Regional access — Caspian/Black Sea operators'],
    ['Nov 9–12', 'ADIPEC Abu Dhabi', 'AE', 'Team + booth', 'MENA team', 'Confirmed', 'Largest ME event of the year'],
    ['Nov 24–26', 'PTC Malaysia', 'MY', 'Booth + Option to present', 'Paritosh, Bryan, Shufang (Jad/Yamen)', 'Confirmed', 'Asia-Pacific anchor event'],
    ['Dec 1–3', 'MSGBC Oil, Gas & Power', 'SN', 'Delegate', 'Abdullah', 'Confirmed', 'West Africa coverage']
  ];

  events.forEach((e, i) => {
    const row = s.addRow(e);
    row.eachCell(c => { c.font = bodyFont; c.alignment = wrapAlign; c.border = border; });
    row.getCell(1).font = { bold: true, size: 10, name: 'Calibri', color: { argb: BLUE } };
    row.getCell(1).alignment = centerAlign;
    row.getCell(3).alignment = centerAlign;
    row.getCell(6).alignment = centerAlign;
    if (e[5] === 'Live now') row.getCell(6).font = { bold: true, color: { argb: 'FFB00020' }, size: 10, name: 'Calibri' };
    else if (e[5] === 'Confirmed') row.getCell(6).font = { bold: true, color: { argb: 'FF2E7D32' }, size: 10, name: 'Calibri' };
    else if (e[5] === 'Planned') row.getCell(6).font = { bold: true, color: { argb: 'FFEF6C00' }, size: 10, name: 'Calibri' };
    if (i % 2 === 1) row.eachCell(c => { if (!c.fill || !c.fill.fgColor) c.fill = fillSolid(ALT); });
    row.height = 36;
  });

  // Move Events sheet to position 2 (right after Content Calendar)
  const order = ['Content Calendar', 'Events 2026', 'Reserve Carousels', 'Holidays & Events', 'Performance Tracking'];
  // exceljs reorders by adjusting orderNo
  order.forEach((name, idx) => {
    const ws = wb.getWorksheet(name);
    if (ws) ws.orderNo = idx;
  });

  await wb.xlsx.writeFile('C:\\Outreach\\ACME Integrity-2026-CONTENT-CALENDAR-V6.xlsx');
  console.log('V6 saved with Events 2026 sheet.');
})().catch(e => { console.error(e); process.exit(1); });

const ExcelJS = require('exceljs');
(async () => {
  const wb = new ExcelJS.Workbook();
  await wb.xlsx.readFile('C:\\Users\\mohamed.abdelghani\\OneDrive - ACME Integritygroup\\Desktop\\Files\\Events\\Event Cost\\Event Cost 2026 Updated - Copy.xlsx');
  wb.eachSheet((ws) => {
    console.log('\n===== SHEET: ' + ws.name + ' =====');
    ws.eachRow({ includeEmpty: false }, (row, rn) => {
      const vals = row.values.map(v => {
        if (v == null) return '';
        if (typeof v === 'object') {
          if (v.text) return v.text;
          if (v.result !== undefined) return v.result;
          if (v instanceof Date) return v.toISOString().slice(0, 10);
          return JSON.stringify(v);
        }
        return v;
      });
      console.log(rn + ': ' + vals.slice(1).join(' | '));
    });
  });
})().catch(e => { console.error(e); process.exit(1); });

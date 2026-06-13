// ═══════════════════════════════════════════════════════════════════
// GOOGLE APPS SCRIPT — Paste this into your Google Sheet's Apps Script editor
// ═══════════════════════════════════════════════════════════════════
// STEPS:
// 1. Open your Google Sheet: https://docs.google.com/spreadsheets/d/1ijfskeGLuG_Z9RnrzBusDUnr1o7mOIDR_EQawq2F_Gk/edit
// 2. Go to Extensions → Apps Script
// 3. Delete any starter code and paste THIS entire script
// 4. Click Deploy → New deployment
//    - Type: "Web app"
//    - Execute as: Me
//    - Who has access: Anyone
// 5. Click "Deploy" and authorize when prompted
// 6. Copy the Web App URL it gives you
// 7. Paste that URL into index.html where it says 'YOUR_GOOGLE_APPS_SCRIPT_URL_HERE'
// ═══════════════════════════════════════════════════════════════════

function doPost(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Sheet1');
  var data = JSON.parse(e.postData.contents);
  var headers = [
    "Submission Date",
    "First Name",
    "Last Name",
    "Email",
    "WhatsApp Number",
    "Country",
    "City",
    "Profession",
    "Age Range",
    "Selected Track",
    "Main Goal",
    "AI Knowledge Level",
    "Tools Known",
    "Specific Goal",
    "Preferred Sessions",
    "Device",
    "Referral Source",
    "Payment Ready",
    "Questions or Notes"
  ];

  // Add headers if sheet is empty
  if (sheet.getRange(1, 1).getValue() === "") {
    sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
    sheet.getRange(1, 1, 1, headers.length).setFontWeight("bold");
  }

  var row = headers.map(function(h) { return data[h] || ""; });
  sheet.appendRow(row);

  return ContentService.createTextOutput(JSON.stringify({ result: "success" }))
    .setMimeType(ContentService.MimeType.JSON);
}

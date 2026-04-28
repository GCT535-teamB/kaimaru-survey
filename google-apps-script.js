// ============================================================
// Google Apps Script - Survey Response Handler
// ============================================================
// Setup Instructions:
//
// 1. Go to Google Sheets (sheets.google.com) and create a new spreadsheet
// 2. Name it "Kaimaru Survey Responses"
// 3. Go to Extensions > Apps Script
// 4. Delete any existing code and paste this entire file
// 5. Click "Deploy" > "New deployment"
// 6. Select type: "Web app"
// 7. Set "Execute as": Me
// 8. Set "Who has access": Anyone
// 9. Click "Deploy" and authorize
// 10. Copy the Web App URL and paste it into index.html as GOOGLE_SCRIPT_URL
//
// ============================================================

function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var data = JSON.parse(e.postData.contents);

    // Set up headers on first run
    if (sheet.getLastRow() === 0) {
      var headers = [
        'Timestamp',
        'Presentation Order',
        'Before - Pleasant',
        'Before - Chaotic',
        'Before - Vibrant',
        'Before - Uneventful',
        'Before - Calm',
        'Before - Annoying',
        'Before - Eventful',
        'Before - Monotonous',
        'Before - Unique to Kaimaru',
        'Before - Overall',
        'After - Pleasant',
        'After - Chaotic',
        'After - Vibrant',
        'After - Uneventful',
        'After - Calm',
        'After - Annoying',
        'After - Eventful',
        'After - Monotonous',
        'After - Unique to Kaimaru',
        'After - Overall',
      ];
      sheet.appendRow(headers);
    }

    var row = [
      data.timestamp,
      data.order,
      data.before_pleasant,
      data.before_chaotic,
      data.before_vibrant,
      data.before_uneventful,
      data.before_calm,
      data.before_annoying,
      data.before_eventful,
      data.before_monotonous,
      data.before_unique_to_kaimaru,
      data.before_overall,
      data.after_pleasant,
      data.after_chaotic,
      data.after_vibrant,
      data.after_uneventful,
      data.after_calm,
      data.after_annoying,
      data.after_eventful,
      data.after_monotonous,
      data.after_unique_to_kaimaru,
      data.after_overall,
    ];

    sheet.appendRow(row);

    return ContentService.createTextOutput(
      JSON.stringify({ status: 'success' })
    ).setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    return ContentService.createTextOutput(
      JSON.stringify({ status: 'error', message: error.toString() })
    ).setMimeType(ContentService.MimeType.JSON);
  }
}

// Test function - run this in Apps Script editor to verify setup
function doGet() {
  return ContentService.createTextOutput(
    'Kaimaru Survey API is running!'
  );
}

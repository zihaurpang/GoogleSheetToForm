// Convert the whole sheet to one form
function convertSheetToForm() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var rows = sheet.getDataRange().getValues();
  var form = FormApp.create('New Form'); // Name of the sheet

  rows.forEach(function(row, index){
    if(index > 0) { // Assuming the first row is headers
      var item = form.addGridItem();
      item.setTitle(row[1]) // Your context
          .setRequired(row[3]) // Required
          .setRows([row[4], row[5], row[6], row[7]]) // Metrics
          .setColumns([row[8], row[9]]); // Options
    }
  });
}



// Convert each sheet to one form
function convertSheetsToForms() {
  var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  var sheets = spreadsheet.getSheets(); // Get all sheets

  sheets.forEach(function(sheet) {
    var sheetName = sheet.getName(); // Get the sheet name
    var form = FormApp.create(sheetName); // Create a new form with the sheet name
    var rows = sheet.getDataRange().getValues(); // Get all data from the sheet

    rows.forEach(function(row, index){
      if(index > 0) { // Assuming the first row is headers
        var item = form.addGridItem();
        item.setTitle(row[1]) // Your context
            .setRequired(row[2]) // Required
            .setRows([row[3], row[4], row[5], row[6]]) // Metrics
            .setColumns([row[7], row[8]]); // Options
      }
    });
  });
}


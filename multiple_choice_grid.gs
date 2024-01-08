function convertSheetToForm() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var rows = sheet.getDataRange().getValues();
  var form = FormApp.create('New Form');

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

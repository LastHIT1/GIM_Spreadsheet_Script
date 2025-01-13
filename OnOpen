//Used to test New Programs for OnEdit.
//Used to check any changes to a certain sheet if needed

function onOpen() {
  var sheetNamesToCheck = []; // List of sheet names I want to check
  var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();

  // Loop through each specified sheet
  sheetNamesToCheck.forEach(function(sheetName) {
    var sheet = spreadsheet.getSheetByName(sheetName); // Get the sheet by name

    if (sheet) {
      var lastRow = sheet.getLastRow(); // Get the last row with data in column A

      for (var row = 1; row <= lastRow; row++) {
        var category = sheet.getRange(row, 1).getValue(); // Get the value in column A

        if (category) {
          // Create a mock event object to simulate onEdit
          var event = {
            range: sheet.getRange(row, 1), // Simulate the edit in column A
            source: spreadsheet,
            sheet: sheet // Reference the current sheet being processed
          };
          onEdit(event); // Call onEdit with the simulated event object
        }
      }
    }
  });
}

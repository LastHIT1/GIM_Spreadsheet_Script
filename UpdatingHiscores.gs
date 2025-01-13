//Retrieve an updated reference to each accounts skills.
//If you want to apply this to your sheets, be sure to change the name of the sheet you want to use
//As well, as the cells you want to reference to.

function HiscoreRefresh() {
  var spreadsheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Data');
  var cellReference = ['C9','I9', 'O9', 'U9'];

  cellReference.forEach(function(cellRef){
    var cellRange = spreadsheet.getRange(cellRef);
    if(!cellRange.getFormula()){
      cellRange.setValue(cellRange.getValue ());
    }
  });

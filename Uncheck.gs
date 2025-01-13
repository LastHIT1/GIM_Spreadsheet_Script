//Used as a trigger to reset any daily, weekly, or monthly checks that need to be reset automatically.

function unCheck() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var daily = ss.getSheetByName("ShopRun");
  
  // Define the ranges you want to uncheck
  var rangesToUnlock = [
    daily.getRange("P4:S14"),
    daily.getRange("K16:N24")
  ];
  
  // Loop through each range
  for (var i = 0; i < rangesToUnlock.length; i++) {
    var rangeToUnlock = rangesToUnlock[i];
    var values = rangeToUnlock.getValues();  // Get current values of the range
    
    // Loop through the values and set them to false (uncheck)
    for (var row = 0; row < values.length; row++) {
      for (var col = 0; col < values[row].length; col++) {
        values[row][col] = false;  // Set each checkbox to false (unchecked)
      }
    }
    
    // Set the modified values back to the range
    rangeToUnlock.setValues(values);
  }
}

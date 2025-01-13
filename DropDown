//Used to check if someone wants to check a skill for their account
//By typing in Column A it checks in input to know if it needs to create a dropdown, or do nothing
//Still need to fix a bug where when there is already a function being callined on lets say row A
// it would check the inputs in certain other cells in that row that should not be looked at. 
//Just need to do some input validation later.


function onEdit(e) {
  if (!e) return;

  var sheet = e.source.getActiveSheet();
  var editedCell = e.range;
  var editedRow = editedCell.getRow();
  var name = sheet.getRange("A1").getValue(); // Get value from A1 (Name)
  var category = sheet.getRange(editedRow, 1).getValue().toLowerCase(); // Get value from Column A
  var selectedSkill = sheet.getRange(editedRow, 2).getValue().toLowerCase(); // Always get value from Column B
  var targetLevel = parseInt(sheet.getRange(editedRow, 3).getValue(), 10); // Fetch target level from Column C
  
  Logger.log(`Edited Cell: ${editedCell.getA1Notation()}, Category: ${category}, Selected Skill: ${selectedSkill}`);

  // Handle 'invention' separately with an early return
  if (category === "invention") {
    Logger.log("Calling Goals function for Invention...");
    var inventionFormula = `=goals("${name}", "${category}")`;
    sheet.getRange(editedRow, editedCell.getColumn() + 1).setFormula(inventionFormula);
    return; // Skip the rest of the logic for 'invention'
  }
  if (category === "prif") {
    Logger.log("Calling Goals function for Invention...");
    var prifFormula = `=goals("${name}", "${category}")`;
    sheet.getRange(editedRow, editedCell.getColumn() + 1).setFormula(prifFormula);
    return; // Skip the rest of the logic for 'invention'
  }

  // Set the range for the adjacent cell based on the category selected for 'skills' and 'xptarget'
  if (category === "skills" || category === "xptarget") {
    var range = "Data!B11:B39";  // Shared named range for Skills and XPTarget
    Logger.log(`Setting data validation for Column B with range: ${range}`);
    
    // Set data validation for Column B
    sheet.getRange(editedRow, 2).setDataValidation(
      SpreadsheetApp.newDataValidation()
        .requireValueInRange(SpreadsheetApp.getActiveSpreadsheet().getRange(range), true)
        .build()
    );
  }

  // Handle Column A edits (Category Selection)
  if (editedCell.getColumn() === 1) {
    if (category === "") { // Clear content if no category is selected
      Logger.log("Clearing content for columns B to D");
      sheet.getRange(editedRow, 2, 1, 3).clearDataValidations();
      sheet.getRange(editedRow, 2, 1, 3).clearContent();
    }
  }

  // Handle Column B edits (Skill or XPTarget Selection)
  if (editedCell.getColumn() === 2) {
    if (category === 'xptarget'){
      sheet.getRange(editedRow, 3).setValue("Input Target XP");
      sheet.getRange(editedRow, 3).clearDataValidations();
    }
    if(category === 'skills'){
      Logger.log("Setting level dropdown in Column C");
      var levelRange = sheet.getRange("Data!B45:B164").getValues(); // Get level data from the range
      var levelCell = sheet.getRange(editedRow, 3);
      levelCell.setDataValidation(

      SpreadsheetApp.newDataValidation()
        .requireValueInList(levelRange.flat(), true) // Flatten to single array
        .build()
      );
    } 
  }
  //Handle Column C edits (Target Level)
  if (editedCell.getColumn() === 3 && targetLevel) { 
    Logger.log("Setting formula in Column D based on selected skill and target level");
    if (category === "xptarget") {
      Logger.log(`Preparing to call goals() with parameters: Name: "${name}", Category: "${category}", Selected Skill: "${selectedSkill}", Target Level: ${targetLevel}`);
    }
    var formula = `=goals("${name}", "${category}", "${selectedSkill}", ${targetLevel})`;
    sheet.getRange(editedRow, editedCell.getColumn() + 1).setFormula(formula);
  }
}

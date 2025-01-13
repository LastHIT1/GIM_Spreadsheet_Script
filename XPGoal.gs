//Check for another goal type that grabs the provided information to create the progress of the goal

function xpGoal(member, spreadsheet, selectedSkill, target) {
  var specificRow = member.goals[selectedSkill].specificRow[0];
  var column = String.fromCharCode(member.column.charCodeAt(0) -1) ;
  var progressArray = [];

  var cellValue = spreadsheet.getRange(specificRow, column.charCodeAt(0) - 64).getValue();
  Logger.log("Value at Row " + specificRow + " for " + member.name + ": " + cellValue);

  var xpProgress = Math.min((cellValue/target) * 100, 100);
  var xpRemaining = cellValue - target;

  progressArray.push([selectedSkill.toUpperCase(), xpProgress.toFixed(2) + "%", xpRemaining]);

  Logger.log("Progress Array: " + JSON.stringify(progressArray));

  var finalProgressArray = createProgressBar(progressArray, target);
  Logger.log("Final Progress Array: " + JSON.stringify(finalProgressArray));

  return finalProgressArray;

}

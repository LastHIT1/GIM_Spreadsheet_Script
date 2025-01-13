//Check the skill and all the params being psased to create pass them towards creating the progress bar

function skillGoal(member, spreadsheet, selectedSkill, target) {
  var specificRow = member.goals[selectedSkill].specificRow[0];
  var column = member.column;
  var progressArray = [];

  var cellValue = spreadsheet.getRange(specificRow, column.charCodeAt(0) - 64).getValue();
  Logger.log("Value at Row " + specificRow + " for " + member.name + ": " + cellValue);

  var skillProgress = Math.min((cellValue/target) * 100, 100);
  progressArray.push([selectedSkill.toUpperCase(), skillProgress]);

  Logger.log("Progress Array: " + JSON.stringify(progressArray));

  var finalProgressArray = createProgressBar(progressArray, target);
  Logger.log("Final Progress Array: " + JSON.stringify(finalProgressArray));

  return finalProgressArray;

}

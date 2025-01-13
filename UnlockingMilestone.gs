//Constantly changing milestones. To make any changes, you only need to add a new list of what you want to check.
//This program replaces GoalHandler, to allow simpler execution for checking your goals.


function unlockMilestone(member, spreadsheet, lvlTarget, milestone = 0) {
  var column = member.column;
  var specificRows = [];
  
  var actualSum = 0;
  var inventionNames = ["Crafting", "Smithing", "Divination"];
  var prifNames = ["Agility", "Construction", "Crafting", "Dungeoneering", "Herblore", "Mining", "Prayer", "Range", "Summoning", "Woodcutting"];
  var progressArray = [];

  var usingSkills = (milestone == 1) ? inventionNames:
                    (milestone == 2) ? prifNames:
                    undefined;

  usingSkills.forEach(function(skill) {
    // Check if the skill exists in the member's goals
    if (member.goals[skill.toLowerCase()]) {
      specificRows = specificRows.concat(member.goals[skill.toLowerCase()].specificRow);
    }
  });
  var totalGoal = usingSkills.length * lvlTarget;

  // Grabbing the levels from the respective skill and person
  specificRows.forEach(function (row, index) {
    var cellValue = spreadsheet.getRange(row, column.charCodeAt(0) - 64).getValue();
    Logger.log("Value at Row " + row + " for " + member.name + ": " + cellValue);

    if (cellValue > lvlTarget) cellValue = lvlTarget;  // Prevent overcalculation

    // Calculate percentage and store it
    actualSum += cellValue;
    Logger.log("Using names " + usingSkills + "lvlTarget " + lvlTarget);
    var skillProgress = (cellValue / lvlTarget) * 100;
    progressArray.push([usingSkills[index], skillProgress]);
  });

  // Calculate and log overall progress
  var overallProgress = Math.min((actualSum / totalGoal) * 100, 100);
  progressArray.push(["Overall Progress", overallProgress]);

  Logger.log("Progress Arrayblah: " + JSON.stringify(progressArray));
  // Call createProgressBar and return the result
  var finalProgressArray = createProgressBar(progressArray, totalGoal);
  Logger.log("Final Progress Array: " + JSON.stringify(finalProgressArray));

  //return final array
  return finalProgressArray;
}

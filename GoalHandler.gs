//Function to handle all goals for skills we are looking to train.
//I still need to update this for future use to ensure that the over calculation is not limited
//to 80, instead only one use

//THIS CODE IS NO LONGER BEING USED.

function handleGoal(member, goalType) {
  const goal = members[member]?.goals[goalType];

  if (!goal) {
    Logger.log(`${goalType} is not a valid goal type for ${member}`);
    return;
  }

  // Process the goal and calculate progress
  const { specificRows, skills, totalGoal } = goal;
  const column = members[member].column;
  let actualSum = 0;
  const progressArray = [];
  
  specificRows.forEach((row, index) => {
    let cellValue = spreadsheet.getRange(row, column.charCodeAt(0) - 64).getValue();
    
    cellValue = Math.min(cellValue, 80); // Avoid over-calculation
    actualSum += cellValue;
    const skillProgress = (cellValue / 80) * 100;
    progressArray.push([skills[index], skillProgress]);
  });
  
  const overallProgress = Math.min((actualSum / totalGoal) * 100, 100);
  progressArray.push(["Overall Progress", overallProgress]);

  return progressArray;
}

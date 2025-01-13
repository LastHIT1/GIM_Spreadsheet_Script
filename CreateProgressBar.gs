//Used to generate a new progress bar for the stat I am checking
//Might update this program in the future to make the progress bar more visually pleasing
//I am not using already defined functions as I have had many bugs while to implement them
//Instead I am this program so I know how to pass the parameters to ensure that the progress bars works correctly

function createProgressBar(skillDataArray, totalGoal) {
  var progressArray = [];
  var actualSum = 0; // Track the sum for overall progress

  skillDataArray.forEach(function(data) {
    var skillProgress = parseFloat(data[1]);
    actualSum += skillProgress;

    // Create the progress bar
    var filledBlocks = "█".repeat(Math.floor(skillProgress / 10));
    var unfilledBlocks = "░".repeat(Math.max(0, 10 - filledBlocks.length));
    var progressBar = filledBlocks + unfilledBlocks;

    // Push skill info as the first row
    progressArray.push([data[0], progressBar, skillProgress.toFixed(2) + "%"]);

    // Push XP remaining
    if (data[2] !== undefined) {
        Logger.log(`Pushing: ${data[0]}, XP Progress: ${data[1]}, XP Remaining: ${data[2]}`);
        progressArray.push([data[2], "XP Remaining"]); // No percentage here
    }
  });

  if (skillDataArray.length > 1) {
    // Calculate overall progress
    var overallProgress = Math.min((actualSum / totalGoal) * 100, 100); // Cap overall progress at 100%

    // Create the overall progress bar
    var overallFilledBlocks = "█".repeat(Math.floor(overallProgress / 10));
    var overallUnfilledBlocks = "░".repeat(Math.max(0, 10 - Math.ceil(overallProgress / 10))); // Ensure proper count of filled blocks
    var overallProgressBar = overallFilledBlocks + overallUnfilledBlocks;

    // Add overall progress only if it's not already present
    if (progressArray.findIndex(item => item[0] === "Overall Progress") === -1) {
      progressArray.push(["Overall Progress", overallProgressBar, overallProgress.toFixed(2) + "%"]);
    }
  }

  Logger.log("Final Progress Array: " + JSON.stringify(progressArray));
  return progressArray; // Return the populated progress array
}

//Process the Skill goals the member wants to check


function Goals(name, goalType, selectedSkill, target) {
//validate parameters dynamically
var params = [name, goalType, selectedSkill, target];
var expectedType = ['string', 'string', 'string', 'number'];
var providedParams = params.filter(p => p != undefined);
var providedTypes = expectedType.slice(0, providedParams.length);

//check if params are valid
if(!validateParams(providedParams, providedTypes)) return;
Logger.log("Valid params! Now processing the logic...");

//Retrieve the 'Data' sheet
var spreadsheet = getSpreadsheetSheet('Data');
if(!spreadsheet) return;

//Normalize name
var normalizedName = name.toUpperCase();
var member = members[normalizedName]

//check if name exists in 'members' object
if(!member){
  Logger.log("Invalid name. Please use one of the idiots");
  return member + " is not a valid name";
}

if(goalType.toLowerCase() == 'skills'){
  var defaultTarget = member.goals[selectedSkill.toLowerCase()].defaultTarget[0];
  target = target || defaultTarget;  
  
  return skillGoal(member, spreadsheet, selectedSkill.toLowerCase(), target);
}
if(goalType.toLowerCase() == 'xptarget'){
  target = Math.min(target || 200000000, 200000000);

  return xpGoal(member, spreadsheet, selectedSkill.toLowerCase(), target);
}
if (goalType.toLowerCase() == "invention"){
  return unlockMilestone(member, spreadsheet, 80, 1);
}if (goalType.toLowerCase() == "prif"){
  return unlockMilestone(member, spreadsheet, 75, 2);
}else{
  return goalType + " is not a valid goal type.";
}
}


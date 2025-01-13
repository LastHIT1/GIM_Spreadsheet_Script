//This code is not to do with any goals for the member,
//Instead it is used to update certain calls within the spreadsheet that google sheets does not provide

function getUpdatedMembersQuestData() {
    var results = [];
    
    for (var key in members) {
        if (members.hasOwnProperty(key)) {
            var member = members[key];
            var characterName = member.characterName; // Get the character name
            
            // Fetch member data
            var memberData = getQuestData(characterName);
            
            // Assuming quests are in memberData.quests
            //var questData = memberData.quests; 
            
            // Parse quest data and combine with member name
            var parsedData = parseQuestData(memberData, characterName);

            results.push([member.name]); // Add player name
            
            // Combine parsed data into results
            for (var i = 0; i < parsedData.length; i++) {
                results.push(parsedData[i]);
            }
        }
    }
    
    return results; // Return results to the sheet
}

function getUpdatedMemberActivities(){
  var results = [];

  for (var key in members) {
    if (members.hasOwnProperty(key)) {
      var member = member[key];
      var characterName = member.characterName;

      var memberData = getActivitiesData(characterName);

      var activitiesData = memberData.activities;

      var parsedData = parseActivitiesData(activitiesData, member.name);
      //fix everything under this

      results.push([member.name]);

      for (var i = 0; i < parsedData.length; i++){
        results.push(parsedData[i]);
      }
    }
  }

  return results;
}

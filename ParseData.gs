function parseQuestData(quests, characterName) {
    var totalQuestPointsEarned = 0;
    var totalQuestPointsAvailable = 0;
    var membersPoints = getQuestList(characterName);

    for (var i = 0; i < membersPoints.quests.length; i++) {
            var quest = membersPoints.quests[i];

            // Accumulate total quest points available
            totalQuestPointsAvailable += quest.questPoints;

            // Check if the quest status is "COMPLETED"
            if (quest.status === "COMPLETED") {
                totalQuestPointsEarned += quest.questPoints; // Accumulate earned points
            }
        }
    // Return a two-dimensional array for Google Sheets, including the character name
    return [
        ["Completed:", quests.questscomplete],
        ["Started:", quests.questsstarted],
        ["Unstarted:", quests.questsnotstarted],
        ["Total Quest Points Earned:", totalQuestPointsEarned],
        ["Total Quest Points Available:", totalQuestPointsAvailable]
    ];
}

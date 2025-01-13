function getQuestData(characterName) {
    var baseUrl = "https://apps.runescape.com/runemetrics/profile?user=";
    var encodedName = encodeURIComponent(characterName);
    var url = baseUrl + encodedName;

    var response = UrlFetchApp.fetch(url);
    var json = JSON.parse(response.getContentText());
    Logger.log('This the url I am passing' + url);
    return json; // Return the parsed JSON data
}

function getQuestList(characterName){
    var baseUrl = "https://apps.runescape.com/runemetrics/quests?user=";
    var encodedName = encodeURIComponent(characterName);
    var url = baseUrl + encodedName;

    var response = UrlFetchApp.fetch(url);
    var json = JSON.parse(response.getContentText());
    Logger.log('This the url I am passing' + url);
    return json; // Return the parsed JSON data
}

function getActivitiesData(characterName){
  var baseUrl = "https://apps.runescape.com/runemetrics/profile?user="
  var encodedName = encodeURIComponent(characterName);
  var url = baseUrl + encodedName + "&activities=20";

  var response = UrlFetchApp.fetch(url);
    var json = JSON.parse(response.getContentText());
    Logger.log('This the url I am passing' + url);
    return json; // Return the parsed JSON data
}

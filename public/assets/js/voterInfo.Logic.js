
var apiKey = "AIzaSyBrfhaXuxlhvsFte5DxfvyiDe5gjYrxj20"
    
var queryURL = "https://www.googleapis.com/civicinfo/v2/voterinfo?key=" + apiKey + "&address=%85Grant%20St.%20Denver%20CO&electionId=2000"

$.ajax({
    url: queryURL,
    method: "GET"
}).then(function (data) {
    console.log(data); 
    console.log(data.contests[0].office)
    console.log(data.contests[0].candidates[0].name + " " + "Party: " + data.contests[0].candidates[0].party)

    console.log(data.contests[1].office)
    console.log(data.contests[1].candidates[0].name + " " + "Party: " + data.contests[0].candidates[0].party)

    console.log(data.contests[2].office)
    console.log(data.contests[2].candidates[0].name + " " + "Party: " + data.contests[0].candidates[0].party)

    console.log(data.contests[3].office)
    console.log(data.contests[3].candidates[0].name + " " + "Party: " + data.contests[0].candidates[0].party)

    console.log(data.contests[4].office)
    console.log(data.contests[4].candidates[0].name + " " + "Party: " + data.contests[0].candidates[0].party)

    // data0
    $(".data0").html(JSON.stringify(data.contests[0].office));
    $(".data0A").html(JSON.stringify(data.contests[0].candidates[0].name));
    $(".data0B").html(JSON.stringify(data.contests[0].candidates[1].name));
    $(".data0PartyA").html(JSON.stringify("Party: " + data.contests[0].candidates[0].party));
    $(".data0PartyB").html(JSON.stringify("Party: " + data.contests[0].candidates[1].party));
    // data1
    $(".data1").html(JSON.stringify(data.contests[1].office));
    $(".data1A").html(JSON.stringify(data.contests[1].candidates[0].name));
    $(".data1B").html(JSON.stringify(data.contests[1].candidates[1].name));
    $(".data1PartyA").html(JSON.stringify("Party: " + data.contests[0].candidates[0].party));
    $(".data1PartyB").html(JSON.stringify("Party: " + data.contests[0].candidates[1].party));
    // data2
    $(".data2").html(JSON.stringify(data.contests[2].office));
    $(".data2A").html(JSON.stringify(data.contests[2].candidates[0].name));
    $(".data2B").html(JSON.stringify(data.contests[2].candidates[1].name));
    $(".data2PartyA").html(JSON.stringify("Party: " + data.contests[0].candidates[0].party));
    $(".data2PartyB").html(JSON.stringify("Party: " + data.contests[0].candidates[1].party));
    // data3
    $(".data3").html(JSON.stringify(data.contests[3].office));
    $(".data3A").html(JSON.stringify(data.contests[3].candidates[0].name));
    $(".data3B").html(JSON.stringify(data.contests[3].candidates[1].name));
    $(".data3PartyA").html(JSON.stringify("Party: " + data.contests[3].candidates[0].party));
    $(".data3PartyB").html(JSON.stringify("Party: " + data.contests[3].candidates[1].party));
    // data4
    $(".data4").html(JSON.stringify(data.contests[4].office));
    $(".data4A").html(JSON.stringify(data.contests[4].candidates[0].name));
    $(".data4B").html(JSON.stringify(data.contests[4].candidates[1].name));
    $(".data4PartyA").html(JSON.stringify("Party: " + data.contests[4].candidates[0].party));
    $(".data4PartyB").html(JSON.stringify("Party: " + data.contests[4].candidates[1].party));
    // data5
    $(".data5").html(JSON.stringify(data.contests[5].office));
    $(".data5A").html(JSON.stringify(data.contests[5].candidates[0].name));
    $(".data5B").html(JSON.stringify(data.contests[5].candidates[1].name));
    $(".data5PartyA").html(JSON.stringify("Party: " + data.contests[5].candidates[0].party));
    $(".data5PartyB").html(JSON.stringify("Party: " + data.contests[5].candidates[1].party));
    // data6
    $(".data6").html(JSON.stringify(data.contests[6].office));
    $(".data6A").html(JSON.stringify(data.contests[6].candidates[0].name));
    $(".data6B").html(JSON.stringify(data.contests[6].candidates[1].name));
    $(".data6PartyA").html(JSON.stringify("Party: " + data.contests[6].candidates[0].party));
    $(".data6PartyB").html(JSON.stringify("Party: " + data.contests[6].candidates[1].party));
    // data7
    // $(".data7").html(JSON.stringify(data.contests[7].office));
    // $(".data7A").html(JSON.stringify(data.contests[7].candidates[0].name));
    // $(".data7B").html(JSON.stringify(data.contests[7].candidates[1].name));
    // $(".data7PartyA").html(JSON.stringify("Party: " + data.contests[7].candidates[0].party));
    // $(".data7PartyB").html(JSON.stringify("Party: " + data.contests[7].candidates[1].party));
    // // data8
    // $(".data8").html(JSON.stringify(data.contests[8].office));
    // $(".data8A").html(JSON.stringify(data.contests[8].candidates[0].name));
    // $(".data8B").html(JSON.stringify(data.contests[8].candidates[1].name));
    // $(".data8PartyA").html(JSON.stringify("Party: " + data.contests[8].candidates[0].party));
    // $(".data8PartyB").html(JSON.stringify("Party: " + data.contests[8].candidates[1].party));
    // // data9
    // $(".data9").html(JSON.stringify(data.contests[9].office));
    // $(".data9A").html(JSON.stringify(data.contests[9].candidates[0].name));
    // $(".data9B").html(JSON.stringify(data.contests[9].candidates[1].name));
    // $(".data9PartyA").html(JSON.stringify("Party: " + data.contests[9].candidates[0].party));
    // $(".data9PartyB").html(JSON.stringify("Party: " + data.contests[9].candidates[1].party));
    // // data10
    // $(".data10").html(JSON.stringify(data.contests[10].office));
    // $(".data10A").html(JSON.stringify(data.contests[10].candidates[0].name));
    // $(".data10B").html(JSON.stringify(data.contests[10].candidates[1].name));
    // $(".data10PartyA").html(JSON.stringify("Party: " + data.contests[10].candidates[0].party));
    // $(".data10PartyB").html(JSON.stringify("Party: " + data.contests[10].candidates[1].party));
    // // data11
    // $(".data11").html(JSON.stringify(data.contests[11].office));
    // $(".data11A").html(JSON.stringify(data.contests[11].candidates[0].name));
    // $(".data11B").html(JSON.stringify(data.contests[11].candidates[1].name));
    // $(".data11PartyA").html(JSON.stringify("Party: " + data.contests[11].candidates[0].party));
    // $(".data11PartyB").html(JSON.stringify("Party: " + data.contests[11].candidates[1].party));
function lookup(address, callback) {
/**
  * Election ID for which to fetch voter info.
  * @type {number}
  */
 var electionId = 2000;

 /**
  * Request object for given parameters.
  * @type {gapi.client.HttpRequest}
  */
 var req = gapi.client.request({
     'path' : '/civicinfo/v2/voterinfo',
     'params' : {'electionId' : electionId, 'address' : address}
 });
req.execute(callback);
}
     /**
   * Render results in the DOM.
   * @param {Object} response Response object returned by the API.
   * @param {Object} rawResponse Raw response from the API.
   */
  function renderResults(response, rawResponse) {
    var el = document.getElementById('results');
    if (!response || response.error) {
      el.appendChild(document.createTextNode(
          'Error while trying to fetch polling place'));
      return;
    }
    var normalizedAddress = response.normalizedInput.line1 + ' ' +
        response.normalizedInput.city + ', ' +
        response.normalizedInput.state + ' ' +
        response.normalizedInput.zip;
    if (response.pollingLocations.length > 0) {
      var pollingLocation = response.pollingLocations[0].address;
      var pollingAddress = pollingLocation.locationName + ', ' +
          pollingLocation.line1 + ' ' +
          pollingLocation.city + ', ' +
          pollingLocation.state + ' ' +
          pollingLocation.zip;
      var normEl = document.createElement('strong');
      normEl.appendChild(document.createTextNode(
          'Polling place for ' + normalizedAddress + ': '));
      el.appendChild(normEl);
      el.appendChild(document.createTextNode(pollingAddress));
    } else {
      el.appendChild(document.createTextNode(
          'Could not find polling place for ' + normalizedAddress));
    }
  }

  /**
   * Initialize the API client and make a request.
   */
  function load() {
    gapi.client.setApiKey('YOUR API KEY GOES HERE');
    lookup('1263 Pacific Ave. Kansas City KS', renderResults);
  }
})
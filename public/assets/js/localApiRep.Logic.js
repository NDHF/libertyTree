$(document).ready(function () {

    // var street="58%20Grant%20St.%20";
    // var city= "Denver%20";
    // var state="CO";
        var apiKey = "AIzaSyBrfhaXuxlhvsFte5DxfvyiDe5gjYrxj20"
    
    var queryURL = "https://www.googleapis.com/civicinfo/v2/representatives?key=" + apiKey + "&address=%85Grant%20St.%20Denver%20CO&electionId=2000"
    
    // var queryURL = "https://www.googleapis.com/civicinfo/v2/representatives?key=" + apiKey + "&address="+ street + city + state + "&electionId=2000"
    
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (data) {
        console.log(data.offices[0].name + ": " + data.officials[0].name); 
        console.log(data.offices[1].name + ": " + data.officials[1].name);
        console.log(data.offices[2].name + " (Republican)" + ": " + data.officials[3].name);
        console.log(data.offices[2].name+ " (Democrat)" + ": " + data.officials[2].name);
        console.log(data.offices[4].name + ": " + data.officials[5].name);
        console.log(data.offices[5].name + ": " + data.officials[6].name);
        console.log(data.offices[7].name + ": " + data.officials[7].name);
        console.log(data.offices[8].name + ": " + data.officials[9].name);
        console.log(data.offices[23].name + ": " + data.officials[25].name);
        console.log("data.offices:") 
        console.log(data.offices);
        console.log("data.officials:");
        console.log(data.officials);
    
        $(".data0").html(JSON.stringify(data.offices[0].name + ": " + data.officials[0].name));
    $(".data0Party").html(JSON.stringify("Political Party: " + data.officials[0].party));
     $(".data0Link").html(JSON.stringify("Link to website: (" +  data.officials[0].urls + ")")); 

    $(".data1").html(JSON.stringify(data.offices[1].name + ": " + data.officials[1].name));
    $(".data1Party").html(JSON.stringify("Political Party: " + data.officials[1].party));
    $(".data1Link").html(JSON.stringify("Link to website: (" +  data.officials[1].urls + ")"));

    $(".data2").text(JSON.stringify(data.offices[2].name + " (Republican)" + ": " + data.officials[3].name));
    $(".data2Party").html(JSON.stringify("Political Party: " + data.officials[3].party));
     $(".data2Link").html(JSON.stringify("Link to website: (" +  data.officials[3].urls + ")"));

    $(".data3").text(JSON.stringify(data.offices[2].name+ " (Democrat)" + ": " + data.officials[2].name));
    $(".data3Party").html(JSON.stringify("Political Party: " + data.officials[2].party));
     $(".data3Link").html(JSON.stringify("Link to website: (" +  data.officials[2].urls + ")"));

    $(".data4").text(JSON.stringify(data.offices[4].name + ": " + data.officials[5].name));
    $(".data4Party").html(JSON.stringify("Political Party: " + data.officials[5].party));
     $(".data4Link").html(JSON.stringify("Link to website: (" +  data.officials[5].urls + ")"));

    $(".data5").text(JSON.stringify(data.offices[5].name + ": " + data.officials[6].name));
    $(".data5Party").html(JSON.stringify("Political Party: " + data.officials[6].party));
    $(".data5Link").html(JSON.stringify("Link to website: (" +  data.officials[6].urls + ")"));

    // $(".data6").text(JSON.stringify(data.offices[6].name + ": " + data.officials[6].name));
    $(".data6").text(JSON.stringify(data.offices[6].name + ": " + data.officials[7].name));
    $(".data6Party").html(JSON.stringify("Political Party: " + data.officials[7].party));
    $(".data6Link").html(JSON.stringify("Link to website: (" +  data.officials[7].urls + ")"));

    // $(".data8").text(JSON.stringify(data.offices[7].name + ": " + data.officials[7].name));
    $(".data7").text(JSON.stringify(data.offices[22].name + ": " + data.officials[24].name));
    $(".data7Party").html(JSON.stringify("Political Party: " + data.officials[24].party));
    $(".data7Link").html(JSON.stringify("Link to website: (" +  data.officials[24].urls + ")"));

    $(".data8").text(JSON.stringify(data.offices[21].name + ": " + data.officials[23].name));
    $(".data8Party").html(JSON.stringify("Political Party: " + data.officials[23].party));
    $(".data8Link").html(JSON.stringify("Link to website: (" +  data.officials[23].urls + ")"));

    // $(".data9").text(JSON.stringify(data.offices[23].name + ": " + data.officials[25].name));
    // $(".data9Party").html(JSON.stringify("Political Party: " + data.officials[25].party));
    // $(".data9Link").html(JSON.stringify("Link to website: (" +  data.officials[25].urls + ")"));
        // $(".data10").text(JSON.stringify(data.offices[10].name + ": " + data.officials[10].name));
        // $(".data11").text(JSON.stringify(data.offices[11].name + ": " + data.officials[11].name));
        // $(".data12").text(JSON.stringify(data.offices[12].name + ": " + data.officials[12].name));
        // $(".data13").text(JSON.stringify(data.offices[13].name + ": " + data.officials[13].name));
        // $(".data14").text(JSON.stringify(data.offices[14].name + ": " + data.officials[14].name));
        // $(".data15").text(JSON.stringify(data.offices[15].name + ": " + data.officials[15].name));
        // $(".data16").text(JSON.stringify(data.offices[16].name + ": " + data.officials[16].name));
        // $(".data17").text(JSON.stringify(data.offices[17].name + ": " + data.officials[17].name));
        // $(".data18").text(JSON.stringify(data.offices[18].name + ": " + data.officials[18].name));
        // $(".data19").text(JSON.stringify(data.offices[19].name + ": " + data.officials[19].name));
        // $(".data20").text(JSON.stringify(data.offices[20].name + ": " + data.officials[20].name));
        // $(".data21").text(JSON.stringify(data.offices[21].name + ": " + data.officials[21].name));
        // $(".data22").text(JSON.stringify(data.offices[22].name + ": " + data.officials[22].name));
        // $(".data23").text(JSON.stringify(data.offices[23].name + ": " + data.officials[25].name + "Link to website " +  data.officials[25].urls));
        // $(".data24").text(JSON.stringify(data.offices[24].name + ": " + data.officials[24].name));
        // $(".data25").text(JSON.stringify(data.offices[25].name + ": " + data.officials[25].name));
        // $(".data26").text(JSON.stringify(data.offices[26].name + ": " + data.officials[26].name));
        // $(".data27").text(JSON.stringify(data.offices[27].name + ": " + data.officials[27].name));
    });
        });
    
    
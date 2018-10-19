$(document).ready(function () {
    

    var apiKey = "AIzaSyBrfhaXuxlhvsFte5DxfvyiDe5gjYrxj20"

var queryURL = "https://www.googleapis.com/civicinfo/v2/representatives?key=" + apiKey + "&address=58%85Grant%20St.%20Denver%20CO&electionId=2000"

$.ajax({
    url: queryURL,
    method: "GET"
}).then(function (data) {
    console.log(data.officials[25].name);
    console.log(data.offices[0].roles[0] + "/" + data.offices[0].roles[1])
    console.log(data.offices[0].name + ": " + data.officials[0].name);
    console.log(data.offices[1].name + ": " + data.officials[1].name);
    console.log(data.offices[2].name + ": " + data.officials[2].name);
    console.log(data.offices[3].name + ": " + data.officials[3].name);
    console.log(data.offices[4].name + ": " + data.officials[4].name);
    console.log(data.offices[5].name + ": " + data.officials[5].name);
    console.log(data.offices[6].name + ": " + data.officials[6].name);
    console.log(data.offices[7].name + ": " + data.officials[7].name);
    console.log(data.offices[8].name + ": " + data.officials[9].name);
    console.log(data.offices[9].name + ": " + data.officials[9].name);
    console.log(data.offices[10].name + ": " + data.officials[10].name);
    console.log(data.offices[11].name + ": " + data.officials[11].name);
    console.log(data.offices[12].name + ": " + data.officials[12].name);
    console.log(data.offices[13].name + ": " + data.officials[13].name);
    console.log(data.offices[14].name + ": " + data.officials[14].name);
    console.log(data.offices[15].name + ": " + data.officials[15].name);
    console.log(data.offices[16].name + ": " + data.officials[16].name);
    console.log(data.offices[17].name + ": " + data.officials[17].name);
    console.log(data.offices);
    $(".data0").html(JSON.stringify(data.offices[0].name + ": " + data.officials[0].name)); 
    $(".data1").html(JSON.stringify(data.offices[1].name + ": " + data.officials[1].name));
    $(".data2").text(JSON.stringify(data.offices[2].name + " (Republican)" + ": " + data.officials[3].name));
    $(".data3").text(JSON.stringify(data.offices[2].name+ " (Democrat)" + ": " + data.officials[2].name));
    $(".data4").text(JSON.stringify(data.offices[4].name + ": " + data.officials[5].name));
    $(".data5").text(JSON.stringify(data.offices[5].name + ": " + data.officials[6].name));
    // $(".data6").text(JSON.stringify(data.offices[6].name + ": " + data.officials[6].name));
    $(".data7").text(JSON.stringify(data.offices[7].name + ": " + data.officials[7].name));
    $(".data8").text(JSON.stringify(data.offices[8].name + ": " + data.officials[9].name));
    // $(".data9").text(JSON.stringify(data.offices[9].name + ": " + data.officials[9].name));
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
    $(".data23").text(JSON.stringify(data.offices[23].name + ": " + data.officials[25].name));
    // $(".data24").text(JSON.stringify(data.offices[24].name + ": " + data.officials[24].name));
    // $(".data25").text(JSON.stringify(data.offices[25].name + ": " + data.officials[25].name));
    // $(".data26").text(JSON.stringify(data.offices[26].name + ": " + data.officials[26].name));
    // $(".data27").text(JSON.stringify(data.offices[27].name + ": " + data.officials[27].name));
});

// function showReps(){
//     $("#showRepsButton").on("click", function(){
//         alert("rep button pressed")
//         $(".data").text(JSON.stringify(data.offices[0].name + ": " + data.officials[0].name));
    // })
    // showReps()
// }

    });


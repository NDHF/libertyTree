$("button#submitButton").on("click", findRepresentatives);

function findRepresentatives() {
    $("div#respresentativesDiv").empty();
    var street = $("input#streetInput").val();
    var city = $("input#cityInput").val();
    var state = $("input#stateInput").val();
    var addressString = encodeURIComponent(`${street} ${city} ${state}`);
    var apiKey = encodeURIComponent("AIzaSyBrfhaXuxlhvsFte5DxfvyiDe5gjYrxj20");
    var date = new Date();
    var electionId = date.getFullYear();

    var queryURL = "https://www.googleapis.com/civicinfo/v2/representatives?key=" + apiKey + "&address=" + addressString + "%20&electionId=" + electionId;

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (data) {
        let table = $("<table>");
        let tableHeaderRow = $("<tr>");
        let arrayOfKeys = [
            "OFFICE",
            "NAME",
            "POLITICAL PARTY",
            // "ADDRESS",
            // "CHANNELS",
            "PHONE #"
            // "PHOTO URL",
            // "URL ARRAY"
        ]
        for (let i = 0; i < arrayOfKeys.length; i++) {
            let tableHeader = $("<th>");
            tableHeader.css("text-align", "center");
            tableHeader.text(arrayOfKeys[i]);
            tableHeaderRow.append(tableHeader);
        }
        table.append(tableHeaderRow);
        for (let i = 0; i < data.offices.length; i++) {
            let officeAtIndex = data.offices[i];
            for (let k = 0; k < officeAtIndex.officialIndices.length; k++) {
                let officialIndex = officeAtIndex.officialIndices[k];
                let tableRow = $("<tr>");
                let officialAtIndex = data.officials[officialIndex];
                let propertyArray = [
                    officeAtIndex.name,
                    officialAtIndex.name,
                    officialAtIndex.party,
                    officialAtIndex.phones[0]
                ];
                for (let j = 0; j < propertyArray.length; j++) {
                    let tableData = $("<td>");
                    tableData.text(propertyArray[j]);
                    tableRow.append(tableData);
                }
                table.append(tableRow);
            }
        }
        $("div#respresentativesDiv").append(table);
    });
}
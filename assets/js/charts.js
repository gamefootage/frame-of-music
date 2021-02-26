var apiKey = '8ebb100f8dbd94b032393de929156869';

$(document).ready(function() {
    $("#global-charts-form").on("submit", function(e) {
        e.preventDefault();
        var countryName = $("#charts-country").val();
        var countryCode = window.countries.find(item => Object.keys(item)[0] == countryName);
        getCountryChart(countryCode[countryName]);
    });
});

function getCountryChart(countryCode) {
    debugger;
    var url = `https://api.musixmatch.com/ws/1.1/chart.tracks.get?format=jsonp&callback=chartsJsonpCallback&page=1&page_size=20&country=${countryCode}&apikey=8ebb100f8dbd94b032393de929156869`
    $.ajax({
        url: url,
        type: "GET",
        dataType: "jsonp",
        jsonpCallback: "chartsJsonpCallback",
    });
}

function chartsJsonpCallback(json) {
    debugger;
    var available = json.message.header.available;

    if (available < 1 || !available) {
        if (json.message.header.status_code !== 401) {
            alert("This countries chart doesn't seem to exist. Please choose one of the availbel country options.");
            return false;
        } else {
            alert("Our API's daily rate limit has been exceeded, please visit our site again tomorrow.")
        }
    }

    $("#charts-results-table tbody").empty();

    var trackList = json.message.body.track_list;

    trackList.forEach(function(item, index) {
        $("#charts-results-table tbody").append(
            `<tr>
                <td>${index + 1}</td> <td>${item.track.track_name}</td>
            </tr>`
        )
    });
}
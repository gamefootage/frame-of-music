var apiKey = config.MY_API_KEY;
window.loaded = false;

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
    var url = `https://api.musixmatch.com/ws/1.1/chart.tracks.get?format=jsonp&callback=chartsJsonpCallback&page=1&page_size=21&country=${countryCode}&apikey=${apiKey}`
    $.ajax({
        url: url,
        type: "GET",
        dataType: "jsonp",
        jsonpCallback: "chartsJsonpCallback",
    });
}

function chartsJsonpCallback(json) {
    debugger;
    var trackList = json.message.body.track_list;

    if (!trackList.length) {
        if (json.message.header.status_code !== 401) {
            alert("This countries chart doesn't seem to exist. Please choose one of the availbel country options.");
            return false;
        } else {
            alert("Our API's daily rate limit has been exceeded, please visit our site again tomorrow.")
        }
    }

    $("[name='charts-results-table'] tbody").empty();

    trackList.forEach(function(item, index) {
        if (index <= 9 && index !== 9) {
            $("[name='charts-results-table'] tbody.body1").append(
                `<tr>
                    <td>${index + 1}</td> <td>${item.track.track_name}</td> <td>${item.track.artist_name}</td>
                </tr>`
            );
        } else if (index == 9) {
            $("[name='charts-results-table'] tbody.body1").append(
                `<tr class="columnbreak">
                    <td>${index + 1}</td> <td>${item.track.track_name}</td> <td>${item.track.artist_name}</td>
                </tr>`
            );
        } else {
            $("[name='charts-results-table'] tbody.body2").append(
                `<tr>
                    <td>${index + 1}</td> <td>${item.track.track_name}</td> <td>${item.track.artist_name}</td>
                </tr>`
            );
        }
    });

    $("[name='charts-results-table'].split tbody.body1").remove();

    if (!window.loaded)
        $(".table-container").columnize({ columns: 2 });

    window.loaded = true;
}
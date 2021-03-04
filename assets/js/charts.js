var apiKey = config.MY_API_KEY;
window.loaded = false;

$(document).ready(function() {
    $("#global-charts-form").on("submit", function(e) {
        e.preventDefault();
        var countryName = $("#charts-country").val();
        var countryCode = window.countries.find(item => Object.keys(item)[0] == countryName);
        getCountryChart(countryCode[countryName]);
    });

    var place = $("#charts-country").attr("placeholder");
    place += " (" + countries.length + " choices)";
    $("#charts-country").attr("placeholder", place);
});

function getCountryChart(countryCode) {
    $.ajax({
        url: `https://api.musixmatch.com/ws/1.1/chart.tracks.get?format=jsonp&callback=chartsJsonpCallback&page=1&page_size=20&country=${countryCode}&apikey=${apiKey}`,
        type: "GET",
        dataType: "jsonp",
        jsonpCallback: "chartsJsonpCallback",
    });
}

function chartsJsonpCallback(json) {
    var trackList = json.message.body.track_list;

    if (!trackList) {
        if (json.message.header.status_code !== 401) {
            alert("This countries chart doesn't seem to exist. Please choose one of the availbel country options.");
            return false;
        } else {
            alert("Our API's daily rate limit has been exceeded, please visit our site again tomorrow.");
            return false;
        }
    }

    $("#charts-results-table tbody").empty();

    $("#charts-table-header").text($("#charts-country").val() + " Top 20");

    trackList.forEach(function(item, index) {
        $("#charts-results-table tbody").append(
            `<tr>
                <td>${index + 1}</td> 
                <td>
                    <a class="text-decoration-none" target="_blank" href="${item.track.track_share_url}" alt="${item.track.track_name} Share Link">
                        ${item.track.track_name}
                    </a>
                </td>
                <td>${item.track.artist_name}</td>
            </tr>`
        );
    });

    $([document.documentElement, document.body]).animate({scrollTop: $("#charts-table-header").offset().top }, 2000);
}
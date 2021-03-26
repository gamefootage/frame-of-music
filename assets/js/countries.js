$(document).ready(function() {
    let countryNames = [];
    window.countries.forEach( obj => countryNames.push(Object.keys(obj)[0]) )
    $("#charts-country").autocomplete({
        source: countryNames,
        minLength: 0
    });

    $("#charts-country").on("focus", function() {
        $(this).autocomplete("search", "");
    });
});
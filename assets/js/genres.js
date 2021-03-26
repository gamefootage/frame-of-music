$(document).ready(function() {
    let genreNames = [];
    window.genres.forEach( obj => genreNames.push(Object.keys(obj)[0]) );
    $("#random-songs-genre").autocomplete({
        source: genreNames,
        minLength: 0
    });

    $("#random-songs-genre").on("focus", function() {
        $(this).autocomplete("search", "");
    });
});
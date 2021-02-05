$(document).ready(function() {

    $("#random-songs-form").on("submit", function(e) {
        e.preventDefault();
        form = $(this);
        
        var urlParams = {
            "genre": form.find("#random-songs-genre").val(),
            "artist": form.find("#random-songs-artist").val(),
            "hasLyrics": form.find("#random-songs-lyrics-check").prop("checked") ? 1 : 0
        };

        console.log(urlParams);
    });
});
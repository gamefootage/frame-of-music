var baseURL = 'https://api.musixmatch.com/ws/1.1/';
var apiKey = '8ebb100f8dbd94b032393de929156869';

function getRandomSongs() {
    var url = `https://api.musixmatch.com/ws/1.1/track.search?format=json&f_lyrics_language=en&f_has_lyrics=1&s_track_rating=desc&quorum_factor=1&page_size=1&page=1&apikey=8ebb100f8dbd94b032393de929156869`;
    $.get(url, function(data){
        console.log(data);
    });
};
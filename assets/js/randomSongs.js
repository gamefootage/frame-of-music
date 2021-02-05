var baseURL = 'https://api.musixmatch.com/ws/1.1/';
var apiKey = '8ebb100f8dbd94b032393de929156869';
var formData;
var url;
var randomSongs = [];

function getRandomSongs(formData) {
    formData = formData
    randomSongs = [];
    url = 'https://api.musixmatch.com/ws/1.1/track.search?format=jsonp&callback=initialJsonpCallback&f_lyrics_language=en&s_track_rating=desc';

    if (formData.hasLyrics) {
        var hasLyrics = `&f_has_lyrics=${formData.hasLyrics}`;
        url += hasLyrics;
    }
    if (formData.genre) {
        var genre = `&f_music_genre_id=${formData.genre}`;
        url += genre;
    }
    if (formData.artist) {
        var artist = `&q_artist=${formData.artist}`;
        url += artist;
    }

    $.ajax({
        url: url + '&quorum_factor=1&page_size=1&page=1&apikey=8ebb100f8dbd94b032393de929156869',
        type: "GET",
        dataType: "jsonp",
        jsonpCallback: "initialJsonpCallback"
    });
};

function initialJsonpCallback(json) {
    var available = json.message.header.available;
    // Initial logic on how to page results from (https://github.com/kodie/rnd-song/blob/master/index.js)

    if (available > 0) {
        var pages = Math.ceil(available / 100);
        window.retrieveSongcount = 5;
        window.pages = pages;
        window.songsRetrieved = 0;
        randomSongList();
        // for(let i = 0; i < 5; i++) {
        // }
    } else {
        alert("No songs found with those details. Try again.");
    }
};

function randomSongList() {
    debugger;
    var page = Math.floor( (Math.random() * window.pages) + 1 );
    $.ajax({
        url: url + `&quorum_factor=1&page_size=100&page=${page}&apikey=8ebb100f8dbd94b032393de929156869`,
        type: "GET",
        dataType: "jsonp",
        jsonpCallback: "addRandomTrackCallback"
    });
}

function addRandomTrackCallback(json) {
    debugger;
    var trackList = json.message.body.track_list;

    let trackIndex = getRandomInt(trackList.length);
    let track = trackList[trackIndex];

    randomSongs.push(track);
    window.songsRetrieved++;
    if (window.songsRetrieved < window.retrieveSongcount)
        randomSongList();
};

// Mozilla example of getting interger between 1 and max (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random)
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}
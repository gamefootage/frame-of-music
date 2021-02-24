var baseURL = 'https://api.musixmatch.com/ws/1.1/';
var apiKey = '8ebb100f8dbd94b032393de929156869';
var formData;
var url;
var randomSongs = [];
window.usedPages = [];

function getRandomSongs(formData) {
    formData = formData
    randomSongs = [];
    window.usedPages = [];
    $("#results-table tbody").empty();
    window.favourite = null;
    url = 'https://api.musixmatch.com/ws/1.1/track.search?format=jsonp&callback=initialJsonpCallback&f_lyrics_language=en';

    if (formData.lyrics) {
        var lyrics = `&f_has_lyrics=1&q_lyrics=${formData.lyrics}`;
        url += lyrics;
    }
    if (formData.genre) {
        var genre = `&f_music_genre_id=${formData.genre}`;
        url += genre;
    }
    if (formData.artist) {
        var artist = `&q_artist=${formData.artist}`;
        url += artist;
    }
    if (formData.favourite) {
        window.favourite = formData.favourite;
    }
    if (formData.keyword) {
        var keyword = `&q=${formData.keyword}`;
        url += keyword;
    }
    if (formData.track) {
        var track = `&q_track=${formData.track}`;
        url += track;
    }
    if (formData.results) {
        debugger;
        window.random = formData.results;
    }

    $.ajax({
        url: url + '&s_track_rating=desc&quorum_factor=1&page_size=1&page=1&apikey=8ebb100f8dbd94b032393de929156869',
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
        if (available > 5) {
            window.retrieveSongcount = 5;
        } else {
            window.retrieveSongcount = available;
        }
        window.pages = pages;
        window.songsRetrieved = 0;
        getSongList();
    } else {
        alert("No songs found with those details. Try again.");
    }
};

function getSongList() {
    // debugger;
    if (window.random) {
        var page = Math.floor( (Math.random() * window.pages) + 1 );
        $.ajax({
            url: url + `&s_track_rating=desc&quorum_factor=1&page_size=100&page=${page}&apikey=8ebb100f8dbd94b032393de929156869`,
            type: "GET",
            dataType: "jsonp",
            jsonpCallback: "addRandomTrackCallback"
        });
    } else {
        $.ajax({
            url: url + `&s_track_rating=desc&quorum_factor=1&page_size=100&page=1&apikey=8ebb100f8dbd94b032393de929156869`,
            type: "GET",
            dataType: "jsonp",
            jsonpCallback: "addTrackCallback"
        });
    }
}

function addTrackCallback(json) {
    var trackList = json.message.body.track_list;

    if (window.favourite) {
        trackList = trackList.filter( (item) => item.track.num_favourite == 1 );
    }
    if (trackList.length) {
        let index = window.songsRetrieved;
        var track = trackList[index].track;
        var trackID = track.commontrack_id;


        // Make sure track isn't already included
        var trackIncluded = false;
        if (randomSongs) {
            do {
                var rerun = false;
                randomSongs.forEach(function(item) {
                    if (item.commontrack_id == trackID) {
                        track = trackList[index++].track;
                        return rerun = true;
                    }
                });
            } while(rerun);
        }
        if (!trackIncluded) {
            randomSongs.push(track);

            window.songsRetrieved++;
            if (window.songsRetrieved < window.retrieveSongcount) {
                getSongList();
            } else {
                randomSongs.forEach(function(item) {
                    $("#results-table tbody").append(
                        `<tr>
                            <td><a class="text-decoration-none" target="_blank" href="${item.track_share_url}" alt="${item.track_name} Share Link">${item.track_name}</a><img class="pl-2 pb-1" src="https://img.icons8.com/ios/20/000000/explicit.png"/></td>
                            <td>${item.artist_name}</td>
                        </tr>`
                    );

                    if (item.explicit == 1) {
                        $(`#${item.track_id}`).append('<img class="pl-2 pb-1" src="https://img.icons8.com/ios/20/000000/explicit.png"/>');
                    }
                });
            }
        } else {
            getSongList();
        }
    } else {
        alert("No songs favourited. Try again.");
        return;
    }
}

function addRandomTrackCallback(json) {
    // debugger;
    var trackList = json.message.body.track_list;

    if (window.favourite) {
        trackList = trackList.filter( (item) => item.track.num_favourite == 1 );
    }
    if (trackList.length) {
        var trackIndex = getRandomInt(trackList.length);
        let track = trackList[trackIndex].track;
        let trackID = track.commontrack_id;

        // Make sure track isn't already included
        var trackIncluded = false;
        if (randomSongs) {
            randomSongs.forEach(function(item) {
                if (item.commontrack_id == trackID) {
                    trackIncluded = true;
                    return;
                }
            });
        }
        debugger;
        if (!trackIncluded) {
            randomSongs.push(track);

            window.songsRetrieved++;
            if (window.songsRetrieved < window.retrieveSongcount) {
                getSongList();
            } else {
                randomSongs.forEach(function(item) {
                    $("#results-table tbody").append(
                        `<tr>
                            <td id="${item.track_id}"><a class="text-decoration-none" target="_blank" href="${item.track_share_url}" alt="${item.track_name} Share Link">${item.track_name}</a></td>
                            <td>${item.artist_name}</td>
                        </tr>`
                    );

                    // Icon retrieved from Icons8 (https://icons8.com/icon/52182/explicit)
                    if (item.explicit == 1) {
                        $(`#${item.track_id}`).append('<img data-toggle="tooltip" data-placement="top" title="Song contains explicit lyrics" class="pl-2 pb-1" src="https://img.icons8.com/ios/20/000000/explicit.png"/>');
                    }
                });
            }
        } else {
            getSongList();
        }
    } else {
        getSongList();
    }
}

// Mozilla example of getting interger between 1 and max (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random)
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}
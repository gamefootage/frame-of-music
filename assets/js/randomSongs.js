const apiKey = config.MY_API_KEY;
let url;
let songList = [];

function getRandomSongs(formData) {
    songList = [];
    window.usedPages = [];
    window.favourite = null;
    url = 'https://api.musixmatch.com/ws/1.1/track.search?format=jsonp&callback=initialJsonpCallback&f_lyrics_language=en';

    if (formData.lyrics) {
        let lyrics = `&f_has_lyrics=1&q_lyrics=${formData.lyrics}`;
        url += lyrics;
    }
    if (formData.genre) {
        let genre = `&f_music_genre_id=${formData.genre}`;
        url += genre;
    }
    if (formData.artist) {
        let artist = `&q_artist=${formData.artist}`;
        url += artist;
    }
    if (formData.favourite) {
        window.favourite = formData.favourite;
    }
    if (formData.keyword) {
        let keyword = `&q=${formData.keyword}`;
        url += keyword;
    }
    if (formData.track) {
        let track = `&q_track=${formData.track}`;
        url += track;
    }
    window.random = formData.results;

    $.ajax({
        url: url + '&s_track_rating=desc&quorum_factor=1&page_size=1&page=1&apikey=' + apiKey,
        type: "GET",
        dataType: "jsonp",
        jsonpCallback: "initialJsonpCallback",
        beforeSend: function () {
            $("#spinner").css("visibility", "visible");
        }
    });
}

function initialJsonpCallback(json) {
    let available = json.message.header.available;
    // Initial logic on how to page results from (https://github.com/kodie/rnd-song/blob/master/index.js)

    if (available > 0) {
        let pages = Math.ceil(available / 100);
        if (available > 5) {
            window.retrieveSongcount = 5;
        } else {
            window.retrieveSongcount = available;
        }
        window.pages = pages;
        window.songsRetrieved = 0;
        getSongList();
    } else {
        $("#spinner").css("visibility", "hidden");
        if (json.message.header.status_code !== 401) {
            alert("Sorry, I couldn't find any songs with these inputs. Please try again.");
            return false;
        } else {
            alert("Our API's daily rate limit has been exceeded, please visit our site again tomorrow.");
            return false;
        }
    }
}

function getSongList() {
    if (window.random) {
        let page = Math.floor((Math.random() * window.pages) + 1);
        $.ajax({
            url: url + `&s_track_rating=desc&quorum_factor=1&page_size=100&page=${page}&apikey=${apiKey}`,
            type: "GET",
            dataType: "jsonp",
            jsonpCallback: "addRandomTrackCallback"
        });
    } else {
        $.ajax({
            url: url + `&s_track_rating=desc&quorum_factor=1&page_size=100&page=1&apikey=${apiKey}`,
            type: "GET",
            dataType: "jsonp",
            jsonpCallback: "addTrackCallback"
        });
    }
}

function addTrackCallback(json) {
    let trackList = json.message.body.track_list;
    let track;

    if (window.favourite) {
        trackList = trackList.filter( (item) => item.track.num_favourite == 1 );
    }
    if (trackList.length) {
        if (trackList.length < 5)
            window.retrieveSongcount = trackList.length;
        let index = window.songsRetrieved;
        track = trackList[index].track;
        let trackID = track.commontrack_id;


        // Make sure track isn't already included
        let trackIncluded = false;
        let rerun = false;
        if (songList) {
            do {
                if (index >= trackList.length) {
                    return trackIncluded = true;
                }
                songList.forEach(function(item) {
                    if (item.commontrack_id == trackID) {
                        track = trackList[index++].track;
                        return rerun = true;
                    }
                });
            } while(rerun);
        }
        if (!trackIncluded) {
            songList.push(track);

            window.songsRetrieved++;
            if (window.songsRetrieved < window.retrieveSongcount) {
                addTrackCallback(json);
            } else {
                drawResultsTable(songList);
            }
        } else {
            if (songList) {
                drawResultsTable(songList);
            } else {
                alert("Sorry, I couldn't find any songs with these inputs. Please try again.");
            }
        }
    } else {
        alert("No songs favourited. Please try again.");
        return;
    }
}

function addRandomTrackCallback(json) {
    let trackList = json.message.body.track_list;
    let track;

    if (window.favourite) {
        trackList = trackList.filter( (item) => item.track.num_favourite == 1 );
    }
    if (trackList.length) {
        // Make sure track isn't already included
        let attempts = 0;
        let trackIncluded = false;
        do {
            attempts++;

            let trackIndex = getRandomInt(trackList.length);
            track = trackList[trackIndex].track;

            let trackID = track.commontrack_id;

            if (songList) {
                songList.forEach(function(item) {
                    if (item.commontrack_id == trackID) {
                        return trackIncluded = true;
                    }
                });
            }

        } while(trackIncluded);

        songList.push(track);

        window.songsRetrieved++;
        if (window.songsRetrieved < window.retrieveSongcount) {
            if (window.pages > 1) {
                getSongList();
            } else {
                addRandomTrackCallback(json);
            }
        } else {
            drawResultsTable(songList);
        }

    } else {
        getSongList();
    }
}

function drawResultsTable (results) {

    $("#results-table tbody").empty();

    results.forEach(function(item) {
        $("#results-table tbody").append(
            `<tr>
                <td id="${item.track_id}">
                <a class="text-decoration-none" target="_blank" href="${item.track_share_url}" alt="${item.track_name} Share Link">${item.track_name}</a>
                </td>
                <td>${item.artist_name}</td>
                <td>${item.album_name}</td>
            </tr>`
        );

        // Icon retrieved from Icons8 (https://icons8.com/icon/52182/explicit)
        if (item.explicit == 1) {
            $(`#${item.track_id}`).append(
            `<img data-toggle="tooltip" data-placement="top" title="Explicit lyrics" class="pl-2 pb-1" src="https://img.icons8.com/ios/20/000000/explicit.png"/>`
            );
        }
    });

    $("#spinner").css("visibility", "hidden");

    $([document.documentElement, document.body]).animate({scrollTop: $("#results-table").offset().top }, 2000);

}

// Mozilla example of getting interger between 1 and max (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random)
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}
# FrameOfMusic - powered by Musixmatch

Frame Of Music will provide you with random songs based on your preferences. You can select a genre, artist, album, certain lyrics, or all of the above!
Whether you want popular songs on the charts right now, rock songs from any time, or songs with lyrics e.g. songs containing "heartbreak". If your tired of your same old Spotify playlist, find some bangers to spice it up, with FrameOfMusic (powered by Musixmatch API).
 
## UX
 
Use this section to provide insight into your UX process, focusing on who this website is for, what it is that they want to achieve and how your project is the best way to help them achieve these things.

In particular, as part of this section we recommend that you provide a list of User Stories, with the following general structure:
- A. As a music fanatic of all genres, I want to be given random songs, with little to no restrictions, to listen to and enjoy.
- B. As a fan of a particular music genre, like Rock, I want to be able to find random songs from the Rock genre alone.
- C. As a fan of a particular artist, such as Bruno Mars, I want to be able to find random songs by Bruno Mars or featuring Bruno Mars.
- D. As a person who has trouble remembering the names of songs, I want to be able to put in a line or word from the lyrics of a song I heard recently and find the most relevant results for that query.
- E. As a person studying popular music from around the world, I want to be able the find the top 20 songs from different countries, to see how music taste differs from country to country.
- F. As a person who isn't sure of what kind of music they like, I want to be able to get random songs from different genres and artists and listen to them and decide what kind of music I prefer.
- G. As a user who wants to get the top 20 charts of a country that isn't available for selection, I would like to contact the site creator and request this country be added to the list.

### [Wireframe](./assets/docs/frame-of-music-wireframe.pdf)

## Features

There are many features that I could implement in the future with a paid for MusixMatch API Licensce but since I couldn't afford one, there are many features to be implemented.
 
### Existing Features
- Random Song Generator - allows users A and F to achieve his goal, by simply ensuring the random results radio is checked and clicking the get random songs button. They are then shown a table with 5 randomly retrieved songs.
- Filter Buttons - allows users B and C to add available filters like Artist and Genre by clicking the "Show Filters" button and then selecting their relevant filter ("Artist" or "Genre") and filling in the text input that appears. Theu then click the get random songs button.
- Relevant Results - allows user D to add a filter for lyrics and instead of getting random songs that contain a sample of the string they entered, it will find the most relevant and accurate match for their query. They simply click the "Show Filters" button, click the "Lyrics" filter, enter their desired string into the text box, click the relevant results radio, and click get songs.
- Global Charts - allows user E to select a country from the options provided and hit the get charts button, to return the top 20 songs in the selected country.
- Contact Page - allows user G to enter his name, email, subject and message and press the send message button, to send an email directly to the site creators inbox, they can leave their desired request and the site creator may reply to their message through the user's email address.

### Features Left to Implement
- Sync music account with song generator - one of MusixMatch's paid for API services allows the linking of one's music account (like Spotify or Deezer), so that the account can be analyzed and data drawn from it, this data can then be used to find songs and artists the user would like.
- Allow users to choose number of songs returned - MusixMatch API has a daily rate limit that prevented me from adding this feature, as if a user could pick a larger amount of songs, the rate limit would be hit much quicker.
- Allow songs that come back have a sample of the song itself - in the results table their would be a play button that would allow the user to hear a snippet of the song.

## Technologies Used

In this section, you should mention all of the languages, frameworks, libraries, and any other tools that you have used to construct this project. For each, provide its name, a link to its official site and a short sentence of why it was used.

- [JQuery](https://jquery.com)
    - The project uses **JQuery** to simplify DOM manipulation.
    
- [Musixmatch API](https://developer.musixmatch.com/)
    - The project uses **Musixmatch API** to perform thorough searches of millions of songs.

- [Bootstrap](https://getbootstrap.com/)
    - The project uses **Bootstrap** to allow ease of cross platform, and cross device design.

- [EmailJS](https://www.emailjs.com/)
    - The project uses EmailJS to allow the users to fill in a form that will automatically send an email sent to my email address, with a template desigened by me through their site.


## Testing

In this section, you need to convince the assessor that you have conducted enough testing to legitimately believe that the site works well. Essentially, in this part you will want to go over all of your user stories from the UX section and ensure that they all work as intended, with the project providing an easy and straightforward way for the users to achieve their goals.

Whenever it is feasible, prefer to automate your tests, and if you've done so, provide a brief explanation of your approach, link to the test file(s) and explain how to run them.

For any scenarios that have not been automated, test the user stories manually and provide as much detail as is relevant. A particularly useful form for describing your testing process is via scenarios, such as:

1. Contact form:
    1. Go to the "Contact Us" page
    2. Try to submit the empty form and verify that an error message about the required fields appears
    3. Try to submit the form with an invalid email address and verify that a relevant error message appears
    4. Try to submit the form with all inputs valid and verify that a success message appears.

In addition, you should mention in this section how your project looks and works on different browsers and screen sizes.

You should also mention in this section any interesting bugs or problems you discovered during your testing, even if you haven't addressed them yet.

If this section grows too long, you may want to split it off into a separate file and link to it from here.

1. User A:
    1. Navigate to home page.
    2. Without any filters, ensure the Random results checkbox is ticked.
    3. Click the "Get Songs" button.
    4. A spinner should appear.
    5. When the spinner is done, the page should automatically scroll down to the top of the results table.
    6. Each song should link to it's MusixMatch lyrics page.
    7. An E icon should appear beside the songs that have explicit lyricsm and hovering on it should display the text "Explicit Lyrics".

2. User B:
    1. Navigate to the home page.
    2. Click the "Show Filters Panel" button.
    3. The filters panel should dropdown smoothly.
    4. Click the "Genre" button, it should turn red and the icon should turn into an x.
    5. A text input should appear below the panel. On clicking the input, it should show a list of the available genres, and allow the user to input text and search for their desired genre.
    6. If a user enters random text that isn't one of the available genres, and clicks the "Get Songs" button an error message should appear notifying the user that they've picked an invalid genre and to try again.
    7. Upon typing or clicking one of the valid genres and clicking the "Get Songs" button, a spinner should appear.
    8. Once the spinner disappears, the page shuld populate the results table and automatically scroll down, with songs from the named genre showing.

## Deployment

This section should describe the process you went through to deploy the project to a hosting platform (e.g. GitHub Pages or Heroku).

In particular, you should provide all details of the differences between the deployed version and the development version, if any, including:
- Different values for environment variables (Heroku Config Vars)?
- Different configuration files?
- Separate git branch?

In addition, if it is not obvious, you should also describe how to run your code locally.


## Credits

### Content
- The text for section Y was copied from the [Wikipedia article Z](https://en.wikipedia.org/wiki/Z)

### Media
- The photos used in this site were obtained from ...

### Acknowledgements

- I received inspiration for this project from X

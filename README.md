# FrameOfMusic - powered by Musixmatch

Frame Of Music will provide you with random songs based on your preferences. You can select a genre, artist, album, certain lyrics, or all of the above!
Whether you want popular songs on the charts right now, rock songs from any time, or songs with lyrics e.g. songs containing "heartbreak". If your tired of your same old Spotify playlist, find some bangers to spice it up, with FrameOfMusic (powered by Musixmatch API). As well as random songs there is also a chart feature that lets you look at the top 20 songs from the provided countries.
 
## UX
 
**User Stories:**
- **User A.** As a music fanatic of all genres, I want to be given random songs, with little to no restrictions, to listen to and enjoy.
- **User B.** As a fan of a particular music genre, like Rock, I want to be able to find random songs from the Rock genre alone.
- **User C.** As a fan of a particular artist, such as Bruno Mars, I want to be able to find random songs by Bruno Mars or featuring Bruno Mars.
- **User D.** As a person who has trouble remembering the names of songs, I want to be able to put in a line or word from the lyrics of a song I heard recently and find the most relevant results for that query.
- **User E.** As a person studying popular music from around the world, I want to be able the find the top 20 songs from different countries, to see how music taste differs from country to country.
- **User F.** As a person who isn't sure of what kind of music they like, I want to be able to get random songs from different genres and artists and listen to them and decide what kind of music I prefer.
- **User G.** As a user who wants to get the top 20 charts of a country that isn't available for selection, I would like to contact the site creator and request this country be added to the list.

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

### User Testing

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
    8. Once the spinner disappears, the page should populate the results table and automatically scroll down, with songs from the named genre showing.

3. User C:
    1. Navigate to the home page.
    2. Click the "Show Filters Panel" button.
    3. The filters panel should dropdown smoothly.
    4. Click the "Artist" button, it should turn red and the icon should turn into an x.
    5. A text input should appear below the panel. The input is free text and the user can type whatever they want.
    6. If a user enters text that has no available results, and clicks the "Get Songs" button, it should return an error saying there were no results available with the filters they used.
    7. Upon typing a name that returns results and clicking the "Get Songs" button, a spinner should appear.
    8. Once the spinner disappears, the page should populate the results table and automatically scroll down, with songs from the matching artist name showing.

3. User D:
    1. Navigate to the home page.
    2. Click the "Show Filters Panel" button.
    3. The filters panel should dropdown smoothly.
    4. Click the "Lyrics" button, it should turn red and the icon should turn into an x.
    5. A text input should appear below the panel. The input is free text and the user can type whatever they want.
    6. If a user enters text that has no available results, and clicks the "Get Songs" button, it should return an error saying there were no results available with the filters they used.
    7. Upon typing lyrics that return results, ensuring the relevant results radio is checked, and clicking the "Get Songs" button, a spinner should appear.
    8. Once the spinner disappears, the page should populate the results table and automatically scroll down, with songs from the most relevant matches showing.

4. User E:
    1. Navigate to the global charts page.
    2. Click the text input for the country name, a dropdown should appear with all the availbale options, if the user begins typing, it will suggest the closest matches.
    3. If a user's input doesn't match one of the country names exactly, it should throw back an error saying "The text you entered is not an available country. Please try again".
    4. Once a user enters one of the accepted values, a spinner should appear, and on completion the spinner will disappear and the page will automatically scroll down to the results, showing a scrollable table indexed 1-20, with all the songs and the country's name in the main header.

5. User F:
    1. Navigate to the home page.
    2. Click the "Show Filters Panel" button.
    3. The filters panel should dropdown smoothly.
    4. Click the "Genre" button, it should turn red and the icon should turn into an x.
    5. A text input should appear below the panel. On clicking the input, it should show a list of the available genres, and allow the user to input text and search for their desired genre.
    6. Click the "Artist" button, it should turn red and the icon should turn into an x.
    7. A text input should appear below the panel. The input is free text and the user can type whatever they want.
    8. If a user enters text that has no available results, and clicks the "Get Songs" button, it should return an error saying there were no results available with the filters they used.
    9. Upon entering a genre and artist that returns results and clicking the "Get Songs" button, a spinner should appear.
    10. Once the spinner disappears, the page should populate the results table and automatically scroll down, with songs from the matching artist and genre showing.

6. User G:
    1. Navigate to the Contact Us page.
    2. Enter the user's name, email address, email subject, and messsage in the provided inputs.
    3. If you enter an invalid email, the form should not submit and show a message saying 'Please enter an email addresss'.
    4. Once a valid email is inputted, and all inputs are filled, the form should submit and alert the user that 'Your email was successfully sent'.

### Further Testing
- I tested the website on multiple browsers (Chrome, Firefox, Edge and Safari), and multiple devices (Android phone, Macbook Pro, Windows 10 PC).
- Family members were asked to review the site and documentation to point out any bugs and/or user experience issues.
- Lighthouse in Chrome was used to ensure the site used best practices and was accessible.

### Known Issues
- On Edge, the show/hide filter panel the animation is not as smooth as other browsers.

### Validation
- **HTML:** [Index.html](./assets/docs/index-html-validate.png), [contact.html](./assets/docs/contact-html-validate.png), [charts.html](./assets/docs/charts-html-validate.png)
- **CSS:** [CSS Jigsaw validation](./assets/docs/jigsaw-results.png).


## Deployment

### GitHub Pages

The project was deployed to GitHub Pages using the following steps...

1. Log in to GitHub and locate the [GitHub Repository](https://github.com/gamefootage/frame-of-music)
2. At the top of the Repository (not top of page), locate the "Settings" Button on the menu.
    - Alternatively Click [Here](https://raw.githubusercontent.com/) for a GIF demonstrating the process starting from Step 2.
3. Scroll down the Settings page until you locate the "GitHub Pages" Section.
4. Under "Source", click the dropdown called "None" and select "Master Branch".
5. The page will automatically refresh.
6. Scroll back down through the page to locate the now published site [link](https://gamefootage.github.io/gamefootage/frame-of-music) in the "GitHub Pages" section.

### Forking the GitHub Repository

By forking the GitHub Repository we make a copy of the original repository on our GitHub account to view and/or make changes without affecting the original repository by using the following steps...

1. Log in to GitHub and locate the [GitHub Repository](https://github.com/gamefootage/frame-of-music)
2. At the top of the Repository (not top of page) just above the "Settings" Button on the menu, locate the "Fork" Button.
3. You should now have a copy of the original repository in your GitHub account.

### Making a Local Clone

1. Log in to GitHub and locate the [GitHub Repository](https://github.com/gamefootage/frame-of-music)
2. Under the repository name, click "Clone or download".
3. To clone the repository using HTTPS, under "Clone with HTTPS", copy the link.
4. Open Git Bash
5. Change the current working directory to the location where you want the cloned directory to be made.
6. Type `git clone`, and then paste the URL you copied in Step 3.

```
$ git clone https://github.com/gamefootage/frame-of-music
```

7. Press Enter. Your local clone will be created.

```
$ git clone https://github.com/gamefootage/frame-of-music
> Cloning into `frame-of-music`...
> remote: Counting objects: 10, done.
> remote: Compressing objects: 100% (8/8), done.
> remove: Total 10 (delta 1), reused 10 (delta 1)
> Unpacking objects: 100% (10/10), done.
```

Click [Here](https://help.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository#cloning-a-repository-to-github-desktop) to retrieve pictures for some of the buttons and more detailed explanations of the above process.


## Credits

### Code
- The genres for the MusixMatch API was taken from this [GitHub repo](https://github.com/kodie/rnd-song).
- The autocomplete menu scroll CSS was taken from this [Stack OverFlow post](https://stackoverflow.com/questions/9590313/how-to-use-the-scroll-and-max-options-in-autocomplete).

### Media
- The background PNGs on each page were taken from [PNG Tree](https://pngtree.com/).
- The favicon was taken from [Icons8](https://icons8.com/).

### Acknowledgements

- My metor Aaron Sinnott was very helpful during the creation of this project.

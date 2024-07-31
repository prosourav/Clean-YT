## [Clean Youtube](https://docs.google.com/document/d/18AT1bYKV4vqTHqlSohoJes6R4qKMfod0mXwXgt54YuQ/edit?usp=sharing)
#### A Youtube video player with clean and destruction free user interface

This web app is designed specifically for students/user who watch tutorials on YouTube. This app allows users to add YouTube playlists by simply pasting the playlist URL, add individual videos to their favorites, and view their recent playlists. The main goal is to provide a distraction-free user interface where users can focus on watching videos without interruptions from advertisements or other video suggestions. Additionally, the app offers functionality for taking notes from playlists, making it easier for users to study and retain information.


## Core Features

 - User can add playlist by pasting youtube playlist url
 - User can add playlist and remove playlist to favorites
 - User can see recent playlists
 - Users should able to take notes while watching video
 - Data should be persisted in browser
 - User can share video



## Techs and tools

**Tech stack:** React, Typescript, Youtube API , Matireal UI, Redux, Easy-Peasy, Axios

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file


`VITE_API_KEY` YOUR_API_KEY

`VITE_BASE_URL_PLAYLIST` 'https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet,contentDetails&maxResults=50'

`VITE_BASE_URL_PLAYLIST_DETAILS ` 'https://www.googleapis.com/youtube/v3/playlists?part=id,snippet,contentDetails'

## Run Locally

Clone the project

```bash
  git clone git@github.com:prosourav/Clean-YT.git
```

Go to the project directory

```bash
  cd Clean-YT
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run dev
```



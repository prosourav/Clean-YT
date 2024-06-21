# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list

## [Clean Youtube](https://docs.google.com/document/d/18AT1bYKV4vqTHqlSohoJes6R4qKMfod0mXwXgt54YuQ/edit?usp=sharing)
#### A Youtube video player with clean and destruction free user interface

It is a software where users can add playlist by pasting a youtube playlist url and add video to favorites and can keep not for a video if they want.


## Core Features

 - User can add playlist by pasting youtube playlist url
 - User can add playlist and remove playlist to favorites
 - User can see recent playlists
 - Users should able to take notes while watching video
 - Data should be persisted in browser
 - User can share video



## Techs and tools

**Server:** React, Typescript, Youtube API , Matireal UI, Redux, Easy-Peasy, Axios

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file


`VITE_API_KEY` YOUR_API_KEY

`VITE_BASE_URL_PLAYLIST` https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet,contentDetails&maxResults=200

`VITE_BASE_URL_PLAYLIST_DETAILS `'https://www.googleapis.com/youtube/v3/playlists?part=id,snippet,contentDetails'

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



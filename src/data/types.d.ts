import { Action } from "easy-peasy";
import { PlaylistModel } from "./playlist-model";
import { ContentDetailsType, YoutubeThumbnail } from "../api/types";


// store types
export interface StoreModel {
  playlists: PlaylistModel
  favorites: FavoriteModel;
  recents: RecentModal;
  theme: ThemeModel;
}

// playlist model types

interface Playlist {
  playListId: string,
  playlistTitle: string,
  playlistDescription: string,
  playlistThumbnail: string,
  channelId: string,
  channelTitle: string,
  playlistItems: PlaylistItems[]
}

interface PlaylistItems {
  title: string;
  description: string;
  thumbnail: YoutubeThumbnail;
  contentDetails: ContentDetailsType | undefined;
}

// favorite model types
export interface FavoriteModel {
  items: string[];
  addToFavorite: Action<FavoriteModel, string>;
  removeFromFavorite: Action<FavoriteModel, string>;
}

// recents model types
export interface RecentModal {
  items: string[];
  addToRecent: Action<RecentModal, string>;
  removeFromRecent: Action<RecentModal, string>;
}

// theme model types
export interface ThemeModel {
  theme: {
    mode: 'light' | 'dark';
    primaryColor: string;
    secondaryColor: string;
  };

  toggleTheme: Action<ThemeModel, void>
}



import { Action } from "easy-peasy";
import { PlaylistModel } from "./playlist-model";
import { ContentDetailsType, YoutubeThumbnail } from "../api/types";
import { VideoInfoModel } from "./videoInfo-model";


// store types
export interface StoreModel {
  playlists: PlaylistModel
  favorites: FavoriteModel;
  recents: RecentModal;
  theme: ThemeModel;
  videoInfo: VideoInfoModel;
  notes: NoteModel;
}

// playlist model types
interface Playlist {
  playListId: string,
  playlistTitle: string,
  playlistDescription: string,
  playlistThumbnail: string,
  channelId: string,
  channelTitle: string,
  playlistItems: PlaylistItems[],
  cache: Date,
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

// note
interface NoteType {
  key: uuid.Translator;
  id: string;
  time: string;
  content: string;
}

interface NoteModel {
  items: NoteType[];
  addToNotes: Action<NoteModel, NoteType>;
  removeNotes: Action<NoteModel, string>;
}
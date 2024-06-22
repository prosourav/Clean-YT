import { createStore, createTypedHooks } from 'easy-peasy';
import playlistModel from './playlist-model';
import favoriteModel from './favourite-model';
import recentModel from './recent-model';
import themeModel from './theme-model';
import { StoreModel } from './types';


const store = createStore<StoreModel>({
  playlists: playlistModel,
  favorites: favoriteModel,
  recents: recentModel,
  theme: themeModel,
},
);

export default store;

const typedHooks = createTypedHooks<StoreModel>();

export const useStoreActions = typedHooks.useStoreActions;
export const useStoreDispatch = typedHooks.useStoreDispatch;
export const useStoreState = typedHooks.useStoreState;

import { action, persist } from 'easy-peasy';
import { FavoriteModel } from './types';



const favoriteModel: FavoriteModel = persist(
  {
    items: [],
    addToFavorite: action((state, playlistId) => {
      state.items.push(playlistId);
    }),
    removeFromFavorite: action((state, playlistId) => {
      state.items = state.items.filter((pId) => playlistId !== pId);
    }),
  }, { storage: 'localStorage' }
);

export default favoriteModel;

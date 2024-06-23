import { action, persist } from 'easy-peasy';
import { FavoriteModel } from './types';
import { toast } from 'react-hot-toast';



const favoriteModel: FavoriteModel = persist(
  {
    items: [],
    addToFavorite: action((state, playlistId) => {
      if (state.items.includes(playlistId)){
       toast.error('Playlist already exist');
       return;
      }
      state.items.push(playlistId);
    }),
    removeFromFavorite: action((state, playlistId) => {
      state.items = state.items.filter((pId) => playlistId !== pId);
    }),
  }, { storage: 'localStorage' }
);

export default favoriteModel;

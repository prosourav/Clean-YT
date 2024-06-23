import { action, persist } from 'easy-peasy';
import { RecentModal } from './types';



const recentModel: RecentModal = persist({
  items: [],
  addToRecent: action((state, playlistId) => {
    if (state.items.includes(playlistId))
      return;
    state.items.unshift(playlistId);
    state.items = state.items.slice(0, 5);
  }),
  removeFromRecent: action((state, payload) => {
    state.items = state.items.filter(item =>  item !== payload);
  })
},
  { storage: 'localStorage' }
);

export default recentModel;
import { action, persist } from 'easy-peasy';
import { RecentModal } from './types';



const recentModel: RecentModal = persist({
  items: [],
  addToRecent: action((state, playlistId) => {
    state.items.unshift(playlistId);
    state.items = state.items.slice(0, 5);
  }),
},
  { storage: 'localStorage' }
);

export default recentModel;
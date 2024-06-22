import { action, thunk, persist, Action, Thunk } from 'easy-peasy';
import getPlaylist from '../api';
import { Playlist } from './types';



export interface PlaylistModel {
  data: Record<string, Playlist>;
  error: string;
  isLoading: boolean;
  addPlaylist: Action<PlaylistModel, Playlist>;
  setLoading: Action<PlaylistModel, boolean>;
  setError: Action<PlaylistModel, string>;
  getPlaylist: Thunk<PlaylistModel, string>;
}

// Create the model
const playlistModel: PlaylistModel = persist(
  {
    data: {},
    error: '',
    isLoading: false,
    addPlaylist: action((state, payload) => {
      state.data[payload.playListId] = payload;
    }),
    
    setLoading: action((state, payload) => {
      state.isLoading = payload;
    }),

    setError: action((state, payload) => {
      state.error = payload;
    }),

    getPlaylist: thunk(
      async ({ addPlaylist, setLoading, setError }, playlistId, { getState }) => {
        if (getState().data[playlistId]) {
          return;
        }
        setLoading(true);
        try {
          const playlist = await getPlaylist(playlistId);
          addPlaylist(playlist);
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (e: any) {
          setError(e.response?.data.error?.message || 'Something went wrong');
        } finally {
          setLoading(false);
        }
      }
    ),
  }, { storage: 'localStorage' }
);

export default playlistModel;


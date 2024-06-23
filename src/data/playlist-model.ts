import { action, thunk, persist, Action, Thunk } from 'easy-peasy';
import getPlaylist from '../api';
import { Playlist } from './types';
import toast from 'react-hot-toast';


export interface PlaylistModel {
  data: Record<string, Playlist>;
  error: string;
  isLoading: boolean;
  addPlaylist: Action<PlaylistModel, Playlist>;
  setLoading: Action<PlaylistModel, boolean>;
  setError: Action<PlaylistModel, string>;
  getPlaylist: Thunk<PlaylistModel, string>;
}

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
          setError('Playlist already exist');
          toast.error('Playlist already exist');
          return;
        }
        setLoading(true);
        const loadingToastId = toast.loading('loading...');
        try {
          const playlist = await getPlaylist(playlistId);
          addPlaylist(playlist);
          toast.success('Successfully added playlist');
          setError('');
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (e: any) {
          setError(e.response?.data.error?.message || 'Something went wrong');
          toast.error(e.response?.data.error?.message || 'Playlist already exist');
        } finally {
          toast.dismiss(loadingToastId);
          setLoading(false);
        }
      }
    ),
  }, { storage: 'localStorage' }
);

export default playlistModel;


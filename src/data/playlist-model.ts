import { action, thunk, persist, Action, Thunk } from 'easy-peasy';
import getPlaylist from '../api';
import { Playlist } from './types';
import toast from 'react-hot-toast';
import { addMinutes } from 'date-fns';
import { cacheTime } from '../config';


export interface PlaylistModel {
  data: Record<string, Playlist>;
  error: string;
  isLoading: boolean;
  addPlaylist: Action<PlaylistModel, Playlist>;
  setLoading: Action<PlaylistModel, boolean>;
  setError: Action<PlaylistModel, string>;
  getPlaylist: Thunk<PlaylistModel, { playlistId: string; refetch?: boolean }>;
  removePlaylist: Action<PlaylistModel, string>;
}

const playlistModel: PlaylistModel = persist(
  {
    data: {},
    error: '',
    isLoading: false,
    addPlaylist: action((state, payload) => {
      state.data[payload.playListId] = payload;
    }),

    removePlaylist: action((state, payload) => {
      const pId = state.data;
      delete pId[payload];
    }),

    setLoading: action((state, payload) => {
      state.isLoading = payload;
    }),

    setError: action((state, payload) => {
      state.error = payload;
    }),

    getPlaylist: thunk(
      async (actions, payload, helpers) => {
        const { addPlaylist, setLoading, setError } = actions;
        const { getState } = helpers;
        const { playlistId, refetch = false } = payload;
     
        if (Object.keys(getState().data).length >= 10) {
          setError('Maximum playlist size exceeded');
          return toast.error('Maximum playlist size exceeded');
        }

        if (!refetch && getState().data[playlistId]) {
          return null;
        }

        if (refetch) {
          const lastCached = getState().data[playlistId].cache;
          if (addMinutes(lastCached, cacheTime) > new Date()) {
            return toast.success('PlayList is already updated');
          }
        }

        setLoading(true);
        const loadingToastId = toast.loading('loading...');
        try {
          const playlist = await getPlaylist(playlistId);
          addPlaylist(playlist);
          toast.success('Successfully added playlist');
          return setError('');
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


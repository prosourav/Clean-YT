import { action, thunk, persist, Action, Thunk } from 'easy-peasy';
import getPlaylist from '../api';
import toast from 'react-hot-toast';
import { Playlist } from './types';
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

        if (Object.keys(getState().data).length >= 10 && !refetch) {
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
          const playlist: Playlist = await getPlaylist(playlistId);
          addPlaylist(playlist);
          toast.success(`Successfully ${refetch ? 'updated' : 'added'} playlist`);
          setError('');
        } catch (e: unknown) {
          const error = e as { response?: { data?: { error?: { message?: string } } } };
          setError(error.response?.data?.error?.message || 'Something went wrong');
          toast.error(error.response?.data?.error?.message || 'Playlist already exists');
        } finally {
          toast.dismiss(loadingToastId);
          setLoading(false);
        }
      }
    ),

  }, { storage: 'localStorage' }
);

export default playlistModel;

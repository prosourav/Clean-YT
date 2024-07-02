/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from 'react';
import { useStoreState } from '../data/store';
import getVideoItems from '../utils/getVideoItems';

const useRouteHandler = (playListId: string) => {
  const [watch, setWatch] = useState<string>('');
  const { data } = useStoreState(store => store.playlists);
  const { visitedplayList } = useStoreState(store => store.videoInfo);
  const { playlistItems, channelTitle, playlistTitle } = data[playListId];
  const videos: string[] = getVideoItems(playlistItems);

  useEffect(() => {
    if (visitedplayList[playListId]) {
      return setWatch(visitedplayList[playListId]['id']);
    }

    if (!visitedplayList[playListId]) {
      return setWatch(videos[0]);
    }

  }, []);


  return {
    videos,
    watch,
    channelTitle,
    playlistTitle,
    playlistItems, data
  };
};

export default useRouteHandler;
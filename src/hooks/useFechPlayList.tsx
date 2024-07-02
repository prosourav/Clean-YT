import React, { useEffect, useState } from 'react';
import formatUrl from '../utils/formatUrl';
import isvalidUrl from '../utils/isValidUrl';
import { useStoreActions, useStoreState } from '../data/store';

type HandleSubmitProps = {
  event?: React.FormEvent<HTMLFormElement>;
  refetch?: boolean;
};

const useFechPlayList = (urlId?: string, watch?: string) => {
  const [url, setUrl] = useState(urlId);
  const { getPlaylist, setError, setLoading } = useStoreActions(actions => actions.playlists);
  const { data } = useStoreState(store => store.playlists);



  useEffect(() => {
    if (!Object.keys(data).length || !data[urlId as string]) {
      handleSubmit({});
    }
  }, [data, urlId, watch]);

  const handleSubmit = ({ event, refetch = false }: HandleSubmitProps) => {
    event && event.preventDefault();
    if (url && isvalidUrl(url)) {
      const playlistId = formatUrl(url);
      return getPlaylist({ playlistId, refetch });
    }
    setError("Invalid Url");
  };


  return {
    handleSubmit,
    setUrl,
    url,
    setLoading,
    data
  };
};

export default useFechPlayList;
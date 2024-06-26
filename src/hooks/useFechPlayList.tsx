import React, { useState } from 'react';
import formatUrl from '../utils/formatUrl';
import isvalidUrl from '../utils/isValidUrl';
import { useStoreActions } from '../data/store';

type HandleSubmitProps = {
  event?: React.FormEvent<HTMLFormElement>;
  refetch?: boolean;
};

const useFechPlayList = (urlId?: string) => {
  const [url, setUrl] = useState(urlId);
  const { getPlaylist, setError, setLoading } = useStoreActions(actions => actions.playlists);

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
    setLoading
  };
};

export default useFechPlayList;
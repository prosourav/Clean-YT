import { CircularProgress, Grid } from "@mui/material";
import { useParams } from "react-router-dom";
import { Suspense, useEffect, useState } from "react";
import { useStoreState } from "../../providers/store";
import getVideoItems from "../../utils/getVideoItems";
import useFechPlayList from "../../hooks/useFechPlayList";
import React from "react";
import SideBar from "./components/Sidebar";
const VideoContainer = React.lazy(() => import("./components/VideoContainer"));

const VideoPage = () => {
  const [videoUrl, setVideoUrl] = useState('');
  const { playlistId } = useParams();
  const [playListId, watch] = [playlistId?.split('&watch=')[0], playlistId?.split('&watch=')[1] as string];
  const { visitedplayList } = useStoreState(store => store.videoInfo);
  const { data } = useFechPlayList(playListId, watch);

  useEffect(() => {
    return setVideoUrl(`https://www.youtube.com/watch?v=${watch}`);
  }, [playListId, watch]);

  if (!Object.keys(data).length) {
    return <CircularProgress />;
  }

  const { playlistItems, channelTitle, playlistTitle } = data[playListId as string];
  const videos: string[] = getVideoItems(playlistItems);

  return (
    <Grid container spacing={2} width="100%" sx={{ padding: '30px' }}>

      <Grid item xs={12} md={8}>
        <Suspense fallback={<CircularProgress />}>
          <VideoContainer {...{
            url: videoUrl, setUrl: setVideoUrl,
            playlistItems, visitedplayList, playlistId, videos,
            channelTitle, activeVideoId: watch, desc: data[playListId as string]?.playlistDescription
          }} />
        </Suspense>
      </Grid>

      <Grid item xs={12} md={4}>
        <SideBar {...{
          playlistItems, setUrl: setVideoUrl, videos,
          channelTitle, url: videoUrl, playlistTitle,
          activeVideoId: watch, playlistId
        }} />
      </Grid>

    </Grid>
  );
};

export default VideoPage;
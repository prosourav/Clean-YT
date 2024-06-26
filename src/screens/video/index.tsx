import { Grid } from "@mui/material";
import { useParams } from "react-router-dom";
import SideBar from "./components/Sidebar";
import VideoContainer from "./components/VideoContainer";
import { useStoreState } from "../../data/store";
import { useEffect, useState } from "react";
import getVideoItems from "../../utils/getVideoItems";
import useFechPlayList from "../../hooks/useFechPlayList";

const VideoPage = () => {
  const [videoUrl, setVideoUrl] = useState('');
  const { playlistId } = useParams();
  const { data } = useStoreState((state) => state.playlists);
  const { visitedplayList } = useStoreState((state) => state.videoInfo);
  const { handleSubmit, url } = useFechPlayList(playlistId);
  const activeVideoId = videoUrl.split("=")[1];

  useEffect(() => {
    if (url) handleSubmit({});
  }, [url]);


  if (!data || !data[playlistId as string]) {
    return null;
  }

  const { playlistItems, channelTitle, playlistTitle } = data[playlistId as string];
  const videos: string[] = getVideoItems(playlistItems);


  return (
    <Grid container spacing={2} width="100%" sx={{ padding: '30px' }}>
      <Grid item xs={12} md={8}>
        <VideoContainer {...{ url: videoUrl, setUrl: setVideoUrl, playlistItems, visitedplayList, playlistId, videos, channelTitle, activeVideoId }} />
      </Grid>
      <Grid item xs={12} md={4}>
        <SideBar {...{ playlistItems, setUrl: setVideoUrl, videos, channelTitle, url: videoUrl, playlistTitle, activeVideoId }} />
      </Grid>
    </Grid>
  );
};

export default VideoPage;
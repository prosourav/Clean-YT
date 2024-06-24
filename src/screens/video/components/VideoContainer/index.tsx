/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Container, Stack } from "@mui/material";
import VideoDescriptions from "../../../../components/VideoDescription";
import VideoPlayer from "../../../../components/VideoPlayer";
import Note from "../../../../components/Note";
import { useStoreActions } from "../../../../data/store";
import { Playlist } from "../../../../data/types";
import { useEffect, useState } from "react";
import getVideoItems from "../../../../utils/getVideoItems";

interface VideoContainerProps {
  items: Playlist;
  visitedplayList: Record<string, Record<string, string>>;
  playlistId: string | undefined;
}

const VideoContainer = ({ items, visitedplayList, playlistId }: VideoContainerProps) => {
  const [url, setUrl] = useState('');

  const { playlistItems } = items;
  const videos: string[] = getVideoItems(playlistItems);

  const { updateVisitedPlayList } = useStoreActions(actions => actions.videoInfo);

  useEffect(() => {
    if (playlistId && playlistId in visitedplayList) {
      console.log("called 1");
      setUrl(`https://www.youtube.com/watch?v=${visitedplayList[playlistId].id}`);
    } else {
      console.log("called 2");
      setUrl(`https://www.youtube.com/watch?v=${videos[0]}`);
    }
  }, [playlistId, playlistItems]);

  const handleAdd = () => {

    if (playlistId) {
      return updateVisitedPlayList({ [playlistId]: { id: url.split('=')[1] } });
    }
    console.warn("Handle Add broken");
  };

  const handleNext = () => {
    const currentVideoId = url.split('=')[1];
    console.log("current VideoId: ", currentVideoId);
    const index = videos.findIndex(v => v === currentVideoId);

    if (videos.length === index + 1) {
      return setUrl(`https://www.youtube.com/watch?v=${videos[0]}`);
    }
    return setUrl(`https://www.youtube.com/watch?v=${videos[index + 1]}`);
  };

  return (
    <Container>
      <VideoPlayer {...{ handleAdd, url, handleNext }} />
      <Stack>
        <VideoDescriptions />
        <Note />
      </Stack>
    </Container>
  );
};

export default VideoContainer;

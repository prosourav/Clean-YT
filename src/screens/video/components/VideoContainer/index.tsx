import { Container, Stack } from "@mui/material";
// import VideoDescriptions from "../../../../components/VideoDescription";
import VideoPlayer from "../../../../components/VideoPlayer";
// import Note from "../../../../components/Note";
import { useStoreActions } from "../../../../data/store";
import { PlaylistItems } from "../../../../data/types";
import { useEffect } from "react";

interface VideoContainerProps {
  playlistItems: PlaylistItems[];
  visitedplayList: Record<string, Record<string, string>>;
  playlistId: string | undefined;
  url: string;
  setUrl: React.Dispatch<React.SetStateAction<string>>;
  videos: string[];
  channelTitle: string,
  activeVideoId: string
}

const VideoContainer = ({ url, setUrl, playlistItems, visitedplayList, playlistId, videos, activeVideoId }: VideoContainerProps) => {

  const { updateVisitedPlayList } = useStoreActions(actions => actions.videoInfo);

  useEffect(() => {
    if (playlistId && playlistId in visitedplayList) {
      setUrl(`https://www.youtube.com/watch?v=${visitedplayList[playlistId].id}`);
    } else {
      setUrl(`https://www.youtube.com/watch?v=${videos[0]}`);
    }
  }, [playlistId, playlistItems]);



  const handleAdd = () => updateVisitedPlayList({ [playlistId as string]: { id: activeVideoId } });

  const handleNext = () => {
    const currentVideoId = url.split('=')[1];
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
        {/* <VideoDescriptions {...{ channelTitle, playlistItems }}  /> */}
        {/* <Note /> */}
      </Stack>
    </Container>
  );
};

export default VideoContainer;

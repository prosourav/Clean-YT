import { Container } from "@mui/material";
import { useParams } from "react-router-dom";
import SideBar from "./components/Sidebar";
import VideoContainer from "./components/VideoContainer";
import { useStoreState } from "../../data/store";

const VideoPage = () => {
  const { playlistId } = useParams();
  const { data } = useStoreState((state) => state.playlists);
  const { visitedplayList } = useStoreState((state) => state.videoInfo);

  const items = data[playlistId as string];

  return (
    <Container>
      <VideoContainer {...{ items, visitedplayList, playlistId }} />
      <SideBar {...{ items }} />
    </Container>
  );
};

export default VideoPage;
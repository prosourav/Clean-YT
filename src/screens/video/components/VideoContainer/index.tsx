import { Container } from "@mui/material";
import VideoPlayer from "../../../../components/VideoPlayer";
import { useStoreActions } from "../../../../data/store";
import { PlaylistItems } from "../../../../data/types";
import { useNavigate } from "react-router-dom";
import VideoInfo from "../../../../components/VideoInfo";

interface VideoContainerProps {
  playlistItems: PlaylistItems[];
  visitedplayList: Record<string, Record<string, string>>;
  playlistId: string | undefined;
  url: string;
  setUrl: React.Dispatch<React.SetStateAction<string>>;
  videos: string[];
  channelTitle: string;
  activeVideoId: string;
  desc: string;
}


const VideoContainer: React.FC<VideoContainerProps> = ({ url, playlistId, videos, desc }: VideoContainerProps) => {
  const navigate = useNavigate();
  const { updateVisitedPlayList } = useStoreActions(actions => actions.videoInfo);
  const activeVideoId = playlistId?.split("&watch=")[1];

  const handleAdd = () => {
    const key = playlistId?.split("&")[0] as string;
    updateVisitedPlayList({ [key]: { id: activeVideoId } } as Record<string, Record<string, string>>);
  };

  const handleNext = () => {
    const key = playlistId?.split("&")[0] as string;

    const index = videos.findIndex(v => v === activeVideoId);

    if (videos.length === index + 1) {

      return navigate(`/player/${key}&watch=${videos[0]}`);
    }
    return navigate(`/player/${key}&watch=${videos[index + 1]}`);

  };
  
  return (
    <Container>
      <VideoPlayer {...{ handleAdd, url, handleNext }} />
      <VideoInfo description={desc} />
    </Container>
  );
};

export default VideoContainer;

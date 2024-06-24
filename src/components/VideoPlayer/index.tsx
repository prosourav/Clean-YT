import { Box } from "@mui/material";
import ReactPlayer from "react-player";

interface VideoPlayerProps{
  url: string;
  handleAdd: () => void;
  handleNext: () => void;
}

const VideoPlayer = ({ handleAdd, url, handleNext }: VideoPlayerProps) => {
  // const [url, setUrl] = useState('https://www.youtube.com/watch?v=rzacGYY8Ipw');

  
  return (
    <Box>
      React-player
      <ReactPlayer
        url={url}
        onEnded={handleNext}
        controls={true}
        onStart={handleAdd}
      />
    </Box>
  );
};

export default VideoPlayer;
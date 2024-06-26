import { Box } from "@mui/material";
import ReactPlayer from "react-player";

const VideoPlayer = ({ handleAdd, url, handleNext }: VideoPlayerProps) => {

  return (
    <Box>
      <ReactPlayer
        width={"100%"}
        height={"450px"}
        url={url}
        onEnded={handleNext}
        controls={true}
        onStart={handleAdd}
      />
    </Box>
  );
};

export default VideoPlayer;
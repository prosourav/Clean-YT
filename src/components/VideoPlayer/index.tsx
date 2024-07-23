import { Box, CircularProgress } from "@mui/material";
import { useEffect, useState } from "react";
import ReactPlayer from "react-player";

const VideoPlayer = ({ handleAdd, url, handleNext, playerRef }: VideoPlayerProps) => {
  const [urlNew, setNewUrl] = useState(url);

  useEffect(() => {
    setNewUrl(url);
  }, [url]);

  if (!url) {
    return <CircularProgress />;
  }

 
  return (
    <Box>
      <ReactPlayer
        controls
        ref={playerRef}
        width={"100%"}
        height={"450px"}
        url={urlNew}
        onEnded={handleNext}
        onStart={handleAdd}
      />
    </Box>
  );
};

export default VideoPlayer;
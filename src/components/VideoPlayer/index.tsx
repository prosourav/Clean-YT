import { Box, CircularProgress } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import ReactPlayer from "react-player";

const VideoPlayer = ({ handleAdd, url, handleNext, setPlayed }: VideoPlayerProps) => {
  const [urlNew, setNewUrl] = useState(url);
  const playerRef = useRef(null);


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
        onProgress={(progress) => {
          setPlayed(progress.playedSeconds);
        }}
        onStart={handleAdd}
      />
    </Box>
  );
};

export default VideoPlayer;
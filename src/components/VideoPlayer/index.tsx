import { Box, CircularProgress } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import ReactPlayer from "react-player";

const VideoPlayer = ({ handleAdd, url, handleNext }: VideoPlayerProps) => {
  const [urlNew, setNewUrl] = useState(url);
  const [notes, setNotes] = useState([]);
  const playerRef = useRef(null);
  const [played, setPlayed] = useState(0);


  useEffect(() => {
    setNewUrl(url);
  }, [url]);

  if (!url) {
    return <CircularProgress />;
  }


  const addNote = () => {
    const currentTimeInSeconds = played;
    // const currentTimeInSeconds = playerRef.current.getCurrentTime();

    const hours = Math.floor(currentTimeInSeconds / 3600);
    const minutes = Math.floor((currentTimeInSeconds % 3600) / 60);
    const seconds = Math.floor(currentTimeInSeconds % 60);

    let formattedTime;
    if (hours > 0) {
      formattedTime = `${hours}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    } else {
      formattedTime = `${minutes}:${seconds.toString().padStart(2, '0')}`;
    }

    const newNote = {
      time: formattedTime,
      content: prompt('Enter your note:')
    };
    setNotes([...notes, newNote]);
    console.log('Note added at:', formattedTime);
  };

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
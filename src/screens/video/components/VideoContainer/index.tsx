import { Container } from "@mui/material";
import VideoPlayer from "../../../../components/VideoPlayer";
import { useStoreActions, useStoreState } from "../../../../data/store";
import { useNavigate } from "react-router-dom";
import VideoInfo from "../../../../components/VideoInfo";
import { useState } from "react";


const VideoContainer: React.FC<VideoContainerProps> = ({ url, playlistId, videos, desc }: VideoContainerProps) => {
  const navigate = useNavigate();
  const { updateVisitedPlayList } = useStoreActions(actions => actions.videoInfo);
  const { addToNotes } = useStoreActions(actions => actions.notes);
  const activeVideoId = playlistId?.split("&watch=")[1];
  const [played, setPlayed] = useState(0);
  const key = playlistId?.split("&")[0] as string;
  const { items } = useStoreState(store => store.notes);


  const handleAdd = () => {
    updateVisitedPlayList({ [key]: { id: activeVideoId } } as Record<string, Record<string, string>>);
  };

  const handleNext = () => {
    const index = videos.findIndex(v => v === activeVideoId);

    if (videos.length === index + 1) {

      return navigate(`/player/${key}&watch=${videos[0]}`);
    }
    return navigate(`/player/${key}&watch=${videos[index + 1]}`);
  };

  const addNote = (data: string) => {
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
      id: `${key}-#${activeVideoId}`,
      time: formattedTime,
      content: data
    };

    addToNotes(newNote);
  };

  const filteredNotes = items.filter(note => note.id.split('-#')[1] === activeVideoId);
  

  return (
    <Container>
      <VideoPlayer {...{ handleAdd, url, handleNext, setPlayed }} />
      <VideoInfo description={desc} addNote={addNote} notes={filteredNotes} />
    </Container>
  );
};

export default VideoContainer;

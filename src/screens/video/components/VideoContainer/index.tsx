import { Container } from "@mui/material";
import VideoPlayer from "../../../../components/VideoPlayer";
import { useStoreActions, useStoreState } from "../../../../data/store";
import { useNavigate } from "react-router-dom";
import VideoInfo from "../../../../components/VideoInfo";
import { useState } from "react";
import uuid from "short-uuid";
import AlertDialog from "../../../../components/Confirmation";


const VideoContainer: React.FC<VideoContainerProps> = ({ url, playlistId, videos, desc }: VideoContainerProps) => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const { updateVisitedPlayList } = useStoreActions(actions => actions.videoInfo);
  const { addToNotes, removeNotes } = useStoreActions(actions => actions.notes);
  const activeVideoId = playlistId?.split("&watch=")[1];
  const [played, setPlayed] = useState(0);
  const key = playlistId?.split("&")[0] as string;
  const { items } = useStoreState(store => store.notes);
  const [deleteId, setDeleteId] = useState('');


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
      key: uuid.generate(),
      id: `${key}-#${activeVideoId}`,
      time: formattedTime,
      content: data
    };

    addToNotes(newNote);
  };

  // opening confirmation popup
  const removeNote = (noteId: string) => {
    setOpen(true);
    setDeleteId(noteId);
  };

  const handleDelete = () => {
    removeNotes(deleteId);
  };

  const filteredNotes = items.filter(note => note.id.split('-#')[1] === activeVideoId);
  
  return (
    <Container>
      {deleteId && <AlertDialog {...{ open, setOpen, handleDelete, playListName: 'this note' }} />}
      <VideoPlayer {...{ handleAdd, url, handleNext, setPlayed }} />
      <VideoInfo description={desc} addNote={addNote} notes={filteredNotes} removeNote={removeNote} />
    </Container>
  );
};

export default VideoContainer;

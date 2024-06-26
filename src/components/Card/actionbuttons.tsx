import { PlayCircleOutline } from "@mui/icons-material";
import { Button, Link, Stack, CardActions } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import FavoriteIcon from '@mui/icons-material/Favorite';
import DeleteIcon from '@mui/icons-material/Delete';
import AlertDialog from "../Confirmation";
import SyncIconButton from "./syncButton";


const Actionbuttons: React.FC<ActionButtonsProps> = ({ title, handleRemove, playListId, playlistTitle,
  addTofav, addToRecents, isInFavoriteList, handleRefetch, isRotating, open, setOpen }) => {

  const Confirmation = () => {
    if (title === 'Favourite PlayLists' && handleRemove) {
      return handleRemove(title, playListId);
    }
    setOpen(true);
  };

  const handleDelete = () => {
    if (handleRemove) {
      handleRemove(title, playListId);
    }
  };

  const handleFav = () => {
    if (addTofav) {
      addTofav(playListId);
    }
  };

  const handleRecents = () => addToRecents(playListId);

  return (
    <CardActions disableSpacing sx={{ display: "flex", justifyContent: 'space-between' }}>
      {open && <AlertDialog {...{ open, setOpen, handleDelete, playListName: playlistTitle }} />}
      <Stack direction={"row"} spacing={1} alignItems={"center"}>
        <Button onClick={handleRecents}>

          <Link
            to={`/player/${playListId}`}
            component={RouterLink}
            variant="body2"
            fontWeight={600}
            sx={{ textDecoration: "none", display: "flex", alignItems: "center", gap: '10px' }}
          >
            <PlayCircleOutline />
            Start Tutorial
          </Link>
        </Button>

      </Stack>
      {title === 'Favourite PlayLists' ?
        <Stack direction="row" spacing={2} sx={{display:'flex', alignItems:'center'}}>
          <SyncIconButton {...{ handleRefetch, isRotating }} />
          <DeleteIcon color="primary" sx={{ cursor: 'pointer' }} onClick={Confirmation} />
        </Stack>
        :
        (<Stack direction="row" spacing={2} sx={{ display: 'flex', alignItems: 'center' }}>
          <SyncIconButton {...{ handleRefetch, isRotating }}/>
          <FavoriteIcon color={isInFavoriteList(playListId) ? "primary" : "secondary"} sx={{ cursor: 'pointer' }} onClick={handleFav} />
          {title === 'All PlayLists' && <DeleteIcon color="primary" sx={{ cursor: 'pointer' }} onClick={Confirmation} />}
       
        </Stack>)
      }
    </CardActions>
  );
};

export default Actionbuttons;

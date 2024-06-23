import { PlayCircleOutline } from "@mui/icons-material";
import { Button, Link, Stack, CardActions } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import FavoriteIcon from '@mui/icons-material/Favorite';
import DeleteIcon from '@mui/icons-material/Delete';
import { useState } from "react";
import AlertDialog from "../Confirmation";


const Actionbuttons: React.FC<ActionButtonsProps> = ({ title, handleRemove, playListId, addTofav, addToRecents, isInFavoriteList }) => {
  const [open, setOpen] = useState(false);

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
      {open && <AlertDialog {...{ open, setOpen, handleDelete }} />}
      <Button onClick={handleRecents}>
        <Stack direction={"row"} spacing={1} alignItems={"center"}>
          <PlayCircleOutline />

          <Link
            to={`/player/${playListId}`}
            component={RouterLink}
            variant="body2"
            fontWeight={600}
            sx={{ textDecoration: "none" }}
          >
            Start Tutorial
          </Link>
        </Stack>
      </Button>
      {title === 'Favourite PlayLists' ?
        <DeleteIcon color="primary" sx={{ cursor: 'pointer' }} onClick={Confirmation} />
        :
        (<Stack direction="row" spacing={2}>
          <FavoriteIcon color={isInFavoriteList(playListId) ? "primary" : "secondary"} sx={{ cursor: 'pointer' }} onClick={handleFav} />
          {title === 'All PlayLists' && <DeleteIcon color="primary" sx={{ cursor: 'pointer' }} onClick={Confirmation} />}
        </Stack>)
      }
    </CardActions>
  );
};

export default Actionbuttons;
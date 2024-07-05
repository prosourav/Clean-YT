import Card from "@mui/material/Card";
import { useState } from "react";
import { Box, CardContent, CardMedia, Typography } from "@mui/material";
import useFechPlayList from "../../hooks/useFechPlayList";
import Actionbuttons from "./actionbuttons";
import useRouteHandler from "../../hooks/routeHandler";


const PlaylistCardItem: React.FC<PlaylistCardItemProps> = ({
  playlistThumbnail,
  playlistTitle,
  channelTitle,
  playListId,
  title,
  handleRemove,
  addTofav,
  addToRecents,
  isInFavoriteList,
}) => {

  const [isRotating, setIsRotating] = useState(false);
  const [open, setOpen] = useState(false);
  
  // function where redux is empty
  const { handleSubmit } = useFechPlayList(playListId);
  const { watch } = useRouteHandler(playListId);

  const handleRefetch = () => {
    handleSubmit({refetch: true});
    setIsRotating(!isRotating);
  };


  return (
    <Card
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        marginX: 2,
        marginY: 1,
        transition: "transform 0.3s, box-shadow 0.3s",
        '&:hover': {
          transform: "scale(1.09)",
          boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)"
        }
      }}
    >
      <CardMedia
        component="img"
        image={playlistThumbnail.url}
        alt={playlistTitle}
      />
      <CardContent>
        <Typography variant="h6" color="text.primary">
          {`${playlistTitle?.length > 50
            ? playlistTitle.substr(0, 50) + "..."
            : playlistTitle
            }`}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {channelTitle}
        </Typography>

      </CardContent>
      <Box sx={{ flexGrow: 1 }}></Box>
      <Actionbuttons
        title={title}
        playListId={playListId}
        handleRemove={handleRemove}
        addTofav={addTofav}
        open={open}
        setOpen={setOpen}
        playlistTitle={playlistTitle}
        addToRecents={addToRecents}
        isInFavoriteList={isInFavoriteList}
        handleRefetch={handleRefetch}
        isRotating={isRotating}
        watchUrl={watch}
      />
    </Card>
  );
};

export default PlaylistCardItem;


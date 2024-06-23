import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import Actionbuttons from "./actionbuttons";


const PlaylistCardItem: React.FC<PlaylistCardItemProps> = ({
  playlistThumbnail,
  playlistTitle,
  channelTitle,
  playListId,
  title,
  handleRemove,
  addTofav,
  addToRecents,
  isInFavoriteList
}) => {

  return (
    <Card
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        margin: 1,
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
      <Actionbuttons {...{
        title, playListId, handleRemove,
        addTofav, addToRecents, isInFavoriteList
      }} />
    </Card>
  );
};

export default PlaylistCardItem;
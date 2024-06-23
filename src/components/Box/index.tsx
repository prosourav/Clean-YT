/* eslint-disable @typescript-eslint/no-unused-vars */
import { Container, Grid, Typography } from "@mui/material";
import PlaylistCardItem from "../Card";
import { useStoreActions, useStoreState } from "../../data/store";

const Box: React.FC<BoxType> = ({ listItems, title }) => {

  const { data } = useStoreState((state) => state.playlists);
  const { addToFavorite, removeFromFavorite } = useStoreActions(actions => actions.favorites);
  const { removePlaylist } = useStoreActions(actions => actions.playlists);
  const { addToRecent, removeFromRecent } = useStoreActions(actions => actions.recents);
  const { items } = useStoreState(state => state.favorites);
  const playList = listItems.map((item) => data[item]);

  const addTofav = (id: string) => addToFavorite(id);
  const addToRecents = (id: string) => addToRecent(id);
  const isInFavoriteList = (id: string) => {
    return items.includes(id) ? true : false;
  };

  const handleHardDelete = (id: string) => {
    removePlaylist(id);
    removeFromFavorite(id);
    removeFromRecent(id);
  };


  const handleRemove = (category: string, id: string) => {
    switch (category) {
      case "All PlayLists":
        handleHardDelete(id);
        break;
      case "Favourite PlayLists":
        removeFromFavorite(id);
        break;
      default: return;
    }
  };

  if (listItems.length === 0) {
    return null;
  }

  return (
    <Container maxWidth={"lg"} sx={{ my: 14 }}>
      <Typography align="left" variant="h5" sx={{ margin: "20px" }}>
        {title}({listItems.length})
      </Typography>
      {playList.length > 0 && (
        <Grid container alignItems="stretch">
          {playList.map((item) => (
            <Grid key={item.playListId} item xs={12} md={6} lg={4} mb={2}>
              <PlaylistCardItem
                playlistThumbnail={item.playlistThumbnail as unknown as { url: string }}
                playlistTitle={item.playlistTitle}
                channelTitle={item.channelTitle}
                playListId={item.playListId}
                title={title}
                addTofav={addTofav}
                handleRemove={handleRemove}
                addToRecents={addToRecents}
                isInFavoriteList={isInFavoriteList}
              />
            </Grid>
          ))}
        </Grid>
      )}
    </Container>
  );
};

export default Box;
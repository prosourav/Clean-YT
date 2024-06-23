import { Container, Grid } from "@mui/material";
import PlaylistCardItem from "../Card";


const Box = ({ playlistArray, loading, error }) => {

  return (
    <Container maxWidth={"lg"} sx={{ my: 16 }}>
      {playlistArray.length > 0 && (
        <Grid container alignItems="stretch">
          {playlistArray?.map((item) => (
            <Grid key={item.playlistTitle} item xs={12} md={6} lg={4} mb={2}>
              <PlaylistCardItem
                key={item?.id}
                playlistThumbnail={item.playlistThumbnail}
                playlistTitle={item.playlistTitle}
                channelTitle={item.channelTitle}
                playlistId={item.playListId}
              />
            </Grid>
          ))}
        </Grid>
      )}
    </Container>
  );
};

export default Box;
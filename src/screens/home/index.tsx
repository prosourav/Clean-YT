import { Box as MuiBox, Container, Typography } from "@mui/material";
import InputHeader from "../../components/HeaderInput";
import { useState } from "react";
import { useStoreActions, useStoreState } from "../../data/store";
import isvalidUrl from "../../utils/isValidUrl";
import formatUrl from "../../utils/formatUrl";
import Box from "../../components/Box";


const Home = () => {
  const [url, setUrl] = useState('');

  const { getPlaylist, setError } = useStoreActions(actions => actions.playlists);
  const { error, data, isLoading } = useStoreState((state) => state.playlists);
  const { items } = useStoreState((state) => state.favorites);
  const { items: recents } = useStoreState((state) => state.recents);
  const playlistsData = Object.keys(data);


  const handleChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => setUrl(target.value);
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (isvalidUrl(url)) {
      const playListUrlId = formatUrl(url);
      getPlaylist(playListUrlId);
      return setUrl('');
    }
    setError("Invalid Url");
  };

  return (
    <Container>
      <MuiBox sx={{ paddingTop: '70px' }}>
        <Typography align="center" sx={{ color: "#fff", mt: 3, mb: 2 }} variant="body1">
          {'Paste your desired playlist id and hit add button'.toUpperCase()}
        </Typography>
        <InputHeader {...{ url, handleChange, handleSubmit, error }} />

      </MuiBox>
      <Box listItems={playlistsData} loading={isLoading} error={error} title={"All PlayLists"} />
      <Box listItems={items} loading={isLoading} error={error} title={"Favourite PlayLists"} />
      <Box listItems={recents} loading={isLoading} error={error} title={"Recent PlayLists"} />
    </Container>
  );
};

export default Home;
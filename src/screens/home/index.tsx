import { Box, Container, Typography } from "@mui/material";
import InputHeader from "../../components/HeaderInput";
import { useState } from "react";
import { useStoreActions, useStoreState } from "../../data/store";
import isvalidUrl from "../../utils/isValidUrl";
import formatUrl from "../../utils/formatUrl";


const Home = () => {
  const [url, setUrl] = useState('');

  const { getPlaylist, setError } = useStoreActions(actions => actions.playlists);
  const { error } = useStoreState((state) => state.playlists);

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
      <Box sx={{ paddingTop: '70px' }}>
        <Typography
          align="center"
          sx={{ color: "#fff", mt: 3, mb: 2 }}
          variant="body1"
        >
          Paste your desired playlist id and hit add button.
        </Typography>
        <InputHeader {...{ url, handleChange, handleSubmit, error }} />

      </Box>
    </Container>
  );
};

export default Home;
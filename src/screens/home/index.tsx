import { Box as MuiBox, Container, Typography } from "@mui/material";
import InputHeader from "../../components/HeaderInput";
import { useStoreState } from "../../data/store";
import Box from "./components/Box";
import useFechPlayList from "../../hooks/useFechPlayList";


const Home = () => {
  const { handleSubmit, setUrl, url } = useFechPlayList();
  const { error, data, isLoading } = useStoreState((state) => state.playlists);
  const { items } = useStoreState((state) => state.favorites);
  const { items: recents } = useStoreState((state) => state.recents);
  const playlistsData = Object.keys(data);


  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => setUrl(event.target.value);
  const addNewPlayList = (event: React.FormEvent<HTMLFormElement>) => {
    handleSubmit({ event });
    setUrl('');
  };


  return (
    <Container>
      <MuiBox sx={{ paddingTop: '70px' }}>
        <Typography align="center" sx={{ color: "#fff", mt: 3, mb: 2 }} variant="body1">
          {'Paste your desired playlist id and hit add button'.toUpperCase()}
        </Typography>
        <InputHeader {...{ url, handleChange, handleSubmit: addNewPlayList, error }} />

      </MuiBox>
      <Box listItems={playlistsData} loading={isLoading} error={error} title={"All PlayLists"} />
      <Box listItems={items} loading={isLoading} error={error} title={"Favourite PlayLists"} />
      <Box listItems={recents} loading={isLoading} error={error} title={"Recent PlayLists"} />
    </Container>
  );
};

export default Home;

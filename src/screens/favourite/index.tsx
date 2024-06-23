
import { Container } from "@mui/material";
import Box from "../../components/Box";
import { useStoreState } from "../../data/store";


const Favoutite = () => {

  const { items} = useStoreState((state) => state.favorites);

  return (
    <Container>
      <Box listItems={items} title={"Favourite PlayLists"} />
    </Container>
  );
};

export default Favoutite;
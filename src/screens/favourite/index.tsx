
import { Container } from "@mui/material";
import Box from "../home/components/Box";
import { useStoreState } from "../../providers/store";


const Favoutite = () => {

  const { items } = useStoreState((state) => state.favorites);

  return (
    <Container sx={{ marginTop: '8rem' }}>
      <Box listItems={items} title={"Favourite PlayLists"} />
    </Container>
  );
};

export default Favoutite;
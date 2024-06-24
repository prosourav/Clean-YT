import { Container } from "@mui/material";
import { useStoreState } from "../../data/store";

import Box from "../home/components/Box";


const Recents = () => {

  const { items: recents } = useStoreState((state) => state.recents);

  return (
    <Container>
      <Box listItems={recents} title={"Recent PlayLists"} />
    </Container>
  );
};

export default Recents;
import { useStoreActions } from "../../data/store";

const Home = () => {
  const toggleTheme = useStoreActions(((actions) => actions.theme.toggleTheme));
 
  const handleTheme = () => {
    toggleTheme();
  };

  return (
    <h1 onClick={handleTheme}>Home</h1>
  );
};

export default Home;
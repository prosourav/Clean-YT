import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import LayOut from "./components/Layout";
import AppRoute from "./router";
import { useStoreState } from "easy-peasy";
import { StoreModel } from "./data/types";


function App() {
  const theme = useStoreState((state: StoreModel) => state.theme.theme);

  const muiTheme = createTheme({
    palette: {
      mode: theme.mode,
      primary: {
        main: theme.primaryColor,
      },
      secondary: {
        main: theme.secondaryColor,
      },
    },
  });

  return (
    <ThemeProvider theme={muiTheme}>
      <CssBaseline />
      <AppRoute >
        <LayOut />
      </AppRoute>
    </ThemeProvider>
  );
}

export default App;

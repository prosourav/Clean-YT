import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import LayOut from "./components/Layout";
import AppRoute from "./router";
import { useStoreState } from "easy-peasy";
import { StoreModel } from "./providers/types";
import { Toaster } from "react-hot-toast";


function App() {
  const theme = useStoreState((state: StoreModel) => state.theme.theme);

  const muiTheme = createTheme({
    palette: {
      mode: theme.mode,
      primary: {
        main: 'rgb(255, 0,0)',
      },
      secondary: {
        main: '#ffff',
      },
    },
  });

  return (
    <ThemeProvider theme={muiTheme}>
      <CssBaseline />
      <Toaster position="bottom-right" />
      <AppRoute >
        <LayOut />
      </AppRoute>
    </ThemeProvider>
  );
}

export default App;

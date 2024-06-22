import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../screens/home";

export interface LayoutProps {
  children: React.ReactNode
}

const AppRoute = ({ children }: LayoutProps) => {
  return (
    <BrowserRouter>
      {children}
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="/player/:playlistId"
          element={<h1>Playlist details</h1>
          }
        />
        <Route path="*" element={<h1>Not found</h1>} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoute;
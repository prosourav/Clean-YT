import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../screens/home";
import Recents from "../screens/recents";
import Favoutite from "../screens/favourite";
import VideoPage from "../screens/video";

export interface LayoutProps {
  children: React.ReactNode
}

const AppRoute = ({ children }: LayoutProps) => {
  return (
    <BrowserRouter>
      {children}
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/favourites" element={<Favoutite />} />

        <Route path="/recents" element={<Recents />} />
        <Route
          path="/player/:playlistId"
          element={<VideoPage/>
          }
        />
        <Route path="*" element={<h1>Not found</h1>} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoute;
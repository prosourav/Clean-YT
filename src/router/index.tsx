import { BrowserRouter, Routes, Route } from "react-router-dom";

const AppRoute = ({ children, playlistArray, playList, loading, error }) => {
  return (
    <BrowserRouter>
      {children}
      <Routes>
        <Route
          path="/"
          element={<Home {...{ playlistArray, loading, error }} />}
        />
        <Route
          path="/player/:playlistId"
          element={<PlayerPage playList={playList} />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoute;
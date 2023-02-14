import { Route, Routes } from "react-router-dom";
import AllMeetupsPage from "./pages/AllMeetups";
import NewMeetupsPage from "./pages/NewMeetUps";
import FavoritesPage from "./pages/Favorites";
import Layout from "./components/layout/Layout";

function App() {
  // localhost:3000/
  // my-page.com

  return (
      <Layout>
        <Routes>
          <Route path="/" element={<AllMeetupsPage />} exact />

          <Route path="/new-meetup" element={<NewMeetupsPage />} />

          <Route path="/favorites" element={<FavoritesPage />} />

          <Route path="/*" element={<AllMeetupsPage />} />
        </Routes>
      </Layout>
  );
}

export default App;

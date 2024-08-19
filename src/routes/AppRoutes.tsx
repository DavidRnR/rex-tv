import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from '@components/Layout/Layout';
import TvShowDetailsPage from '@pages/TvShowDetails/TvShowDetailsPage';
import TvShowsPage from '@pages/TvShows/TvShowsPage';
import ContactPage from '@pages/Contact/ContactPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/tvshows" element={<TvShowsPage />} />
          <Route path="/tvshows/:tvshowId" element={<TvShowDetailsPage />} />
        </Route>
        <Route path="/" element={<Navigate to="/tvshows" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

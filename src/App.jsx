import { BrowserRouter, Route, Routes } from 'react-router-dom';

import MainLayout from './components/layout/MainLayout/MainLayout';

import HomePage from './pages/HomePage/HomePage';
import ServicesPage from './pages/ServicesPage/ServicesPage';
import ServiceDetailsPage from './pages/ServiceDetailsPage/ServiceDetailsPage';
import ProjectsPage from './pages/ProjectsPage/ProjectsPage';
import ProjectDetailsPage from './pages/ProjectDetailsPage/ProjectDetailsPage';
import AboutPage from './pages/AboutPage/AboutPage';
import ReviewsPage from './pages/ReviewsPage/ReviewsPage';
import FaqPage from './pages/FaqPage/FaqPage';
import ContactPage from './pages/ContactPage/ContactPage';
import EstimatePage from './pages/EstimatePage/EstimatePage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path='/' element={<HomePage />} />

          <Route path='/services' element={<ServicesPage />} />
          <Route
            path='/services/:serviceSlug'
            element={<ServiceDetailsPage />}
          />

          <Route path='/projects' element={<ProjectsPage />} />
          <Route
            path='/projects/:projectSlug'
            element={<ProjectDetailsPage />}
          />

          <Route path='/about' element={<AboutPage />} />
          <Route path='/reviews' element={<ReviewsPage />} />
          <Route path='/faq' element={<FaqPage />} />
          <Route path='/contact' element={<ContactPage />} />
          <Route path='/request-estimate' element={<EstimatePage />} />

          <Route path='*' element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

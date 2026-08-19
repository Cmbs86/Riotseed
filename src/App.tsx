import { Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import ServiceDetail from './pages/ServiceDetail';
import ProjectDetail from './pages/ProjectDetail';
import Impressum from './pages/Impressum';
import Datenschutz from './pages/Datenschutz';
import NotFound from './pages/NotFound';

const App = () => {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services/:slug" element={<ServiceDetail />} /> 
        <Route path="/projects/:slug" element={<ProjectDetail />} />
        <Route path="/impressum" element={<Impressum />} />
        <Route path="/datenschutz" element={<Datenschutz />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </MainLayout>
  );
}

export default App;
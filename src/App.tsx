import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import GoalContent from './pages/GoalContent';
import MethodologyContent from './pages/MethodologyContent';
import ResultsContent from './pages/ResultsContent';
import WorkpackagesContent from './pages/WorkpackagesContent';
import HomeContent from './pages/HomeContent';
import NewsContent from './pages/NewsContent';
import GamesContent from './pages/GamesContent';
import ContactsContent from './pages/ContactsContent';
import ScrollToTop from './components/ScrollToTop';

const App: React.FC = () => {
  return (
    <>
    <ScrollToTop/>
      <Header />
        <Routes>
          <Route path="/" element={<HomeContent />} />
          <Route path="/goals" element={<GoalContent />} />
          <Route path="/methodology" element={<MethodologyContent />} />
          <Route path="/results" element={<ResultsContent />} />
          <Route path="/workpackages" element={<WorkpackagesContent />} />
          <Route path="/news" element={<NewsContent />} />
          <Route path="/games" element={<GamesContent />} />
          <Route path="/contacts" element={<ContactsContent />} />
        </Routes>
      <Footer />
    </>
  );
};

export default App;

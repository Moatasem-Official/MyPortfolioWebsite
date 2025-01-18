import { useState, useCallback } from 'react';
import { Toaster } from 'react-hot-toast';
import { AnimatePresence } from 'framer-motion';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import HireModal from './components/HireModal';
import Footer from './components/Footer';
import ProjectDetails from './components/ProjectDetails';

const App = () => {
  const [showHireModal, setShowHireModal] = useState(false);

  const handleOpenModal = useCallback(() => {
    setShowHireModal(true);
  }, []);

  return (
    <Router basename="/MyPortfolioWebsite">
      <div className="min-h-screen bg-primary text-textPrimary">
        <Toaster position="bottom-right" />
        <Navbar onHireClick={handleOpenModal} />
        
        {/* Main Content */}
        <main className="container mx-auto px-4 space-y-32 py-32">
          <Routes>
            <Route path="/" element={
              <>
                <section id="home" className="min-h-screen flex items-center justify-center">
                  <Home showHireModal={showHireModal} setShowHireModal={setShowHireModal} />
                </section>

                <section id="about" className="py-20">
                  <About />
                </section>

                <section id="projects" className="py-20 flex items-center justify-center">
                  <Projects />
                </section>

                <section id="certifications" className="py-20 flex items-center justify-center">
                  <Certifications />
                </section>
              </>
            } />
            <Route path="/projects/:projectId" element={<ProjectDetails />} />
          </Routes>
        </main>

        <Footer />

        {/* Hire Modal */}
        <AnimatePresence>
          {showHireModal && (
            <HireModal 
              showModal={showHireModal} 
              setShowModal={setShowHireModal} 
            />
          )}
        </AnimatePresence>
      </div>
    </Router>
  );
};

export default App;
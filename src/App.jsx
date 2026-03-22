import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Navbar } from './components/layout/Navbar';
import { PageContainer } from './components/layout/PageContainer';
import { Home } from './pages/Home/Home'; // Add this import

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <PageContainer>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/merge" element={<h2 className="text-2xl font-bold">Merge Page Coming Soon</h2>} />
          <Route path="/split" element={<h2 className="text-2xl font-bold">Split Page Coming Soon</h2>} />
        </Routes>
      </PageContainer>
    </div>
  );
}

export default App;
import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import EmissionsTable from './components/EmissionsTable';
import News from './components/News';
import About from './components/About';
import './App.css';

const App = () => {
  return (
    <div className="app">
      <Header />
      <div className="content emission">
        <EmissionsTable />
      </div>
      <div className="content news">
        <News />
      </div>
      <div className="content about">
        <About />
      </div>
      <Footer />
    </div>
  );
};

export default App;

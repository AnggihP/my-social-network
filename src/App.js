import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';

import Videos from './components/Videos';
import Activity from './components/Activity';
import People from './components/People';
import Channels from './components/Channels';
import Documents from './components/Documents';

function App() {
  return (
    <div className="app flex flex-col h-screen bg-cordovan overflow-y-scroll">
      <Header />

      <main className="main-content flex flex-1 flex-col md:flex-row mx-4 md:mx-20 bg-cordovan">
        <div className="flex-1 p-4">
          <Videos />
          <People />
          <Documents />
        </div>
        <div className="flex-1 p-4 md:p-10 max-w-sm">
          <Activity />
          <Channels />
        </div>
      </main>
      
      <Footer />
    </div>
  );
}

export default App;

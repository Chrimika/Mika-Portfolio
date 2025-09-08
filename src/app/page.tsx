"use client"

import React from 'react';
import TabBar from './components/TabBar';
import Landing1 from './screens/Landing1';


const Portfolio: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center" style={{ flexDirection: 'column', height: '100vh' }}>
      {/* <h1 className="text-4xl font-bold">Hello World</h1> */}
      {/* <TabBar /> */}
      <Landing1 />
    </div>
  );
};

export default Portfolio;
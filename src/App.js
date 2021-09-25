import React from 'react'
import { Navbar } from './components/navbar.js'
import { HomeTop } from './components/home-top.js'
import './index.css'

function App() {
  return (
    <div className="h-screen w-full bg-skin-bodyBg flex  justify-center items-start">
      <Navbar/>

      <div className="mt-32 lg:mt-20 home-inner-container flex justify-center items-center">
        <HomeTop/>
      </div>
    </div>
  );
}

export default App;

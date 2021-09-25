import React from 'react'
import { Navbar } from './components/navbar.js'
import { HomeTop } from './components/home-top.js'
import { InvoceInput } from './components/invoice-input.js'
import './index.css'

function App() {
  return (
    <div className=" h-screen w-full bg-skin-bodyBg flex items-start">
      <Navbar/>
      <InvoceInput/>

      <div className="ml-auto flex justify-center home-inner-container">
        <div className="mt-32 lg:mt-20 home-center flex justify-center items-center">

          <HomeTop/>

        </div>
      </div>

    </div>
  );
}

export default App;

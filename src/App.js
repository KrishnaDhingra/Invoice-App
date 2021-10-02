import React, { useState } from 'react'
import { Navbar } from './components/navbar.js'
import { HomeTop } from './components/home-top.js'
import { InvoceInput } from './components/invoice-input.js'
import { TodoBarContainer } from './components/todo-bar.js'
import './index.css'

function App() {

  const [ positionVal, setPositionVal ] = useState('-80vw')

  let ChangePosition = () => {
    if(positionVal === '-80vw'){
      setPositionVal('0vw')
    }else{
      setPositionVal("-80vw")
    }
    console.log("button")
  }
  return (
    <div className="overflow-y-scroll h-screen w-full theme-light bg-skin-bodyBg flex items-start" onClick={() => {
      if(positionVal === "0vw"){
        setPositionVal("-80vw")
      }
    }}>
      <Navbar/>
      <InvoceInput position={positionVal}/>

      <div className="ml-auto flex justify-center home-inner-container">
        <div className="mt-32 lg:mt-20 home-center flex flex-col justify-center items-center">

          <HomeTop onSelect={(event) => {
            ChangePosition()
            event.stopPropagation()
            }}/>
          <TodoBarContainer/>

        </div>
      </div>

    </div>
  );
}

export default App;

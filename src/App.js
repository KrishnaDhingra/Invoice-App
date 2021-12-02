import React, { useState } from 'react'
import { Navbar } from './components/navbar.js'
import { HomeTop } from './components/home-top.js'
import { InvoiceInput } from './components/invoice-input.js'
import { TodoBarContainer } from './components/todo-bar.js'
import { DetailInput } from './components/detail-input.js'
import { BrowserRouter as Router, Route} from 'react-router-dom'
import './index.css'

function App() {

  const [ dark, setDark ] = useState('dark')

  let ToggleTheme = () => {
    if(dark === 'dark'){
      setDark('light')
    }else{
      setDark('dark')
    }
  }

  const [ positionVal, setPositionVal ] = useState('-80vw')
  
  let ChangePosition = () => {
    if(positionVal === '-80vw'){
      setPositionVal('0vw')
    }else{
      setPositionVal("-80vw")
    }
  } 
  let Close = () => {
    if(positionVal === "0vw"){
      setPositionVal("-80vw")
    }
  }
    return (

      <Router>

        <div 
          className={`theme-${dark} main-container overflow-y-scroll h-screen w-full bg-skin-bodyBg flex items-start`}   
          onClick={() => Close()}
        >
          <Navbar ChangeTheme={() => ToggleTheme} theme={dark}/>


          <InvoiceInput theme={dark} position={positionVal} closeFunc={Close}/>

          <div className="ml-auto flex justify-center home-inner-container">
            <div className="mt-32 lg:mt-20 home-center flex flex-col justify-center items-center">


              <HomeTop onSelect={(event) => {
                ChangePosition()
                event.stopPropagation()
              }}
                theme={dark}
                />
                

              <TodoBarContainer theme={dark}/>

            </div>
          </div>

          <div className="invoice-detail-outer ml-auto flex items-center w-full h-full flex-col hidden">
            <DetailInput theme={dark}/>                
          </div>

        </div>
        
      </Router>
  );
}

export default App;

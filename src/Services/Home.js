import React from 'react'
import { Data } from '../components/data.js'

export let Home = () => {
    return (
        <div className="ml-auto flex justify-center home-inner-container">
            <div className="mt-32 lg:mt-20 home-center flex flex-col justify-center items-center">


            <HomeTop onSelect={(event) => {
                ChangePosition()
                event.stopPropagation()
            }}
                theme={dark}
                />
                

            <TodoBarContainer mapData={Data} theme={dark}/>

            </div>
        </div>
    )
}
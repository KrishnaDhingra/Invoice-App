import React from 'react'
import { SecondaryText, SecondaryBold, BigHeadings } from './basic-components.js'

export let HomeTop = (props) => {
    return (
        <div className="w-full flex justify-between items-center">
            <div className="flex flex-col gap-2">
                <BigHeadings text={'Invoices'}/>

                <SecondaryText text={`There are ${JSON.parse(localStorage.getItem("data1")) ? JSON.parse(localStorage.getItem("data1")).length : 0} total invoice`}/>
            </div>

            <div className="flex gap-10 h-full items-center">
                <SecondaryBold text={'Filter by status'}/>

                <div className="rounded-full p-2 flex gap-3 bg-skin-logoBg items-center justify-center pr-3" onClick={props.onSelect}>
                    
                    <div className="h-8 w-8 rounded-full bg-white"></div>
                    <span className="tracking-wide text-xs text-white font-bold">New Invoice</span> 
                </div>
            </div>

        </div>
    )
}
import React from 'react'
import { LeftArrow, SecondaryText, PendingBox, Heading } from './basic-components.js'
import { motion } from 'framer-motion'

export let DetailInput = (props) => {
    return (
        <div className="invoice-detail-inner mt-20 flex gap-6 flex-col justify-center items-center">

            <div className="flex gap-4 items-center w-full ">
                <LeftArrow/>
                <SecondaryText text={'Go back'}/>
            </div>
    
            <DetailInputControlBar theme={props.theme}/>
            <DetailInputInformation theme={props.theme}/>

        </div>
    )
}
export let DetailInputControlBar = (props) => {
    return (
        <motion.div 
            className={`theme-${props.theme} todo-bar rounded-lg w-full bg-skin-dataBar flex items-center justify-between px-6 py-6 mt-4`}
        >
            <div className="flex self-stretch items-center">
                <SecondaryText text={"Status"}/>
                <PendingBox/>
            </div>

            <div className="flex gap-2 self-stretch items-center">
                <EditButton/>
                <DeleteButton/>
                <MarkAsPaid/>
            </div>


        </motion.div>
    )
}
export let DetailInputInformation = (props) => {
    return (
        <motion.div 
            className={`theme-${props.theme} todo-bar rounded-lg w-full bg-skin-dataBar flex items-center justify-between px-6 py-6`}
        >
            <div className="border-2 border-blue flex self-stretch w-full justify-between">
                <div className="flex flex-col gap-2">
                    <Heading text={"#KH2522"}/>
                    <SecondaryText text={"Krishna"}/>
                </div>
                <div className="flex flex-col gap-2">
                    <SecondaryText text={"Krishna"}/>
                    <SecondaryText text={"Krishna"}/>
                    <SecondaryText text={"Krishna"}/>
                </div>
            </div>
        </motion.div> 
    )
}

export let EditButton = () => {
    return (
        <button className="edit-button py-4 font-semibold text-xs rounded-full w-20 text-white">Edit</button>
    )
}
export let DeleteButton = () => {
    return (
        <button className="py-4 bg-skin-danger font-semibold text-xs rounded-full w-24 text-white">Delete</button>
    )
}
export let MarkAsPaid = () => {
    return (
        <button className="py-4 bg-skin-logoBg font-semibold text-xs rounded-full w-36 text-white">Mark As Paid</button>
    )
}
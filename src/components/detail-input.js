import React from 'react'
import { LeftArrow, SecondaryText, PendingBox, Heading, SmallHeading } from './basic-components.js'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export let DetailInput = (props) => {

    return (
        <div className="invoice-detail-outer ml-auto flex items-center w-full h-full flex-col">
            <div className="invoice-detail-inner mt-20 flex gap-6 flex-col justify-center items-center">

                <Link to="/" className="flex gap-4 items-center w-full">
                    <LeftArrow/>
                    <SecondaryText text={'Go back'}/>
                </Link>
        
                <DetailInputControlBar theme={props.theme}/>
                <DetailInputInformation theme={props.theme}/>

            </div>
        </div>
    )
}
export let DetailInputControlBar = (props) => {
    return (
        <motion.div 
            className={`rounded-lg w-full bg-skin-dataBar flex items-center justify-between px-6 py-6 mt-4`}
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
            className={`rounded-lg w-full bg-skin-dataBar flex flex-col justify-center px-6 py-6 gap-6`}
        >
            <div className="flex flex-col justify-between">

                <div className="flex self-stretch w-full justify-between">
                    <div className="flex flex-col gap-2">
                        <Heading text={"#KH2522"}/>
                        <SecondaryText text={"Krishna"}/>
                    </div>
                    <div className="flex flex-col items-end gap-1">
                        <SecondaryText text={"E-342 Tagore Garden"}/>
                        <SecondaryText text={"New Delhi"}/>
                        <SecondaryText text={"India"}/>
                        <SecondaryText text={"110027"}/>
                    </div>
                </div>
                
            </div>

            <div className="flex flex-col justify-between">

                <div className="flex self-stretch w-full">
                    <div className="detail-input-information-inner flex flex-col gap-2">
                        <SecondaryText text={"Invoice Date"}/>
                        <SmallHeading text={"03 Oct 2021"}/>
                        <div className="mt-6"></div>
                        <SecondaryText text={"Payment Due"}/>
                        <SmallHeading text={"01 Oct 2021"}/>
                    </div>

                    <div className="detail-input-information-inner flex flex-col gap-1">
                        <SecondaryText text={"Bill To"}/>
                        <div className="my-1">
                            <SmallHeading text={"Khushi Dhingra"}/>
                        </div>
                        <SecondaryText text={"E-343 Tagore Garden"}/>
                        <SecondaryText text={"New Delhi"}/>
                        <SecondaryText text={"India"}/>
                        <SecondaryText text={"110027"}/>
                    </div>
                    
                    <div className="detail-input-information-inner self-stretch flex flex-col gap-2">
                        <SecondaryText text={"Sent To"}/>
                        <SmallHeading text={"dkrishna1608@gmail.com"}/>
                    </div>
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
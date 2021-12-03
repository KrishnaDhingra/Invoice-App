import React from 'react'
import { LeftArrow, SecondaryText, PendingBox, Heading, SmallHeading } from './basic-components.js'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export let DetailInput = (props) => {

    console.log(props.location.state.id)
    let data = JSON.parse(localStorage.getItem("data1")).filter(element => element.id === props.location.state.id)
    data = data[0]

    return (
        <div className="invoice-detail-outer ml-auto flex items-center w-full h-full flex-col">
            <div className="invoice-detail-inner mt-20 flex gap-6 flex-col justify-center items-center">

                <Link to="/" className="flex gap-4 items-center w-full">
                    <LeftArrow/>
                    <SecondaryText text={'Go back'}/>
                </Link>
        
                <DetailInputControlBar theme={props.theme}/>
                <DetailInputInformation data={data} theme={props.theme}/>

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
                        <Heading text={props.data.id}/>
                        <SecondaryText text={props.data.billTo.description}/>
                    </div>
                    <div className="flex flex-col items-end gap-1">
                        <SecondaryText text={props.data.billFrom.streetAddress}/>
                        <SecondaryText text={props.data.billFrom.city}/>
                        <SecondaryText text={props.data.billFrom.country}/>
                        <SecondaryText text={props.data.billFrom.postCode}/>
                    </div>
                </div>
                
            </div>

            <div className="flex flex-col justify-between">

                <div className="flex self-stretch w-full">
                    <div className="detail-input-information-inner flex flex-col gap-2">
                        <SecondaryText text={"Invoice Date"}/>
                        <SmallHeading text={props.data.billTo.invoiceDate}/>
                        <div className="mt-6"></div>
                        <SecondaryText text={"Payment Due"}/>
                        <SmallHeading text={props.data.billTo.paymentDate}/>
                    </div>

                    <div className="detail-input-information-inner flex flex-col gap-1">
                        <SecondaryText text={"Bill To"}/>
                        <div className="my-1">
                            <SmallHeading text={props.data.billTo.clientName}/>
                        </div>
                        <SecondaryText text={props.data.billTo.streetAddress}/>
                        <SecondaryText text={props.data.billTo.city}/>
                        <SecondaryText text={props.data.billTo.country}/>
                        <SecondaryText text={props.data.billTo.postCode}/>
                    </div>
                    
                    <div className="detail-input-information-inner self-stretch flex flex-col gap-2">
                        <SecondaryText text={"Sent To"}/>
                        <SmallHeading text={props.data.billTo.clientEmail}/>
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
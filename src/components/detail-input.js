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
        
                <DetailInputControlBar id={props.location.state.id} theme={props.theme}/>
                <DetailInputInformation id={props.location.state.id} theme={props.theme}/>

            </div>
        </div>
    )
}
export let DetailInputControlBar = (props) => {

    let updateStatus = () => {

        let newData = JSON.parse(localStorage.getItem("data1"))

        newData.map(element => {
            if(element.id === props.id){
                element.status = 'paid'
            }
        })

        localStorage.setItem('data1', JSON.stringify(newData))
    }
    let deleteData = () => {
        console.log(props.id)
        let newData = JSON.parse(localStorage.getItem("data1"))
        
        newData = newData.filter(element => {
            return element.id !== props.id
        })
        localStorage.setItem('data1', JSON.stringify(newData))
    }

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
                <button 
                    className="py-4 bg-skin-danger font-semibold text-xs rounded-full w-24 text-white"
                    onClick={() => deleteData()}
                >Delete</button>

                <button 
                    className="py-4 bg-skin-logoBg font-semibold text-xs rounded-full w-36 text-white"
                    onClick={() => {
                        updateStatus()
                    }}
                >Mark As Paid</button>
            </div>


        </motion.div>
    )
}
export let DetailInputInformation = (props) => {

    let data = JSON.parse(localStorage.getItem("data1")).filter(element => element.id === props.id)
    data = data[0]

    return (
        <motion.div 
            className={`rounded-lg w-full bg-skin-dataBar flex flex-col justify-center px-6 py-6 gap-6`}
        >
            <div className="flex flex-col justify-between">

                <div className="flex self-stretch w-full justify-between">
                    <div className="flex flex-col gap-2">
                        <Heading text={data.id}/>
                        <SecondaryText text={data.billTo.description}/>
                    </div>
                    <div className="flex flex-col items-end gap-1">
                        <SecondaryText text={data.billFrom.streetAddress}/>
                        <SecondaryText text={data.billFrom.city}/>
                        <SecondaryText text={data.billFrom.country}/>
                        <SecondaryText text={data.billFrom.postCode}/>
                    </div>
                </div>
                
            </div>

            <div className="flex flex-col justify-between">

                <div className="flex self-stretch w-full">
                    <div className="detail-input-information-inner flex flex-col gap-2">
                        <SecondaryText text={"Invoice Date"}/>
                        <SmallHeading text={data.billTo.invoiceDate}/>
                        <div className="mt-6"></div>
                        <SecondaryText text={"Payment Due"}/>
                        <SmallHeading text={data.billTo.paymentDate}/>
                    </div>

                    <div className="detail-input-information-inner flex flex-col gap-1">
                        <SecondaryText text={"Bill To"}/>
                        <div className="my-1">
                            <SmallHeading text={data.billTo.clientName}/>
                        </div>
                        <SecondaryText text={data.billTo.streetAddress}/>
                        <SecondaryText text={data.billTo.city}/>
                        <SecondaryText text={data.billTo.country}/>
                        <SecondaryText text={data.billTo.postCode}/>
                    </div>
                    
                    <div className="detail-input-information-inner self-stretch flex flex-col gap-2">
                        <SecondaryText text={"Sent To"}/>
                        <SmallHeading text={data.billTo.clientEmail}/>
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
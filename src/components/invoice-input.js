import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { SecondaryText, SecondaryBold, BigHeadings, Heading } from './basic-components.js'
import { MainData, Data } from './data.js'


export const InvoceInput = (props) => {

    const [ id, setId ] = useState('')
    const [ status, setStatus ] = useState('')
    const [ total, setTotal ] = useState('')
    const [ streetAddress, setStreetAddress ] = useState('')
    const [ city, setCity ] = useState('')
    const [ postCode, setPostCode ] = useState('')
    const [ country, setCountry ] = useState('')
    const [ clientName, setClientName ] = useState('')
    const [ clientEmail, setClientEmail ] = useState('')
    const [ streetAddress2, setStreetAddress2 ] = useState('')
    const [ city2, setCity2 ] = useState('')
    const [ postCode2, setPostCode2 ] = useState('')
    const [ country2, setCountry2 ] = useState('')
    const [ invoiceDate, setInvoiceDate ] = useState('')
    const [ paymentTerms, setPaymentTerms ] = useState('')
    const [ description, setDescription ] = useState('')
    const [ itemName, setItemName ] = useState('')
    const [ quantity, setQuantity ] = useState('')
    const [ price, setPrice ] = useState('')

    let PushData = () => {
        let notId = ''
        for(let i = 0; i<6; i++){
            let num = Math.floor(Math.random() * 9 + 1)
            console.log(num)
            notId += num
        }
        setId(notId)
        console.log(id)
    }


    const style = 
        'bg-skin-inputBg outline-none border-2 border-borderPrimary text-skin-primary font-semibold py-4 px-7 rounded'


    return(
        <motion.div 
            onClick={(event) => {
                event.stopPropagation()
                }}

            className={`theme-${props.theme} invoice-container z-0 absolute h-full flex flex-col gap-5 rounded-r-3xl items-start justify-start ml-10 max-w-2xl w-3/4 bg-skin-invoiceBg pl-32 pt-12 overflow-y-auto`}

            initial={{
                x: "-80vw"
            }}
            animate={{
                x: props.position,
                transition:{
                    type: "spring",
                    stiffness: 50,
                }
            }}
        >

            <Heading text={'Create Invoice'}/>
            <PurpleText text={'Bill From'}/>

            <div className="flex flex-col gap-2 w-11/12">
                <SecondaryText text="Street Address"/>

                <input 
                    onChange={(e) => {
                        setStreetAddress(e.target.value)
                    }}

                    className={style}
                    type='text' 
                />

            </div>

            <div className="mt-1.5 grid grid-cols-3 gap-7 w-11/12">

                <div className="flex flex-col gap-2">
                    <SecondaryText text="City"/>      

                    <input 
                        onChange={(e) => {
                            setCity(e.target.value)
                        }}

                        className={style}
                    /> 

                </div>
                <div className="flex flex-col gap-2">
                    <SecondaryText text="Post Code"/>      
                    <input 
                        onChange={(e) => {
                            setPostCode(e.target.value)
                        }}

                        className={style}
                        type='text' 
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <SecondaryText text="Country"/>      
                    <input 
                        onChange={(e) => {
                            setCountry(e.target.value)
                        }}

                        className={style}
                        type='text' 
                    />
                </div>

            </div>

            <PurpleText text={'Bill To'}/>

            <div className="flex gap-2 flex-col w-11/12">
                <SecondaryText text="Client's Name"/>
                    <input 
                        onChange={(e) => {
                            setClientName(e.target.value)
                        }}

                        className={style}
                        type='text' 
                    />
            </div>

            <div className="mt-1.5 flex gap-2 flex-col w-11/12">
                <SecondaryText text="Client's Email"/>
                <input 
                    onChange={(e) => {
                        setClientEmail(e.target.value)
                    }}

                    className={style}
                    type='text' 
                />
            </div>

            <div className="mt-1.5 flex gap-2 flex-col w-11/12">
                <SecondaryText text="Street Address"/>
                <input 
                    onChange={(e) => {
                        setStreetAddress2(e.target.value)
                    }}

                    className={style}
                    type='text' 
                />
            </div>



            <div className="mt-1 grid grid-cols-3 gap-7 w-11/12">

                <div className="flex flex-col gap-2">
                    <SecondaryText text="City"/>      
                    <input 
                        onChange={(e) => {
                            setCity2(e.target.value)
                        }}

                        className={style}
                        type='text' 
                />
                </div>
                <div className="flex flex-col gap-2">
                    <SecondaryText text="Post Code"/>      
                    <input 
                        onChange={(e) => {
                            setPostCode2(e.target.value)
                        }}

                        className={style}
                        type='text' 
                />
                </div>
                <div className="flex flex-col gap-2">
                    <SecondaryText text="Country"/>      
                    <input 
                        onChange={(e) => {
                            setCountry2(e.target.value)
                        }}

                        className={style}
                        type='text' 
                />
                </div>

            </div>

            <div className="mt-5 grid grid-cols-2 gap-7 w-11/12">


                <div className="flex flex-col gap-2">
                    <SecondaryText text="Invoice Date"/>      
                    <input 
                        onChange={(e) => {
                            setInvoiceDate(e.target.value)
                        }}

                        className={style}
                        type='date' 
                />
                </div>

                <div className="flex flex-col gap-2">
                    <SecondaryText text="Payment Terms"/>      
                    <select className="bg-skin-inputBg text-skin-primary rounded px-6 py-4 pb-5 outline-none text-sm font-semibold pr-4" id="cars">
                    <option value="volvo">Net 1 day</option>
                    <option value="saab">Net 7 days</option>
                    <option value="opel">Net 14 days</option>
                    <option value="audi">Net 30 days</option>
                </select>
                </div>

            </div>

            <div className="flex gap-2 flex-col w-11/12">
                <SecondaryText text="Description"/>
                <input 
                    onChange={(e) => {
                        setDescription(e.target.value)
                    }}

                    className={style}
                    type='text' 
                />

            </div>

            <h1 className="mt-7 text-gray-500 font-semibold text-2xl">ItemList</h1>

            <button className="py-4 bg-skin-bodyBg font-semibold text-sm rounded-full w-11/12 text-white">+ Add New Item</button>

            <div className="mt-8 mb-10 flex justify-between w-11/12">

                <button className="rounded-full py-4 px-5 bg-skin-bodyBg font-semibold text-sm text-white">Discard</button>

                <div className="flex gap-3">
                    <button className=" rounded-full py4 px-7 bg-skin-bodyBg font-semibold text-sm text-white">Save as Draft</button>

                    <button 
                        className="rounded-full py-4 px-5 bg-skin-logoBg font-semibold text-sm text-white"

                        onClick = {() => PushData()}

                    >Save and Send</button>
                </div>
            </div>

        </motion.div>
    )
}

export const PurpleText = (props) => {
    return (
        <span className="mt-5 mb-3 tracking-wide text-sm text-skin-purple font-semibold">{props.text}</span> 
    )
}

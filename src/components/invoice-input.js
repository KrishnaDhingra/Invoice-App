import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { SecondaryText, SecondaryBold, BigHeadings, Heading } from './basic-components.js'


export const InvoiceInput = (props) => {

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
                    className={style}
                    type='text' 
                />

            </div>

            <div className="mt-1.5 grid grid-cols-3 gap-7 w-11/12">

                <div className="flex flex-col gap-2">
                    <SecondaryText text="City"/>      

                    <input 
                        className={style}
                    /> 

                </div>
                <div className="flex flex-col gap-2">
                    <SecondaryText text="Post Code"/>      
                    <input 
                        className={style}
                        type='text' 
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <SecondaryText text="Country"/>      
                    <input 
                        className={style}
                        type='text' 
                    />
                </div>

            </div>

            <PurpleText text={'Bill To'}/>

            <div className="flex gap-2 flex-col w-11/12">
                <SecondaryText text="Client's Name"/>
                    <input 
                        className={style}
                        type='text' 
                    />
            </div>

            <div className="mt-1.5 flex gap-2 flex-col w-11/12">
                <SecondaryText text="Client's Email"/>
                <input 
                  className={style}
                    type='text' 
                />
            </div>

            <div className="mt-1.5 flex gap-2 flex-col w-11/12">
                <SecondaryText text="Street Address"/>
                <input 
                   className={style}
                    type='text' 
                />
            </div>



            <div className="mt-1 grid grid-cols-3 gap-7 w-11/12">

                <div className="flex flex-col gap-2">
                    <SecondaryText text="City"/>      
                    <input 
                        className={style}
                        type='text' 
                />
                </div>
                <div className="flex flex-col gap-2">
                    <SecondaryText text="Post Code"/>      
                    <input 
                        className={style}
                        type='text' 
                />
                </div>
                <div className="flex flex-col gap-2">
                    <SecondaryText text="Country"/>      
                    <input 
                        className={style}
                        type='text' 
                />
                </div>

            </div>

            <div className="mt-5 grid grid-cols-2 gap-7 w-11/12">


                <div className="flex flex-col gap-2">
                    <SecondaryText text="Invoice Date"/>      
                    <input 
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

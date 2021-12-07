import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { SecondaryText, SecondaryBold, BigHeadings, Heading } from './basic-components.js'
import updateData from './updateData.js'

export const InvoiceInput = (props) => {

    const [ id, setId ] = useState('')
    const [ streetAddress, setStreetAddress ] = useState('')
    const [ city, setCity ] = useState('')
    const [ postCode, setPostCode ] = useState('')
    const [ country, setCountry ] = useState('')
    
    const [ clientName, setClientName ] = useState('')
    const [ clientEmail, setClientEmail ] = useState('') 
    const [ clientStreetAddress, setClientStreetAddress ] = useState('') 
    const [ clientcity, setClientCity ] = useState('')
    const [ clientpostCode, setClientPostCode ] = useState('')
    const [ clientcountry, setClientCountry ] = useState('')

    const [ shortInvoiceDate, setshortInvoiceDate ] = useState('')
    const [ invoiceDate, setInvoiceDate ] = useState('')
    const [ paymentDate, setpaymentDate ] = useState('')
    const [ addDays, setaddDays ] = useState(1)

    const [ description, setDescription ] = useState('')
    const [ status, setStatus ] = useState('pending')
    

    const [ streetAddressColor, setStreetAddressColor ] = useState('borderPrimary')
    const [ cityColor, setCityColor ] = useState('borderPrimary')
    const [ postCodeColor, setPostCodeColor ] = useState('borderPrimary')
    const [ countryColor, setCountryColor ] = useState('borderPrimary')
    
    const [ clientNameColor, setClientNameColor ] = useState('borderPrimary')
    const [ clientEmailColor, setClientEmailColor ] = useState('borderPrimary') 
    const [ clientStreetAddressColor, setClientStreetAddressColor ] = useState('borderPrimary') 
    const [ clientcityColor, setClientCityColor ] = useState('borderPrimary')
    const [ clientpostCodeColor, setClientPostCodeColor ] = useState('borderPrimary')
    const [ clientcountryColor, setClientCountryColor ] = useState('borderPrimary')
    
    const [ invoiceDateColor, setInvoiceDateColor ] = useState('borderPrimary')
    const [ paymentDateColor, setpaymentDateColor ] = useState('borderPrimary')
    
    const [ descriptionColor, setDescriptionColor ] = useState('borderPrimary')
    
    let validateData = () => {
        
        let colorArray = [streetAddressColor, cityColor, postCodeColor, countryColor, clientNameColor, clientEmailColor, clientStreetAddressColor, clientcityColor, clientpostCodeColor, clientcountryColor, invoiceDateColor, paymentDateColor, descriptionColor]

        let dataArray = [[streetAddress, setStreetAddressColor], [city, setCityColor], [postCode, setPostCodeColor], [country, setCountryColor], [clientName, setClientNameColor], [clientEmail, setClientEmailColor], [clientStreetAddress, setClientStreetAddressColor], [clientcity, setClientCityColor], [clientpostCode, setClientPostCodeColor], [clientcountry, setClientCountryColor], [invoiceDate, setInvoiceDateColor], [paymentDate, setpaymentDateColor], [description, setDescriptionColor]]
        
        dataArray.map(element => {
            if(element[0] === ''){
                element[1]('red-500')
            }else{
                element[1]('borderPrimary')
            }
        })
        let final = colorArray.filter(element => {
            return element === 'red-500'
        })
        if(final.length == 0){
            updateData(status, streetAddress, city, postCode, country, clientName, clientEmail, clientStreetAddress, clientcity, clientpostCode, clientcountry, invoiceDate, paymentDate, description)

            props.closeFunc()
        }else{
            console.log("not eligible")
        }
    }
    const style = (color) => {
        return `bg-skin-inputBg outline-none border-2 border-${color} text-skin-primary font-semibold py-4 px-7 rounded`
    }
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
                    className={style(streetAddressColor)}
                    type='text' 
                />

            </div>

            <div className="mt-1.5 grid grid-cols-3 gap-7 w-11/12">

                <div className="flex flex-col gap-2">
                    <SecondaryText text="City"/>      

                    <input 
                        onChange={(e) => setCity(e.target.value)}
                        className={style(cityColor)}
                    /> 

                </div>
                <div className="flex flex-col gap-2">
                    <SecondaryText text="Post Code"/>      
                    <input 
                        onChange={(e) => setPostCode(e.target.value)}
                        className={style(postCodeColor)}
                        type='text' 
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <SecondaryText text="Country"/>      
                    <input 
                        onChange={(e) => setCountry(e.target.value)}
                        className={style(countryColor)}
                        type='text' 
                    />
                </div>

            </div>

            <PurpleText text={'Bill To'}/>

            <div className="flex gap-2 flex-col w-11/12">
                <SecondaryText text="Client's Name"/>
                    <input 
                        onChange={(e) => setClientName(e.target.value)}
                        className={style(clientNameColor)}
                        type='text' 
                    />
            </div>

            <div className="mt-1.5 flex gap-2 flex-col w-11/12">
                <SecondaryText text="Client's Email"/>
                <input 
                    onChange={(e) => setClientEmail(e.target.value)}
                  className={style(clientEmailColor)}
                    type='text' 
                />
            </div>

            <div className="mt-1.5 flex gap-2 flex-col w-11/12">
                <SecondaryText text="Street Address"/>
                <input 
                    onChange={(e) => setClientStreetAddress(e.target.value)}
                   className={style(clientStreetAddressColor)}
                    type='text' 
                />
            </div>



            <div className="mt-1 grid grid-cols-3 gap-7 w-11/12">

                <div className="flex flex-col gap-2">
                    <SecondaryText text="City"/>      
                    <input 
                        onChange={(e) => setClientCity(e.target.value)}
                        className={style(clientcityColor)}
                        type='text' 
                />
                </div>
                <div className="flex flex-col gap-2">
                    <SecondaryText text="Post Code"/>      
                    <input 
                        onChange={(e) => setClientPostCode(e.target.value)}
                        className={style(clientpostCodeColor)}
                        type='text' 
                />
                </div>
                <div className="flex flex-col gap-2">
                    <SecondaryText text="Country"/>      
                    <input 
                        onChange={(e) => setClientCountry(e.target.value)}
                        className={style(clientcountryColor)}
                        type='text' 
                />
                </div>

            </div>

            <div className="mt-5 grid grid-cols-2 gap-7 w-11/12">


                <div className="flex flex-col gap-2">
                    <SecondaryText text="Invoice Date"/>      
                    <input 
                        className={style(invoiceDateColor)}
                        type='date' 
                        onChange={(e) => {

                            const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
                            "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"
                        ];
                            let chooseDate=new Date(e.target.value);
                            setshortInvoiceDate(e.target.value)

                            let date = chooseDate.getDate()
                            let year = chooseDate.getFullYear()
                            let month = monthNames[chooseDate.getMonth()]

                            setInvoiceDate(`Due ${date} ${month} ${year}`)

                            chooseDate.setDate(chooseDate.getUTCDate()+addDays);

                            let date1 = chooseDate.getDate()
                            let year1 = chooseDate.getFullYear()
                            let month1 = monthNames[chooseDate.getMonth()]

                            setpaymentDate(`Due ${date1} ${month1} ${year1}`)
                        }}
                />
                </div>

                <div className="flex flex-col gap-2">
                    <SecondaryText text="Payment Terms"/>      
                    <select 
                        onChange={(e) => {

                            setaddDays(parseInt(e.target.value))
                            
                            const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
                            "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"
                        ];
                            let chooseDate=new Date(shortInvoiceDate);

                            let date = chooseDate.getDate()
                            let year = chooseDate.getFullYear()
                            let month = monthNames[chooseDate.getMonth()]

                            setInvoiceDate(`Due ${date} ${month} ${year}`)
                            chooseDate.setDate(chooseDate.getUTCDate()+addDays);


                            let date1 = chooseDate.getDate()
                            let year1 = chooseDate.getFullYear()
                            let month1 = monthNames[chooseDate.getMonth()]

                            setpaymentDate(`Due ${date1} ${month1} ${year1}`)

                        }}
                        className="bg-skin-inputBg text-skin-primary rounded px-6 py-4 pb-5 outline-none text-sm font-semibold pr-4" id="cars">
                            <option value="1">Net 1 day</option>
                            <option value="7">Net 7 days</option>
                            <option value="14">Net 14 days</option>
                            <option value="30">Net 30 days</option>
                    </select>
                </div>

            </div>

            <div className="flex gap-2 flex-col w-11/12">
                <SecondaryText text="Description"/>
                <input 
                    onChange={(e) => setDescription(e.target.value)}
                    className={style(descriptionColor)}
                    type='text' 
                />

            </div>

            <h1 className="mt-7 text-gray-500 font-semibold text-2xl">ItemList</h1>

            <button className="py-4 add-new-item font-semibold text-xs rounded-full w-11/12 text-white">+ Add New Item</button>

            <div className="mt-8 mb-10 flex justify-between w-11/12">

                <button onClick={() => props.closeFunc()}className="rounded-full py-4 px-4 bg-gray-600 font-semibold text-xs text-white">Discard</button>

                <div className="flex gap-3">
                    <button 
                        onClick={() => {
                            setStatus('draft')
                            validateData()
                        }}
                        className=" rounded-full py-4 px-5 bg-gray-600 font-semibold text-xs text-white">Save as Draft</button>

                    <button 
                        onClick={() => {
                            setStatus('pending')
                            validateData()
                        }}
                        className="rounded-full py-4 px-4 bg-skin-logoBg font-semibold text-xs text-white"
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

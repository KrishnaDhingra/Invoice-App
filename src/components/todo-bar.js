import React from 'react'
import { SecondaryBold, SecondaryText, NameText, Heading, PendingText, PaidText, DraftText, PendingBox, PaidBox, DraftBox, RightArrow } from './basic-components.js'
import { motion } from 'framer-motion'
import { MainData } from './data.js'

export const TodoBarContainer = () => {

    let data = MainData

    const container = {
        hidden: { opacity: 1 },
        show: {
          opacity: 1,
          transition: {
            staggerChildren: 0.2
          }
        }
    }
      
    const item = {
        hidden: { opacity: 0 },
        show: { opacity: 1 }
    }
    return (
        <motion.div 
            className="mt-20 mb-10 theme-light w-full flex flex-col gap-5 justify-start items-center"
            variants={container}
            initial="hidden"
            animate="show"
        >

            {data.map(element => {
                return (

                    <motion.div 
                        className="w-full" variants={item}>
                        <TodoBar 
                            id={element.id} 
                            dueData={element.billTo.invoiceDate} 
                            name={element.billTo.clientName} 
                            total={element.total} 
                            status={element.status}/>
                    </motion.div>
                )
            })}



        </motion.div>
    )
}
export const TodoBar = (props) => {

    let StatusBox

    if(props.status === 'paid'){
        StatusBox = <PaidBox/>
    }else if(props.status === 'pending'){
        StatusBox  = <PendingBox/>
    }else{
        StatusBox = <DraftBox/>
    }

    return (
        <motion.div 
            className="rounded-lg theme-dark w-full self-stretch bg-skin-dataBar flex items-center justify-between px-6 py-4"

        >
            <div className="flex gap-7">
                <SecondaryBold text={props.id}/>
                <SecondaryText text={props.dueDate}/>
                <NameText text={props.name}/>
            </div>

            <div className="flex gap-5 items-center">
                <Heading text={props.total}/>
                {StatusBox}
                <RightArrow/>
            </div>
        </motion.div>

    )
}
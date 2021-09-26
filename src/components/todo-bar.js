import React from 'react'
import { SecondaryBold, SecondaryText, NameText, Heading, PendingText, PaidText, DraftText, PendingBox, PaidBox, DraftBox, RightArrow } from './basic-components.js'
import { motion } from 'framer-motion'

export const TodoBarContainer = () => {

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

            <motion.div className="w-full" variants={item}><TodoBar/></motion.div>
            <motion.div className="w-full" variants={item}><TodoBar/></motion.div>
            <motion.div className="w-full" variants={item}><TodoBar/></motion.div>
            <motion.div className="w-full" variants={item}><TodoBar/></motion.div>
            <motion.div className="w-full" variants={item}><TodoBar/></motion.div>


        </motion.div>
    )
}
export const TodoBar = () => {
    const item = {
        hidden: { opacity: 0 },
        show: { opacity: 1 }
    }

    return (
        <motion.div 
            className="rounded-lg theme-dark w-full self-stretch bg-skin-dataBar flex items-center justify-between px-6 py-4"
            variants={item}
            initial='hidden'
            animate='show'

        >
            <div className="flex gap-7">
                <SecondaryBold text={'#RT3080'}/>
                <SecondaryText text={'Due 19 August 2021'}/>
                <NameText text={'Krishna'}/>
            </div>

            <div className="flex gap-5 items-center">
                <Heading text={'$1800'}/>
                <PendingBox/>
                <RightArrow/>
            </div>
        </motion.div>

    )
}
"use client"
import React from 'react'
import { Typewriter } from 'react-simple-typewriter'
interface CustomTypeWriterProps{
  words:string[],
  speed?:number 
}
const CustomTypeWriter:React.FC<CustomTypeWriterProps>= ({words,speed}) => {
  const handleType = (count: number) => {
    console.log(count)
  }

  const handleDone = () => {
    console.log(`Done after 5 loops!`)
  }
  return (
      <Typewriter
        words={words}
        loop={false}
        cursor
        cursorStyle='_'
        typeSpeed={70}
        deleteSpeed={50}
        delaySpeed={1000}
        onLoopDone={handleDone}
        onType={handleType}
      />
  )
}

export default CustomTypeWriter
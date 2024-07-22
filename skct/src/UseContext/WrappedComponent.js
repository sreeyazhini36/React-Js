import React from 'react'
import MyContextProvider from './MyContextProvider'
import  ComponentA1 from './ComponentA1'
const WrappedComponent = () => {
  return (
    <MyContextProvider>
       <ComponentA1/> 
    </MyContextProvider>
  )
}

export default WrappedComponent
import React, { Children, createContext, useState } from 'react'

export const isAuthtokenContext = createContext()
export const edittrainContext = createContext()
export const addseatContext = createContext()

function ContextShare({children}) {

    const [isAuthtken,setIsAuthtoken] = useState(true)
    const [edittrain,setedittrain] = useState({})
    const [addseat,setSeatadd] = useState({})
  return (
    <>
    <isAuthtokenContext.Provider value={{isAuthtken,setIsAuthtoken}}>
      <edittrainContext.Provider value={{edittrain,setedittrain}}>
        <addseatContext.Provider value={{addseat,setSeatadd}}>
      {children}
      </addseatContext.Provider>
      </edittrainContext.Provider>
    </isAuthtokenContext.Provider>
    </>
  )
}

export default ContextShare

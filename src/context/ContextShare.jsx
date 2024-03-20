import React, { Children, createContext, useState } from 'react'

export const isAuthtokenContext = createContext()
export const edittrainContext = createContext()
export const addseatContext = createContext()


function ContextShare({children}) {
    const [isAuthtoken,setIsAuthtoken] = useState(false)
    const [edittrain,setedittrain] = useState({})
    const [addseat,setSeatadd] = useState({})
  return (
    <>
    <isAuthtokenContext.Provider value={{isAuthtoken,setIsAuthtoken}}>
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

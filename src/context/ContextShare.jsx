import React, { Children, createContext, useState } from 'react'

export const isAuthtokenContext = createContext()
export const edittrainContext = createContext()

function ContextShare({children}) {

    const [isAuthtken,setIsAuthtoken] = useState(true)
    const [edittrain,setedittrain] = useState({})
  return (
    <>
    <isAuthtokenContext.Provider value={{isAuthtken,setIsAuthtoken}}>
      <edittrainContext.Provider value={{edittrain,setedittrain}}>
      {children}
      </edittrainContext.Provider>
    </isAuthtokenContext.Provider>
    </>
  )
}

export default ContextShare

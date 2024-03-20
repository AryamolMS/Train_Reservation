import React, { Children, createContext, useState } from 'react'

export const isAuthtokenContext = createContext()
export const edittrainContext = createContext()


function ContextShare({children}) {
    const [isAuthtoken,setIsAuthtoken] = useState(false)
    const [edittrain,setedittrain] = useState({})
  return (
    <>
    <isAuthtokenContext.Provider value={{isAuthtoken,setIsAuthtoken}}>
      <edittrainContext.Provider value={{edittrain,setedittrain}}>
      {children}
      </edittrainContext.Provider>
    </isAuthtokenContext.Provider>
    </>
  )
}

export default ContextShare

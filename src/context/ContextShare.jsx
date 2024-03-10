import React, { Children, createContext, useState } from 'react'

export const isAuthtokenContext = createContext()

function ContextShare() {

    const [isAuthtken,setIsAuthtoken] = useState(true)

  return (
    <>
    <isAuthtokenContext.Provider value={{isAuthtken,setIsAuthtoken}}>
      {Children}
    </isAuthtokenContext.Provider>
    </>
  )
}

export default ContextShare

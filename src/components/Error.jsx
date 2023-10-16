import { useState } from "react"


const Error = ({children}) => {
  return (

       <div className='text-red-800 text-center p-3 uppercase font-bold mb-3 text-sm'>
            <p>{children}</p>
          </div>
    
  )
}

export default Error

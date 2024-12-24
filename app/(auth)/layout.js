import React from 'react'

function AuthLayout({children}) {
  return (
    <div className=' flex justify-center p-40'>
      {children}
    </div>
  )
}

export default AuthLayout

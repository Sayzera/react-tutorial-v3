import React from 'react'

function Login({isLoggin}) {

  
 
  
  return (
    // JSX içerisinde 
    <>
    {
        isLoggin ? (
            <div>
                Hoşgeldiniz.
            </div>
        ) : (
            <div>
                Giriş yapmak için lütfen login olunuz
            </div>
        )
    }

    </>
  )
}

export {
    Login
}
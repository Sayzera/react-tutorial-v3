import React from 'react'

function ControlInput({
    setAge
}) {
  return (
   <input
        type="number"
        onChange={(e) => {
          setAge(isNaN(e.target.value) ? 0 : Number(e.target.value));
        }}
      />
  )
}

export {
    ControlInput
}
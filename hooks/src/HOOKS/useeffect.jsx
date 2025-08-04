import React, { useEffect } from 'react'


const Useeffect1 = (props) => {
    console.log('render again')
    useEffect(()=>{
        console.log(`the name is ${props.name}`)
      },[props.name])
  return (
    <div>
      <h2>UseEffect is here</h2>
    </div>
  )
}

export default Useeffect1

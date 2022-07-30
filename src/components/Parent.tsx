import React from 'react'
import Child from './Child'
import { useSelector } from 'react-redux'
const Parent = () => {
    const state = useSelector((state)=>state);
    console.log(state)
  return (
    <div>Parent
        <Child/>
    </div>
  )
}

export default Parent
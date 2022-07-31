import React from 'react'
import { useSelector } from 'react-redux'
const Child = () => {
const state = useSelector((state)=>state);
console.log(state)
  return (
    <div>Child</div>
  )
}

export default Child
import React from 'react'
import { useSelector } from 'react-redux'
import Child from './Child'

const Parent = () => {
    const todo = useSelector((state:any)=>state.todo)
    console.log(todo)
  return (
    <div>Parent
        <Child/> 
    </div>
  )
}

export default Parent
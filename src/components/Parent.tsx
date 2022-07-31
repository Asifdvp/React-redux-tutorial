import React from 'react'
import Child from './Child'
import { useSelector,useDispatch } from 'react-redux';
const Parent = () => {
  const todo = useSelector((state:{todo:number[]})=>state.todo);
  const counter = useSelector((state:{counter:number,})=>state.counter);
  console.log(todo)
  const dispatch = useDispatch();
  return (
    <div>Parent
      <button onClick={()=>dispatch({type:"ADD_TODO",payload:counter})}>Add Todo</button>
      {todo.map((item,index) =>(
        <div key={index}>{item}</div>
      ))}
        <Child/>
    </div>
  )
}

export default Parent
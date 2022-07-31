import React from 'react'
import { useSelector,useDispatch } from 'react-redux';

const Child = () => {
  const dispatch = useDispatch();
const counter:any = useSelector((state:{counter:number})=>state.counter);
console.log(counter)
  return (
    <div>Child
<button onClick={()=>{dispatch({type:"INC"})}}>increment</button>
{counter}
<button onClick={()=>{dispatch({type:"DEC"})}}>decrepement</button>






    </div>
  )
}

export default Child
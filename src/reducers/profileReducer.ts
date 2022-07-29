import { Action } from "redux"

const init:Object = {
    name:"Asif",
    age:"21",
    job:"developer"
}
export const profileReducer = (state=init,action:Action)=>(state)
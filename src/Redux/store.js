import { createStore } from "redux"
// import setData from "./action"
import {Data} from "./reducer"


export const store = createStore(Data,{credential:JSON.parse(localStorage.getItem("userData")) || [] })
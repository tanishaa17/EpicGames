import userName from "./constant";


export const setData= (data)=>{
    return {
        type : userName, 
        payload : data,
    }
}
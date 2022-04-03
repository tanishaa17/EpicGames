import userName from "./constant"



export const Data =(store,{type,payload})=>{
  switch(type){
      case  userName:
          return {...store,credential: payload};
          default :
          return store
  }
}
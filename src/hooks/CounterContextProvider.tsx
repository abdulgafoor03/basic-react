import { createContext, useState } from "react";

export const counterContext = createContext(0);
type countercontextproviderprops={
  children:React.ReactNode
}
export default function CounterContextProvider({ children }:countercontextproviderprops){
  const [count, setCount] = useState(0);
  const handleClick=(num)=>{
    setCount(prev=>prev + Number(num));
  }
  return <counterContext.Provider value={{count,handleClick}}>
    {children}
  </counterContext.Provider>;
}

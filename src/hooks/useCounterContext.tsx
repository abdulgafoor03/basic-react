import { useContext } from "react";
import { counterContext } from "./CounterContextProvider";

export default function useCounterContext() {
    const counter=useContext(counterContext);
    if(!counter)throw new Error('countercontext needs to be in xountcontextprovider')
    const {count,handleClick}=counter;
  return {count,handleClick};
}

import { useRef } from "react";
import useCounterContext from "../hooks/useCounterContext";


export default function GrandChildTwo() {
    console.log("This is Grand Child-two");
    const inputRef=useRef(null)
    const{handleClick} =useCounterContext();
    const handleCounter=()=>{
        const value=inputRef.current.value;
        handleClick(value)
    }
  return (
    <>
    <div>GrandChildTwo</div>
    <input type='number' ref={inputRef}></input>
    <button onClick={handleCounter}>handle counter</button>
    </>
  )
}

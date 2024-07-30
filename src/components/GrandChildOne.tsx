import React from "react";
import useCounterContext from "../hooks/useCounterContext";
import GrandChildThree from "./GrandChildThree";


const GrandChildOne=React.memo(()=> {
    console.log("This is Grand Child-one");
    const{count}=useCounterContext();
  return (
    <>
    <h3>Value coming from GrandChildTwo is -<span style={{color:'green'}}>{count}</span></h3>
    <div>GrandChildOne</div>
    <GrandChildThree/>
    </>
  )
})

export default GrandChildOne
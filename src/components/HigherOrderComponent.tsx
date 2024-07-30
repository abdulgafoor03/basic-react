import {useState} from 'react';
// experimental to practice HOC with loader for component tagged along


const HigherOrderComponent=(WrappedComponent) =>{
    
  return function NewWrap(props){
    const[isLoading, setIsLoading]=useState(true);
    setTimeout(()=>setIsLoading(false),2000);
    return(
        <>
        {isLoading?'is Loading.....':<WrappedComponent {...props}/>}
        </>
    )
  }
}




// import { useState } from "react";
// // experimental to practice HOC with loader for component tagged along

// const HigherOrderComponent = (wrappedComponent) => {
//   return function NewWrappedComponent(props) {
//     const [isLoading, setIsLoading] = useState(true);
//     setTimeout(() => setIsLoading(false), 2000);
//     return (
//       <>
//         {isLoading ? <p>is Loading.....</p> : <wrappedComponent {...props} />}
//       </>
//     );
//   };
// };

export default HigherOrderComponent;
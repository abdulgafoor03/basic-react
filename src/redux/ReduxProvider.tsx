import { configureStore } from "@reduxjs/toolkit"
import { Provider } from "react-redux";
import  counterReducer  from "./CounterSlice";


const store=configureStore({
    reducer:{
      counter:counterReducer
    }
});
type reduxproviderprops={
  children:React.ReactNode
}
export default function ReduxProvider({children}:reduxproviderprops) {
  return (
    <>
    <Provider store={store}>{children}</Provider>
    </>
  )
}

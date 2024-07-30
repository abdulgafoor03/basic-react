import { useDispatch } from "react-redux"
import { counting } from "../redux/CounterSlice";



export default function GrandChildThree() {
    const dispatch=useDispatch();

  return (
    <div>GrandChildThree
        <button onClick={()=>dispatch(counting(7))}>Click for reducer Dispatch</button>
    </div>
  )
}

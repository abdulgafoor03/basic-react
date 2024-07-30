
import { useSelector } from 'react-redux'

export default function ReduxConsumer() {
    const count=useSelector((state)=>state.counter.value);

  return (
    <div>ReduxConsumer

        <h2>Coming from REDUX selector -  <span style={{color:'blue'}}>{count}</span></h2>
    </div>
  )
}

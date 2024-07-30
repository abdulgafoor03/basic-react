import ReduxConsumer from "./ReduxConsumer";


export default function StepChild() {
    // comes wrapped with higher order component and 2 sec loader in parent
    console.log("this is step-child");
  return (
    <div className="step-child-container">Second-child coming from HOC
    <ReduxConsumer/>
    </div>
  )
}

import { useCallback, useState } from "react";
import ChildOne from "./ChildOne";
import ChildTwo from "./ChildTwo";
import StepChild from "./StepChild";
import HigherOrderComponent from "./HigherOrderComponent";

const LoadedStepChild = HigherOrderComponent(StepChild);

export default function Parent() {
  console.log("This is Parent");
  const [count, setCount] = useState(0);
  const handleClick = useCallback(() => setCount((prev) => prev + 1), []);

  return (
    <div className="container">
      <section className="left-content">
        <h1>this is a parent component</h1>
        <button onClick={handleClick}>increment</button>
        <ChildOne count={count} />
        <ChildTwo />
      </section>
      <section className="right-content">
        <LoadedStepChild />
      </section>
    </div>
  );
}

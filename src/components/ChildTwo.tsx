import { memo } from "react";
import GrandChildTwo from "./GrandChildTwo";

const ChildTwo=memo(()=> {
  console.log("This is Child-two");
  return (
    <div className="Child-two-container">
         <h1>this is a childtwo component</h1>
      <GrandChildTwo />
    </div>
  );
});

export default ChildTwo;

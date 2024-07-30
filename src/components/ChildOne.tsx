import GrandChildOne from "./GrandChildOne";

type childoneProps={
    count?:number;
}
export default function ChildOne({count}:childoneProps) {
    console.log("This is Child-one");
  return (
    <div className="Child-one-container">
        <h1>this is a childone component</h1>
        <h3><span style={{color:'red'}}>{count}</span> value coming from parent</h3>
        <GrandChildOne/>
    </div>
  )
}

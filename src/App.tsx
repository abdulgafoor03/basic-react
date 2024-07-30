import { Link, Outlet, Route, Routes } from "react-router-dom";
import "./App.css";
// import Parent from "./components/Parent";
// import ChildOne from "./components/ChildOne";
import ChildTwo from "./components/ChildTwo";
import { lazy,Suspense } from "react";

const Parent=lazy(()=>wait(1000).then(()=>import("./components/Parent")));
const ChildOne=lazy(()=>import("./components/ChildOne"));
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<NavWrapper />}>
          <Route path="/" element={<Parent />} />
          <Route path='/childone' element={<ChildOne/>}/>
          <Route path='/childtwo' element={<ChildTwo/>}/>
        </Route>
      </Routes>
    </>
  );
}

export default App;

const NavWrapper = () => {
  return (
    <>
      <nav style={{ display: "flex", gap: "1rem" }}>
        <Link to="/">Home</Link>
        <Link to="/childone">ChildOne</Link>
        <Link to="/childtwo">ChildTwo</Link>
      </nav>
      <Suspense fallback={<h1>Loading....</h1>}>
      <Outlet/>
      </Suspense>
    </>
  );
};
// delyer function to see loading status since our internaet connections are speed;

function wait(time:number){
  return new Promise(resolve=>{
    setTimeout(resolve,time)
  })
}
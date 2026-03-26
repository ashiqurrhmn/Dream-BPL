import { Suspense } from "react";
import "./App.css";
import Banner from "./componenets/Home/Banner/Banner";
import Navbar from "./componenets/Navbar/Navbar";
import Players from "./componenets/Players/Players";

const fetchPlayer = async () => {
  const res = await fetch("/data.json");
  return res.json();
};

function App() {
  const promise = fetchPlayer();

  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <Suspense
        fallback={
          <div>
            <span className="loading loading-spinner text-primary"></span>
            <span className="loading loading-spinner text-secondary"></span>
            <span className="loading loading-spinner text-accent"></span>
            <span className="loading loading-spinner text-neutral"></span>
            <span className="loading loading-spinner text-info"></span>
            <span className="loading loading-spinner text-success"></span>
            <span className="loading loading-spinner text-warning"></span>
            <span className="loading loading-spinner text-error"></span>
          </div>
        }
      >
        <Players promise={promise}></Players>
      </Suspense>
      
    </>
  );
}

export default App;

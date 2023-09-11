import React from "react";
import Navbar from "../Components/Navbar";
import SideBar from "../Components/sideBar";
import CardsView from "../Components/cardsView";
import Style from "./App.module.css";
const App = () => {
  return (
    <>
      <Navbar />
      <header className={`row ${Style.bg}`}>
        <div className="col-3">
          <SideBar />
        </div>
        <div className="col-9">
          <CardsView />
        </div>
      </header>
    </>
  );
};

export default App;

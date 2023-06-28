import "./App.css";
import Header from "./Components/Layout/Header";
import DescriptionComp from "./Components/Layout/DescriptionComp";
import Menu from "./Components/Menu/Menu";
import { useState } from "react";
import ContextProvider from './store/ContextProvider';

function App() {
  return (
    <ContextProvider>
      <Header/>
      <DescriptionComp />
      <Menu />
    </ContextProvider>
  );
}

export default App;

import React, { useState} from "react";
import  style from "./App.module.css";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import { PageAbout,PageVocabulary,PageCard,PageError } from "../pages/index";

import { BrowserRouter as Router,Route,Routes,NavLink } from "react-router-dom";


export default function App() {

  return (
    <Router>
    <div class={style.container}>
      <Header />
      <main>
  <Routes>
    <Route path= "/about" element={<PageAbout/>} />
    <Route path= "/card" element={<PageCard />} />
    <Route path= "/vocabulary" element={<PageVocabulary />} />
<Route path="*" element={<PageError/>} />
</Routes> 

  </main>
      <Footer />

    </div>
    </Router>
  );
}

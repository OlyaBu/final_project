import React from "react";
import styles from "./body.module.css";
import Footer from "./footer/footer";
import Header from "./header/header";
import Vocabulary from "../vocabulary/vocabulary";
import Card from "../card_gallery/card";

export default function Body() {
  return (
    <div className="container">
  <Header/> 
  <Card/>
      <Vocabulary/> 
    <Footer/>
    </div>
  );
};

import React from "react";
import styles from "./App.module.css";
import * as classNames from "classnames";
import Header from "./components/introduction/header/header";
import Body from "./components/introduction/body";
import Footer from "./components/introduction/footer/footer";

class App extends React.Component {
  render() {
    return (
      <div className={styles.container}>
     
        <Body />
       
      </div>
    );
  }
}

export default App;

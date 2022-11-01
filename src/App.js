import React from 'react';
import styles from './App.module.css';
import * as classNames from 'classnames';
import Header from './components/header/header';
import Body from './components/body/body';
import Footer from './components/footer/footer';
import Card from './components/card/card';


class App extends React.Component {
  render() {
      return (
  
       <div className={styles.container}>
        <Header/>
        <Body>

        </Body>
         </div>  
      );
  }
};

export default App;
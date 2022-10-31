import React from 'react';
import './App.css';
import * as classNames from 'classnames';
import Header from './components/header/header';
import Card from './components/card/card';
import Footer from './components/footer/footer';


class App extends React.Component {
  render() {
      return (
  
          <React.Fragment>
            
              <Header/>
         <Card/>
        
         <Footer/>
  
          </React.Fragment>
        
      );
  }
};

export default App;
import React from 'react';
import logo from './logo.svg';
import './App.css';

//router
import { BrowserRouter, Route, Switch } from 'react-router-dom';

//my components
import Home from './components/Home';
import PathError from "./components/PathError";
import Lyrics from './components/Lyrics';
import Footer from './components/Footer';

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="App">
      <Footer></Footer>
        <img src={logo} className="App-logo" alt="logo" />

        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/lyrics/:id" component={Lyrics}/>
          <Route component={PathError} exact/>
        </Switch>

      </div>
    </BrowserRouter>
  );
};

export default App;


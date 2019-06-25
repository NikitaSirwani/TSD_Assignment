import React from 'react';
import Layout from './Container/Layout/Layout'
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom'

function App() {
  const toBeDisplayed = (props) => {

    return (
      <div className="container">
        <div className="col-md-12">
          <Layout {...props} />
        </div>
      </div>
    )
  };
  return (
    <BrowserRouter>
      <div className="App">
        <Route path='/' component={toBeDisplayed} />
      </div>
    </BrowserRouter>
  );
}

export default App;
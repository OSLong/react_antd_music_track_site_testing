import React from 'react';
import logo from './logo.svg';
import './App.css';

import { BrowserRouter } from "react-router-dom"
import { Switch ,Route } from "react-router"
import HomePage from "./pages/home"
import AboutPage from './pages/about';
import Error404Page from './pages/errors/Error404';

function App() {
  return (
    <Switch>
      <Route path="/" exact children={() => <HomePage />} />
      <Route path="/about" exact children={() => <AboutPage />} />
      <Route path="**" exact children={() => <Error404Page />} />
    </Switch>
  );
}

// wrap needed context
// browser router is used for router , if not set , router not working
const wrapApp = () => (
  <BrowserRouter>
    <App />
  </BrowserRouter>
)

export default wrapApp;

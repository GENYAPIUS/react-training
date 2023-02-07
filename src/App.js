import logo from './logo.svg';
import './App.css';
import {Helmet} from "react-helmet";
import {BrowserRouter, createBrowserRouter, Link, Route} from "react-router-dom";
import PageOne from "./components/page-one";
import PageTwo from "./components/page-two";
import Home from "./components/home";




function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Helmet>
          <meta property="og:image" content="https://s3-angular-page-cosmedcps-t.s3.ap-northeast-1.amazonaws.com/assets/img/logo/link_logo.png"/>
          <meta property="og:description" content="test content"/>
        </Helmet>
      </header>
      <Home/>
    </div>
  );
}

export default App;

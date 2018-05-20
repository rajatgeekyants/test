import React, {Component} from 'react';
import './style.css';
import logo from '../logo.png';
import Login from '../Components/Login';
import SuccessMessage from '../Components/Success';

/**
 * @name Login
 * @description A login component with success message on submission
 * @example
 *  <App
 *    {this.state.complete ? (
 *      <SuccessMessage />
 *      ) : (
 *      <Login submit={this.handleSubmit} input={this.handleInput} />
 *    )}
 *  />
 */

class App extends Component {
  state = {complete: false, firstName: '', pokemon: {}};

  handleSubmit = e => {
    e.preventDefault ();
    this.setState ({complete: true});
    document.cookie = `firstName=${this.state.firstName}`;
  };

  handleInput = e => {
    this.setState ({firstName: e.currentTarget.value});
  };
  render () {
    return (
      <div className="App">
        <header className="App-header">

          <h1 className="App-title">
            Testing Your App with Puppeteer and Jest
          </h1>
          <nav className="navbar">
            <ul>
              <li className="nav-li">
                <a href="http://localhost:3000">Batman</a>
              </li>
              <li className="nav-li">
                <a href="http://localhost:3000">Supermman</a>
              </li>
              <li className="nav-li">
                <a href="http://localhost:3000">Aquaman</a>
              </li>
              <li className="nav-li">
                <a href="http://localhost:3000">Wonder Woman</a>
              </li>
            </ul>
          </nav>
        </header>
        <p className="App-intro">
          Puppeteer is an end-to-end testing Node library by Google which
          provides us with a high-level API that can control Chromium over
          the dev tools protocol.
        </p>
        {this.state.complete
          ? <SuccessMessage />
          : <Login submit={this.handleSubmit} input={this.handleInput} />}
      </div>
    );
  }
}

export default App;

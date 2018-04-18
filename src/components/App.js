import React from "react";
// import route Components here
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom';

import Home from "./Home";
import Hello from "./Hello";
import About from "./About";
import Books from "./Books";

class App extends React.Component {
    constructor() {
        super();
    }

    componentDidMount() {
        fetch("https://reqres.in/api/users")
          .then(res => res.json())
          .then(
            (result) => {
              this.setState({
                isLoaded: true,
                items: result.items
              });
            },
            // Note: it's important to handle errors here
            // instead of a catch() block so that we don't swallow
            // exceptions from actual bugs in components.
            (error) => {
              this.setState({
                isLoaded: true,
                error
              });
            }
          )
      }

    render() {
        return (
          <Router>

              <div style={{clear: 'both'}}>
              <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                  <Link className='navbar-brand' to="/home">Navbar</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                  <ul className="navbar-nav">
                    <li className="nav-item active">
                        <Link className='nav-link' to="/hello">Hello</Link>
                    </li>
                    <li className="nav-item">
                        <Link className='nav-link' to="/about">About</Link>
                    </li>
                    <li className="nav-item">
                        <Link className='nav-link' to="/books">Books</Link>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link disabled" href="#">Disabled</a>
                    </li>
                  </ul>
                  <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                        <Link className='nav-link' to="/hello" onClick={this.props.logout}>Sign Out</Link>
                    </li>
                  </ul>
                </div>
              </nav>
                  <switch>
                      <Route exact path="/" component={Hello} />
                      <Route path="/home" component={Home} />
                      <Route path="/hello" component={Hello} />
                      <Route path="/about" component={About} />
                      <Route path="/books" component={Books} />
                  </switch>
              </div>
          </Router>
        );
    }
}

export default App;

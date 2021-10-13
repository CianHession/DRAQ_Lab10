import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import { Content } from './Components/content';
import  Read  from './Components/read';
import  Create  from './Components/create';
import  Movies  from './Components/movies';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Container } from 'react-bootstrap';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          
          <Navbar bg="primary" variant="dark">
            <Container>
              <Navbar.Brand href="#home">Navbar</Navbar.Brand>
              <Nav className="me-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/read">Read</Nav.Link>
                <Nav.Link href="/create">Create</Nav.Link>
              </Nav>
            </Container>
          </Navbar>
          <br />
          <Switch>
            <Route path='/' exact><Content/></Route>
            <Route path='/create' exact><Create></Create></Route>
            <Route path='/read' exact><Read></Read></Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
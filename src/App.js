import './App.css';
import { Component } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Contents } from './components/Contents';
import { Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';

class App extends Component {
  render() {
    return (
      //Router and NavBar bootstrap tags. Gives us a Navigation Bar and clickable buttons to navigate the website
      //Switch tag used to retrive the path and go to the page and show its components
     <Router>
        <div className="App">
          <Navbar bg="primary" variant="dark">
            <Container>
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            <Nav className="navBar">
              <Nav.Link href="/Home">Home</Nav.Link>
              <Nav.Link href="/Read">Read</Nav.Link>
              <Nav.Link href="/Create">Create</Nav.Link>
            </Nav>
            </Container>
          </Navbar>
    
          <Switch>
            <Route path='/Home' exact component={Contents}></Route>
            <Route path = '/Create' exact component = {Header}></Route>
            <Route path='/Read' exact component = {Footer}></Route>
          </Switch>

        </div>
      </Router>
    );
  }
}

export default App;

import React, { Component } from 'react'
import { Button, ButtonGroup, Navbar, Container, Nav } from 'react-bootstrap'
import { Link, BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Home from './Home'
import About from './About';
import User from './User'

export default class NavbarC extends Component {
    render() {
        return (
            <div>
                <Router>
                    <Navbar bg="dark" variant="dark">
                        <Container>
                            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                            <Nav className="me-auto">
                                <Nav.Link ><Link to="/"  >HOME</Link></Nav.Link>
                                <Nav.Link ><Link to="/about" >ABOUT</Link></Nav.Link>
                                <Nav.Link ><Link to="/users" >USERS</Link></Nav.Link>
                            </Nav>
                        </Container>
                    </Navbar>

                    <Switch>
                        <Route component={About} path="/about" ></Route>
                        <Route component={User} path="/users" ></Route>
                        <Route component={Home} exist path="/" ></Route>
                    </Switch>


                </Router>

            </div>
        )
    }
}

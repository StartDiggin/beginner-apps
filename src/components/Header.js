import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import About from './About'
import Contact from './Contact'
import Error from './Error'
import Home from './Home'
import Nav from './Navigation'


class Header extends Component {
    render() {
      return (      
         <BrowserRouter>
          <div>
            <Nav />
              <Switch>
               <Route path="/" component={Home} exact/>
               <Route path="/about" component={About}/>
               <Route path="/contact" component={Contact}/>
              <Route component={Error}/>
             </Switch>
          </div> 
        </BrowserRouter>
      );
    }
  }
   
  export default Header;
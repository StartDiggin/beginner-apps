import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import contact from './APPS/ContactApp'
import randomcolor from './APPS/RandomColor'
import randommeme from './APPS/RandomMeme'
import slidehow from './APPS/SlideshowApp'
import timer from './APPS/TimerApp'
import todo from './APPS/TodoApp'

import Error from './Error'
import Home from './Home'
import Landing from './landing'
import Nav from './Navigation'


class Header extends Component {
    render() {
      return (      
          <div className="main">
            <BrowserRouter>
              <Nav />
            <div className="main__content">
                <Switch>
                <Route path="/" component={Landing} exact/>
                <Route path="/home" component={Home} />
                <Route path="/contact" component={contact}/>
                <Route path="/randomcolor" component={randomcolor}/>
                <Route path="/randommeme" component={randommeme}/>
                <Route path="/slidehow" component={slidehow}/>
                <Route path="/timer" component={timer}/>
                <Route path="/todo" component={todo}/>
                <Route component={Error}/>
                </Switch>
            </div> 
            </BrowserRouter>

          </div>
      );
    }
  }
   
  export default Header;
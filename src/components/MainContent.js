import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Contact from './APPS/ContactApp'
import Randomcolor from './APPS/RandomColor'
import Randommeme from './APPS/RandomMeme'
import Slideshow from './APPS/SlideshowApp'
import Timer from './APPS/TimerApp'
import Todo from './APPS/TodoApp'

import Error from './Error'
import Home from './Home'
import Nav from './Navigation'


// render={props => (<Homepage {...props} pieceOfState={this.state.pieceOfState}/>)}

class Header extends Component {
  state={
    auto: true
  }



    render() {
      return (      
          <div className="main">
            <BrowserRouter>
              <Nav />
            <div className="main__content">
                <Switch>
                {/* <Route path="/" component={Home} exact/> */}
                <Route path="/" component={Home} exact/>
                <Route path="/contact" component={Contact}/>
                <Route path="/randomcolor" component={Randomcolor}/>
                <Route path="/randommeme" component={Randommeme}/>
                <Route path="/slideshow" component={Slideshow} />
                <Route path="/timer" component={Timer}/>
                <Route path="/todos" component={Todo}/>
                <Route component={Error}/>
                </Switch>
            </div> 
            </BrowserRouter>

          </div>
      );
    }
  }
   
  export default Header;
import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import contact from './APPS/ContactApp'
import randomcolor from './APPS/RandomColor'
import randommeme from './APPS/RandomMeme'
import Slideshow from './APPS/SlideshowApp'
import timer from './APPS/TimerApp'
import todo from './APPS/TodoApp'

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
                <Route path="/" render={props => <Home {...props} auto={{auto: false}} />} exact/>
                <Route path="/contact" component={contact}/>
                <Route path="/randomcolor" component={randomcolor}/>
                <Route path="/randommeme" component={randommeme}/>
                {/* <Route path="/slideshow" component={slideshow} /> */}
                <Route path="/slideshow"  render={props => <Slideshow {...props} auto={this.state} />} />
                <Route path="/timer" component={timer}/>
                <Route path="/todos" component={todo}/>
                <Route component={Error}/>
                </Switch>
            </div> 
            </BrowserRouter>

          </div>
      );
    }
  }
   
  export default Header;
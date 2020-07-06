import React, { Component } from 'react'
import Login from './Login'
import Landing from './Landingpage'
import Post from './Post'
import Gallery from './Gallery'
import Todo from './Todo'
import { Route,BrowserRouter } from "react-router-dom";
export default class Routepath extends Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                
                <Route exact path="/" component={Login} />
                <Route exact path="/landing" component={Landing} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/post" component={Post} />
                 <Route exact path="/gallery" component={Gallery} />
                 <Route exact path="/todo" component={Todo} />
                </BrowserRouter>
            </div>
        )
    }
}

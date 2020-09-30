import React from 'react';
import {Switch, Route } from 'react-router-dom';
import Home from '../pages/home/home';
import About from '../pages/about/about';
import Contact from '../pages/contact/contact';
import Sharestory from '../pages/sharestory/sharestory';





const Router = ()=>(
    <Switch>
        {/* pages */}
        <Route exact path ='/' component = {Home} />
        <Route exact path='/about' component = {About} />
        <Route exact path='/contact' component = {Contact} />
        <Route exact path='/sharestory' component={Sharestory} />
        

  
        

        
    </Switch>
)
export default Router
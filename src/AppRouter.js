import React, { useContext } from 'react'
import {
    BrowserRouter as Router,
    Switch
  } from 'react-router-dom';

import { PublicRoute } from './PublicRoute';

import Home from './component/home/home';



export const AppRouter = () => {

    return (
        <Router>
            <div>
                <Switch> 
                    <PublicRoute 
                        exact 
                        path="/login" 
                        component={ Home } 
                    />
                    
                    <PublicRoute 
                        path="/" 
                        component={ Home } 
                    />
                </Switch>
            </div>
        </Router>
    )
}

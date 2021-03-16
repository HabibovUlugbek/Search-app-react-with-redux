import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Artist from './components/Artist'
import Home from './components/Home'


function Routes() {
    return (
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/artists/:id" exact component={Artist} />
        </Switch>
    )
}

export default Routes

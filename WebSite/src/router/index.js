import React, { Component } from 'react'
import { HashRouter, Switch, Route } from 'react-router-dom'
import asyncComponent from '@/utils/asyncComponent'

import prepare from '@/pages/prepare/prepare'
const playing = asyncComponent(() => import('@/pages/playing/playing'))
export default class RouteConfig extends Component {
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route path="/" exact component={prepare}/>
          <Route path="/prepare" exact component={prepare}/>
          <Route path="/playing" component={playing}/>
        </Switch>
      </HashRouter>
    )
  }
}
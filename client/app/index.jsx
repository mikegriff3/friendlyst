import React from 'react'
import { render } from 'react-dom'
import { createStore, combineReducers, applyMiddleware} from 'redux'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import App from './App.jsx'
import LandingPage from './LandingPage.jsx'
import Profile from './Profile.jsx'
import postsReducer from './reducer/postReducer.js'
import friendsReducer from './reducer/friendsReducer.js'
import userReducer from './reducer/userReducer.js'
import chatRoomReducer from './reducer/chatRoomReducer.js'
import notificationReducer from './reducer/notificationReducer.js'

const reducers = combineReducers({
   postsReducer,
   friendsReducer,
   userReducer,
   chatRoomReducer,
   notificationReducer
})

const store = createStore(reducers)

render(
<Provider store={store}>
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={LandingPage} />
      <Route exact path="/home" component={App} />
      <Route exact path="/profile" component={Profile} />
    </Switch>
  </BrowserRouter>
</Provider>
,document.getElementById('app'));

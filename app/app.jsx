var React = require('react')
var ReactDOM = require('react-dom')
var {Provider} = require('react-redux')
var {hashHistory} = require('react-router')

const actions = require('actions')
const store = require('configureStore').configure()
import firebase from 'app/firebase/'
import router from 'app/router/'

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    hashHistory.push('/todos')
  } else {
    hashHistory.push('/')
  }
})

console.log('Start State', store.getState());

store.subscribe( () => {
  var state = store.getState()
  console.log('New State', state);
})

store.dispatch(actions.startAddTodos())         // Fetch todos from firebase

$(document).foundation()                        //load foundation

require('style!css!sass!applicationStyles')     // Import styles

ReactDOM.render(
  <Provider store={store}>
    {router}
  </Provider>,
  document.getElementById('app')
)

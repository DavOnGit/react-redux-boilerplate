import * as redux from 'redux'
import thunk from 'redux-thunk'

import {searchTextReducer, showCompletedReducer, todosReducer, authReducer, confirmReducer, errorReducer} from 'reducers'

export var configure = (initialState = {}) => {
  var reducer = redux.combineReducers({
    searchText: searchTextReducer,
    showCompleted: showCompletedReducer,
    todos: todosReducer,
    auth: authReducer,
    confirm: confirmReducer,
    error: errorReducer
  })
  
  var store = redux.createStore(reducer, initialState, redux.compose(
    redux.applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ))
  return store
}

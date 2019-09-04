import {createStore, combineReducers, applyMiddleware} from 'redux'
import promiseMiddleware from 'redux-promise-middleware'

import budgetReducer from './redux/budgetReducer'
import userReducer from './redux/userReducer'

const rootReducer = combineReducers({
    budget: budgetReducer,
    user: userReducer
  })

  export default createStore(rootReducer, applyMiddleware(promiseMiddleware))
import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import thunk from 'redux-thunk'
import { generalReducer } from './reducers/general.reducer'
import { userReducer } from './reducers/user.reducer'
import { wapReducer } from './reducers/wap.reducer'

const rootReducer = combineReducers({
    generalReducer,
    userReducer,
    wapReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))
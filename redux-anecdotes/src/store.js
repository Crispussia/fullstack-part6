//import { createStore, combineReducers } from 'redux'
import { configureStore } from '@reduxjs/toolkit'
import anecdoteService from './services/anecdotes'
import anecdoteReducer, { setAnecdotes  } from './reducers/anecdoteReducer'
import filterReducer from './reducers/filterReducer'
import notificationReducer from './reducers/notificationReducer'
/*const reducer = combineReducers({
    anecdotes: anecdoteReducer,
    filter: filterReducer
  })*/
  const store = configureStore({
    reducer: {
       anecdotes: anecdoteReducer,
      filter: filterReducer,
      notification: notificationReducer
    }
  })
  anecdoteService.getAll().then(anecdotes =>
      store.dispatch(setAnecdotes(anecdotes))
  )
  export {store}
  /*const reducer = combineReducers({
    anecdotes: anecdoteReducer,
    notification: notificationReducer,
    filter: filterReducer
  })
  
  export const store = createStore(reducer)*/
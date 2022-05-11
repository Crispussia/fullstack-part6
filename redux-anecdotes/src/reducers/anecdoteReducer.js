import { createSlice } from '@reduxjs/toolkit'
import anecdoteService from '../services/anecdotes'
const anecdotesAtStart = []

const getId = () => (100000 * Math.random()).toFixed(0)

const asObject = (anecdote) => {
  return {
    content: anecdote,
    id: getId(),
    votes: 0
  }
}

const initialState = anecdotesAtStart.map(asObject)

/*const reducer = (state = initialState, action) => {
  console.log('state now: ', state)
  console.log('action', action)
  
  switch (action.type) {
    case 'ADD_VOTE': {
      const id = action.data.id
      const anecdoteToChange = state.find(n => n.id === id)
      const changedAnecdote = {
        ...anecdoteToChange,
        votes: anecdoteToChange.votes + 1
      }
      return state.map(anecdote =>
        anecdote.id !== id ? anecdote : changedAnecdote
      )
    }
    case 'NEW_ANECDOTE': {
      return [...state, action.data]
    }
    default:
      return state
  }
}
export const addvote = (id) => {
  return {
    type: 'ADD_VOTE',
    data: { id }
  }
}
export const createAnecdote = (anecdote) => {
  return {
    type: 'NEW_ANECDOTE',
    data: {
      content: anecdote,
      id: getId(),
      votes: 0
    }
  }
}
export default reducer*/
const anecdoteSlice = createSlice({
  name: 'anecdotes',
  initialState,
  reducers: {
    addvote(state, action) {
      const anecdoteToChange = action.payload
      return state.map(anecdote =>
        anecdote.id !== anecdoteToChange.id ? anecdote :anecdoteToChange
      )
      
    },
    appendAnecdote(state, action) {
      //return [...state, action.payload]
      state.push(action.payload)
    },
    setAnecdotes(state, action) {
      return action.payload
    }
  },
})
export const {addvote,appendAnecdote,setAnecdotes } = anecdoteSlice.actions
export const initializeAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll()
    dispatch(setAnecdotes(anecdotes))
  }
}
export const createAnecdote = content => {
  return async dispatch => {
    const newAnecdote= await anecdoteService.createNew(content)
    dispatch(appendAnecdote(newAnecdote))
  }
}
export const addVote = anecdote => {
 
  return async dispatch => {
    console.log(anecdote)
    const anecdotes = await anecdoteService.getAll()
    console.log(anecdotes)
    const anecdotevalue= anecdotes.find(n => n.id === anecdote)
    console.log(anecdotevalue)
    const newVote = await anecdoteService.addVote(anecdotevalue)
     dispatch(addvote(newVote))
  }
 }
export default anecdoteSlice.reducer
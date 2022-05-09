import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addvote } from '../reducers/anecdoteReducer'
import '../index.css'
const AnecdoteList = () => {
  const dispatch = useDispatch()
  const anecdotes = useSelector(state => state.sort((anecdote1, anecdote2) => anecdote2.votes - anecdote1.votes))

  const vote = (id) => {
    dispatch(addvote(id))
  }

  return (
    <div id='list'>
      {anecdotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote.id)}>vote</button>
          </div>
        </div>

      )}
    </div>
  )
}
export default AnecdoteList
import React from 'react'
import { useDispatch } from 'react-redux'
import { createAnecdote } from '../reducers/anecdoteReducer'
import { setNewAnecdotesNotification } from '../reducers/notificationReducer'

const AnecdoteForm = () => {
  const dispatch = useDispatch()

  const addAnecdote = (event) => {
    event.preventDefault()
    const  content  = event.target.anecdote.value
    event.target.anecdote.value = ''
    dispatch(createAnecdote(content))
    console.log(content)
   dispatch(setNewAnecdotesNotification(content, 5))
   
  }

  return (
    <>
      <h2>create new</h2>
      <form onSubmit={addAnecdote}>
        <div><input name='anecdote' /></div>
        <button>create</button>
   
      </form>
    </>
  )
}
export default AnecdoteForm

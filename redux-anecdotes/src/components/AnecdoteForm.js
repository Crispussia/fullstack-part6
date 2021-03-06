
import React from 'react'
import { connect } from 'react-redux'
import { createAnecdote } from '../reducers/anecdoteReducer'
import { setNotification} from '../reducers/notificationReducer'
//import anecdoteService from '../services/anecdotes'
const AnecdoteForm = (props) => {
  //const dispatch = useDispatch()

  const addAnecdote = async (event) => {
    event.preventDefault()
    const  content  = event.target.anecdote.value
    event.target.anecdote.value = ''
   // const newNote = await anecdoteService.createNew(content)
   // dispatch(createAnecdote(content))
   props.createAnecdote(content)
    console.log(content)
   props.setNotification(`new anecdote '${content}'`, 5)
   
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

const mapDispatchToProps = dispatch => {
  return {
    createAnecdote: value => dispatch(createAnecdote(value)),
    setNotification: (content, timeout) => dispatch(setNotification(content, timeout))
   }
}

export default connect(
  null,
  mapDispatchToProps
)(AnecdoteForm)

import React from 'react'
//import { useSelector, useDispatch } from 'react-redux'
import { connect } from 'react-redux'
import { addVote } from '../reducers/anecdoteReducer'
import {  setNotification  } from '../reducers/notificationReducer'
import '../index.css'
const AnecdoteList = (props) => {
  //const dispatch = useDispatch()
  //const anecdotes = useSelector(state => state.sort((anecdote1, anecdote2) => anecdote2.votes - anecdote1.votes))
  /*const filter = useSelector(({ filter }) => filter)
  const anecdotes = useSelector(state => {
    
    return [...state.anecdotes]
        .sort((anecdote1, anecdote2) => anecdote2.votes - anecdote1.votes)
        .filter(anecdote => anecdote.content.toLowerCase().includes(filter.toLowerCase()))
  })
 */
  const vote = (anecdote) => {
    const anecdotevalue= props.anecdotes.find(n => n.id === anecdote)
   
    props.addVote(anecdote)
    props.setNotification (`you voted '${anecdotevalue.content}'`, 5)
  }

  return (
    <div id='list'>
      {props.anecdotes.map(anecdote =>
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
const anecdotesToShow = ({anecdotes, filter}) => {

  return [...anecdotes]
    .sort((anecdote1, anecdote2) => anecdote2.votes - anecdote1.votes)
    .filter(anecdote => anecdote.content.toLowerCase().includes(filter.toLowerCase()))
}

const mapStateToProps = (state) => {
  return {
    anecdotes: anecdotesToShow(state),
    filter: state.filter
  }
}


const mapDispatchToProps = dispatch => {
  return {
    addVote: value=> dispatch(addVote(value)),
    setNotification: (content, timeout) => dispatch(setNotification(content, timeout))
   }
}

export default connect(
  mapStateToProps, mapDispatchToProps
  )(AnecdoteList)
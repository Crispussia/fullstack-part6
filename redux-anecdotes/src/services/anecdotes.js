import axios from 'axios'

const baseUrl = 'http://localhost:3001/anecdotes'

const getAll = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}
const createNew = async (anecdote) => {
  const object = { 
    content: anecdote,
    id: (100000 * Math.random()).toFixed(0),
    votes: 0
  }
  const response = await axios.post(baseUrl, object)
//  console.log(response.data)
  return response.data
}
const addVote = async (anecdote) => {
  //console.log(anecdote)
  const updateAnecdote = {
    content: anecdote.content,
    votes: anecdote.votes + 1,
    id: anecdote.id
  }
  const response = await axios.put(`${baseUrl}/${anecdote.id}`, updateAnecdote)
  return response.data
}


export default { getAll,createNew,addVote}
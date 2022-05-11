import axios from 'axios'

const baseUrl = 'http://localhost:3001/anecdotes'

const getAll = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}
//const getId = () => (100000 * Math.random()).toFixed(0)
const createNew = async (anecdote) => {
  const object = { 
    content: anecdote,
    id: (100000 * Math.random()).toFixed(0),
    votes: 0
  }
  const response = await axios.post(baseUrl, object)
  console.log(response.data)
  return response.data
}


export default { getAll,createNew}
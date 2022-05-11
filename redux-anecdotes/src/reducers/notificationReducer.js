//import { createSlice } from '@reduxjs/toolkit'
const initialState = ''


const notificationReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'NOTIFICATION_ADD_ANECDOTE':
       
      return `you added '${action.data}'`
    case 'NOTIFICATION_ADD_VOTE':
      return `you voted '${action.data}'`
    case 'EMPTY':
      return ''
    default:
      return state
  }
}

export const setNewAnecdotesNotification = (content, timeout) => {
  return  dispatch => {
    dispatch({
      type: 'NOTIFICATION_ADD_ANECDOTE',
      data: content
    })
    setTimeout(() => dispatch({
        type: 'EMPTY',
      }), timeout * 1000)
  }
}

export const setVoteNotification = (content, timeout) => {
  return dispatch => {
 
    dispatch({
      type: 'NOTIFICATION_ADD_VOTE',
      data: content
    })
    setTimeout(() => dispatch({
        type: 'EMPTY',
      }), timeout * 1000)
  }
}


export default notificationReducer
/*const notificationSlice = createSlice({
  name: 'notifications',
  initialState,
  reducers: {
    setNewAnecdotesNotification(state, action) {
      const content = action.payload
      
      return `you added '${content}'`
    },
    setVoteNotification(state, action) {
      const content = action.payload
      return dispatch => {
 
        dispatch({
          type: 'NOTIFICATION_ADD_VOTE',
          data: content
        })
        setTimeout(() => dispatch({
            type: 'EMPTY',
          }), timeout * 1000)
      }
    },
    setEmpty() {
      //const content = action.payload
      return dispatch => {
 
        dispatch({
          type: 'EMPTY',
          payload: ''
        })
       
      }
    
    }


  },
})
export const { setNewAnecdotesNotification, setVoteNotification } = notificationSlice.actions
export default notificationSlice.reducer*/
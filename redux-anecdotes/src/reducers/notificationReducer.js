/*const notificationReducer = (state = null, action) => { 
    switch (action.type) {
        case 'SET_NOTIFICATION':
          return action.data
        default:
          return state
      }
    }
    
export const setNotification = (content, duration) => {
    return dispatch=>{
    dispatch({
        type: 'SET_NOTIFICATION',
        data: content
    })
        setTimeout(() => {
        dispatch({
            type: 'SET_NOTIFICATION',
            data: null
        })
        }, duration * 1000)
    }
}

    export default notificationReducer*/

const initialState = ''

const notificationReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'NOTIFICATION_ADD_ANECDOTE':
        console.log(action.data)
      return `you added '${action.data}'`
    case 'NOTIFICATION_ADD_VOTE':
        console.log('vote',action.data)
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
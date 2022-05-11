import { createSlice } from '@reduxjs/toolkit'
const initialState = ''
const notificationSlice = createSlice({
  name: 'notifications',
  initialState,
  reducers: {
    setNewNotification(state, action) {
  
      return action.payload      
    },
    clearNotification(){
     return ''
    }
  },
})
export const { setNewNotification,clearNotification} = notificationSlice.actions
export const setNotification= (content, timeout)=> {
  return async dispatch => {
    dispatch(setNewNotification(content))
    setTimeout(() => dispatch(clearNotification()), timeout * 1000)
  }
 }
export default notificationSlice.reducer


/*const notificationReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_NOTIFICATION':     
      return action.data
    case 'CLEAR_NOTIFICATION':
      return ''
    default:
      return state
  }
}

export const setNotification = (content, timeout) => {
  return  dispatch => {
    dispatch({
      type: 'SET_NOTIFICATION',
      data: content
    })
    setTimeout(() => dispatch({
        type: 'CLEAR_NOTIFICATION',
      }), timeout * 1000)
  }
}


export default notificationReducer*/


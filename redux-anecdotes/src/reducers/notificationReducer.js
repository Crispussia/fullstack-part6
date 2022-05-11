import { createSlice } from '@reduxjs/toolkit'
const initialState = ''
let precedentNotification
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
    const timeoutValue= setTimeout(() => dispatch(clearNotification()), timeout * 1000)
    if (precedentNotification !== timeoutValue && precedentNotification !== timeoutValue) {
      clearTimeout(precedentNotification)
    }
    precedentNotification = timeoutValue

  }
 }
export default notificationSlice.reducer



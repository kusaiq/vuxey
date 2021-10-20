import axios from 'axios'
import qs from 'qs'
import { paginateArray } from '../../../../../utility/Utils'
// ** Get all Data
export const getAllData = () => {
  return async dispatch => {
    await axios.get('https://api.tfrheeda.devs.ly/users').then(response => {
      dispatch({
        type: 'GET_ALL_DATA',
        data: response.data
      })
    })
  }
}

// // ** Get data on page or row change
export const getData =  params => {
return async dispatch => {
const res = await axios.get('https://api.tfrheeda.devs.ly/users')

const { q, perPage, page, role } = params

      /* eslint-disable  */

  const queryLowered = q.toLowerCase()
  const filteredData = res.data.filter(
    user =>
      (user.username.toLowerCase().includes(queryLowered) ) &&
      user.role.name === (role || user.role.name) 
  )
  const result ={
    users: paginateArray(filteredData, perPage, page),
    total: filteredData.length
  }
     dispatch({
        type: 'GET_DATA',
        data: result.users,
        totalPages: result.total,
         params
       })
}
}

  
    // await axios.get('/api/users/list/data', params).then(response => {
    //   dispatch({
    //     type: 'GET_DATA',
    //     data: response.data.users,
    //     totalPages: response.data.total,
    //     params
    //   })
    // })
 

// // ** Get User
export const getUser = id => {
  return async dispatch => {
    await axios
      .get(`https://api.tfrheeda.devs.ly/users/${id}`)
      .then(response => {
        dispatch({
          type: 'GET_USER',
          selectedUser: response.data,
          CurrentId : response.data.id
        })
      })
      .catch(err => console.log(err))
  }
}

// ** Add new user
 export const addUser = user => {
   console.log(user)
   return (dispatch, getState) => {
  const data = qs.stringify(user)
  const config = {
   headers: {
   'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
     }
  }
     axios
       .post('https://api.tfrheeda.devs.ly/users', data, config)
      .then(response => {
        dispatch({
          type: 'ADD_USER',
          user
        })
      })
      .then(() => {
        dispatch(getData(getState().users.params))
        dispatch(getAllData())
      })
      .catch(err => console.log(err))
  }
}

//edit user 
// ** Add new user
export const editUser = user => {
  console.log(user)
  return (dispatch, getState) => {
 const data = qs.stringify(user)
 const config = {
  headers: {
  'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
    }
 }
    axios
      .put(`https://api.tfrheeda.devs.ly/users/${user.id}`, data, config)
     .then(response => {
       dispatch({
         type: 'EDIT_USER',
         editUser :data
       })
     })
     .catch(err => console.log(err))
 }
}

// // ** Delete user
export const deleteUser = id => {
  return (dispatch, getState) => {
    axios
      .delete(`https://api.tfrheeda.devs.ly/users/${id}`)
      .then(response => {
        dispatch({
          type: 'DELETE_USER'
        })
      })
      .then(() => {
        dispatch(getData(getState().users.params))
        dispatch(getAllData())
      })
  }
}

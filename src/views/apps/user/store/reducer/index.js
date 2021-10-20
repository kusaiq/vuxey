// ** Initial State
const initialState = {
    allData: [],
    data: [],
    total: 1,
    params: {},
    selectedUser: null,
    currentID: null
  }
  
  const users = (state = initialState, action) => {
    switch (action.type) {
      case 'GET_ALL_DATA':
        return { ...state, allData: action.data}
        
       
      case 'GET_DATA':
        return {
          ...state,
          data: action.data,
          total: action.totalPages,
          params: action.params
        }
      case 'GET_USER':
        return { ...state, selectedUser: action.selectedUser, currentID: action.CurrentId }
    case 'ADD_USER':
      return { ...state }    
    case 'EDIT_USER':
      return { ...state }
      case 'deleteUser':
        return { ...state }
      default:
        return { ...state }
    }
  }

  export default users
  
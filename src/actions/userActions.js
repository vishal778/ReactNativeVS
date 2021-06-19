import axios from "axios";

export const changeEmail= (email) => {
  return{
  type: 'CHANGE_EMAIL',
  payload: {email}
  }
}

export const changePassword = (password) => {
    return {
        type: 'CHANGE_PASSWORD',
        payload: password
    }
}

export const changeName = (Name) => {
    return {
        type: 'CHANGE_NAME',
        payload: Name
    }
}

export const getAPIdata = () => {
    return async (dispatch) => {
        const response = await axios.get('http://dummy.restapiexample.com/api/v1/employees');
        if(response){
            console.log('resppp==',response);
            dispatch({type:'GET_API_DATA_SUCCESS',payload: response.data})
        }
    }
        //with redux thunk we can return function also
        
}

//whenever we are not using redux thunk, then we have only 1 option-
//we can only rturn plain action function
//but with redux thunk, we get the flexibility to return function, and hence we can use promises, callbacks, async await 
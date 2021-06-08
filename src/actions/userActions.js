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
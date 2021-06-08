
const INITIAL_STATE  =  {
    email:'',
    password: '',
    Name: ''
}


export default (state=INITIAL_STATE, action) => {
    switch (action.type) {
        case 'CHANGE_EMAIL':
            state= {...state, email:action.payload.email}
            break;
         // state.email= action.payload.email

         case 'CHANGE_PASSWORD':
             state= {...state, password: action.payload}
             break;

        case 'CHANGE_NAME':
            state = {...state, Name: action.payload }
            break;

        default: 
             state;
    }
    return state;
}
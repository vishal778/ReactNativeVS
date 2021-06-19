
const INITIAL_STATE  =  {
    email:'',
    password: '',
    Name: '',
    isDataLoaded: false,
    apiData: []
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
        
        case 'GET_API_DATA_SUCCESS':
            state = {...state, apiData: action.payload, isDataLoaded: true }

        default: 
             state;
    }
    return state;
}
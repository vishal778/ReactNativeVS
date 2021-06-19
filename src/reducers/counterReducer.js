const INITIAL_STATE = {
    counter: 0
}

export default (state=INITIAL_STATE, action) => {
 switch(action.type) {
     case 'INCREASE_MY_COUNTER':
         state = {...state, counter: state.counter + action.payload}
         break;
     case 'DECREASE_MY_COUNTER':
         state ={...state, counter: state.counter -action.payload}
         break;
    default: state;
 }

 return state;
}
import React from 'react';
import {Text,View, Button} from 'react-native';
import { connect } from 'react-redux';

const counterScreen = ({counter,increaseCounter,decreaseCounter}) => {
  return(
      <View>
        <Text>
            {
                `Counter: ${counter}`
            }
        </Text>
        <Button title={'+'}
          onPress={increaseCounter}
        />
        <Button title={'-'}
           onPress={decreaseCounter}
        />
      </View>
  )
}

const mapStateToProps = (state) => {
    return {
       counter : state.counterReducer.counter
    }
}
const mapDispatchToProps = (dispatch) => {
   return {
       increaseCounter: () => dispatch({type:'INCREASE_COUNTER', a1:10 }),
       decreaseCounter: () => dispatch({type:'DECREASE_COUNTER'})
   }
}


export default connect(mapStateToProps, mapDispatchToProps)(counterScreen);
//connect is higher order component
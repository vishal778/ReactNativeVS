import React, {Component} from 'react';
import {View, Text, TextInput, Button} from 'react-native';
import { connect } from 'react-redux';
import {changeName} from '../actions/userActions';

class Lifecycle extends Component{  //extends React.PureComponent
  constructor(props){
     super(props);
     this.state={
         counter: 0,
         counter2: 7
     }
}

componentDidMount() {
 console.log('****',this.state);
}

shouldComponentUpdate(nextProp, nextState) { //next
    console.log('--nextprops in should update---',nextProp.Name,'==', this.props.Name);
    console.log('--nextstate in should update--',nextState,'==', this.state);
    return (this.state.counter != nextState.counter || this.props.Name != nextProp.Name)
}

componentDidUpdate(prevProp, prevState) {  //previous
    console.log('--nextprops in did update---',prevProp.Name,'==', this.props.Name);
    console.log('--nextstate in did update--',prevState,'==', this.state);
    
}

componentWillUnmount() {
  console.log('bye bye');
}

static getDerivedStateFromProps(nextProp, nextState){  //current props and states
   console.log('--nextprops---',nextProp,'==',nextProp.Name);
   console.log('--nextstate--',nextState,'==');
   if(nextProp.Name=='bishal') 
      return {counter:'5'};  //return updated state
   return null;  //no change in state
    }

render(){
    console.log('nameeee',this.props.Name, this.state.counter, this.state.counter2,'{{}}');
    return(
      <View>
        <Text>{this.props.Name}</Text>
        <TextInput
               placeholder={'Name'}
               value={this.props.Name}
               onChangeText={(nm)=> this.props.changeName(nm)}
           />
            <TextInput 
                placeholder={'Counter'}
                value={this.state.counter}
                onChangeText={(m)=> this.setState({counter:m})}
             />
        </View>
      
    )
}
}

const mapStateToProps = (state) => {
    return {
        email: state.userReducer.email,
        password: state.userReducer.password,
        Name: state.userReducer.Name
    }
}

export default connect(mapStateToProps,{changeName})(Lifecycle);
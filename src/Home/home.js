import React from 'react';
import {View, Text, TextInput} from 'react-native';
import {connect, useDispatch, useSelector} from 'react-redux';
import {changeEmail,changePassword,changeName} from '../actions/userActions';

const Home = ({email,changeEmail,Name, changeName}) => {

  const dispatch = useDispatch();
  const password = useSelector((state)=>state.userReducer.password);

  console.log('name--', Name);
  console.log('pass--', password);
  console.log('email', email);

    return (
        <View>
          <Text>Home screen</Text>
  
          <TextInput
               placeholder={'Name'}
               value={Name}
               onChangeText={(nm)=> changeName(nm)}
           />
           <TextInput
               placeholder={'Email'}
               value={email}
               onChangeText={(em)=> changeEmail(em)}
           />
           <TextInput
             placeholder={'Password'}
             value={password}
             onChangeText={(pwd)=> dispatch(changePassword(pwd))}
           />

        </View>
    )
}

const mapStateToProps = (state) => {
  return {
    email: state.userReducer.email,
    Name: state.userReducer.Name
  }
}

// const mapDispatchToProps = (dispatch, ownProps) => {
//   return {
//     changeNaming: (nm) => dispatch(changeName(nm))  //plain object can be written here also
//   }
// }

// export default connect(mapStateToProps,mapDispatchToProps)(Home);

//--------- Object shorthand method------------//---------------------

// const mapDispatchToProps = (dispatch) => {
//   return {
//     changeEmail,
//     changeName
//   }
// }

// export default connect(mapStateToProps,mapDispatchToProps)(Home);

export default connect(mapStateToProps,{changeEmail,changeName})(Home);
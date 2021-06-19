import React, { useEffect } from 'react';
import {View, Text, TextInput, Button} from 'react-native';
import {connect, useDispatch, useSelector} from 'react-redux';
import {changeEmail,changePassword,changeName,getAPIdata} from '../actions/userActions';

const Home = ({email,changeEmail,Name, changeName, getAPIdata, apiData, isDataLoaded, navigation}) => {

  useEffect(()=> {

   console.log('mounting phase....');

  })

  const dispatch = useDispatch();
  const password = useSelector((state)=>state.userReducer.password);

  console.log('name--', Name);
  console.log('pass--', password);
  console.log('email', email);
  console.log('apidataloaded====',isDataLoaded);

    return (
        <View>
          <Text>Home screen</Text>
  
         <Button title={'Click Me'}
           onPress={()=>navigation.navigate('lifeScreen')}
         />

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

        <Button title={'Get data'}
           onPress={()=> getAPIdata()}
         />
        {
          isDataLoaded && <Text>apiData is loaded</Text>
        }

     <Button title={'Get counter'}
           onPress={()=> navigation.navigate('counterScreen')}
         />
        </View>
    )
}

const mapStateToProps = (state) => {
  return {
    email: state.userReducer.email,
    Name: state.userReducer.Name,
    apiData: state.userReducer.apiData,
    isDataLoaded: state.userReducer.isDataLoaded
  }
}

// const mapDispatchToProps = (dispatch, ownProps) => {
//   return {
//     changeNaming: (nm) => dispatch(changeName(nm))  //plain object can also be written here
//   }                //changeNaming: (nm)=> { dispatch(type:'CHANGE_NAME',payload:nm) }
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

export default connect(mapStateToProps,{changeEmail,changeName,getAPIdata})(Home);
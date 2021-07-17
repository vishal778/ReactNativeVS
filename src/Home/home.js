import React, { useEffect, useState } from 'react';
import {View, Text, TextInput, Button, FlatList} from 'react-native';
import {connect, useDispatch, useSelector} from 'react-redux';
import {changeEmail,changePassword,changeName,getAPIdata} from '../actions/userActions';
import axios from "axios";

const Home = ({email,changeEmail,Name, changeName, getAPIdata, apiData, isDataLoaded, navigation}) => {

  const [listData, setListData] = useState([]);
  const [page, setPage] = useState(0);
  const [listFinished, setListFinished]= useState(false);

  useEffect(()=> {
   console.log('mounting phase....');
  })

  const onLoadMore = () => {
    setPage(page+1);
    getListAPIdata();
    
  }

  const getListAPIdata = async () => {
  
    try {
     
        const response = await axios.get(`https://api.instantwebtools.net/v1/passenger?page=${page}&size=4`);
         console.log('print ho raha hu', response.data, page);
        //  let list = [...listData];
        //  if(page>0){
        //    list =  (list || []).concat(response.data);
        //  }
        //  else {
        //    list = response.data;
        //  }
         //var list = page===0?response.data:listData.concat(response.data);

         //[...listData,...response.data];
         setListData(response.data);
         console.log('listdata==',listData);
        

    } catch(err) {
         console.log(err);
    }
}

  useEffect(()=> {
    getListAPIdata();
  })

  const dispatch = useDispatch();
  const password = useSelector((state)=>state.userReducer.password);

  console.log('name--', Name);
  console.log('pass--', password);
  console.log('email', email);
  console.log('apidataloaded====',isDataLoaded);

    return (
        <View style={{flex:1}}>
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

  <Text>heyyyy</Text>
  {console.log('DATAA--', DATA)}

      <FlatList
        data={DATA}
        keyExtractor={(item)=> item.id}
        renderItem={({item})=>{
          return(
           <View style={{borderWidth:5, paddingTop: 30}}>
             <Text>{item.title}</Text>
             </View>
          )
        } }
        onEndReached={()=> onLoadMore()}
      />
        </View>
    )
}


const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "First Item",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Second Item",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Third Item",
  },
  {
    id: "bd7acbea-c1b1-46c2-aeyd5-3ad53abb28ba",
    title: "First Item",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-yfbd91aa97f63",
    title: "Second Item",
  },
  {
    id: "58694a0f-3da1-47y1f-bd96-145571e29d72",
    title: "Third Item",
  },
  {
    id: "bd7acbea-c1b1-46c2-aed5t-3ad53abb28ba",
    title: "First Item",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8t-fbd91aa97f63",
    title: "Second Item",
  },
  {
    id: "58694a0f-3da1-471f-tbd96-145571e29d72",
    title: "Third Item",
  },
  {
    id: "bd7acbea-c1b1-46c2-aeqd5-3ad53abb28ba",
    title: "First Item",
  },
  {
    id: "3ac68afc-c605-48d3-a4fq8-fbd91aa97f63",
    title: "Second Item",
  },
  {
    id: "58694a0f-q3da1-471f-bd96-145571e29d72",
    title: "Third Item",
  },
];

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
import axios from "axios";

export const getHomeAPIdata = async (item) => {
  
    try {
        console.log('item------------',item);
        const response = await axios.get('http://dummy.restapiexample.com/api/v1/employees');
        return response.data;
    } catch(err) {
        return err;
    }
}

// async getapidata() {}  //for class component
// async function hello() {}  //for functional component
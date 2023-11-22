import axios from "axios";
import Cookies from "js-cookie";

export const authenticate = async (username, password) => {
    const data = {
        username,
        password
    };
    try{
        const response = await axios.post("http://localhost:3000/api/accounts/auth", data, {headers: { 'Content-Type': 'application/json' }}, { withCredentials: true })
        if (response.data.success) {
            const token = response.data.token;
            console.log("token: ", token)
            Cookies.set('token', token)
            return { success: true, token }
        } else {
            console.error('Login failed:', response.data.message);
            return { success: false, message: 'Not Allowed' };
        }
    }catch(error){
        console.error('Login failed:', error);
    }
    
}
export const signUpUser = (username, email, fname, mname, lname, password) =>{
    const data = JSON.stringify({
        username,
        email,
        name:{
            fname,
            mname,
            lname
        },
        password
    });
    try {
        const result = axios.post("http://localhost:3000/api/accounts/register", data, 
        {headers: {'Content-Type': 'application/json'}, withCredentials: true})
        if (result.status === 200) {
            console.log('Registration successful');
        } else {
            console.log('Registration failed');
        }
    } catch (error) {
        console.error(error)
    }
}
export const getUser = () => {
    return axios.get('http://localhost:3000/api/loggeduser', {
      headers: {
        'Content-Type': 'application/json'
      },
      withCredentials: true
    })
    .then(response => {
      console.log('User details:', response.data);
      return response.data;
    })
    .catch(err => {
      console.error('Error getting user details:', err);
      return null;
    });
  }
  
  
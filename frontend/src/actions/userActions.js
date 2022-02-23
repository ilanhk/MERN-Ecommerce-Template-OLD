import axios from 'axios';
import { USER_LOGIN_FAILURE, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS } from "../constants/userConstants";

export const login = (email, password)=> async (dispatch) => {
    try {
        dispatch({
            type: USER_LOGIN_REQUEST  
        });

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }; 
        //important to create a config object becuase when sending data we want to send in the headers a content type of application/json
        //this is also where to pass tokens for protected routes

        const { data } = await axios.post('/api/users/login', { email, password}, config);

        dispatch({
            type: USER_LOGIN_SUCCESS,
            payload: data
        });

        localStorage.setItem('userInfo', JSON.stringify(data)); // save user object to localStorage

    } catch (error) {
         dispatch({
            type: USER_LOGIN_FAILURE, 
            payload: error.response && error.response.data.message 
                ? error.response.data.message : error.message //want to make sure to get the error message
        });
    }
};
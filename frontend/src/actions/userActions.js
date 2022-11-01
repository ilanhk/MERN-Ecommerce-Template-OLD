import axios from 'axios';
import { 
    USER_LOGIN_FAILURE, 
    USER_LOGIN_REQUEST, 
    USER_LOGIN_SUCCESS, 
    USER_LOGOUT,
    USER_REGISTER_REQUEST, 
    USER_REGISTER_SUCCESS, 
    USER_REGISTER_FAILURE,
    USER_DETAILS_REQUEST,
    USER_DETAILS_SUCCESS,
    USER_DETAILS_FAILURE, 
} from "../constants/userConstants";

//LOGIN LOGOUT ACTIONS

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


export const logout = () => (dispatch) => {
    localStorage.removeItem('userInfo');
    dispatch({ type: USER_LOGOUT });
};


//REGISTER ACTION

export const register = (name, email, password)=> async (dispatch) => {
    try {
        dispatch({
            type: USER_REGISTER_REQUEST  
        });

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }; 
   

        const { data } = await axios.post('/api/users', { name, email, password}, config);

        dispatch({
            type: USER_REGISTER_SUCCESS,
            payload: data
        });
        //register the user

        dispatch({
            type: USER_LOGIN_SUCCESS,
            payload: data
        });
        //login user after being registered

        localStorage.setItem('userInfo', JSON.stringify(data)); 

    } catch (error) {
         dispatch({
            type: USER_REGISTER_FAILURE, 
            payload: error.response && error.response.data.message 
                ? error.response.data.message : error.message 
        });
    }
};



//getUserDetails ACTION

export const getUserDetails = (id)=> async (dispatch, getState) => {
    try {
        dispatch({
            type: USER_DETAILS_REQUEST  
        });

        const { userLogin: { userInfo }} = getState(); //destructure userLogin from getstate and destructure userInfo from userLogin

        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            }
        }; 
   

        const { data } = await axios.get(`/api/users/${id}`, config);

        dispatch({
            type: USER_DETAILS_SUCCESS,
            payload: data
        });

    } catch (error) {
         dispatch({
            type: USER_DETAILS_FAILURE, 
            payload: error.response && error.response.data.message 
                ? error.response.data.message : error.message 
        });
    }
};


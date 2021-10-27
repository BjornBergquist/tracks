import AsyncStorage from '@react-native-async-storage/async-storage';
import createDataContext from "./createDataContext";
import TrackerApi from '../api/tracker'
import { navigate } from '../navigationsRef';

const authReducer = (state, action) => {
    switch (action.type){
        case 'add_error':
            return {...state, errorMessage: action.payload}
        case 'signup':
            return { errorMessge: '', token: action.payload}
        default: 
            return state
    }
}

const signup = (dispatch) => async ({email, password}) => {
    // make api request to sign up with that email and password
    try{
        // if we sign up, modify our state, and say that we are authenticated
        const response = await TrackerApi.post('/signup', {email, password})
        await AsyncStorage.setItem('token', response.data.token)
        dispatch({type: 'signup', payload: response.data.token})
        
        navigate('mainFlow', null)
    } catch (err) {
        // if signing up fails, we probably need to reflect an error message
        // somewhere 

        dispatch({type: 'add_error', payload: 'Something went wrong with sign up'})
        console.log(err.response.data)
    }
}


const signin = (dispatch) => {
    return ({email, password}) => {
        // Try to signin
        // Handle success by updating state
        // Handle failure by showing error message (somehow)
    }
}

const signout = (dispatch) => {
    return () => {
        // Somehow signout
    }
}

export const {Provider, Context } = createDataContext(
    authReducer,
    {signup, signin, signout},
    { token: null, errorMessage: ''}
)
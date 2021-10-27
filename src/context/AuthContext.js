import AsyncStorage from '@react-native-async-storage/async-storage';
import createDataContext from "./createDataContext";
import TrackerApi from '../api/tracker'
import { navigate } from '../navigationsRef';

const authReducer = (state, action) => {
    switch (action.type){
        case 'add_error':
            return {...state, errorMessage: action.payload}
        case 'signin':
            return { errorMessge: '', token: action.payload}
        case 'clear_error_message':
            return {...state, errorMessage: ''}
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
        dispatch({type: 'signin', payload: response.data.token})
        
        navigate('TrackList')
    } catch (err) {
        // if signing up fails, we probably need to reflect an error message
        // somewhere 
        dispatch({
            type: 'add_error', 
            payload: 'Something went wrong with sign up'
        })
    }
}

const signin = (dispatch) => async ({email, password}) => {
    // Try to signin
    try {
        // Handle success by updating state
        const response = await TrackerApi.post('/signin', {email, password})
        await AsyncStorage.setItem('token', response.data.token)
        dispatch({type: 'signin', payload: response.data.token})
        navigate('TrackList')
    } catch (err) {
        // Handle failure by showing error message (somehow)
        dispatch({
            type: 'add_error', 
            payload: 'Something went wrong with sign in'
        })
    }
}

const tryLocalSignin = dispatch => async () => {
    const token = await AsyncStorage.getItem('token')
    if (token) {
        dispatch({type: 'signin', payload: token})
        navigate('TrackList')
    } else {
        navigate('loginFlow')
    }

}

const signout = (dispatch) => {
    return () => {
        // Somehow signout
    }
}

const clearErrorMessage = dispatch => () => {
    dispatch({type: 'clear_error_message'})
}

export const {Provider, Context } = createDataContext(
    authReducer,
    {signup, signin, signout, clearErrorMessage, tryLocalSignin},
    { token: null, errorMessage: ''}
)
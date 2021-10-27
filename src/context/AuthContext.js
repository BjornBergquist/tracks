import createDataContext from "./createDataContext";
import TrackerApi from '../api/tracker'

const authReducer = (state, action) => {
    switch (action.type){
        default: 
            return state
    }
}

const signup = (dispatch) => {
    return async ({email, password}) => {
        // make api request to sign up with that email and password
        try{
            const response = await TrackerApi.post('/signup', {email, password})
             // if we sign up, modify our state, and say that we are authenticated
            console.log(response.data)
        } catch (err) {
            // if signing up fails, we probably need to reflect an error message
            // somewhere 
            console.log(err.response.data)
        }
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
    { isSignedIn: false}
)
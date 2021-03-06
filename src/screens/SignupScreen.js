import React, {useContext} from 'react'
import { StyleSheet, View } from 'react-native'
import { NavigationEvents } from 'react-navigation'
import { Context as AuthContext} from '../context/AuthContext'
import AuthForm from '../components/AuthForm'
import NavLink from '../components/NavLink'

const SignupScreen = () => {
  const {state, signup, clearErrorMessage} = useContext(AuthContext)
  
  return (
    <View style={styles.container}>
      <NavigationEvents 
        onWillFocus={clearErrorMessage}
      />
      <AuthForm 
        headerText="Sign Up for Tracker" 
        errorMessage={state.errorMessage} 
        onSubmit={signup} 
        submitButtonText="Sign Up" 
      />
      <NavLink 
        routeName="Signin"
        text="Already have an account? Sign in instead!"
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1, 
    justifyContent: 'center',
    marginBottom: 200,
  },
})

SignupScreen.navigationOptions = () => {
  return {
    headerShown: false,
  };
};

export default SignupScreen
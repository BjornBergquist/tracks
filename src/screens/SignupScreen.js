import React from 'react'
import { StyleSheet, View } from 'react-native'
import {Text, Input, Button} from 'react-native-elements'
import Spacer from '../components/Spacer'

const SignupScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Spacer><Text h3>Sign Up for Tracker</Text></Spacer>
            <Spacer><Input label="Password" /></Spacer>
            <Spacer><Input label="Email"/></Spacer>
            <Spacer><Button title="Sign Up"/></Spacer>
        </View>
    )
}

const styles = StyleSheet.create({
  container:{
    flex: 1, 
    justifyContent: 'center',
    marginBottom: 200,
  }
})

SignupScreen.navigationOptions = () => {
  return {
    headerShown: false,
  };
};

export default SignupScreen
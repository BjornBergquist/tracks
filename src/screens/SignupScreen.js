import React from 'react'
import { StyleSheet } from 'react-native'
import {Text, Input, Button} from 'react-native-elements'
import Spacer from '../components/Spacer'

const SignupScreen = ({navigation}) => {
    return (
        <>
            <Spacer><Text h3>Sign Up for Tracker</Text></Spacer>
            <Spacer><Input label="Password" /></Spacer>
            <Spacer><Input label="Email"/></Spacer>
            <Spacer><Button title="Sign Up"/></Spacer>
        </>
    )
}

export default SignupScreen

const styles = StyleSheet.create({})

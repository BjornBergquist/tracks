import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

const TrackListScreen = ({navigation}) => {
    return (
        <>
            <Text style={{ fontSize: 48}}>TrackListScreen</Text>
            <Button title="Go to track detail" onPress={() => navigation.navigate('TrackDetail')}/>
        </>
    )
}

export default TrackListScreen

const styles = StyleSheet.create({})

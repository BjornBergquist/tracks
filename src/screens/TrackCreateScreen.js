import React,{useEffect, useState} from 'react'
import { StyleSheet } from 'react-native'
import { Text } from 'react-native-elements'
import { requestForegroundPermissionsAsync } from 'expo-location'; 
import Map from '../components/Map'
import { SafeAreaView } from 'react-navigation'

const TrackCreateScreen = () => {
    const [err, setErr] = useState(null)
    
    const startWatching = async () => {
        try {
          const { granted } = await requestForegroundPermissionsAsync()
          if (!granted) {
            throw new Error('Location permission not granted')
          }
        } catch (e) {
            setErr(e)
        }
    }

    useEffect(() => {
        startWatching()
    }, [])

    return (
        <SafeAreaView forceInset={{top: 'always'}}>
            <Text h2>Create a Track</Text>
            <Map />
            {err ? <Text>Plesae enable location services</Text> : null}
        </SafeAreaView>
    )
}

export default TrackCreateScreen

const styles = StyleSheet.create({})



/*
const { granted } = await requestForegroundPermissionsAsync();

Change from this

  const startWatching = async () => {
    try {
      await requestPermissionsAsync();
    } catch (e) {
      setErr(e);
    }
  };
to this:

 
*/
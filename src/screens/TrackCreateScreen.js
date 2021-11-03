import '../_mockLocation'
import React,{useContext} from 'react'
import { StyleSheet } from 'react-native'
import { Text } from 'react-native-elements'
import Map from '../components/Map'
import { SafeAreaView, withNavigationFocus } from 'react-navigation'
import {Context as LocationContext} from '../context/LocationContext'
import useLocation from '../hooks/useLocation'

const TrackCreateScreen = ({ isFocused}) => {
    const {addLocation} = useContext(LocationContext) 
    
    const [err] = useLocation(isFocused, addLocation)

    return (
        <SafeAreaView forceInset={{top: 'always'}}>
            <Text h2>Create a Track</Text>
            <Map />
            {err ? <Text>Plesae enable location services</Text> : null}
        </SafeAreaView>
    )
}

export default withNavigationFocus(TrackCreateScreen)

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
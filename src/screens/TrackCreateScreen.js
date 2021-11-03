import '../_mockLocation'
import React,{useContext, useCallback} from 'react'
import { StyleSheet } from 'react-native'
import { Text } from 'react-native-elements'
import Map from '../components/Map'
import { SafeAreaView, withNavigationFocus } from 'react-navigation'
import {Context as LocationContext} from '../context/LocationContext'
import useLocation from '../hooks/useLocation'
import TrackForm from '../components/TrackForm'

const TrackCreateScreen = ({ isFocused}) => {
    const {state, addLocation} = useContext(LocationContext) 
    const callback = useCallback((location) => {
      addLocation(location, state.recording)
    }, [state.recording])
    const [err] = useLocation(isFocused, callback)

    return (
        <SafeAreaView forceInset={{top: 'always'}}>
            <Text h2>Create a Track</Text>
            <Map />
            {err ? <Text>Plesae enable location services</Text> : null}
            <TrackForm />
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
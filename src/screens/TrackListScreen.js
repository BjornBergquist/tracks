import React, {useContext} from 'react'
import { StyleSheet, Text, FlatList, TouchableOpacity } from 'react-native'
import { NavigationEvents } from 'react-navigation'
import { Context as TrackContext } from '../context/TrackContext'
import { ListItem } from 'react-native-elements'

const TrackListScreen = ({navigation}) => {
    const {state, fetchTracks} = useContext(TrackContext)

    return (
        <>
            <NavigationEvents onWillFocus={ fetchTracks } />
            <Text style={{ fontSize: 48}}>TrackListScreen</Text>
            <FlatList
                data={state}
                keyExtractor={item => item._id}
                renderItem={({ item }) => {
                    return (
                      <TouchableOpacity>
                        <ListItem>
                          <ListItem.Content>
                            <ListItem.Title>{item.name}</ListItem.Title>
                          </ListItem.Content>
                          <ListItem.Chevron />
                        </ListItem>
                      </TouchableOpacity>
                    );
                  }}
            />
        </>
    )
}

export default TrackListScreen

const styles = StyleSheet.create({})

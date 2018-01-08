import React, {Component} from 'react';
import MapView from 'react-native-maps';
import { View } from 'react-native';
import {Header} from './common';

class App extends Component {

    render() {
        return (
            <View style={{flex:1}}>
                <Header headerText="PoGoMap"/>
                <MapView
                    style={{flex:1,alignItems:'center',justifyContent:'center',alignSelf:'stretch'}}
                    initialRegion={{
                        latitude: 37.78825,
                        longitude: -122.4324,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                    }}
                />
            </View>
        );
    };
}

export default App;
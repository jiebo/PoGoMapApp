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
                        latitude: 1.3521,
                        longitude: 103.8198,
                        latitudeDelta: 0.3688,
                        longitudeDelta: 0.1684,
                    }}
                />
            </View>
        );
    };
}

export default App;
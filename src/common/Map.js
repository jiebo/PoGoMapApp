import React from 'react';
import MapView from 'react-native-maps';


const Map = (props) => {
    const {mapStyle} = styles;
    return (
        <MapView
            style={mapStyle}
            initialRegion={{
                latitude: 1.3521,
                longitude: 103.8198,
                latitudeDelta: 0.3688,
                longitudeDelta: 0.1684,
            }}
        >
            {props.children}
        </MapView>
    );
};

const styles = {
    mapStyle: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'stretch'
    }
};

export default Map;
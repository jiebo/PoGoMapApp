import React from 'react'
import Marker from 'react-native-maps'

const PokemonMarker = (props) => {

    return (
        <Marker
            coordinate={{
                latitude: 1.39185941,
                longitude: 103.87756316,
            }}
        />
    );
};

export {PokemonMarker};
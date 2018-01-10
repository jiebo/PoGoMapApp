import React from 'react'
import MapView from 'react-native-maps'

const PokemonMarker = (props) => {
    console.log("PokemonMarker");
    console.log(props.pokemon);
    return (
        <MapView.Marker
            coordinate={{
                latitude: 1.39185941,
                longitude: 103.87756316,
            }}
            title="something"
        />
    );
};

export default PokemonMarker;
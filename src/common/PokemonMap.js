import React, {Component} from 'react';
import {Map} from "./Map";
import {PokemonMarker} from "./PokemonMarker";

class PokemonMap extends Component {

    removeMarker() {
    }

    plotMarkers(pokemons) {
        console.log("Length of array is " + pokemons.length);
        console.log(pokemons[0]);
        return (pokemons.map(pokemon =>
            <PokemonMarker
                key={pokemon.lat+pokemon.lng}
                pokemon={pokemon}
                removeMarkerMethod={() => this.removeMarker()}/>
        ));
    }

    render() {

        const {pokemons} = this.props;
        return (
            <Map>
                {this.plotMarkers(pokemons)}
            </Map>
        );
    }
}

export {PokemonMap}
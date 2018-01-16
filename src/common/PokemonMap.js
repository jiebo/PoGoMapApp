import React, {Component} from 'react';
import {Map} from "./Map";
import {PokemonMarker} from "./PokemonMarker";

class PokemonMap extends Component {

    plotMarkers(pokemons) {
        console.log("Length of array is " + pokemons.length);
        return (pokemons.map(pokemon =>
            <PokemonMarker key={pokemon.lat+pokemon.lng} pokemon={pokemon}/>
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
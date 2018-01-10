import React, {Component} from 'react';
import Map from "./Map";
import PokemonMarker from "./PokemonMarker";

class PokemonMap extends Component {

    plotMarkers(pokemons) {
        console.log("Length of array is " + pokemons.length);
        pokemons.map(pokemon =>
            console.log(pokemon.lat)
        );
        // pokemons.map(pokemon => {
            return (
                <PokemonMarker
                    pokemon="something"/>
            );
        // });
    }

    render() {

        const {pokemons} = this.props;
        return (
            <Map>
                <PokemonMarker
                pokemon={"something"}/>
            </Map>
        );
    }
}

export {PokemonMap}
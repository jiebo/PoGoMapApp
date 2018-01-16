import React, {Component} from 'react';
import {AppState, View} from 'react-native';
import {Header, PokemonMap} from './common';
import ActionButton from 'react-native-action-button';

class App extends Component {

    state = {
        pokemons: [],
        date: 0,
    };

    componentWillMount() {
        console.log(this.state.date);
        this.fetchSPMData();
    }

    render() {
        const {containerStyle} = styles;

        return (
            <View style={containerStyle}>
                <Header headerText="PoGoMap"/>
                <PokemonMap pokemons={this.state.pokemons}/>
                <ActionButton
                    buttonColor="rgba(231,76,60,1)"
                    useNativeFeedback={false}
                    onPress={() => this.fetchSPMData()}
                />
            </View>
        );
    };

    fetchSPMData() {
        console.log("Date is " + this.state.date);
        let dateSince = new Date().getTime() / 1000 - 90;
        fetch('https://sgpokemap.com/query2.php?since=' + dateSince + '&mons=65,68,76,112,113,131,143,147,148,149,181,196,197,201,212,214,233,237,242,247,248,253,254,256,257,259,260,266,267,269,270,271,272,274,275,280,282,287,288,289,306,310,319,320,321,334,335,340,341,342,348,349,350,360,362,365,369,370,373,376', {
            method: 'GET',
            headers: {
                Referer: 'https://sgpokemap.com',
                'Content-Type': 'application/json',
            }
        })
            .then((response) => response.json())
            .then(responseJson => {
                var newPokemons = this.state.pokemons;
                this.setState(
                    {
                        pokemons: responseJson['pokemons'],
                        date: new Date().getTime()
                    }
                );
            });
    }
}

const styles = {
    containerStyle: {
        flex: 1
    }
};

export default App;
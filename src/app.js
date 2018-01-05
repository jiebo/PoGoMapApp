import React, {Component} from 'react'
import { View } from 'react-native';
import {Header} from './common';

class App extends Component {

    render() {
        return (
            <View>
                <Header headerText="PoGoMap"/>
            </View>
        );
    };
}

export default App;
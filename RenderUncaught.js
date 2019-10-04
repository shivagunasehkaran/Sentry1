import React from 'react';
import {Button, Text, View} from 'react-native';

export default class RenderUncaught extends React.Component {
    state = {
        flag: false,
    };

    render() {
        const {flag} = this.state;
        return (
            <View>
                <Button
                    onPress={this.handleOnPress}
                    title="Render Uncaught"
                    color="#000000"
                />
                <Text>{flag && <div>{flag.busted.bogusUNCAUGHT}</div>}</Text>
            </View>
        );
    }

    handleOnPress = () => {
        this.setState({
            flag: true,
        });
    };
}

import React from 'react';
import {Button, Text, View} from 'react-native';

export default class RenderCaught extends React.Component {
    state = {
        flag: false,
    };

    render() {
        const {flag} = this.state;
        return (
            <View>
                <Button
                    onPress={this.handleOnPress}
                    title="Render Caught"
                    color="#000000"
                />
                <Text>{flag && <div>{flag.busted.bogus}</div>}</Text>
            </View>
        );
    }

    handleOnPress = () => {
        this.setState({
            flag: true,
        });
    };
}

import React from 'react';
import {Button} from 'react-native';
import Sentry from 'react-native-sentry';

export default class Caught extends React.Component {

    handleOnPress = () => {
        try {
            throw new Error('Caught');
        } catch (err) {
            Sentry.captureException(err);
        }
    };

    render() {
        return (
            <Button
                onPress={this.handleOnPress}
                title="Caught"
                color="#00FF00"
            />
        );
    }
}

import React from 'react';
import {Button} from 'react-native';
import Sentry from 'react-native-sentry';

export default class Uncaught extends React.Component {
    constructor() {
        super();
        /* to get the event_id of last exception */
        Sentry.setEventSentSuccessfully(event => {
            this.setState({text: JSON.stringify(event)});
        });
    }

    handleOnPress = () => {
        throw new Error('Uncaught');
    };

    render() {
        return (
            <Button
                onPress={this.handleOnPress}
                title="Uncaught"
                color="#FF0000"
                accessibilityLabel="Learn more about this red button"
            />
        );
    }
}

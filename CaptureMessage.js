import React from 'react';
import {Button} from 'react-native';
import Sentry from 'react-native-sentry';

export default class SetVersion extends React.Component {

    _sendMessage() {
        /* to see log messages with some severity level */
        Sentry.captureMessage('TEST message', {
            level: SentrySeverity.Warning,
        });
    }

    render() {
        return (
            <Button
                style={{fontSize: 20, color: 'green'}}
                styleDisabled={{color: 'red'}}
                onPress={() => this._sendMessage()}
                accessibilityLabel={'send message'}
                title="send message"
            />
        );
    }
}

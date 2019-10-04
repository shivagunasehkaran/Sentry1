import React from 'react';
import {Button, Text, View} from 'react-native';
import Sentry from 'react-native-sentry';

export default class SetVersion extends React.Component {

    /* to set sentry version to see in the sentry dashboard */
    _setVersion() {
        Sentry.setVersion('1.3');
    }

    render() {
        return (
            <Button
                style={{fontSize: 20, color: 'green'}}
                styleDisabled={{color: 'red'}}
                onPress={() => this._setVersion()}
                accessibilityLabel={'set version'}
                title="Set version"
            />
        );
    }
}

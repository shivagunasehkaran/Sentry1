import React from 'react';
import {Button} from 'react-native';
import Sentry from 'react-native-sentry';

export default class SetRelease extends React.Component {

    /* to set sentry release version to identify the version */
    _setRelease() {
        Sentry.setRelease('com.hellosentry-1.1');
    }

    render() {
        return (
            <Button
                style={{fontSize: 20, color: 'green'}}
                styleDisabled={{color: 'red'}}
                onPress={() => this._setRelease()}
                accessibilityLabel={'set release'}
                title="Set release"
            />
        );
    }
}

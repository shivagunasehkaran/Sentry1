import React from 'react';
import {Button} from 'react-native';
import Sentry from 'react-native-sentry';

export default class NativeCrash extends React.Component {

    /* to identify the native crash */
    _nativeCrash() {
        Sentry.nativeCrash();
    }

    render() {
        return (
            <Button
                style={{fontSize: 20, color: 'green'}}
                styleDisabled={{color: 'red'}}
                onPress={() => this._nativeCrash()}
                accessibilityLabel={'native crash'}
                title="native crash!"
            />
        );
    }
}

import React from 'react';
import {Button} from 'react-native';
import Sentry from 'react-native-sentry';

export default class SetDist extends React.Component {

    /* to identify the build number */
    _setDist() {
        Sentry.setDist('1');
    }

    render() {
        return (
            <Button
                style={{fontSize: 20, color: 'green'}}
                styleDisabled={{color: 'red'}}
                onPress={() => this._setDist()}
                accessibilityLabel={'set dist'}
                title="Set dist"
            />
        );
    }
}

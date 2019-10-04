import React from 'react';
import {Button} from 'react-native';

export default class RejectPromise extends React.Component {

    _rejectPromise() {
        Promise.reject('Boom promise');
    }

    render() {
        return (
            <Button
                style={{fontSize: 20, color: 'green'}}
                styleDisabled={{color: 'red'}}
                onPress={() => this._rejectPromise()}
                accessibilityLabel={'reject promise'}
                title="reject promise"
            />
        );
    }
}

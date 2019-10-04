import React from 'react';
import {Button, NativeModules} from 'react-native';

export default class AndroidNativeCrash extends React.Component {
    render() {
        return (
            <Button
                onPress={this.handleOnPress}
                title="AndroidNativeCrash"
                color="#FF0000"
            />
        );
    }

    handleOnPress = () => {
        NativeModules.Sentry.getNativecrash();
    };
}

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
    StyleSheet,
    View,
} from 'react-native';

import Caught from './Caught';
import Uncaught from './Uncaught';
import ErrorBoundary from './ErrorBoundary';
import RenderCaught from './RenderCaught';
import RenderUncaught from './RenderUncaught';
import AndroidNativeCrash from './AndroidNativeCrash';
import {Sentry} from 'react-native-sentry';
import NativeCrash from './NativeCrash';
import SetVersion from './SetVersion';
import SetRelease from './SetRelease';
import SetDist from './SetDist';
import CaptureMessage from './CaptureMessage';
import RejectPromise from './RejectPromise';

/* to register sentry with token & project */
Sentry.config('https://e9663c04a6f54e33aafab0e9d2125883@sentry.io/1759546').install();

/* to get the logs with extraContext */
Sentry.setExtraContext({
    a_thing: 3,
    some_things: {green: 'red'},
    foobar: ['a', 'b', 'c'],
    react: true,
    float: 2.43,
});

/* to set build environment in sentry */
Sentry.setTagsContext({
    environment: 'production',
    react: true,
});

/* to see logged in user context */
Sentry.setUserContext({
    email: 'shiva@apple.com',
    userID: '12341',
    username: 'shiva',
    extra: {
        is_admin: false,
    },
});

/* to see the detailed logs prior to an issue (rich structured data) */
Sentry.captureBreadcrumb({
    message: 'Captured the message',
    category: 'action',
    data: {
        isbn: '978-1617290541',
        cartSize: '3',
    },
});

export default class App extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Caught />
                <Uncaught />
                <CaptureMessage />
                <SetVersion />
                <SetRelease />
                <SetDist />
                <RejectPromise />
                <NativeCrash />
                <ErrorBoundary>
                    <RenderCaught />
                </ErrorBoundary>
                <RenderUncaught />
                <AndroidNativeCrash />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

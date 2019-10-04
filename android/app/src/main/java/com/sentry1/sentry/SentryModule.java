package com.sentry1.sentry;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

import io.sentry.Sentry;

public class SentryModule extends ReactContextBaseJavaModule {

    //constructor
    public SentryModule(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    //Mandatory function getName that specifies the module name
    @Override
    public String getName() {
        return "Sentry";
    }

    @ReactMethod
    public void getNativecrash() {
        throw new RuntimeException("hehe");
        //Sentry.capture("TEST - Sentry Native Crashes");
    }
}
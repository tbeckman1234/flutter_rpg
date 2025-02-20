// File generated by FlutterFire CLI.
// ignore_for_file: type=lint
import 'package:firebase_core/firebase_core.dart' show FirebaseOptions;
import 'package:flutter/foundation.dart'
    show defaultTargetPlatform, kIsWeb, TargetPlatform;

class DefaultFirebaseOptions {
  static FirebaseOptions get currentPlatform {
    if (kIsWeb) {
      return web;
    }
    switch (defaultTargetPlatform) {
      case TargetPlatform.android:
        return android;
      case TargetPlatform.iOS:
        return ios;
      case TargetPlatform.macOS:
        return macos;
      case TargetPlatform.windows:
        return windows;
      case TargetPlatform.linux:
        throw UnsupportedError(
          'DefaultFirebaseOptions have not been configured for linux - '
          'you can reconfigure this by running the FlutterFire CLI again.',
        );
      default:
        throw UnsupportedError(
          'DefaultFirebaseOptions are not supported for this platform.',
        );
    }
  }

  static const FirebaseOptions android = FirebaseOptions(
    apiKey: 'AIzaSyCMK5ma0bSlbFnKiRS6uIl0_ANva_eFT_A',
    appId: '1:129266583956:android:71af217a5cf7fa0a126781',
    messagingSenderId: '129266583956',
    projectId: 'flutter-rpg-93b5d',
    storageBucket: 'flutter-rpg-93b5d.appspot.com',
  );

  static const FirebaseOptions ios = FirebaseOptions(
    apiKey: 'AIzaSyBSzdWoLdQ6ZuwbL0eiRC3kYnGKcGE2428',
    appId: '1:129266583956:ios:1fcfbc4491a09a0c126781',
    messagingSenderId: '129266583956',
    projectId: 'flutter-rpg-93b5d',
    storageBucket: 'flutter-rpg-93b5d.appspot.com',
    iosBundleId: 'com.example.flutterRpg',
  );

  static const FirebaseOptions windows = FirebaseOptions(
    apiKey: 'AIzaSyA06tZxoVHrU6Gu6YD1nCYsTB5sGcbHPLE',
    appId: '1:129266583956:web:a2bf03b0a7ec593b126781',
    messagingSenderId: '129266583956',
    projectId: 'flutter-rpg-93b5d',
    authDomain: 'flutter-rpg-93b5d.firebaseapp.com',
    storageBucket: 'flutter-rpg-93b5d.appspot.com',
  );

  static const FirebaseOptions web = FirebaseOptions(
    apiKey: 'AIzaSyA06tZxoVHrU6Gu6YD1nCYsTB5sGcbHPLE',
    appId: '1:129266583956:web:ddecbc421ad48149126781',
    messagingSenderId: '129266583956',
    projectId: 'flutter-rpg-93b5d',
    authDomain: 'flutter-rpg-93b5d.firebaseapp.com',
    storageBucket: 'flutter-rpg-93b5d.appspot.com',
  );

  static const FirebaseOptions macos = FirebaseOptions(
    apiKey: 'AIzaSyBSzdWoLdQ6ZuwbL0eiRC3kYnGKcGE2428',
    appId: '1:129266583956:ios:1fcfbc4491a09a0c126781',
    messagingSenderId: '129266583956',
    projectId: 'flutter-rpg-93b5d',
    storageBucket: 'flutter-rpg-93b5d.appspot.com',
    iosBundleId: 'com.example.flutterRpg',
  );

}
import 'dotenv/config';

export default {
  expo: {
    name: 'firebase-demo',
    slug: 'firebase-demo',
    version: '1.0.0',
    orientation: 'portrait',
    icon: './assets/icon.png',
    userInterfaceStyle: 'light',
    splash: {
      image: './assets/splash.png',
      resizeMode: 'contain',
      backgroundColor: '#ffffff',
    },
    assetBundlePatterns: ['**/*'],
    ios: {
      supportsTablet: true,
      infoPlist: {
        NSPhotoLibraryUsageDescription:
          'The app accesses your photos to let you share them with your friends.',
        NSCameraUsageDescription:
          'The app accesses your photos to let you share them with your friends.',
      },
    },
    android: {
      adaptiveIcon: {
        foregroundImage: './assets/adaptive-icon.png',
        backgroundColor: '#ffffff',
      },
      permissions: ["CAMERA", "RECORD_AUDIO"]
    },
    web: {
      favicon: './assets/favicon.png',
    },
    plugins: [
      [
        'expo-image-picker',
        {
          photosPermission: 'The app accesses your photos to let you share them with your friends.',
          cameraPermission: 'The app accesses your photos to let you share them with your friends.',
        },
      ],
    ],
    extra: {
      firebaseAPI: process.env.FIREBASE_API_KEY,
      firebaseAuth: process.env.FIREBASE_AUTH_DOMAIN,
      firebaseProjectId: process.env.FIREBASE_PROJECT_ID,
      firebaseStorage: process.env.FIREBASE_STORAGE_BUCKET,
      firebaseMessaging: process.env.FIREBASE_MESSAGING_SENDER_ID,
      firebaseAppId: process.env.FIREBASE_APP_ID,
    },
  },
};

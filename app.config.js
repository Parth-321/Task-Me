import 'dotenv/config';

export default {
  "expo": {
    "name": "Task-Me",
    "slug": "Task-Me",
    "version": "1.0.0",
    "orientation": "portrait",
    "icon": "./assets/icon.png",
    "userInterfaceStyle": "light",
    "splash": {
      "image": "./assets/splash.png",
      "resizeMode": "contain",
      "backgroundColor": "#ffffff"
    },
    "assetBundlePatterns": [
      "**/*"
    ],
    "ios": {
      "supportsTablet": true
    },
    "android": {
      "adaptiveIcon": {
        "package": "com.Task-Me",
        "foregroundImage": "./assets/adaptive-icon.png",
        "backgroundColor": "#ffffff",
      }
    },
    "web": {
      "favicon": "./assets/favicon.png"
    },
    extra: {
      apiKey: "AIzaSyAFuY9paoVyQ8EWmvaz_ZepzQIF_vmJiHg",
      authDomain: "task-me-59351.firebaseapp.com",
      projectId: "task-me-59351",
      storageBucket: "task-me-59351.appspot.com",
      messagingSenderId: "733660559350",
      appId: "1:733660559350:web:84a25f524e320a8f2139d7",
      measurementId: "G-DLFPE599R7"
    },
    "extra": {
      "eas": {
        "projectId": "ff827e6d-8a0c-41f3-a8b2-ca6c1ed8b578"
      }
    }
  }
}

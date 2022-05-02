// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: true,
  appName: 'jetport',
 apiUrl: "https://appjetport.uc.r.appspot.com",
 //apiUrl: "http://localhost:3333",
  firebase: {
    apiKey: "AIzaSyAyuwOuzS7zEPRGYazFkSg0kkcUdJC3rD0",
    authDomain: "appjetport.firebaseapp.com",
    projectId: "appjetport",
    storageBucket: "appjetport.appspot.com",
    messagingSenderId: "1012648687100",
    appId: "1:1012648687100:web:1d92a9978bd6963eadee79",
    measurementId: "G-KKPVFVGG77"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.

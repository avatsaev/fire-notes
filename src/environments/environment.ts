// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyA9KjnUMg5hK3mg9Za9rAhYLH6KN8oJumY',
    authDomain: 'intro-angular-demo.firebaseapp.com',
    databaseURL: 'https://intro-angular-demo.firebaseio.com',
    projectId: 'intro-angular-demo',
    storageBucket: 'intro-angular-demo.appspot.com',
    messagingSenderId: '524282417700'
  }
};

import * as firebase from 'firebase/app';
import 'firebase/firestore';

const config = {
  apiKey: 'AIzaSyAHNjzNnFlwR9uBpePAG_uXMd94d6Cn4SM',
  authDomain: 'my-brew-notes.firebaseapp.com',
  databaseURL: 'https://my-brew-notes.firebaseio.com',
  projectId: 'my-brew-notes',
  storageBucket: 'my-brew-notes.appspot.com',
  messagingSenderId: '143963304983',
};

firebase.initializeApp(config);
const firestore = firebase.firestore();
const settings = { timestampsInSnapshots: true };
firestore.settings(settings);

export default firestore;

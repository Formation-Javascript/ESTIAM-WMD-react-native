import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';


const firebaseConfig = {
  apiKey: 'AIzaSyB_W8qBsFmTLDHvj4ghYZy8T48qIucHE6M',
  authDomain: 'movie-app-36bb8.firebaseapp.com',
  projectId: 'movie-app-36bb8',
  storageBucket: 'movie-app-36bb8.appspot.com',
  messagingSenderId: '622242432034',
  appId: '1:622242432034:web:e1601a741b8c9eef9bf67b',
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export {auth}

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { app } from "../firebase/firebase-config";

const auth = getAuth(app);

class FirebaseServices {
  login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  signup =  (email, password) => {
    return  createUserWithEmailAndPassword(auth, email, password);
  };

  logout = () => {
    signOut(auth);

  };

  stateChanged = (user) => {

    return onAuthStateChanged(auth,user);
  };

}
export default new FirebaseServices();

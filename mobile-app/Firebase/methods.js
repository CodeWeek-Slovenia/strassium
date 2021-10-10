import * as Firebase from "firebase";
import {Alert} from "react-native";
import firebase from "./firebase";


export async function registration(email, password, fullName) {
  try {
    alert('We have sent a vertification email on ' + email + ' email address. Please vertify your email.')
    const userCreds = await firebase.auth().createUserWithEmailAndPassword(email, password);
    await userCreds.user.sendEmailVerification();
    await userCreds.user.updateProfile({displayName:fullName});
  } catch (err) {
    Alert.alert("Registration failed!", err.message);
  }
}

export async function signIn(email, password) {
  try {
   await firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((authResult) => {
        console.log(authResult);
        if(authResult.user.emailVerified == false){
          alert('Please vertify your email and login again.');
          loggingOut();
        }
      })
  } catch (err) {
    Alert.alert("Login failed!", err.message);
  }
}

export async function forgotPassword(email) {
  try {
    await firebase.auth().sendPasswordResetEmail(email);
    alert('We have sent a password reset email on ' + email + ' email address.')
  } catch (err) {
    Alert.alert("Password reset failed!", err.message);
  }
}

export async function loggingOut() {
  try {
    await firebase.auth().signOut();
    console.log('logged out!')
  } catch (err) {
    Alert.alert('Logout failed!', err.message);
  }
}
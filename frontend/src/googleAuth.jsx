import { GoogleAuthProvider, signInWithPopup, signInWithRedirect } from 'firebase/auth';
import { auth } from '../firebaseConfig';

const googleProvider = new GoogleAuthProvider();

export const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    return result.user; // User information
  } catch (error) {
    console.error('Google Sign-In error:', error);
    throw error; // Throw the error to handle in the component
  }
};

export const signUpWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    return result.user; // User information
  } catch (error) {
    console.error('Google Sign-Up error:', error);
    throw error; // Throw the error to handle in the component
  }
};

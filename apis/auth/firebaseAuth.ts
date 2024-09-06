import { auth } from "@/connections/firebaseConfig";
import { message } from "antd";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
  sendEmailVerification,
} from "firebase/auth";

// Function to handle user login
export const loginUser = async (email: string, password: string) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    message.success("Login successful!");
    return userCredential.user;
  } catch (error) {
    message.error("Invalid credential.");
  }
};

// Function to handle google login
export const googleLogin = async () => {
  const provider = new GoogleAuthProvider();
  try {
    await signInWithPopup(auth, provider);
    message.success("Google login successful!");
  } catch (error) {
    console.error("Google login failed:", error);
    message.error("Google login failed. Please try again.");
  }
};

// Function to handle user registration
export const registerUser = async (email: string, password: string) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;

    // Send verification email
    await sendEmailVerification(user);
    message.success(
      "Registration successful! Please check your email to verify your account."
    );

    return user;
  } catch (error: any) {
    if (error.code === "auth/email-already-in-use") {
      message.error("This email already exists.");
    } else {
      message.error("Registration failed. Please try again.");
    }
  }
};

// Function to handle user logOut
export const logOut = async () => {
  try {
    await signOut(auth);
    message.success("Logout successful!");
  } catch (error) {
    message.error("Logout failed. Please try again.");
  }
};

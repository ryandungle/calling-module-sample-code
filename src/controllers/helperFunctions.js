import { collection, getDocs } from "firebase/firestore/lite";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { db, auth } from "./firebaseConfig";
import axios from "axios";

export const api = () => {
  const url =
    process.env.NODE_ENV === "development"
      ? `${process.env.REACT_APP_FIREBASE_FUNCTIONS_URL_DEV}`
      : `${process.env.REACT_APP_FIREBASE_FUNCTIONS_URL_PROD}`;
  return axios.create({
    baseURL: url,
  });
};

export async function getUsers() {
  const { accessToken } = auth.currentUser;
  const { data } = await api().get("/user/getusers", {
    headers: {
      authorization: accessToken,
    },
  });
  return data;
}

export async function getClinics() {
  const { accessToken } = auth.currentUser;
  const { data } = await api().get("/clinic/getclinics", {
    headers: {
      authorization: accessToken,
    },
  });
  return data;
}

export const createUser = async (email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    return userCredential.user;
  } catch (error) {
    const { code, message } = error;
    return { code, message };
  }
};

export const signIn = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    return userCredential.user;
  } catch (error) {
    const { code, message } = error;
    return { code, message };
  }
};

export const signOutUser = async () => {
  await signOut(auth);
};

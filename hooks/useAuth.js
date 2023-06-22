import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useMemo,
} from "react";
import * as WebBrowser from "expo-web-browser";
import * as Google from "expo-auth-session/providers/google";
// import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithCredential,
  signOut,
} from "@firebase/auth";
// import { WEB_CLIENT_ID, IOS_CLIENT_ID, ANDROID_CLIENT_ID } from "@env";
import { auth } from "../firebase";

const AuthContext = createContext({});
WebBrowser.maybeCompleteAuthSession();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [loadingInitial, setLoadingInitial] = useState(true);
  const [loading, setLoading] = useState(false);
  const [request, response, promptAsync] = Google.useAuthRequest(
    {
      expoClientId:
        "811978311920-ibgiqg01k76k4vif3vmr1u5soub7lejt.apps.googleusercontent.com",
      iosClientId:
        "811978311920-gahfcrf6l6rmuhurjilpttndfk8f28gm.apps.googleusercontent.com",
      androidClientId:
        "811978311920-2ga3psnvrbhd1sv5qe72qj6gts8js6q0.apps.googleusercontent.com",
    },
    {
      useProxy: true,
    }
  );

  useEffect(
    () =>
      onAuthStateChanged(auth, (user) => {
        if (user) {
          setUser(user);
        } else {
          setUser(null);
        }
        setLoading(false);
        setLoadingInitial(false);
      }),

    []
  );
  useEffect(() => {
    signInWithGoogle();
  }, [response]);

  const logout = () => {
    setLoading(true);
    signOut(auth)
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  };

  const signInWithGoogle = async () => {
    setLoading(true);
    try {
      if (response?.type === "success") {
        const accessToken = response.authentication.accessToken;
        const idToken = null;
        const credential = GoogleAuthProvider.credential(idToken, accessToken);
        setLoading(true);
        await signInWithCredential(auth, credential);
      }
      setLoading(false);
      return Promise.reject();
    } catch (err) {
      console.error(err);
      setError(err);
      setLoading(false);
    }
  };

  const memoedValue = useMemo(
    () => ({
      user,
      promptAsync,
      request,
      loading,
      error,
      signInWithGoogle,
      logout,
    }),
    [user, loading, error, request]
  );

  return (
    <AuthContext.Provider value={memoedValue}>
      {!loadingInitial && children}
    </AuthContext.Provider>
  );
};

export default function useAuth() {
  return useContext(AuthContext);
}

import {
  getAuth,
  signInWithPopup,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  updateProfile,
  signOut,
} from "firebase/auth";
import { useEffect, useState } from "react";
import initializeFirebase from "../Firebase/Firebase.init";
initializeFirebase();
const auth = getAuth();
const googleProvider = new GoogleAuthProvider();
const useFirebase = () => {
  const [user, setUser] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [adminData, setAdminData] = useState({});
  const [isAdmin, setIsAdmin] = useState(false);
  useEffect(() => {
    fetch(`https://polar-dawn-97020.herokuapp.com/register/${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setAdminData(data[0]);
        if (userData?.role === "admin") {
          setIsAdmin(true);
        }
      });
  }, [adminData]);

  const UserInfo = adminData;
  const userData = UserInfo;

  const newRegister = (email, password, name) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        // Signed in
        const user = result.user;
        const newUser = { email, displayName: name };
        user.displayName = name;
        setUser(newUser);
        updateProfile(auth.currentUser, {
          displayName: name,
        }).catch((error) => {});
        // setError("");
        // const locationUri = location?.state?.from || "/";
        // history.replace(locationUri);
        setUser(newUser);
      })
      .catch((error) => {
        const errorMessage = error.message;
      })
      .finally(() => {
        setIsLoading(false);
      });
  };
  const loginUser = (email, password, locationUri, history) => {
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        // Signed in
        const user = result.user;
        setUser(user);
        history.replace(locationUri);
      })
      .catch((error) => {
        const errorMessage = error.message;
      })
      .finally(() => {
        setIsLoading(false);
      });
  };
  const googleSignIn = (name, email) => {
    setIsLoading(true);
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        setUser(user);
      })
      .catch((error) => {
        const errorMessage = error.message;
      })
      .finally(() => {
        setIsLoading(false);
      });
  };
  const logOut = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => {
        // empty user
        setUser({});
      })
      .catch((error) => {
        // setError
        // setError(error.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const saveUser = (newUser, method) => {
    fetch("https://polar-dawn-97020.herokuapp.com/register", {
      method: method,
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newUser),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert("user registered succcessfully");
        }
      });
  };
  // for supply authentication  above place
  useEffect(() => {
    setIsLoading(true);
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setIsLoading(false);
    });

    return () => unsubscribe;
  }, []);
  return {
    user,
    isLoading,
    isAdmin,
    adminData,
    googleSignIn,
    newRegister,
    loginUser,
    logOut,
    saveUser,
    setIsAdmin,
  };
};
export default useFirebase;

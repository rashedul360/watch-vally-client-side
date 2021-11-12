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
  // some initial value
  const [user, setUser] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [adminData, setAdminData] = useState({});
  const [isAdmin, setIsAdmin] = useState(false);
  const UserInfo = { ...adminData };
  // fetching data from database
  useEffect(() => {
    fetch(`https://polar-dawn-97020.herokuapp.com/register/${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setAdminData(data[0]);
      });
  }, [user.email]);
  // new registration function
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
        // set user
        setUser(newUser);
      })
      .catch((error) => {
        // set error
        const errorMessage = error.message;
        setError(errorMessage);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };
  // login email password method
  const loginUser = (email, password, locationUri, history) => {
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        // Signed in
        const user = result.user;
        setUser(user);
        history.replace(locationUri);
        setError("");
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };
  // google sign in method
  const googleSignIn = (name, email) => {
    setIsLoading(true);
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        setUser(user);
        setError("");
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };
  // logout mathod
  const logOut = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => {
        // empty user
        setUser({});
      })
      .catch((error) => {
        // setError
        setError(error.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };
  // save on database user infermation
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
  // return some methods and finctions
  return {
    user,
    error,
    isLoading,
    isAdmin,
    adminData,
    UserInfo,
    googleSignIn,
    newRegister,
    loginUser,
    logOut,
    saveUser,
    setIsAdmin,
  };
};
export default useFirebase;

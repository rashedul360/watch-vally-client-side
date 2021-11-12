import { useContext } from "react";
import { AuthCOntext } from "../Context/AuthProvider";
// use authentication system 
const useAuth = () => {
  return useContext(AuthCOntext);
};
export default useAuth;

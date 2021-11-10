import { useContext } from "react";
import { AuthCOntext } from "../Context/AuthProvider";

const useAuth = () => {
  return useContext(AuthCOntext);
};
export default useAuth;

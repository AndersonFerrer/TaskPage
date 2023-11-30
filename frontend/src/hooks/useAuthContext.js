import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export const useAuthContext = () => {
  const auth = useContext(AuthContext);
  return auth;
};

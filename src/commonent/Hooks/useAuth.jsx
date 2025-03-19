import { useContext } from "react";
import { AuthContext } from "../Authentication/AuthcontextApi";

const useAuth = () => {
  const Authcontext = useContext(AuthContext);
  return Authcontext;
};

export default useAuth;

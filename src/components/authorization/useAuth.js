import { useContext } from "react";
import { AuthContext } from "./AuthProvider";

export function useAuth(){
    return useContext(AuthContext);
}

// вызов useAuth позволит получать данные к обьекту {user, singin, singout}, т.е. сможем потом достать user
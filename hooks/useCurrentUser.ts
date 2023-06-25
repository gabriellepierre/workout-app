import { useEffect, useState } from "react";
import { getConnectedUser } from "./asyncStorage/actionStorage";
import { UserType } from "../model/user/UserType";

export const useCurrentUser = () => {
  const [user, setUser] = useState<UserType>();

  useEffect(() => {
    const loadUser = async () => {
        setUser(await getConnectedUser());
    };
    loadUser();
  }, []);

  return user;
}
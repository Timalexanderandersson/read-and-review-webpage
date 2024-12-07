import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const CurrentUserInfo = createContext();
export const SetCurrentUserInfo = createContext();

export const UserInformation = ({ children }) => {
  const [nowUser, setnowUser] = useState(null);
  const navigation = useNavigate();

  const collectInfo = async () => {
    try {
      const { data } = await axios.get("/dj-rest-auth/user/");
      setnowUser(data.user);
      navigation("/");
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    collectInfo();
  }, []);

  return (
    <CurrentUserInfo.Provider value={nowUser}>
      <SetCurrentUserInfo.Provider value={setnowUser}>
        {children}
      </SetCurrentUserInfo.Provider>
    </CurrentUserInfo.Provider>
  );
};

import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const CurrentUserInfo = createContext();
export const SetCurrentUserInfo = createContext();

/**
 * UserInformation.
 * setnowUser collecting  the data for user.
 */
export const UserInformation = ({ children }) => {
  const [nowUser, setnowUser] = useState(null);

/**
 *"collectInfo" function for getting the user.
API request GET to get the user information.
setnowUser collecting  the data for user.

*/
  const collectInfo = async () => {
    try {
      const { data } = await axios.get("/dj-rest-auth/user/");
      setnowUser(data);
    } catch (err) {}
  };

  /**
   * Collecting the information of the current user and storing it in the state.
   */
  useEffect(() => {
    const Gettinguser = localStorage.getItem("currentUser");
    if (Gettinguser) {
      const thisisuser = JSON.parse(Gettinguser);
      setnowUser(thisisuser);
    }
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

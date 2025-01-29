import { render, screen  } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Createpostpage from "../../pages/Createpostpage";
import "@testing-library/jest-dom";
import { CurrentUserInfo } from "../../users/userInformation";

test("Checking if button exist in the createpost page as sign in user", () => {
  const loggedin = {
    pk: 13,
    username: "timandersson",
    email: "",
    first_name: "",
    last_name: "",
  };

  render(
    <CurrentUserInfo.Provider value={loggedin}>
      <Router>
        <Createpostpage />
      </Router>
    </CurrentUserInfo.Provider>
  );

  /**
 * Checking if the "Create post" link is there in the add review page.
 */
  const createbutton = screen.getByRole("button", { name: "Create post" });
  expect(createbutton).toBeInTheDocument();

});


  

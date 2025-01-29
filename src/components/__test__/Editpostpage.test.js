import { render, screen,act, fireEvent  } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import "@testing-library/jest-dom";
import { CurrentUserInfo } from "../../users/userInformation";
import axios from "axios";
import Editpostpage from "../../pages/Editpostpage";

jest.mock("axios");
/**
 * Checking after 204 if deleted post.
 */
test("Checking for status on the delete(204)", async () => {
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
          <Editpostpage />
        </Router>
      </CurrentUserInfo.Provider>
    );

  /**
 * Checking if the "Delete" gives away the right status when deleted an item 204.
 * 
 */
  const deleting = screen.getByRole("button", { name: "Delete" });
  expect(deleting).toBeInTheDocument();
  axios.delete.mockResolvedValue ({status: 204})

  fireEvent.click(deleting);
  const response = await axios.delete(`/post/`);
  expect(response.status).toBe(204);

});
import { render, screen,act  } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import "@testing-library/jest-dom";
import { Signup } from "../../pages/Signup";
import axios from "axios";


jest.mock("axios");

test("CheckingChecking Signup for 201 and if button exist ", async () => {
  render(
      <Router>
        <Signup />
      </Router>
  );

  /**
 * Checking if the "Create your account" button is there in the singin page.
 * and if register an account its 201 status.
 */
  const createbutton = screen.getByRole("button", { name: "Create your account" });
  expect(createbutton).toBeInTheDocument();
  axios.post.mockResolvedValue({status: 201})

  act(() => {
    createbutton.click();
  });
  const response = await axios.post("/dj-rest-auth/registration/");
  expect(response.status).toBe(201);

});

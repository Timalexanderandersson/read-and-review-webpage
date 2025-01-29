import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { NavBar } from "../NavBar";
import "@testing-library/jest-dom";
import { CurrentUserInfo } from "../../users/userInformation";

/**
 * Testing Navbar checking for all the navbar links
 * */
test("renders navbar link when not logged in", () => {
  render(
    <Router>
      <NavBar />
    </Router>
  );

  /**
   * Checking if the link "Home" in the navbar exist
   */
  const backhome = screen.getByText("Home");
  expect(backhome).toBeInTheDocument();
/**
   * Checking if the link "Explore new" in the navbar exist
   */
  const explore = screen.getByText("Explore new");
  expect(explore).toBeInTheDocument();
/**
   * Checking if the link "Contact" in the navbar exist
   */
  const contact = screen.getByText("Contact");
  expect(contact).toBeInTheDocument();
/**
   * Checking if the link "Sign in" in the navbar exist
   */
  const signin = screen.getByText("Sign in");
  expect(signin).toBeInTheDocument();
/**
   * Checking if the link "Register" in the navbar exist
   */
  const register = screen.getByText("Register");
  expect(register).toBeInTheDocument();
});

/**
 * Testing to see if the navbar is contains the sign out
 * and add-review if sign in as a user on the website.
 */
test("renders navbar link when logged in", () => {
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
        <NavBar />
      </Router>
    </CurrentUserInfo.Provider>
  );
 /**
   * Checking if the link "Home" in the navbar exist 
   */
  const backhome = screen.getByText("Home");
  expect(backhome).toBeInTheDocument();
 /**
   * Checking if the link "Explore new" in the navbar exist
   */
  const explore = screen.getByText("Explore new");
  expect(explore).toBeInTheDocument();
  /**
   * Checking if the link "Contact" in the navbar exist
   */
  const contact = screen.getByText("Contact");
  expect(contact).toBeInTheDocument();
  /**
   * Checking if the link "Add review" in the navbar exist
   */

  const addreview = screen.getByText("Add review");
  expect(addreview).toBeInTheDocument();
/**
   * Checking if the link "Sign out" in the navbar exist
   */
  const logginout = screen.getByText("Sign out");
  expect(logginout).toBeInTheDocument();

  /**
 * Checking if the "Add review"  link is an actual link when logged in
 */
  const adding = screen.getByRole("link", { name: "Add review" });
  expect(adding).toBeInTheDocument();
/**
 * Checking if the "Sign out" link is an actual link when logged in
 */
  const singout = screen.getByRole("link", { name: "Sign out" });
  expect(singout).toBeInTheDocument();

});

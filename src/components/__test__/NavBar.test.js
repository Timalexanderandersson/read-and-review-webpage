import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { NavBar } from "../NavBar";

test("reder the navbar", () => {
  render(
    <Router>
        <NavBar />
    </Router>
  );
  
});

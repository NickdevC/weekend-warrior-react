import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom/cjs/react-router-dom.min";
import NavBar from "../NavBar";
import { CurrentUserProvider } from "../../contexts/CurrentUserContext";

test("renders NavBar", () => {
  render(
    <Router>
      <NavBar />
    </Router>
  );

  //   screen.debug();
  const signInLink = screen.getByRole("link", { name: "Log In" });
  expect(signInLink).toBeInTheDocument();
});

test("renders link to the user profile for a logged in user", async () => {
  render(
    <Router>
      <CurrentUserProvider>
        <NavBar />
      </CurrentUserProvider>
    </Router>
  );

  const profileAvatar = await screen.findByText('Profile')
  expect(profileAvatar).toBeInTheDocument()
});

test("renders Log In and Sign Up buttons again on log out", async () => {
    render(
      <Router>
        <CurrentUserProvider>
          <NavBar />
        </CurrentUserProvider>
      </Router>
    );
  
    const signOutLink = await screen.findByRole('link', {name: 'Log Out'})
    fireEvent.click(signOutLink)

    const signInLink = await screen.findByRole('link', {name: 'Log In'})
    const signUpLink = await screen.findByRole('link', {name: 'Sign Up'})

    expect(signInLink).toBeInTheDocument();
    expect(signUpLink).toBeInTheDocument();
  });

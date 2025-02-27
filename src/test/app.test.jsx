import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import React from "react";
import "@testing-library/jest-dom";

import Home from "/Users/sergioquintero/Desktop/G1-LRNR-Sergio/src/pages/Home.jsx";
import Account from "/Users/sergioquintero/Desktop/G1-LRNR-Sergio/src/pages/Account.jsx";
import Quiz from "/Users/sergioquintero/Desktop/G1-LRNR-Sergio/src/pages/Quiz.jsx";

describe("Home", () => {
  it("renders to see the home message", () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );
    const greetingElement = screen.getByText(
      "Your guided path to programming enlightenment"
    );
    expect(greetingElement).toBeInTheDocument();
  });
  it("checks for home title", () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );
    const greetingElement = screen.getByText("lrnr");
    expect(greetingElement).toBeInTheDocument();
  });
});
describe("Account", () => {
  it("checks for xp", () => {
    render(
      <MemoryRouter>
        <Account />
      </MemoryRouter>
    );
    const greetingElement = screen.getByText("151/200 xp");
    expect(greetingElement).toBeInTheDocument();
  });
});
describe("Quiz", () => {
  it("checks for quiz title", () => {
    render(
      <MemoryRouter>
        <Quiz />
      </MemoryRouter>
    );
    const greetingElement = screen.getByText("Quiz Generation Options");
    expect(greetingElement).toBeInTheDocument();
  });
});

import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

test("renders Calendar section by default", () => {
  render(<App />);
  expect(screen.getByText(/📅 Kalendārs/i)).toBeInTheDocument();
});

test("renders LifeLoop header after clicking LifeLoop button", () => {
  render(<App />);
  
  // Klikšķinam uz LifeLoop pogas
  fireEvent.click(screen.getByText(/🔄 LifeLoop/i));

  // Atrodam pirmo elementu ar tekstu "progresijas līnija"
  expect(
    screen.getAllByText(/progresijas līnija/i)[0]
  ).toBeInTheDocument();
});

test("renders Task section after clicking Task button", () => {
  render(<App />);
  
  // Klikšķinam uz Tasks pogas
  fireEvent.click(screen.getByText(/✅ Tasks/i));

  // Atrodam pirmo elementu ar tekstu "soļi un uzdevumi"
  expect(
    screen.getAllByText(/soļi un uzdevumi/i)[0]
  ).toBeInTheDocument();
});

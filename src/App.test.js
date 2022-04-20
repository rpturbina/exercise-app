// test("expect something to something", () => {
//   expect(1 + 1).toBe(2);
// });

import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";

import store from "./redux/store";
import App from "./App";

test("should render app properly", () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  const linkTrending = screen.getByRole("link", {
    name: /trending gif/i,
  });
  const linkSearch = screen.getByRole("link", {
    name: /search gif/i,
  });

  expect(linkTrending).toBeInTheDocument();
  expect(linkSearch).toBeVisible();

  userEvent.click(linkSearch);

  const searchButton = screen.getByRole("button", {
    name: /search/i,
  });

  expect(searchButton).toBeVisible();
});

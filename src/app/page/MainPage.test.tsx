import "jest-styled-components";
import "@testing-library/jest-dom";

import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { MainPage } from "./MainPage";

describe("MainPage component", () => {
  it("Should respect the initial render of page", () => {
    const { container } = render(<MainPage />);

    const input = screen.getByRole("textbox");
    expect(input).toBeInTheDocument();
    expect(input).toHaveValue("");
    expect(input).toHaveFocus();

    const button = screen.getByRole("button");
    expect(button).toBeDisabled();

    const messageBox = screen.getByTestId("message-box");
    expect(messageBox).toBeInTheDocument();

    const clearIcon = screen.queryByTestId("clear-icon");
    expect(clearIcon).not.toBeInTheDocument();

    expect(container).toMatchSnapshot();
  });

  it("Should respect the change in the screen when a user type a number", async () => {
    const { container } = render(<MainPage />);

    const input = screen.getByRole("textbox");
    const button = screen.getByRole("button");
    const messageBox = screen.queryByTestId("message-box");

    userEvent.type(input, "23");
    expect(input).toHaveValue("23");
    expect(button).toBeEnabled();
    expect(messageBox).not.toBeInTheDocument();

    const clearIcon = await screen.findByTestId("clear-icon");
    expect(clearIcon).toBeInTheDocument();

    expect(container).toMatchSnapshot();
  });

  it("Should respect the change in the screen when a user clear the input", async () => {
    const { container } = render(<MainPage />);

    const input = screen.getByRole("textbox");
    const button = screen.getByRole("button");
    const messageBox = screen.queryByTestId("message-box");

    userEvent.type(input, "23");
    expect(input).toHaveValue("23");
    expect(button).toBeEnabled();
    expect(messageBox).not.toBeInTheDocument();

    const clearIcon = await screen.findByTestId("clear-icon");
    expect(clearIcon).toBeInTheDocument();

    userEvent.click(clearIcon);
    expect(input).toHaveValue("");
    expect(button).toBeDisabled();
    expect(messageBox).not.toBeInTheDocument();
    expect(clearIcon).not.toBeInTheDocument();

    expect(container).toMatchSnapshot();
  });

  it("Should respect the change in the screen when a user request a Post", async () => {
    const { container } = render(<MainPage />);

    const input = screen.getByRole("textbox");
    const button = screen.getByRole("button");
    const messageBox = screen.queryByTestId("message-box");

    userEvent.type(input, "23");
    expect(input).toHaveValue("23");
    expect(button).toBeEnabled();
    expect(messageBox).not.toBeInTheDocument();

    const clearIcon = await screen.findByTestId("clear-icon");
    expect(clearIcon).toBeInTheDocument();

    userEvent.click(button);
    const convertedValueBox = await screen.findByTestId("converted-value-box");
    expect(convertedValueBox).toBeInTheDocument();
    expect(convertedValueBox).toHaveTextContent(
      "ad, ae, af, bd, be, bf, cd, ce, cf,"
    );

    expect(container).toMatchSnapshot();
  });
});

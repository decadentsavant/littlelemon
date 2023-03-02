import "@testing-library/jest-dom";
import BookingForm from "./components/bookingForm/BookingForm";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import App from "./App";



test("sanity check", () => {
    expect(true).toBe(true);
});

// BookingForm won't render. Not sure why. Please help.
test("renders the BookingForm", () => {
    render(
            <BookingForm />
    );
 
    const formElement = screen.getByTestId("form");
    expect(formElement).toBeInTheDocument();
});

// same...
test("renders the form button", () => {
    render(<BookingForm />);
    const button = screen.getByTestId("button");
    expect(button).toBeInTheDocument();
});

// same...
test("form validation", () => {
    const mockCallBack = jest.fn();
    render(<BookingForm />);
    const button = screen.getByTestId("button");
    fireEvent.click(button);
    expect(mockCallBack.mock.calls.length).toEqual(1);
});
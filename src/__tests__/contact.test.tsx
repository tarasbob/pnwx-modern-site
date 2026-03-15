import { render, screen, fireEvent } from "@testing-library/react";
import ContactForm from "@/components/ContactForm";

// Mock framer-motion
jest.mock("framer-motion", () => ({
  motion: {
    div: ({ children, ...props }: React.PropsWithChildren<Record<string, unknown>>) => {
      const { initial, animate, whileInView, viewport, transition, ...rest } = props;
      void initial; void animate; void whileInView; void viewport; void transition;
      return <div {...rest}>{children}</div>;
    },
  },
  AnimatePresence: ({ children }: React.PropsWithChildren) => children,
}));

describe("ContactForm", () => {
  beforeEach(() => {
    render(<ContactForm />);
  });

  it("renders the form fields", () => {
    expect(screen.getByLabelText(/Full Name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Email Address/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Phone Number/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Company/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Subject/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Message/i)).toBeInTheDocument();
  });

  it("renders the submit button", () => {
    expect(screen.getByText("Send Message")).toBeInTheDocument();
  });

  it("shows name error when submitting empty form", () => {
    fireEvent.click(screen.getByText("Send Message"));
    expect(screen.getByText("Name is required")).toBeInTheDocument();
  });

  it("shows email error when submitting empty form", () => {
    fireEvent.click(screen.getByText("Send Message"));
    expect(screen.getByText("Email is required")).toBeInTheDocument();
  });

  it("shows message error when submitting empty form", () => {
    fireEvent.click(screen.getByText("Send Message"));
    expect(screen.getByText("Message is required")).toBeInTheDocument();
  });

  it("shows invalid email error for bad email format", () => {
    fireEvent.change(screen.getByLabelText(/Full Name/i), {
      target: { value: "John Doe" },
    });
    fireEvent.change(screen.getByLabelText(/Email Address/i), {
      target: { value: "not-an-email" },
    });
    fireEvent.change(screen.getByLabelText(/Message/i), {
      target: { value: "Test message" },
    });
    fireEvent.click(screen.getByText("Send Message"));
    expect(screen.getByText("Please enter a valid email address")).toBeInTheDocument();
  });

  it("shows success message on valid submission", () => {
    fireEvent.change(screen.getByLabelText(/Full Name/i), {
      target: { value: "John Doe" },
    });
    fireEvent.change(screen.getByLabelText(/Email Address/i), {
      target: { value: "john@example.com" },
    });
    fireEvent.change(screen.getByLabelText(/Message/i), {
      target: { value: "I need a quote for lead aprons." },
    });
    fireEvent.click(screen.getByText("Send Message"));
    expect(screen.getByText("Message Sent!")).toBeInTheDocument();
  });
});

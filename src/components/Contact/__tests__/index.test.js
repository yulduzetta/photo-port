import ContactForm from "..";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import React from "react";

afterEach(cleanup);

describe("Contacts section is rendering", () => {
  it("renders", () => {
    render(<ContactForm />);
  });

  it("matches snapshot", () => {
    const { asFragment } = render(<ContactForm />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('renders the right title into h1', ()=>{
      const {getByTestId} = render (<ContactForm/>);
      expect(getByTestId('h1tag')).toHaveTextContent('Contact')
  })
  it('renders the right text into button', ()=>{
    const {getByTestId} = render (<ContactForm/>);
    expect(getByTestId('btn')).toHaveTextContent('Submit')
})
});

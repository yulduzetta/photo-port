// We need react to enable the components to function properly so we can test them.
import React from "react";

// The 'render' function will do just what its name implies: "render" the component.
// What actually happens is that Jest creates a simulated DOM in a Node.js environment
// to approximate the DOM (no component is actually visibly rendered).

// The cleanup function is used to remove components from the DOM to prevent memory leaking,
// as well as variable or data collisions between tests that could corrupt test results.
import { render, cleanup } from "@testing-library/react";

// custom matcher that are used to test DOM elements.
import "@testing-library/jest-dom/extend-expect";

import About from "..";

afterEach(cleanup);

describe("About component", () => {
  it("renders", () => {
    render(<About />);
  });

  // A snapshot is a serialized version of the DOM node structure, enabled by Jest.
  // 'asFragment' function returns a snapshot of the About component.
  it("matches snapshot DOM node sturcture", () => {
    const { asFragment } = render(<About />);
    expect(asFragment()).toMatchSnapshot();
  });
});

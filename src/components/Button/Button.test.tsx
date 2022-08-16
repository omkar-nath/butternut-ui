import React from "react";
import { render } from "@testing-library/react";

import Button from "./Button";

describe("Button", () => {
  test("renders the Button component", () => {
    render(<Button label="Hello world!" />);
  });

   test("render this button component correctly",()=>{
    render(<Button label="Hello World"/>);
   });
   test("Render the button component correctly",()=>{
    render(<Button label="sddnd".></Button>
   }
});
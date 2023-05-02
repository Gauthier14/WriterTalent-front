import React from "react";
import ReactDOMServer from "react-dom/server";
import SinglePage from "./SinglePage";



describe("SinglePage", () => {


  it("should render correctly", () => {
    const component = <SinglePage>Test</SinglePage>;
    const renderedComponent = ReactDOMServer.renderToString(component);
    expect(renderedComponent).toContain("class=\"single-page\"");
  });
});

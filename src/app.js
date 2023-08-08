import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";

/**
 * header
 * -- Logo
 * -- nav Items
 * body
 * -- Search
 * -- RestuarantContainer
 *    -- RestuarantCard
 * footer
 * -- Copyright
 * -- Links
 * -- Address
 * -- Contact
 */

const AppLayout = () => {
  return (
    <>
      <Header />
      <Body />
    </>
  );
};

const rootElement = document.getElementById("app");
const root = ReactDOM.createRoot(rootElement);

root.render(<AppLayout />);

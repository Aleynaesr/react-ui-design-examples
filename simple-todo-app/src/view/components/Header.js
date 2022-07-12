import React from "react";

const Header = () => {
  // const headerStyle = {
  //   padding: "20px 0",
  //   fontFamily: "Lucida Handwriting",
  //   lineHeight: "2em",
  // };
  return (
    <div className="headerStyle">
      <h1 style={{ fontSize: "30px", marginBottom: "15px" }}>
        Simple To-do App
      </h1>
      <p style={{ fontSize: "15px" }}>
        Please add a to-do
      </p>
    </div>
  );
};

export default Header;

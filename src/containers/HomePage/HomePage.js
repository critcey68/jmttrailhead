import React from "react";
import { Link } from "react-router-dom";

export default () => {

  return (
    <main>
      <h1>Home Page</h1>
      <Link to="/packing">Packing List</Link>
    </main>
  );
};

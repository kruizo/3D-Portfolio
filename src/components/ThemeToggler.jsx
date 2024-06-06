import React from "react";

function ThemeToggler() {
  return (
    <>
      <label className="switch">
        <input type="checkbox" id="theme-toggler" />
        <span className="slider"></span>
      </label>
    </>
  );
}

export default ThemeToggler;

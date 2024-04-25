import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="flex justify-center text-center p-3 border w-full">
      <p>Copyright ⓒ {year}</p>
    </footer>
  );
}

export default Footer;

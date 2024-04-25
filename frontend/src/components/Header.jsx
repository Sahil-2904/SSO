import React from "react";
// import HighlightIcon from "@material-ui/icons/Highlight";
function Header() {
  return (
    <header className="flex flex-col p-5">
        <div>
            {/* <HighlightIcon /> */}
            <h1>Keeper</h1>
            <button className="bg-blue-300" onClick={logout}>Logout</button>
        </div>
        <div className="flex">
            <h1>Welcome, {user?.displayName}</h1>
        </div>
    </header>
  );
}

export default Header;

import React from "react";
import { FaStickyNote, FaSearch } from "react-icons/fa";

/**
 * The Navbar component displays the navigation bar with a title and search icon.
 */
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg container my-2" style={{ width: "46rem" }}>
      <div className="container-fluid">
        {/* Logo and title */}
        <div>
          <FaStickyNote size={24} />
          <span className="mx-2">Task Tracker</span>
        </div>

        {/* Search icon */}
        <div>
          <FaSearch size={24} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

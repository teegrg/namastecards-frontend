// import { Link } from "react-router-dom";

// function NavBar() {
//   return (
//     <>
//       <nav>
//         <Link to="/">
//           <h1>Namaste Cards</h1>
//         </Link>
//         <div className="nav-end">
//           <Link to="/">
//             <div>Home</div>
//           </Link>
//           <Link to="/cards">
//             <div>Collection</div>
//           </Link>
//           <Link to="/cards/new">
//             <div>Customize</div>
//           </Link>
//         </div>
//       </nav>
//       <hr />
//     </>
//   );
// }

// export default NavBar;

import { Link } from "react-router-dom";
import { useState } from "react"; // Import useState from React

function NavBar() {
  const [isOpen, setIsOpen] = useState(false); // State to track navbar open/close

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className={`navbar ${isOpen ? "open" : ""}`}>
        <Link to="/">
          <h1 className="nav-header">Namaste Cards</h1>
        </Link>
        <div className={`nav-end ${isOpen ? "open" : ""}`}>
          <Link to="/" onClick={toggleNavbar}>
            <div className="nav-link">Home</div>
          </Link>
          <Link to="/cards" onClick={toggleNavbar}>
            <div className="nav-link">Collection</div>
          </Link>
          <Link to="/cards/new" onClick={toggleNavbar}>
            <div className="nav-link">Customize</div>
          </Link>
        </div>
        <div className="navbar-toggle" onClick={toggleNavbar}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </nav>
      <hr />
    </>
  );
}

export default NavBar;

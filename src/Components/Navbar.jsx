import Navmenu from "./Navmenu";
import '../Styles/Navbar.css';

const Navbar = () => {
    return (
      <div className="navbar">
        <div className="logo">
          <h2>
            Yummy<span>.</span>
          </h2>
        </div>
        <Navmenu />
        <button>
          <a href="#">Book a Table</a>
        </button>
      </div>
    );
}
 
export default Navbar;
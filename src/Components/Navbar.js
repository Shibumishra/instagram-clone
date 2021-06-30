import React,{ useContext } from 'react';
import { FaSearch, FaTelegramPlane, FaRegCompass, FaRegHeart } from "react-icons/fa";
import { MdHome } from "react-icons/md";
import { ContextProvider } from '../Global/Context';

const Navbar = () => {
    const { model, openModel, user, loading, logOut } = useContext(ContextProvider)
    
    const openForms= () => {
        openModel();
    };

    const userLogout = () => {
      logOut();
    }

    const checkUser = () => {
      return !loading ? !loading && user ? (
        <li>{user.displayName}/ <span onClick={userLogout}>Logout</span></li>
      ) : (
        <li onClick={openForms}>Register/Login</li>
      ) : (
        '...' 
      );
    } ;

    return ( <div className="navbar">
        <div className="navbar_first">
            <div className="navbar_first_logo">
                <img src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png" alt="instagram.png" />
            </div>
        </div>
        <div className="navbar_middle">
            <div className="navbar_middle_search">
                <input type="text" className="navbar_search" placeholder="Search" />
                <FaSearch className="searchIcon" />
            </div>
        </div>
        <div className="navbar__last">
        <li>
          <MdHome className="navbar__icons" />
        </li>
        <li>
          <FaTelegramPlane className="navbar__icons" />
        </li>
        <li>
          <FaRegCompass className="navbar__icons" />
        </li>
        <li>
          <FaRegHeart className="navbar__icons" />
        </li>
         {checkUser()}
      </div>

    </div> );
}
 
export default Navbar;
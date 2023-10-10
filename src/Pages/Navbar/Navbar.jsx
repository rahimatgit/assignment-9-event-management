import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";


const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);
    console.log(user);

    const navLinks = <>
        <li className="mr-3"><NavLink to="/">Home</NavLink></li>
        <li className="mr-3"><NavLink to="/about">About Us</NavLink></li>
        <li className="mr-3"><NavLink to="/team">Our Team</NavLink></li>
        <li className="mr-3"><NavLink to="/login">Login</NavLink></li>
        <li className="mr-3"><NavLink to="/register">Register</NavLink></li>
    </>



    const handleLogout = () => {
        logOut()
            .then()
            .catch()
    }

    return (
        <div className="navbar bg-base-100 w-[80%] mx-auto mb-5 flex flex-col md:flex-row lg:flex-row">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLinks}
                    </ul>
                </div>
                <a className=" normal-case text-3xl font-bold">EduVentsPro</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ?
                        <div className="flex flex-col mt-5 md:mt-0 lg:mt-0 md:flex-row lg:flex-row items-center ">
                            <div className="avatar mx-3 mt-2 md:mt-0 lg:mt-0">
                                <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                    <img src={user.photoURL} />
                                </div>
                            </div>
                            <p className="mx-3 mt-2 md:mt-0 lg:mt-0">{user.displayName}</p>
                            <button onClick={handleLogout} className="btn btn-secondary mt-2 md:mt-0 lg:mt-0">Log Out</button>
                        </div>
                        :
                        ' '
                }
            </div>
        </div>
    );
};

export default Navbar;
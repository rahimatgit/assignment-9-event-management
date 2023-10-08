import { Outlet } from "react-router-dom";
import Navbar from "../../Pages/Navbar/Navbar";


const Root = () => {
    return (
        <div className="mt-10">
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;
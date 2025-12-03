import { Link } from "react-router-dom";
const NavBar = () => {
    return ( <nav className="flex justify-between border-b-2 border-gray-500 items-center p-8 mx-10">
                <div className="text-4xl text-red-400 font-bold">Product</div>
                <ul className="flex items-center gap-6">
                    <li className="text-xl font-semibold "><Link to="/">Home</Link></li>
                    <li className="text-xl font-semibold "><Link to="/services">Services</Link></li>
                    <li className="text-xl font-semibold "><a href="#">About Us</a></li>
                </ul>
            </nav> );
}
 
export default NavBar;
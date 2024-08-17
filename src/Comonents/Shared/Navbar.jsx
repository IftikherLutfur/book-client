import { NavLink } from "react-router-dom";


const Navbar = () => {
    return (
        <div className="flex justify-between text-xl font-semibold bg-orange-400 h-16 py-4 pl-4">
            <ul className="flex gap-10">
                <NavLink to='/categories'><li>Categories</li></NavLink>
                <NavLink to='/brand'><li>Brands</li></NavLink>
                <NavLink><li>Price Range</li></NavLink>
              
            </ul>
            
        </div>
    );
};

export default Navbar;
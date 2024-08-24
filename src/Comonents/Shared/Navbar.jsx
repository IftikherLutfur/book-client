import { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../Authentication/AuthProvider";


const Navbar = () => {
	const {logOut} = useContext(AuthContext)
	const navigate = useNavigate();

	const singingOut = () =>{
		logOut()
		navigate('/')
	}
    return (
        <div>
        <header className="p-4 dark:bg-gray-100 dark:text-gray-800">
	<div className="container flex justify-between h-16 mx-auto md:justify-center md:space-x-8">
		<ul className="flex">
            
		<NavLink to='/home'>
        <li className="flex mt-6">
				<a rel="noopener noreferrer" href="#" className="flex items-center px-4 -mb-1  ">Home</a>
			</li>
        </NavLink>
			<li className="flex mt-6">
				<NavLink to='/categories'><a rel="noopener noreferrer" href="#" className="flex items-center px-4 -mb-1 dark:border-">Categories</a></NavLink>
			</li>
			<li className="flex mt-6">
				<NavLink to='/brand'><a rel="noopener noreferrer" href="#" className="flex items-center px-4 -mb-1 dark:border-">Brand</a></NavLink>
			</li>
			<li className="flex mt-6">
				<NavLink to='/Sorting'><a rel="noopener noreferrer" href="#" className="flex items-center px-4 -mb-1 dark:border-">Price Range</a></NavLink>
			</li>
		</ul>
	
				<a onClick={singingOut} rel="noopener noreferrer" href="#" className="flex text-orange-600 font-semibold lg:ml-48 items-center dark:border-">Log Out</a>

		
		<button title="Button" type="button" className="p-4 md:hidden">
		<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 dark:text-gray-800">
		<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
			</svg>
		</button>
	</div>
</header>
        
        </div>
    );
};

export default Navbar;
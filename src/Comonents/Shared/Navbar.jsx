

const Navbar = () => {
    return (
        <div className="flex justify-between text-xl font-semibold bg-orange-400 h-16 py-4 pl-4">
            <ul className="flex gap-10">
                <li>Home</li>
                <li>Products</li>
            </ul>
            <ul className="flex gap-10 pr-4">
                <li>Name</li>
                <li>Image</li>
            </ul>
        </div>
    );
};

export default Navbar;
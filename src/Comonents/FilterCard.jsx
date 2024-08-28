import { useState } from "react";
import Pagination from "./Pagination";


const FilterCard = ({ title }) => {
    const { name, image, brand, category, price} = title;
    return (
        <div>
            <div className="flex max-w-md overflow-hidden  rounded-lg shadow-lg bg-amber-600">
                <div className="w-1/3 bg-cover">
                <img className="h-40" src={image} alt="" /></div>

                <div className="w-2/3 p-4 md:p-4">
                    <h1 className="text-xl font-bold text-gray-800 dark:text-white">{name}</h1>

                    

                    <div  className="text-white">
                        <p><small>Brand:</small> <span className="font-semibold">{brand}</span></p> <p><small>Category: </small><span className="font-semibold">{category}</span></p>
                    </div>

                    <div className="flex justify-between mt-3 item-center">
                        <h1 className="text-lg font-bold text-gray-700 dark:text-gray-200 md:text-xl">{price} Tk</h1>
                        <button className="px-2 py-1 text-xs font-bold text-white uppercase transition-colors duration-300 transform bg-gray-800 rounded dark:bg-gray-700 hover:bg-gray-700 dark:hover:bg-gray-600 focus:outline-none focus:bg-gray-700 dark:focus:bg-gray-600">Add to Cart</button>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default FilterCard;
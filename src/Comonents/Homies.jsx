import axios from "axios";
import { useEffect, useState } from "react";
import FilterCard from "./FilterCard";

const Homies = () => {
    const [phone,setPhone] = useState([]);

    useEffect(()=>{
        axios.get("http://localhost:5000/books")
        .then(res=>{
            setPhone(res.data)
        })
        .catch(err=>console.log(err)
        )
    },[])

    const handleForSearch = event =>{
     event.preventDefault();
     const form = event.target;
     const search = form.search.value;
     console.log(search);
     
    }


    return (
        <div>
            <h1>All The Mobile</h1>
            <div>
                <form onSubmit={handleForSearch}>
                    <div className="flex gap-2 my-4 mx-28">
                    <input name="search" type="text" className="border-2 h-9 border-black shadow-xl rounded-md" />
                    <button className="bg-pink-500 px-3 py-1 rounded-md text-white font-bold">Search</button>
                    </div>
                </form>
            </div>
            <div className='mx-10 gap-5 grid grid-cols-3'>
     {phone.map(title=><FilterCard key={title._id} title={title}/>)}
      </div>
        </div>
    );
};

export default Homies;
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
    return (
        <div>
            <div className='mx-10 gap-5 grid grid-cols-3'>
     {phone.map(title=><FilterCard key={title._id} title={title}/>)}
      </div>
        </div>
    );
};

export default Homies;
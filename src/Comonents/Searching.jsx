import axios from "axios";
import { useEffect, useState } from "react";

const Searching = () => {
    const [data,setData] = useState([])
    useEffect(()=>{
        axios.get('http://localhost:5000/books')
        .then(res=>{
            setData(res.data)
        })
        .catch(error=>console.log(error)
        )
    },[])
    return (
        <div>
            {data.map(dt=><h1 key={dt._id}>{dt.name}</h1>)}
        </div>
    );
};

export default Searching;
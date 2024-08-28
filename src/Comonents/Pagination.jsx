import axios from "axios";
import { useEffect, useState } from "react";

const Pagination = ({total, limit}) => {

    const [page, setPage] = useState(1)
    const totalPage = Math.ceil(total/limit)

   useEffect(()=>{
    axios.get('https://book-server-orpin.vercel.app/books')
    .then(res=>{
        setPage(res.data)
    })
    .catch(error=>{
        console.error(error)
    })
   },[])

   const onClick = (newPage) =>{
    setPage(newPage+1)
   }

    return (
        <div>
            {
                totalPage>0 && [...Array(totalPage)].map((val, index)=>(
                    <button key={index}
                    className={page===index +1}
                    onClick={()=>onClick(index)}>
                        {index + 1}
                        <li>1</li>
                        <li>2</li>
                    </button>
                ))
            }
        </div>
    );
};

export default Pagination;
import { useEffect, useState } from "react";





const Home = () => {

    const [book,setBook] = useState([]);

    useEffect(()=>{
        fetch('book.json')
        .then(res=>res.json())
        .then(data=>setBook(data))
    },[
    
    ])


    return (
        <div>
           h {book.map(bk=><div key={bk.Name}>
            <h1>{bk.Name}</h1>
           </div>)}
        </div>
    );
};

export default Home;
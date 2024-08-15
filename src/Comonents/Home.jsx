import { useEffect, useState } from "react";
import Book from "./Book";





const Home = () => {

    const [book,setBook] = useState([]);

    useEffect(()=>{
        fetch('book.json')
        .then(res=>res.json())
        .then(data=>setBook(data))
    },[
    
    ])

    const catFantasy = book.filter(bok=>bok.Category ==='Fantasy')
    console.log(catFantasy);
    


    return (
        <div>
          <div>
        
          </div>
         <div className="grid grid-cols-3 gap-4 my-3 mx-4">
         {book.map(bk=>
         <div key={bk.Name}>
            <Book book={bk} />
           </div>
        )}
         </div>
        </div>
    );
};

export default Home;
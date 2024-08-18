import axios from "axios";
import { useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import FilterCard from "./FilterCard";

const Sorting = () => {
    const [product, setProduct] = useState([]);
    
    axios.get('http://localhost:5000/books')
    .then(res=>{
        setProduct(res.data);
    })
    .catch(error=>{
        console.error(error)
    })
    
    return (
        <div >
       
       <Tabs>
        <TabList>
            <div className="flex ml-10 gap-5">
            <Tab><button className="border-2 rounded-md px-4 my-3 bg-blue-400 py-1 text-black border-pink-500 font-bold">High To Low</button></Tab>
            <Tab><button className="border-2 rounded-md px-4 my-3 bg-blue-400 py-1 text-black border-pink-500 font-bold">Low To High</button></Tab>
            </div>
        </TabList>

           <TabPanel>
          <div className="mx-10 gap-5 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
          {product && product.sort((a,b)=>a.price<b.price? 1 :-1).map(title=>{
              return (
                  <FilterCard key={title._id} title={title}/>
                     
                
            )
        })
    } </div> 
           </TabPanel>
           <TabPanel>
          <div className="mx-10 gap-5 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
          {product && product.sort((a,b)=>a.price>b.price? 1 :-1).map(title=>{
              return (
                <FilterCard key={title._id} title={title}/>
            )
        })
    }  
          </div>
           </TabPanel>

    </Tabs>
        </div>
    );
};

export default Sorting;
import { useEffect, useState } from "react";
import axios from "axios";

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import FilterCard from "./FilterCard";



const Home = () => {

    const [phone,setPhone] = useState([]);
    // const [searchTerm, setSearchTerm] = useState('')
    // useEffect(()=>{
    //     fetch('phone.json')
    //     .then(res=>res.json())
    //     .then(data=>setPhone(data))
    // },[
    
    // ])

    useEffect(()=>{
        axios.get("https://book-server-orpin.vercel.app/books")
        .then(res=>{
            setPhone(res.data)
        })
        .catch(err=>console.log(err)
        )
    },[])


    const flagship = phone.filter(bok=>bok.category ==='Flagship')
    const budget = phone.filter(bok=>bok.category === 'Budget')
    const midRange = phone.filter(bok=>bok.category === 'Mid-range')
    const compact = phone.filter(bok=>bok.category === 'Compact')
  

    // const handleSearch = async() =>{
      
    // try{
    //     const response = await axios.get('http://localhost:5000/books',{
    //         params: {search:searchTerm}
    //     });
    //     setPhone(response.data)
    // } 
    // catch(error){
    //     console.error("Error fetching phone", error)
    // }
    
    // }



    return (
        <div>
          {/* <div>
          <h1>Search Books by Name</h1>
      <input
        type="text"
        placeholder="Enter phone name"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
          </div> */}

          <Tabs>
    <TabList>
      <h1 className="text-center font-bold text-xl">Categories</h1>
     <div className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 text-center ">
     <Tab><button className="border-2 rounded-md px-4 my-3 bg-blue-400 py-1 text-black border-pink-500 font-bold">All</button></Tab>
     <Tab><button className="border-2 rounded-md px-4 my-3 bg-blue-400 py-1 text-black border-pink-500 font-bold">Flagship</button></Tab>
     <Tab><button className="border-2 rounded-md px-4 my-3 bg-blue-400 py-1 text-black border-pink-500 font-bold">Budget</button></Tab>
     <Tab><button className="border-2 rounded-md px-4 my-3 bg-blue-400 py-1 text-black border-pink-500 font-bold">Mid-range</button></Tab>
     <Tab><button className="border-2 rounded-md px-4 my-3 bg-blue-400 py-1 text-black border-pink-500 font-bold">Compact</button></Tab>
     </div>

    </TabList>

    <TabPanel>
      <div className='mx-10 gap-5 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1'>
     {phone.map(title=><FilterCard key={title._id} title={title}/>)}
      </div>
    </TabPanel>
    <TabPanel>
      <div className='mx-10 gap-5 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1'>
     {flagship.map(title=><FilterCard key={title._id} title={title}/>)}
      </div>
    </TabPanel>

    <TabPanel>
    <div className='mx-10 gap-5 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1'>
     {budget.map(title=><FilterCard key={title._id} title={title}/>)}
     </div>
    </TabPanel>

    <TabPanel>
    <div className='mx-10 gap-5 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1'>
     {midRange.map(title=><FilterCard key={title._id} title={title}/>)}
     </div>
    </TabPanel>

    <TabPanel>
    <div className='mx-10 gap-5 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1'>
     {compact.map(title=><FilterCard key={title._id} title={title}/>)}
     </div>
    </TabPanel>
  </Tabs>

        </div>
    );
};

export default Home;
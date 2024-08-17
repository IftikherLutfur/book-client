import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import FilterCard from "./FilterCard";
import { useEffect, useState } from "react";
import axios from "axios";

const Brands = () => {

    const [phone, setPhone] = useState([]);

    useEffect(()=>{
        axios.get('http://localhost:5000/books')
        .then(res=>{
            setPhone(res.data)
        })
        .catch(err=>console.log(err))
    },[])

    const onePlus = phone.filter(bok=>bok.brand ==='OnePlus')
    const samsung = phone.filter(bok=>bok.brand === 'Samsung')
    const apple = phone.filter(bok=>bok.brand === 'Apple')
    const google = phone.filter(bok=>bok.brand === 'Google')
    return (
        <div>
             <Tabs>
    <TabList>
      <h1 className="text-center font-bold text-xl">Brands</h1>
     <div className="flex text-center gap-5 ml-[370px]">
     <Tab><button className="border-2 rounded-md px-4 my-3 bg-blue-400 py-1 text-black border-pink-500 font-bold">All</button></Tab>
     <Tab><button className="border-2 rounded-md px-4 my-3 bg-blue-400 py-1 text-black border-pink-500 font-bold">OnePlus</button></Tab>
     <Tab><button className="border-2 rounded-md px-4 my-3 bg-blue-400 py-1 text-black border-pink-500 font-bold">Samsung</button></Tab>
     <Tab><button className="border-2 rounded-md px-4 my-3 bg-blue-400 py-1 text-black border-pink-500 font-bold">Apple</button></Tab>
     <Tab><button className="border-2 rounded-md px-4 my-3 bg-blue-400 py-1 text-black border-pink-500 font-bold">Google</button></Tab>
  
     </div>

    </TabList>

    <TabPanel>
      <div className='mx-10 gap-5 grid grid-cols-3'>
     {phone.map(title=><FilterCard key={title._id} title={title}/>)}
      </div>
    </TabPanel>
    <TabPanel>
      <div className='mx-10 gap-5 grid grid-cols-3'>
     {onePlus.map(title=><FilterCard key={title._id} title={title}/>)}
      </div>
    </TabPanel>
    <TabPanel>
      <div className='mx-10 gap-5 grid grid-cols-3'>
     {samsung.map(title=><FilterCard key={title._id} title={title}/>)}
      </div>
    </TabPanel>

    <TabPanel>
    <div className='mx-10 gap-5 grid grid-cols-3'>
     {apple.map(title=><FilterCard key={title._id} title={title}/>)}
     </div>
    </TabPanel>

    <TabPanel>
    <div className='mx-10 gap-5 grid grid-cols-3'>
     {google.map(title=><FilterCard key={title._id} title={title}/>)}
     </div>
    </TabPanel>
  </Tabs>
        </div>
    );
};

export default Brands;
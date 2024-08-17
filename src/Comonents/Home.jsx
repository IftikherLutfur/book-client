import { useEffect, useState } from "react";
import axios from "axios";

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import FilterCard from "./FilterCard";



const Home = () => {

    const [book,setBook] = useState([]);
    const [searchTerm, setSearchTerm] = useState('')
    // useEffect(()=>{
    //     fetch('book.json')
    //     .then(res=>res.json())
    //     .then(data=>setBook(data))
    // },[
    
    // ])

    useEffect(()=>{
        axios.get("http://localhost:5000/books")
        .then(res=>{
            setBook(res.data)
        })
        .catch(err=>console.log(err)
        )
    },[])


    const catFantasy = book.filter(bok=>bok.Category ==='Fantasy')
    console.log(catFantasy);
    

    const handleSearch = async() =>{
    
    try{
        const response = await axios.get('http://localhost:5000/books',{
            params: {search:searchTerm}
        });
        setBook(response.data)
    } 
    catch(error){
        console.error("Error fetching book", error)
    }
    
    }



    return (
        <div>
          <div>
          <h1>Search Books by Name</h1>
      <input
        type="text"
        placeholder="Enter book name"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
          </div>

          <Tabs>
    <TabList>
      <Tab>Fantasy</Tab>
      <Tab>Title 2</Tab>
    </TabList>

    <TabPanel>
     {catFantasy.map(title=><FilterCard key={title.id} title={title}/>)}
    </TabPanel>
    <TabPanel>
      <h2>Any content 2</h2>
    </TabPanel>
  </Tabs>

        </div>
    );
};

export default Home;
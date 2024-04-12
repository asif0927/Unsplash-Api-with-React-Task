import React, { useState } from "react"
import Image from "./components/Image";
import Searchbar from "./components/Searchbar";
import axios from "axios";

function App() {
  const [images,setImages]=useState([]);

  const handleSearch = async (term) =>{
    try {
      const response = await axios.get('https://api.unsplash.com/search/photos',{
        headers:{
          Authorization: 'Client-ID VwG0Jk9yzHsr9gjEcI655qG-R0dIjyQwJx_9Dxn7pDI' 
        },
        params:{
          query: term
        }
      });
      setImages(response.data.results);
      console.log(response.data.results); 
    } catch (error) {
      console.error("Error fetching images:", error);
    }
  };

  const handleLog = (term) =>{
    console.log(term);
    console.log(images);
    console.log(handleSearch); 
  }

  return (
    <>
      <Searchbar search={handleSearch} setImages={setImages}/>
      <Image images={images} />
    </>
  )
}

export default App


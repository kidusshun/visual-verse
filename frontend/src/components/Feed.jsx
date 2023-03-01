import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { client } from '../client';
import { feedQuery, searchQuery } from "../utils/data";
import MasonryLayout from "./MasonryLayout";
import Spinner from './Spinner';
const Feed = () => {
  const [loading, setLoading] = useState(false)
  const { categoryId } = useParams();
  
  const [Pins, setPins] = useState(null)
  
  useEffect(() => {
    setLoading(true);
    if(categoryId){
      const query = searchQuery(categoryId);
      client.fetch(query)
        .then((data) => {
          setPins(data);
          setLoading(false);
        })
    }else{
      client.fetch(feedQuery)
        .then((data) => {
          setPins(data)
          setLoading(false)
        })
    }
  },[categoryId]) 

  if(!Pins?.length) return <h2>No pins found</h2>

  if(loading) return <Spinner message="We are adding new ideas to your feed!" />
  return (
    <div>
      { Pins && <MasonryLayout pins={Pins} /> }
    </div>
  )
}

export default Feed
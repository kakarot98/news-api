import React, { useState, useEffect } from "react";
import axios from "axios";
import Search from './search/Search'
import List from './list/List'

const News = () => {
  const [searchText, setSearchText] = useState("");

//   useEffect(() => {
//     console.log(process.env.REACT_APP_API_KEY);
//   }, []);

  const handleSubmit = async (text) => {
    if(text === "" || text === undefined || text === null){
      window.alert("Please type something before submitting")
      return
    }
    await axios
      .get(
        `https://newsapi.org/v2/everything?q=${text}&from=2022-03-07&sortBy=popularity&apiKey=${process.env.REACT_APP_API_KEY}`
      )
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <Search searchText={searchText} setSearchText={setSearchText} handleSubmit={handleSubmit}/>
    </div>
  );
};

export default News;

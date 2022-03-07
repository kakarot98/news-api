import React, { useState, useEffect } from "react";
import axios from "axios";
import Search from './search/Search'
import List from './list/List'
import Box from "@mui/material/Box";

const News = () => {
  const [searchText, setSearchText] = useState("");
  const [data, setData] = useState()
  const [articles, setArticles] = useState([])

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
      .then((res) => {setData(res.data); setArticles(res.data.articles); console.log(res.data)})
      .catch((err) => console.log(err));
  };

  return (
    <Box sx={{
      display: "flex",
      flexDirection: "column",
      alignContent: "center",
      alignItems: "center",
      justifyContent: "center"
    }}>
      <Search searchText={searchText} setSearchText={setSearchText} handleSubmit={handleSubmit}/>
      {articles.length>1 ? <List data={data} articles={articles}/> : (<div></div>)}
    </Box>
  );
};

export default News;

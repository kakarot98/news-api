import React, {useState, useEffect} from 'react'
import News from "./components/News";

export default function App() {
  useEffect(()=> {
    console.log(process.env.REACT_APP_API_KEY)
  }, [])
  return (
    <div className="App">
      <News />
    </div>
  );
}

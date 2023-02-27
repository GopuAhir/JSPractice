import './App.css';
import Allproducts from './component/Allproducts';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './component/Login';
import CollectionItem from "./component/CollectionItem"
import { useState } from 'react';


function App() {
  const[data,setData] = useState()

function hello(data){
  setData(data);
}

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Allproducts data={hello}/>} />
          <Route path='/login' element={<Login />} />
          <Route path='/collect' element={<CollectionItem data = {data} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
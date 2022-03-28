import React from "react";
import {Routes,Route} from 'react-router-dom';
import BlogDetail from "./Component/BlogDetails";
import BlogForm from "./Component/BlogForm";
import Home from "./Component/home";
import Navbar from "./Component/Navigation";


function App() {
  return (

      <div className="App">
        <Navbar/>
        <div className="content">
          <Routes> 
            <Route exact path="/" element={<Home/>}/>            
            <Route exact path="/detail/:id" element={<BlogDetail/>}/>  
            <Route exact path="/addblog" element={<BlogForm/>}/>          
          </Routes>
        </div>
      </div>
     
  );
}

export default App;

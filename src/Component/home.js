import { useState,useEffect } from "react";
import Blogs from '../Component/blogs';




const Home = () => {
    const [blogs, setblogs] = useState(null)
   
    useEffect(() => {
    
      setTimeout(()=>{
        fetch(" http://localhost:8000/blogs")
        .then(resp =>resp.json())
        .then(data =>setblogs(data))
      },1000)
      
    }, []);
    return ( 
        <>
          {!blogs && <div>Loading...</div>}
          {blogs &&   <Blogs blogs={blogs}/>}                   
        </>

     );
}
 
export default Home;
import { useParams } from "react-router";
import { useEffect,useState } from "react";
import {useNavigate} from 'react-router-dom';

const BlogDetail = () => {
    const {id} = useParams();
    const [blog, setblog] = useState(null)
    const history = useNavigate();
    //const[status,setstatus] = useState();


    useEffect(() => {
        fetch("http://localhost:8000/blogs/"+id)
        .then(response =>response.json())
        .then(data => setblog(data))
    }, [id]);

    const deleteBlog=(ids)=>{
        fetch("http://localhost:8000/blogs/"+ids,{
            method:'DELETE',
        })
        .then(response =>{response.status === 200 && history('/')
        
        }) ;
     
          
    }

    return (  
        <>  
        {!blog && <div>Loading...</div>}  
         {blog &&
         <div>
             <div className="blog_title">
                {blog.title}
            </div>
            <div className="blog_author">
                -{blog.author}
            </div> 
            <p className="blog_content">
                -{blog.content}
            </p>
            <button onClick={()=>deleteBlog(blog.id)}>Delete</button> 
        </div>
         }
          
           
           

        </>
    
     );
}
 
export default BlogDetail;
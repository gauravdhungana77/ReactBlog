import { useState } from "react";

const BlogForm = () => {
 const[status,setstatus] = useState(0);


    const[data,setdata] = useState({
        title:"",
        author:"",
        content:""
    })

    const datas = (event)=>{
        const {value,name} = event.target;
        setdata((object)=>{
            return{
                ...object,
                [name]:value
            }
        })
    }

    const handelSubmit = (event)=>{
        event.preventDefault();
        fetch("http://localhost:8000/blogs",{
            method :"POST",
            headers: {
                'Content-Type':'application/json'               
              },
              body: JSON.stringify(data)

        }).then(response =>{setstatus(response.status)})
        .then(
            data.title="",
            data.author="",
            data.content=""

        );
                     
                       
    }

 

    return ( 
        
        <>
        {status === 201 &&  
            <div class="alert alert-success alert-dismissible fade show" role="alert">
                <strong>Success</strong> Blog successfully posted.
                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
         }  
        <div className="container">
           <form onSubmit={handelSubmit}>
                <div class="form-group">
                    <label for="title">Title</label>
                    <input type="text" class="form-control" id="title" name="title" value={data.title} onChange={datas} placeholder="Enter Title"/>                   
                </div>
                <div class="form-group">
                    <label for="author">Author</label>
                    <input type="text" class="form-control" id="author" name="author" value={data.author} onChange={datas} placeholder="Author"/>
                </div> 
                <div class="form-group">
                    <label for="content">Content</label>
                    <textarea class="form-control" id="content" name="content" rows="10" value={data.content} onChange={datas} placeholder="Write blog here"/>                   
                </div>
                <button type="submit" class="btn btn-primary" >Submit</button>
            </form> 
        </div>
        </>
     );
}
 
export default BlogForm;
import { Link } from "react-router-dom";
const Blogs = (props) => {
    return ( 
        <>
        <div className="blogs_banner">All Blogs</div>
            {props.blogs.map((blog)=>(
                <div key={blog.id} className="blog_main">
                    <div className="blog_title">
                        {blog.title}
                    </div>
                    <div className="blog_author">
                        -{blog.author}
                    </div>
                    <Link to={`/detail/${blog.id}`}>More details</Link>
                </div>
            ))}
        </>
     );
}
 
export default Blogs;
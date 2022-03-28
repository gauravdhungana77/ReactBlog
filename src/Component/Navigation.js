
import { Link } from "react-router-dom";
import "../Component/Navigation.css";


const Navbar = () => {


    return (  
        <>
       <div className="mainbar">
           <div className="banner">Blog</div>
           <div className="sub_links_div">
               <Link  to="/"className="link">Home</Link>
               <Link to="/addblog" className="link">AddBlog</Link>
           </div>
       </div>
        
        </>
    );
}
 
export default Navbar;
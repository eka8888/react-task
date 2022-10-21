import React,{useState,useEffect} from 'react'
import axios from 'axios'
import './Posts.css';
import Pagination from './Pagination';

//import { useNavigate } from "react-router-dom";





const PostsList = () => {
    const [articles,setArticles]=useState([])
    const url='https://jsonplaceholder.typicode.com/posts'
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(20);

    
    //const navigate = useNavigate();

  
    useEffect(()=>{

        axios.get(url)
          .then(response=>{ 
            setArticles(response.data)
          })
          .catch((error)=>console.log(error))
          
        },[])

        const indexOfLastPost = currentPage * postsPerPage;
        const indexOfFirstPost = indexOfLastPost - postsPerPage;
        const currentPosts = articles.slice(indexOfFirstPost, indexOfLastPost);
        const paginate = pageNumber => setCurrentPage(pageNumber);
   

    return ( <div>
    {currentPosts.map(el=>{
    return (

<div className="news-app">
            <div class="news-item">
            <h1 className='title'>{el.title}</h1>
            <p className='text'>{el.body}</p>
            
            <a ><button className='btn' >Detail
        </button></a>
        
    </div> 
    </div> 

    )

})}

      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={articles.length}
        paginate={paginate}
      />

        </div>
    )
}

export default PostsList
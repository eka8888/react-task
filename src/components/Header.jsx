import React from 'react'
import { Route,Routes} from 'react-router-dom'
import PostsList from './PostsList';
import UserPage from './UserPage';

function Header() {
  return (
    <div >
  
     {/* <Routes>
       <Route path='/' element={<PostsList/>} />
       <Route path='UserPage' element={<UserPage/>}/>
      <Route/>
     </Routes> */}
     <ul>
      <li>Post Lists</li>
      <li>User Page</li>
     </ul>
    
  </div>
  )
}

export default Header

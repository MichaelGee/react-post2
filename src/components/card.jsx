import '../styles/main.css';
import { Link, useParams } from 'react-router-dom';
import { useState } from 'react';

const Card = ({item}) => {
   console.log(item)

   const {title, body, userid, id, author} = item
  
  // const {userid} = useParams;

     return(
       
         <div className="card">
           <h1 className="title"> {title} </h1>
           <p className="content">{body}</p>
            {/* this sends the users to a specific url (their post) */}
           <Link to={`/userposts/${userid}`} className="post-link"> Post by: user {author} {userid}</Link>
             
         </div>
       
  )
}

export default Card;

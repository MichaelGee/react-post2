
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import '../styles/create.css';


const Create = () => {
    const [ title, setTitle ] = useState('');
    const [ body, setBody ] = useState('');
    const [ author, setAuthor ] = useState('');
    const [ isPending, setIsPending ] = useState(false);
    const history = useHistory()
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const post = { title, body, author};

        fetch('http://localhost:8000/posts', {
            // this is where we tackle the data and define the method (post)
            method: 'POST',
            headers: {"Content-Type": "application/json" },
            body: JSON.stringify(post)
            // the above code is asynchronous and it returns a promise
        }).then(() => {
            console.log('new Post created');
            setIsPending(false);
            history.push("./home");
        })
    }

    return (
       <div className="create">
           <h1> Add a New Blog </h1>
           <form onSubmit={handleSubmit}>
               <label> Post Title </label>
               <input 
               type="text" 
               required
                value={title}
                placeholder="My Heading"
                onChange={(e) => setTitle(e.target.value)}
               />

               <label> Post by </label>
               <input 
               type="text" 
               required
                value={author}
                placeholder="Please Enter Your Name"
                onChange={(e) => setAuthor(e.target.value)}
               />

               <label> Post Info </label>
               <textarea 
               required
                value={body}
                placeholder="Enter Your Message"
                onChange={(e) => setBody(e.target.value)}
               />
              
           <button> Add Post </button>
           {/* { !isPending && <button disabled> Updating Post </button>} */}

           </form>
       </div>
    )
}

export default Create

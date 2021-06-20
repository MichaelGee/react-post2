import Card from "../components/card";


const PostList = ({ data}) => {

    // const posts = props.posts; 
    console.log(data)   

    return(
        <div className="post-list">
            
      {/* this creates a new array containing cards and it is used to render all our cards.    */}
     
     {/* { data && data?.map((item) => (
         <Card  item={item}/>
          
     ) )} */}

     

        </div>
    )
}

export default PostList;
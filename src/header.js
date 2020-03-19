import React from "react";

function Header(){
    return(
        <div className = "header">
            <h1>Astronomy Photo of the Day</h1>
        </div>
    );
}

export default Header;




// for Day 2?
// const PostHeader = props => {
//     return (
//       <div className="post-header">
//         <div className="post-thumb-wrapper">
//           <img
//             alt="post header"
//             className="post-thumb"
//             src={props.thumbnailUrl}
//           />
//         </div>
//         <h2>{props.username}</h2>
//       </div>
//     );
//   };
  
//   export default PostHeader;
import React from 'react';
// import faker from 'faker';

import Post from './post';
import './posts.css';

class Posts extends React.Component{
    renderList(){
        let array1 = ['animals', 'food', 'nature', 'sports'];
        return  array1.map((x,index) => {
            
            return <Post name={x} key={index} />});
        
    }
    render(){
        return(
            <div>
                {this.renderList()} 
            </div>
        );
    }    
}

export default Posts;
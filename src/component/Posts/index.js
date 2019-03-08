import React from 'react';
import {connect} from 'react-redux';
import Post from './post';
import './posts.css';
import {fetchPosts,commentAdd} from '../action';
import NewPost from '../Posts/newPosts';
class Posts extends React.Component{
constructor(props){
    super(props);
    this.props.fetchPosts();
    this.state={
        commentText:''
    }
}


handleSubmit=(value,event)=>{
    event.preventDefault();
    event.target.reset();    
    const newComment={...value,comment:this.state[value.name]};   
    //console.log('newcom',newComment)
    this.props.commentAdd({newComment});

}

textChange=(e)=>{
    //console.log('change',e.target);
    let name=e.target.name;
    let value=e.target.value;
    this.setState({[name]:value})
    //this.setState({commentText:value});
}
    renderList(){   
        return  this.props.Post.map(x => {            
            return <Post list={x}  handleClick={this.handleSubmit} textChange={this.textChange}/>});        
        }
    render(){        
        return(
            <div>
                <NewPost></NewPost>
                {this.renderList()} 
            </div>
        );
    }    
}


const MapStateToProps=(state)=>{
    return {Post:state.Post}
}
export default connect(MapStateToProps,{fetchPosts,commentAdd})(Posts);
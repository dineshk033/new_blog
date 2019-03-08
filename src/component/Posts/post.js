import React from 'react';
import {connect} from 'react-redux';

import {commentShow,likePosts,disLikePosts } from '../action';
import './posts.css'
function Post(props){

    const parentInput= {name:props.list.name,avatar:props.list.avatar, like:''};

    function renderList(){
       return props.list.comment.map((item,index)=>{
           // console.log(item);
           if(item.name!==props.list.name){
           return (
             //item.name===
                <li className="list-group-item" key={index}>
                    <div  className="media">   
                        <img src={item.avatar} className="mr-3 avatar" alt={item.name}/>
                        <div className="media-body">
                            <h6 className="mt-0 mb-1">{item.name}</h6>
                                {item.comment}
                        </div>
                    </div>
                </li>)} else{
                 return (
                    //item.name===
                       <li className="list-group-item" key={index}>
                             
                           <div  className="media float-right">
                           
                                <div className="media-body text-right ">
                                   <h6 className="mt-0 mb-1 ">You</h6>
                                       {item.comment}
                               </div>
                               <img src={item.avatar} className="ml-3 avatar float-right" alt={item.name}/> 
                         </div>
                       </li>)}
            }        
        ); 
    }
    
    function Likes_Posts(id){
        if(props.list.starred){
            props.disLikePosts(id)
        } else {
            props.likePosts(id)
        }
        
    }
 
    return(
        
        <div className="card  mb-3">
            <div className="card-header">
                <img src={props.list.avatar} alt="Avatar" className="avatar"/>
                <span className="card-title">{props.list.name}</span>
            </div>
            <figure className="figure">
                <img src={props.list.image} alt="Animals" className="card-img-top" />
                <figcaption className="figure-caption">
                    <span className={!props.list.starred ?"material-icons img-icon":"material-icons img-select"  }
                     onClick={()=>{Likes_Posts(props.list.id)}}>favorite</span>{props.list.likes} Likes
                    <span 
                    className={props.state !==props.list.id ?"material-icons img-icon":"material-icons img-select"  }
                    onClick={()=>{props.commentShow(props.list.id)}}>comment</span>
                    <span className="material-icons img-icon">share</span>
                    <span className="material-icons img-icon float-right">bookmark</span>
                </figcaption>
            </figure>
            <div className="card-body">
                <h5 className="card-title">{props.list.title}</h5>
                <p className="card-text">{props.list.sentences}</p>
                 {props.state ===props.list.id && (
                <React.Fragment>
                 <ul className="list-group">
                    {renderList()}
                </ul>
               
                    <form className="input-group " onSubmit={(event)=>props.handleClick(parentInput,event)}>
                    <input type="text" className="form-control" placeholder="Comment Here" name={props.list.name}
                    onChange={props.textChange} aria-label="Comment Here" aria-describedby="basic-addon2"/>
                    <div className="input-group-append">
                        <button className="btn btn-outline-success" id={props.list.id}>Add</button>
                    </div>
                    </form>
                </React.Fragment>)}
            </div>
            
        </div>
    );
}
const MapStateToProps=state=>{
    //console.log('posts',state);
    return {state:state.commentShow.id}
}
export default connect(MapStateToProps,{commentShow,likePosts,disLikePosts})(Post);
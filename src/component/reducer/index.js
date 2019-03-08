import {combineReducers} from 'redux';
import {postLists} from '../../api/lists';

const stateStore=postLists;
const posts=(state=stateStore,action)=>{
    switch(action.type){
        case 'FETCH_POSTS':
            return state;
        case 'NEW_POSTS':  
            //console.log('new_posts',action.payload)  
            let newPost=   [...state];
            newPost.unshift(action.payload)
            return newPost;
        case 'COMMENT_ADD':       
            let OldState=state.find(e=> {return e.name===action.payload.name});           
            let newProps={...OldState,comment:[...OldState['comment'],action.payload]}
            let retState=state.map(e=> {return e.name===action.payload.name?newProps:e});
            //console.log('old',retState);
            return retState;
        case 'LIKES_POSTS':            
            let OldLikes=state.find(e=> {return e.id===action.payload});
            if(OldLikes.starred){
                return state;
            }
            let newProp={...OldLikes,likes:OldLikes.likes+1,starred:true};
           // console.log('old',newProp);
            let retStates=state.map(e=> {return e.id===action.payload?newProp:e});
            return retStates;
        case 'DISLIKES_POSTS':            
            let OldDisLikes=state.find(e=> {return e.id===action.payload});            
            let newPro={...OldDisLikes,likes:OldDisLikes.likes-1,starred:false};
           // console.log('old',newProp);
            let retStat=state.map(e=> {return e.id===action.payload?newPro:e});
            return retStat;
        default:
            return state;
    }
   // return state;
}

const commentShow=(state={id:''},action)=>{

    switch(action.type){
        case 'COMMENT_SHOW':
            console.log(action.payload)
            return {id:action.payload}        
        default:
            return state;
    }
    
}

export default combineReducers({Post:posts,commentShow:commentShow});
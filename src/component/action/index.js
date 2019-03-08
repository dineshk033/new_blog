
export const posts =(post)=>{
    return{
        type:'NEW_POSTS',
        payload:post
    }
}

export const commentShow=(id)=>{
    return {
        type:'COMMENT_SHOW',
        payload:id
    }
}

export const commentAdd=(comment)=>{
    return {
        type:'COMMENT_ADD',
        payload:comment.newComment
    }
}

export const fetchPosts =()=>{
    return {
        type:'FETCH_POSTS'
    }
}

export const likePosts=(id)=>{
    return{
        type:'LIKES_POSTS',
        payload:id
    }
}

export const disLikePosts=(id)=>{
    return{
        type:'DISLIKES_POSTS',
        payload:id
    }
}
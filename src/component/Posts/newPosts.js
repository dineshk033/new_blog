import React from 'react';
import faker from 'faker';
import {connect} from 'react-redux';

import {posts} from '../action'
class NewPosts extends React.Component{

    state={
        comment:'',
        title:'',
        customFile:{name:'Choose Image'},file: '',imagePreviewUrl: ''
    }
    handleInpChanges=(event)=>{
         const name=event.target.name;
         const value=name==="customFile"?event.target.files[0]:event.target.value;
         //console.log(value);
         this.setState({[name]:value});
         if(name==="customFile")  {
         let reader = new FileReader();
        let file = event.target.files[0];
    
        reader.onloadend = () => {
          this.setState({
            file: file,
            imagePreviewUrl: reader.result
          });
        }
    
        reader.readAsDataURL(file)}
    }
    handleSubmit=(event)=>{
        event.preventDefault();
        event.target.reset();   
        this.setState({comment:'',title:'',customFile:{name:'Choose Image'}})
        let newPost={id:faker.random.uuid(),
                    name:faker.name.findName(),
                    avatar:faker.image.avatar(),
                    image:this.state.imagePreviewUrl,
                    title:this.state.title,
                    sentences:this.state.comment,
                    starred:false,
                    likes:0,
                    comment:[],
                    bookmark:''}
        this.props.posts(newPost);
        //console.log(this.state);
        
    }
    render(){
        
        return ( <form className="card mb-3" onSubmit={this.handleSubmit} autoComplete="off">
                    <div className="card-body">    
                        <div className="form-group">
                            <label for="comment">New Post</label>
                            <input type="text" placeholder="Post title" className="form-control"
                            name="title" value={this.state.title} onChange={this.handleInpChanges} required/>
                            <textarea className="form-control" value={this.state.comment} placeholder="comment here" onChange={this.handleInpChanges}
                             name="comment" required rows="3">
                             </textarea>
                        </div>
                        <div className="custom-file "  >
                            <input type="file"  accept="image/*" className="custom-file-input" onChange={this.handleInpChanges} name="customFile"/>
                            <label className="custom-file-label" for="customFile">{this.state.customFile.name}</label>
                        </div>
                    </div>
                    <div class="card-footer text-muted">
                        <button className="form-control btn btn-success" >Post</button>
                    </div>
            </form>)
            
    }
}

export default connect(null,{posts})(NewPosts);
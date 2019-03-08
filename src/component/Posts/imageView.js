import React from 'react';
import thumbnail from '../../images.png'

class ImageView extends React.Component{

    state={loading:true};

    handleLoadSpinner=()=>{
        this.setState({loading:false})
    }

    render(){
        return(
            <React.Fragment>
            <img src={this.props.avatar}  onLoad={this.handleLoadSpinner} alt='not found' className={this.props.ClassView } />        
            {/* {this.state.loading && (<div className={this.props.ClassView+' spinner-grow '} role="status">
             <span className="sr-only">Loading...</span>
            </div>)} */}
            {this.state.loading &&  <img src={thumbnail} alt="thumbnail" className={this.props.ClassView } />}
            </React.Fragment>
            );
    }
}

export default ImageView;
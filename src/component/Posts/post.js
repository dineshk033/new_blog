import React from 'react';
import faker from 'faker';

function Post(props){
    return(
        <div className="card  mb-3">
            <div className="card-header">
                <img src={faker.image.avatar()} alt="Avatar" className="avatar"/>
                <span className="card-title">{faker.name.findName()}</span>
            </div>
            <figure className="figure">
                <img src={faker.image.image()} alt="Animals" className="card-img-top" />
                <figcaption class="figure-caption">
                    <span className="material-icons img-icon">favorite_border</span>
                    <span className="material-icons img-icon">comment</span>
                    <span className="material-icons img-icon">share</span>
                    <span className="material-icons img-icon float-right">bookmark_border</span>
                </figcaption>
            </figure>
            <div className="card-body">
                <h5 className="card-title">{faker.lorem.slug()}</h5>
                <p className="card-text">{faker.lorem.sentences()}</p>
            </div>
            <div className="input-group ">
                <input type="text" className="form-control" placeholder="Comment Here" aria-label="Comment Here" aria-describedby="basic-addon2"/>
                <div className="input-group-append">
                    <button className="btn btn-outline-success" id="basic-addon2">Add</button>
                </div>
            </div>
        </div>
    );
}

export default Post;
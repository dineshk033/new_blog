import React from 'react';
import faker from 'faker';


function Profile(props){
    //console.log(faker.image.avatar());
    return (
    <div className="card mb-3">
        <img src={faker.image.avatar()} className="card-img-top img-thumbnail" alt="faker"/>
    <div className="card-body">
        <h5 className="card-title">{faker.name.firstName()}</h5>
        <p className="card-text">{faker.name.jobTitle()}</p>
        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
    </div>
    </div>
    );
}

export default Profile;
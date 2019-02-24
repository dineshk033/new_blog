import React from 'react';
import faker from 'faker';

class RightProfile extends React.Component{

    render(){
        return(
            <div >
            <div className="card mb-3 ">
                <div className="card-header bg-secondary">
                    <h5 className="text-light">Followers</h5>
                </div>
                <div class="list-group list-group-flush">
                    <a href="#" class="list-group-item list-group-item-action">
                        <img src={faker.image.avatar()} alt="Avatar" className="avatar"/>
                        <span className="card-title">{faker.name.findName()}</span>
                        
                    </a>
                    <a href="#" class="list-group-item list-group-item-action">
                        <img src={faker.image.avatar()} alt="Avatar" className="avatar"/>
                        <span className="card-title">{faker.name.findName()}</span>
                    </a>
                    <a href="#" class="list-group-item list-group-item-action">
                        <img src={faker.image.avatar()} alt="Avatar" className="avatar"/>
                        <span className="card-title">{faker.name.findName()}</span>
                        
                    </a>
                    <a href="#" class="list-group-item list-group-item-action">
                        <img src={faker.image.avatar()} alt="Avatar" className="avatar"/>
                        <span className="card-title">{faker.name.findName()}</span>
                    </a>
                </div>
                </div>
                <div class="card mb-3">
                    <div class="card-header bg-secondary">
                    <h5 className="text-light">Quote</h5>
                    </div>
                    <div class="card-body">
                        <blockquote class="blockquote mb-0">
                        <p>Look at the sky. We are not alone. The whole universe is friendly to us and conspires only to give the best to those who dream and work.</p>
                        <footer class="blockquote-footer"> <cite title="Source Title">A.P.J Abdul Kalam</cite></footer>
                        </blockquote>
                    </div>
                </div>
            </div>
        );
    }
}

export default RightProfile;
import React from 'react';

//structuring card component that can be reuseable
const Card = (props) =>{
    //destructing syntax
    const {name, email, id} = props;
    return (
        <div className="bg-light-green tc dib br2 pa1 ma2 grow bw1 shadow-5">
            <img src={`https://robohash.org/${id}?200x200`} alt="robots"/>
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card;
import React from 'react';


const Scroll = (props) =>{
    //rendering the child component using React-Chiildren
    return(
        <div style={{overflowY: 'scroll', border: '2px solid black', height: '800px' }}>
            {props.children}
        </div>
    );

}

export default Scroll;
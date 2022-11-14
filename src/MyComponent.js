import React from 'react';


function MyComponent(props){
    const {title, onButtonClicked} = props;
    
    return (
        <div>
            <h3>{title}</h3>
            <button onClick={onButtonClicked}>Click Meee!</button>
        </div>
    )
}

export default MyComponent;
import React from 'react';

const ItemPage = (props) => {
    console.log(props)
    return (<div>
            This is the item with id of {props.match.params.id}
    </div>)   
};

export default ItemPage;
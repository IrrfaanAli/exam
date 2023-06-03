import React from 'react';

const Product= (props) => {

    const {id,title,price,rating} = props.pro;
    return (
       <div>
             <p> {title}</p>
             <p> {price}</p>
             <p> {rating}</p>
            
        </div>
    );
};

export default Product;
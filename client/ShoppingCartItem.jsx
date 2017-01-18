import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Book extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {_id,title,genre,author,thumbnail,description,price} = this.props.item;
        return (
            <div className="cartItem">
                <img  className="cartItem-thumbnail" src={`/images/${thumbnail}`} alt=""/>
                <Link className="cartItem-title" to={`/books/${_id}`}>{title}</Link>
                <span className="cartItem-price">${price}</span>
            </div>
        );
    }
}

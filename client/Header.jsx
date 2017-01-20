import React, { Component } from 'react';
import { Link } from 'react-router';
import NavigationBar from './NavigationBar';

export default class Header extends Component {

    render() {
        return (
            <div className = "header">
                <NavigationBar/>
            </div>
        );
    }
}

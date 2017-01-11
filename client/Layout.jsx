import React, { Component } from 'react';
import { Link } from 'react-router';
import Header from './Header';
import Footer from './Footer';
import FlashMessagesList from './flash/FlashMessagesList'

export default class Layout extends Component {
    render() {
        return(
            <div>
                <Header/>
                <div className="site-content">
                    <div className="container">
                        <div className="main-wrap">
                            <FlashMessagesList/>
                            {this.props.children}
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        );
    }
}

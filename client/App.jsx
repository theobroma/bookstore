import React from 'react';
import $ from 'jquery';
import Book from './Book';
import Layout from './Layout';
import axios from 'axios';
import api from './api';


export default class App extends React.Component {
  static propTypes = {
    name: React.PropTypes.string,
  };

  constructor(props) {
    super(props);
    this.state = { items: [] };
  }


    componentDidMount() {
        api.listBooks().then(result=> {
            console.log(result);
            this.setState({items:result.data});
        });
    }

  render() {
    return (
        <div>
            <div className="container">
                <div className="text-left book-list">
                  {this.state.items.map((item)=>{
                        return (<Book key = {item._id} item = {item} /> )
                    }
                  )}
                </div>
            </div>}
                {<pre>{JSON.stringify(this.state,"", 4)}</pre>}
        </div>
    );
  }
}

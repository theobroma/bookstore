import React from 'react';
import $ from 'jquery';
import Book from './Book';
import Layout from './Layout';

export default class App extends React.Component {
  static propTypes = {
    name: React.PropTypes.string,
  };

  constructor(props) {
    super(props);
    this.state = { items: [] };
  }


    componentDidMount() {
        $.getJSON(`http://localhost:8080/api/books`)
            .then(result=> {

                this.setState({items:result});
            });
    }

  render() {
    return (
        <div>
            <div className="container">
                <div className="text-left">
                  {this.state.items.map((item)=>{
                        return (<Book key = {item.id} item = {item} /> )
                    }
                  )}
                  {this.props.children}
                </div>
            </div>}
                {/*<pre>{JSON.stringify(this.state,"", 4)}</pre>*/}
        </div>
    );
  }
}

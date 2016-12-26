import React from 'react';
import $ from 'jquery';
import Book from './Book';

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
      <div className="container">
        <div className="text-left">
          {this.state.items.map((item)=>{
                return (<Book key = {item.id} item = {item} /> )
            }
          )}
          {this.props.children}
          {/*<pre>{JSON.stringify(this.state,"", 4)}</pre>*/}
        </div>
      </div>
    );
  }
}

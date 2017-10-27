import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
const API_KEY = 'AIzaSyAsq3c34GtQhYHBPG8xR_m-eIwgtUg0YVE';

class App extends Component {
  constructor(props){
    super(props);

    this.state = { videos: [] };

    YTSearch({key: API_KEY, term: 'surfboards'}, videos => {
      this.setState({ videos });
      //this.setState({ videos: videos})
    });
  }
  render() {
    return (
      <div>
      <SearchBar />
      </div>
    );
  }
}




//Take this component's generated HTML
// and put it on the page
ReactDOM.render(<App />, document.querySelector('.container'));

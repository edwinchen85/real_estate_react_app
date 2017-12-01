import React, { Component} from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import Filter from './Filter';
import Listings from './Listings';
import listingsData from './data/listingsData';

class App extends Component {
  constructor () {
    super();
    this.state = {
      listingsData
    };
  }
  render () {
    console.log(this.state.listingsData);
    return (<div>
        <Header />
        <section className="content-area">
          <Filter />
          <Listings />
        </section>
      </div>);
  }
}

const app = document.getElementById('app');

ReactDOM.render(<App />, app);

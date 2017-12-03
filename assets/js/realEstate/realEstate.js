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
      listingsData,
      min_price: 0,
      max_price: 10000000,
      min_floor_space: 0,
      max_floor_space: 50000,
      elevator: false,
      swimming_pool: false,
      finished_basement: false,
      gym: false
    };

    this.change = this.change.bind(this);
  }

  change(event) {
    var name = event.target.name;
    var value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
    this.setState({
      [name]: value
    }, () => {
        console.log(this.state);
      }
    );
  }

  render () {
    console.log(this.state.listingsData);
    return (<div>
        <Header />
        <section className="content-area">
          <Filter change={this.change} globalState={this.state} />
          <Listings listingsData={this.state.listingsData}/>
        </section>
      </div>);
  }
}

const app = document.getElementById('app');

ReactDOM.render(<App />, app);

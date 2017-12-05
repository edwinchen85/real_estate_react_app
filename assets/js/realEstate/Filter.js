import React, { Component} from 'react';

export default class Filter extends Component {
  constructor () {
    super();
    this.state = {

    };
  }
  render () {
    return (
      <section id="filter">
        <div className="inside">
          <h4>Filter</h4>
          <label htmlFor="city">City</label>
          <select name="city" className="filters city" onChange={this.props.change}>
            <option value="All">All</option>
            <option value="Ridgewood">Ridgewood</option>
            <option value="Miami">Miami</option>
          </select>
          <label htmlFor="homeType">Home Type</label>
          <select name="homeType" className="filters homeType" onChange={this.props.change}>
            <option value="All">All Homes</option>
            <option value="Ranch">Ranch</option>
            <option value="Apartment">Apartment</option>
            <option value="Studio">Studio</option>
            <option value="Room">Room</option>
          </select>
          <label htmlFor="bedrooms">Bedrooms</label>
          <select name="bedrooms" className="filters bedrooms" onChange={this.props.change}>
            <option value="0">0+ BR</option>
            <option value="1">1+ BR</option>
            <option value="2">2+ BR</option>
            <option value="3">3+ BR</option>
            <option value="4">4+ BR</option>
          </select>
          <div className="filters price">
            <span className="title">Price</span>
            <input type="text" name="min_price" className="min-price" onChange={this.props.change} value={this.props.globalState.min_price} />
            <input type="text" name="max_price" className="max-price" onChange={this.props.change} value={this.props.globalState.max_price} />
          </div>
          <div className="filters floor-space">
            <span className="title">Floor Space</span>
            <input type="text" name="min_floor_space" className="min-floor-space" onChange={this.props.change} value={this.props.globalState.min_floor_space} />
            <input type="text" name="max_floor_space" className="max-floor-space" onChange={this.props.change} value={this.props.globalState.max_floor_space} />
          </div>
          <div className="filters extras">
            <span className="title">Extras</span>
            <label htmlFor="extras">
              <span>Elevators</span>
              <input type="checkbox" value="elevator" name="elevator" onChange={this.props.change} />
            </label>
            <label htmlFor="extras">
              <span>Swimming Pool</span>
              <input type="checkbox" value="swimming_pool" name="swimming_pool" onChange={this.props.change} />
            </label>
            <label htmlFor="extras">
              <span>Finished Basement</span>
              <input type="checkbox" value="finished_basement" name="finsihed_basement" onChange={this.props.change} />
            </label>
            <label htmlFor="extras">
              <span>Gym</span>
              <input type="checkbox" value="gym" name="gym" onChange={this.props.change} />
            </label>
          </div>
        </div>
      </section>
    );
  }
}

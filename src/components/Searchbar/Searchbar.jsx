import React, { Component } from "react";
import './Searchbar.css'

const INITIAL_STATE = {
  search: '',
};

class Searchbar extends Component { 
  state = { ...INITIAL_STATE };
  
  onInputChange = e => {    
    this.setState({ search: e.currentTarget.value.toLowerCase() });
  }
  
  onFormSubmit = e => {
    e.preventDefault();
    
    this.props.onSubmit(this.state.search);
    
    this.setState({ ...INITIAL_STATE });
  };
  
  render() { 
    return (
      <header className="Searchbar">
        <form className="SearchForm" onSubmit={this.onFormSubmit}>          
          <button className="SearchForm-button" type="submit">
            <span>Search</span>
          </button>

          <label className="SearchForm-button-label">
            <input
              className="SearchForm-input"
              type="text"
              name='search'
              placeholder="Search images and photos"
              value={this.state.search}
              onChange={this.onInputChange}  
            />
          </label>
        </form>
      </header>
    );
  };
};

export default Searchbar;
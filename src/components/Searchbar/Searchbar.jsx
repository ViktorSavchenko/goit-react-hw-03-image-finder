import React, { Component } from "react";
import PropTypes from 'prop-types';
import { BiSearch } from "react-icons/bi";
import { IconContext } from "react-icons";
import './Searchbar.css'

const INITIAL_STATE = {
  search: '',
};

class Searchbar extends Component { 
  state = { ...INITIAL_STATE };
  
  onInputChange = e => {    
    this.setState({ search: e.currentTarget.value});
  }
  
  onFormSubmit = e => {
    e.preventDefault();
    
    this.props.onSubmit(this.state.search.toLocaleLowerCase());
    
    this.setState({ ...INITIAL_STATE });
  };
  
  render() { 
    return (
      <header className="Searchbar">
        <form className="SearchForm" onSubmit={this.onFormSubmit}>
          <button className="SearchForm-button" type="submit">
            <IconContext.Provider value={{className: "Search-icon" }}>
              <BiSearch />
            </IconContext.Provider>
            
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

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Searchbar;
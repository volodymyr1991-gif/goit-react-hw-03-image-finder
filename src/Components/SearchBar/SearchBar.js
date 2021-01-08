import React, { Component } from "react";
import "./SearchBar.css";

export default class SearchBar extends Component {
  state = {
    inputValue: "",
  };

  handleChange=(e)=> {
    this.setState({ inputValue: e.target.value });
  }

  handleSabmit = e =>{
      e.preventDefault()

      console.log(this.state.inputValue);
      this.props.onSubmit(this.state.inputValue);
      this.setState({inputValue: ''})

  }

  render() {
    return (
      <header className="Searchbar">
        <form className="SearchForm" onSubmit={this.handleSabmit}>
          <button type="submit" className="SearchForm-button">
            <span className="SearchForm-button-label">Search</span>
          </button>

          <input
            className="SearchForm-input"
            type="text"
            value={this.state.inputValue}
            autocomplete="off"
            autofocus
            placeholder="Search images and photos"
            onChange={this.handleChange}
          />
        </form>
      </header>
    );
  }
}

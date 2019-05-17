import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import NavbarToggle from 'react-bootstrap/NavbarToggle';
import NavbarCollapse from 'react-bootstrap/NavbarCollapse';

class SearchBar extends Component {
  state = {
    keywords: ''
  }

  onInputChange = e => {
    this.setState({keywords: e.target.value});
  }

  onFormSubmit = e => {
    e.preventDefault();
    // @make callback function to app.js
    this.props.onKeywordsSubmit(this.state.keywords);

    //  clear form input
    this.setState({keywords: ''})
  }

  render() {
    return (
     <Navbar bg="dark" variant="dark" expand="sm" sticky="top">
      <Navbar.Brand href="#home" className="ml-4">Search Videos</Navbar.Brand>
      <NavbarToggle aria-controls="basic-navbar-nav" />
      <NavbarCollapse id="basic-navbar-nav">
      <Form inline className="ml-auto" onSubmit={this.onFormSubmit}>
      <FormControl 
        type="text"
        value={this.state.keywords}
        onChange={this.onInputChange} 
        placeholder="Enter keywords" 
        className="mr-sm-2"
      >
      </FormControl>
      <Button type="submit" variant="outline-primary">Search</Button>
      </Form>
      </NavbarCollapse>
     </Navbar>
    );
  }
}

export default SearchBar;

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FaAlignRight } from 'react-icons/fa';
import Login from './LoginRegister';

export default class Navbar extends Component {
  state = {
    isOpen: false
  };
  handleToggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };
  onChangeLink() {
    this.props.changeLink(this.state.homelink)
  }
  render() {
    return (
      <nav className="navbar">
        <div className="nav-center">
          <div className="nav-header">
            <Link to="/">
              <h1 className="saleLogo">Propert24</h1>
            </Link>
            <button type="button" className="nav-btn" onClick={this.handleToggle}>
              <FaAlignRight className="nav-icon" />
           
            </button>
          
          </div>
          <ul className={this.state.isOpen ? 'nav-links show-nav' : 'nav-links'}>
            
            <li>
              <Link to={"/Login"}><a>Login/Register </a></Link>

            </li>

          </ul>
        </div>
        
      </nav>
    );
  }
}

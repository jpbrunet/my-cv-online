import React, { Component } from 'react'
import { Icon, Navbar } from 'react-materialize'
import './MainNav.scss'

class MainNav extends Component {

  render() {
    return (
      <Navbar
        alignLinks="right"
        menuIcon={ <Icon>menu</Icon> }
        brand={
          <img src={ require( '../../images/logo.svg' ) } alt="logo" className="brand-logo p-1 mh-100" width="250"/>
        }
        className="black sticky-top"
      >
      </Navbar>
    )
  }
}

export default MainNav
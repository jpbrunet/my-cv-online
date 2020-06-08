import React, { Component, Fragment } from 'react'
import "./Profile.scss"

class Profile extends Component {
  render() {
    return (
      <Fragment>
        <img src={require('../../images/jp-brunet.JPG')} alt="" className="img-fluid"/>
      </Fragment>
    )
  }
}

export default Profile
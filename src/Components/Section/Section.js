import React, { Component } from 'react'
import './Section.scss'
import '../../images/svg/skill.svg'

class Section extends Component {
  render() {
    const { title } = this.props
    return (
      <section className="mainSection">
        <h2>{ title }</h2>
        <ul className="list-group ">
          <li className="list-group-item bg-transparent border-0">
            <h5>Gestion de projet</h5>
            <p className="ml-4">Gestion, Organisation de projet, analyse des besoins du client, Rédaction de cahiers des
              charges.</p>
          </li>
          <li className="list-group-item bg-transparent border-0">
            <h5>Développement Back-end</h5>
            <p className="ml-4">
              NodeJS - PHP
            </p>
          </li>
          <li className="list-group-item bg-transparent border-0">
            <h5>Développement Front-end</h5>
            <p className="ml-4">HTML / CSS3 + préprocesseur SCSS Javascript ReactJs React-native redux</p>
          </li>
        </ul>

      </section>
    )
  }
}

export default Section
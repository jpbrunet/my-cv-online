import React from 'react'
import './Header.scss'

const Header = ( props ) => {

  return (
    <header>
      <div className="d-flex">
        <img src={require('../../images/svg/logo-mini.svg')} alt="" width="250" />
        <img src={require('../../images/svg/cv-className.svg')} alt=""/>
      </div>
      <div className="mastHead">

        <div className="row p-0 m-0">
          <div className="col-11 m-0 p-0">
            <div className="nameHeader">Jean-Philippe</div>
            <div className="row p-0 m-0">
              <div className="nameHeader col-7 p-0 m-0">BRUNET</div>
              <div className="col-5 m-0 p-0">
                <div className="headInfo pt-1">38 Ans</div>
                <div className="headInfo pb-1">PERMIS A & B</div>
              </div>
            </div>
          </div>
          <div className="col-1">
            <div className="city my-1 mx-auto">Tours</div>
          </div>

          <h1>{ props.device === 'desktop' ? 'Concepteur Développeur Informatique' : 'Développeur Web' }</h1>

        </div>
      </div>

    </header>
  )
}

export default Header
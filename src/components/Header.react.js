import React from 'react';


const Header = ({header, subHeader}) => (
  <section className="content-header">
    <h1>
      {header}
      <small>{subHeader}</small>
    </h1>
    {/* <ol className="breadcrumb">
      <li><a href="#"><i className="fa fa-dashboard" /> Home</a></li>
       <li className="active">Dashboard</li>
     </ol>*/}
  </section>
)


Header.propTypes = {
  header: React.PropTypes.any,
  subHeader: React.PropTypes.any
}



export default Header

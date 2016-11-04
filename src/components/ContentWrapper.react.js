import React from 'react';


export const Content = (props) => (
  <section className="content">
    {props.children}
  </section>
)

Content.propTypes = {
  children: React.PropTypes.any
}


export const SubTitle = (props) => (
  <small>{props.children}</small>
)

SubTitle.propTypes = {
  children: React.PropTypes.string
}

export const Title = (props) => (
  <h1>
    {props.children}
  </h1>
)

Title.propTypes = {
  children: React.PropTypes.any
}

export const Header = (props) => (
  <section className="content-header">
    {props.children}
    {/* <ol className="breadcrumb">
      <li><a href="#"><i className="fa fa-dashboard" /> Home</a></li>
       <li className="active">Dashboard</li>
     </ol>*/}
  </section>
)


Header.propTypes = {
  children: React.PropTypes.element
}


export default {Content, Title, SubTitle, Header};

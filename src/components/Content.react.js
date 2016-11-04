import React from 'react';

const Content = (props) => (
  <section className="content">
    {props.children}
  </section>
)

Content.propTypes = {
  children: React.PropTypes.any
}


export default Content;

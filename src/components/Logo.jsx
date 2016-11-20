import React from 'react';

const Logo = props => (
  <span className="logo">
    {/* mini logo for sidebar mini 50x50 pixels */}
    <span className="logo-mini">{props.mini}</span>
    {/* logo for regular state and mobile devices */}
    <span className="logo-lg">{props.lg}</span>
  </span>
);

Logo.propTypes = {
  mini: React.PropTypes.node,
  lg: React.PropTypes.node,
};

export default Logo;

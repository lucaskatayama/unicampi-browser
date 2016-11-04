import React from 'react';

const Logo = (props) => {
  return (
    <span className="logo">
      {/* mini logo for sidebar mini 50x50 pixels */}
      <span className="logo-mini">{props.mini}</span>
      {/* logo for regular state and mobile devices */}
      <span className="logo-lg">{props.lg}</span>
    </span>
  );
}


Logo.propTypes = {
  mini: React.PropTypes.any,
  lg: React.PropTypes.any
}


export default Logo;


import React, {PropTypes} from 'react';


const UserImage = (props) => {
  return (
    <img src={props.src} className={props.className || 'img-circle'} alt="User Image" />
  )
}

UserImage.propTypes = {
  src: PropTypes.string,
  className: PropTypes.string
}

export default UserImage;

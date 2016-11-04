import React from 'react';
import FontAwesome from 'react-fontawesome';

const Loading = (props) => {
  let view = props.pending ? <FontAwesome name="spinner" spin size="2x" /> : <div>{props.children}</div>;
  return view
}


export default Loading;

import React from 'react';

import Content from 'components/Content.react';
import Header from 'components/Header.react';


const ContentWrapper = ({header, subHeader, children}) => (
  <div>
    <Header header={header} subHeader={subHeader} />
    <Content>
      {children}
    </Content>
  </div>
)


ContentWrapper.propTypes = {
  header: React.PropTypes.any,
  subHeader: React.PropTypes.any,
  children:React.PropTypes.any
}


export default ContentWrapper;

import 'admin-lte/plugins/slimScroll/jquery.slimscroll.js';
import 'bootstrap';
import 'admin-lte';
import 'font-awesome/css/font-awesome.min.css';
import 'admin-lte/bootstrap/css/bootstrap.min.css';
import 'admin-lte/dist/css/AdminLTE.min.css';
import 'admin-lte/dist/css/skins/skin-blue.min.css';

import React from 'react'

import Navbar from './Navbar.react';
import Sidebar from './Sidebar.react';
import Control from './Control.react';
import menu from 'config/menu';

const version = '1.0.0';

const Footer = (props) => {
  return (
    <footer className="main-footer">
      <div className="pull-right hidden-xs">
        Version <b>{props.version}</b>
      </div>
      All rights reserved.
    </footer>
  )
};

Footer.propTypes = {
  version: React.PropTypes.string
}



class Root extends React.Component {
  static propTypes = {
    children: React.PropTypes.any,
    version: React.PropTypes.string
  }


  constructor(){
    super();
    let width = document.body.offsetWidth;
    let sidebar = width > 800 ? false : true;
    this.state = {
      sidebar : sidebar,
      control: false
    }
  }

  toggleSidebar = () => {
    this.setState({sidebar : !this.state.sidebar});
  }

  toggleControl = () => {
    this.setState({control : !this.state.control});
  }

  render () {
    return (
      <div className={"skin-blue sidebar-mini " + (this.state.sidebar ? 'sidebar-collapse' : 'sidebar-open')}>
        <Navbar toggleSidebar={this.toggleSidebar} toggleControl={this.toggleControl}/>
        <Sidebar menu={menu}/>
        <div className="content-wrapper ">
          {this.props.children}
        </div>
        <Footer version={version}/>
        <Control open={this.state.control}/>
      </div>
    )

  }
}



export default Root;

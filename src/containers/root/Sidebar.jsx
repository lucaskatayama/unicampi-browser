import React from 'react';
import FontAwesome from 'react-fontawesome';
import UserImage from 'components/UserImage';
import SidebarMenu from 'containers/root/SidebarMenu';
import gravatar from 'utils/gravatar';

const UserPanel = (props) => {
  const srcImg = gravatar(props.email || '');
  return (
    <div className="user-panel">
      <div className="pull-left image">
        <UserImage src={srcImg} />
      </div>
      <div className="pull-left info">
        <p>User</p>
        <a href="#"><i className="fa fa-circle text-success" /> Online</a>
      </div>
    </div>
  );
};

UserPanel.propTypes = {
  email: React.PropTypes.string,
};

const Sidebar = props => (
  <div>
    <aside className="main-sidebar">
      {/* sidebar: style can be found in sidebar.less */}
      <section className="sidebar">
        {/* Sidebar user panel */}
        <UserPanel />
        {/* search form */}
        <form action="#" method="get" className="sidebar-form">
          <div className="input-group">
            <input type="text" name="q" className="form-control" placeholder="Search..." />
            <span className="input-group-btn">
              <button type="submit" name="search" id="search-btn" className="btn btn-flat">
                <FontAwesome name="search" />
              </button>
            </span>
          </div>
        </form>
        <SidebarMenu menu={props.menu} />
      </section>
    </aside>
  </div>
);

Sidebar.propTypes = {
  menu: React.PropTypes.arrayOf(React.PropTypes.object),
};

export default Sidebar;

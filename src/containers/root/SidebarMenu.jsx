import React from 'react';
import { Link } from 'react-router';
import FontAwesome from 'react-fontawesome';

const NavLink = (props, context) => {
  const isActive = context.router.isActive(props.to, true);
  const className = isActive ? 'active' : '';

  return (
    <li className={className}>
      <Link to={props.to} activeClassName="active">
        {props.children}
      </Link>
    </li>
  );
};

NavLink.contextTypes = {
  router: React.PropTypes.object,
};

NavLink.propTypes = {
  to: React.PropTypes.string,
  children: React.PropTypes.node,
};


const SidebarMenu = props => (
  <ul className="sidebar-menu">
    {
      props.menu.filter(e => !e.hidden).map((item, id) => {
        if (item.header && item.header) {
          return (
            <li key={id} className="header">{item.text}</li>
          );
        } else if (item.children && item.children.length > 0) {
          return (
            <li key={id} className="active treeview">
              <a href="#">
                <FontAwesome tag="i" name={item.icon} /> <span>{item.text}</span>
                <span className="pull-right-container">
                  <FontAwesome tag="i" name="angle-left" className="pull-right" />
                </span>
              </a>
              <ul className="treeview-menu">
                {
                  item.children.map((child, idx) => (
                    <NavLink key={idx} to={child.link}>
                      <FontAwesome tag="i" name="circle-o" /> {child.text}
                    </NavLink>
                  ))
                }
              </ul>
            </li>
          );
        }
        return (
          <NavLink key={id} to={item.link}>
            <FontAwesome tag="i" name={item.icon} /> <span>{item.text}</span>
            <span className="pull-right-container" />
          </NavLink>
        );
      })
    }
  </ul>
);

SidebarMenu.propTypes = {
  menu: React.PropTypes.arrayOf(React.PropTypes.object),
};

export default SidebarMenu;

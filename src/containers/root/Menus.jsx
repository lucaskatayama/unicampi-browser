import React from 'react';

import FontAwesome from 'react-fontawesome';
import { connect } from 'react-redux';

import { MessagesMenu, NotificationsMenu, UserAccountMenu } from 'components/RightMenu';
import * as ActionMessage from 'actions/messages';
import * as ActionNotification from 'actions/notifications';


const mapStateToProps = state => ({
  messages: state.messages.messages,
  notifications: state.notifications.notifications,
});


const mapDispatchToProps = dispatch => ({
  markMessagesRead: () => dispatch(ActionMessage.markAllRead()),
  markNotificationsRead: () => dispatch(ActionNotification.markAllRead()),
  listMessages: () => dispatch(ActionMessage.list()),
  listNotifications: () => dispatch(ActionNotification.list()),
});

const Menus = props => (
  <div className="navbar-custom-menu">
    <ul className="nav navbar-nav">
      <MessagesMenu messages={props.messages} onAllRead={props.markMessagesRead} />
      <NotificationsMenu
        notifications={props.notifications}
        onAllRead={props.markNotificationsRead}
      />
      <UserAccountMenu />
      <li>
        <a href="#" onClick={props.toggleControl}>
          <FontAwesome name="gears" />
        </a>
      </li>
    </ul>
  </div>
);

Menus.propTypes = {
  markMessagesRead: React.PropTypes.func,
  markNotificationsRead: React.PropTypes.func,
  toggleControl: React.PropTypes.func,
  messages: React.PropTypes.arrayOf(React.PropTypes.object),
  notifications: React.PropTypes.arrayOf(React.PropTypes.object),
};

export default connect(mapStateToProps, mapDispatchToProps)(Menus);

import React from 'react';

import FontAwesome from 'react-fontawesome';
import {connect} from 'react-redux';

import {MessagesMenu, NotificationsMenu, UserAccountMenu} from 'components/RightMenu.react';
import * as ActionMessage from 'actions/messages';
import * as ActionNotification from 'actions/notifications';


const mapStateToProps = (state) => {
  return {
    messages : state.messages.messages,
    notifications : state.notifications.notifications
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    markMessagesRead : () => {
      dispatch(ActionMessage.markAllRead())
    },
    markNotificationsRead : () => {
      dispatch(ActionNotification.markAllRead())
    },
    listMessages : () => {
      dispatch(ActionMessage.list());
    },
    listNotifications : () => {
      dispatch(ActionNotification.list());
    }

  }
}

class Menus extends React.Component {
  static propTypes = {
    listMessages: React.PropTypes.func,
    listNotifications: React.PropTypes.func,
    markMessagesRead: React.PropTypes.func,
    markNotificationsRead: React.PropTypes.func,
    toggleControl: React.PropTypes.func,
    messages: React.PropTypes.array,
    notifications: React.PropTypes.array,
  }

  componentWillMount(){
    // this.props.listMessages();
    // this.props.listNotifications();
  }
  componentDidMount(){
    // setInterval(() => {
    //   this.props.listMessages();
    //   this.props.listNotifications();
    // }, 10000);
  }

  render(){
    return (
      <div className="navbar-custom-menu">
        <ul className="nav navbar-nav">
          <MessagesMenu messages={this.props.messages} onAllRead={this.props.markMessagesRead}/>
          <NotificationsMenu notifications={this.props.notifications} onAllRead={this.props.markNotificationsRead} />
          {/*<TasksMenu tasks={tasks} />*/}
          <UserAccountMenu />
          {/* Control Sidebar Toggle Button */}
          <li>
            <a href="javascript:" onClick={this.props.toggleControl}>
              <FontAwesome name="gears" />
            </a>
          </li>
        </ul>
      </div>
    )
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Menus);

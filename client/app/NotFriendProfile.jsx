import React, { Component } from 'react'
import Nav from './Nav.jsx'
import { connect } from 'react-redux';
import ProfileFeedListEntry from './ProfileFeedListEntry.jsx'
import axios from 'axios';
import { Link } from 'react-router-dom';

const mapStateToProps = (state) => {
  return {
    friendinfo: state.friendinfoReducer.friendinfo,
    posts: state.postsReducer.posts,
		friends: state.friendsReducer.friends,
		chatRooms: state.chatRoomReducer.chatRooms,
		user: state.userReducer.user,
		friend: state.friendReducer.friend
  }
}

class NotFriendProfile extends Component {
  constructor(props) {
    super(props)
    this.state = {
      notFriend: true
    };
    this.handleAddFriend = this.handleAddFriend.bind(this);
  }

  handleAddFriend() {
    axios.post('/api/friend/addFriend', {
      friend: this.props.friendinfo.email,
      userId: this.props.user.id
    })
      .then(() => {
        this.setState({ notFriend: false })
        console.log('Added as friend!')
      })
      .catch(err => console.log(`Error adding friend ${err}`))
  }

  render() {
    return this.state.notFriend ?
    (
      <div className="profile-container">
        <Nav />
        <div>
          <img src={this.props.friendinfo.profilePicture} />
        </div>
        <div>
          Username: {this.props.friendinfo.nickname}
        </div>
        <div>
          Email: {this.props.friendinfo.email}
        </div>
        <Link to="/home"><button onClick={this.handleAddFriend}>Add Friend!</button></Link>
        <div>
          Add them as a friend to see their posts!
        </div>  
      </div>
    ) : <div>Added as friend!</div>
  }
}

export default connect(mapStateToProps)(NotFriendProfile);
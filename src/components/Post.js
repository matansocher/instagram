import React, { Component } from 'react';

import Avatar from './common/Avatar';

import '../styles/post.css';

class Post extends Component {
  render() {
    const {name, location, avatarURL, photoURL} = this.props.post;
    return (
      <div className="post-wrapper">

        <div className="post-header">

          <div className="post-header-avatar-wrapper">
            <Avatar avatar={avatarURL} />
          </div>

          <div className="post-header-details-wrapper">
            <div className="post-header-name">{name}</div>
            <div className="post-header-location">{location}</div>
          </div>

        </div>

        <div className="post-photo">
          <img src={require(`../assets/${photoURL}`)} className="photo" />
        </div>

        <div className="post-bottom">
          LIKE
          Share
        </div>

      </div>
    )
  }
}

export default Post;
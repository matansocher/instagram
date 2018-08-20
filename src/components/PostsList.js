import React, { Component } from 'react';

import _ from 'lodash';

import Post from './Post';
import LoadingIndicator from './common/LoadingIndicator';

import { getPosts } from '../actions/common_functions';

class PostsList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      loading: true
    }
  }

  componentDidMount() {
    const posts = getPosts();
    this.setState({ posts, loading: false });
  }

  renderPosts() {
    const { posts } = this.state;

    if(_.isEmpty(posts)) {
      return <div>No posts yet, add some friends</div>
    }

    return (
      posts.map((post) => {
        return <Post key={post.photoURL} post={post}/>
      })
    )
  }

  render() {
    if(this.state.loading) {
      return <LoadingIndicator />
    }
    return (
      <div>
        {this.renderPosts()}
      </div>
    )
  }
}

export default PostsList;

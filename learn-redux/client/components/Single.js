import React from 'react';
import Photo from './Photo';
import Comments from './Comments';

const Single = React.createClass({
  render() {
    const { postId } = this.props.params;
    const post = this.props.posts.map((post, index) => {
      return {
        index,
        post
      };
    }).filter(post => post.post.code == postId)[0];
    const postComments = this.props.comments[postId] || [];

    return (
      <div className="single-photo">
        <Photo post={post.post} i={post.index} {...this.props} />
        <Comments postComments={postComments} {...this.props} />
      </div>
    );
  }
});

export default Single;

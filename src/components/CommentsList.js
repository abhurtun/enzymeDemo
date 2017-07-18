import React, { Component, PropTypes } from 'react';
import Comment from './Comment';

class CommentList extends Component {
  constructor(props) {
    super(props);

    this.state = { comments: [] };
  }

  componentDidMount() {
    this.setState({
      comments: ['Comment number one', 'Comment number two']
    });
  }

  renderComments(comments) {
    return comments.map((comment, idx) => <Comment key={idx} comment={comment} />);
  }

  render() {
    const commentsNode = this.renderComments(this.state.comments);
    return (
      <div className="comments-list">
        {commentsNode}
        <button onClick={() => this.reverse(this.state.comments[0])}>A button</button>
      </div>
    )
  }

  reverse(word){
    var reversedWord = word.split('').reverse().join('');
    this.setState({
      comments:[reversedWord]
    });
  }
}

export default CommentList;
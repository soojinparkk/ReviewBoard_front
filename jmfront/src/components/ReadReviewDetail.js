import React, { Component } from 'react';

class ReadReviewDetail extends Component {
    render() {
        return (
            <div className="ReadReview">
                WRITER: {this.props.review.writer}<br></br>
                DATE: {this.props.review.createDate}<br></br>
                TITLE: {this.props.review.title}<br></br>
                CONTENT: {this.props.review.content}<br></br>
                LIKE: {this.props.review.likeNum}<br></br>
            </div>
        );
    }
}

export default ReadReviewDetail;
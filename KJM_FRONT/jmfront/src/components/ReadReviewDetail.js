import React, { Component } from 'react';

class ReadReviewDetail extends Component {
    render() {
        return (
            <div className="ReadReview">               
                <h2>TITLE: {this.props.review.title}</h2>
                <h4>CONTENT: {this.props.review.content}</h4>             
            </div>
        );
    }
}

export default ReadReviewDetail; 
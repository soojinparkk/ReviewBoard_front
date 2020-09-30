import React, { Component } from 'react';

import ReviewDetailLikeBtn from './ReviewDetailLikeBtn';

class ReadReviewDetail extends Component {
    render() {
        return (
            <div className="ReadReview">
                <article>
                    <h2>Review 상세보기</h2>
                    WRITER: {this.props.review.writer}<br></br>
                    DATE: {this.props.review.createDate}<br></br>
                    TITLE: {this.props.review.title}<br></br>
                    CONTENT: {this.props.review.content}<br></br>
                    LIKE: {this.props.review.likeNum}<br></br>
                </article>
            </div>
        );
    }
}

export default ReadReviewDetail;
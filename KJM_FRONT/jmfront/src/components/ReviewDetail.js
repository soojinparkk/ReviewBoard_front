import React, { Component } from 'react';
import ModifyReviewDetail from './ModifyReviewDetail';
import ReadReviewDetail from './ReadReviewDetail';
import ReadReviewDetailBtn from './ReviewDetailBtn';
import { Paper } from '@material-ui/core';

class ReviewDetail extends Component {
    // constructor(props) {
        //super(props)
        state = {
            mode: 'read',   // 현재 모드 (read, modify, delete)
            review: {       // 리뷰 하나의 상세 정보 담은 객체
                /*
                id: this.props.review.id,
                title: this.props.review.title,
                content: this.props.review.content,*/
                // writer: 'writer',
                // createDate: 'date',
                // likeNum: 0

                id: 0,
                title:'',
                content:''
            }
        }
    // }

    // 해당 모드에 따른 review 띄워줌
    getReview() {
        var _article = null;

        if (this.state.mode === 'read') {
            _article = <ReadReviewDetail review={this.state.review}></ReadReviewDetail>
            return _article

        } else if (this.state.mode === 'modify') {
            _article = <ModifyReviewDetail
                            review={this.state.review}
                            onSubmit={function(_title, _content){
                                var _review = Array.from(this.state.review);    // 현재 리뷰 객체 복사
                                _review = {
                                    id: this.state.review.id,
                                    title: _title,
                                    content: _content,
                                    // writer: this.state.review.writer,
                                    // createDate: this.state.review.createDate,
                                    // likeNum: this.state.review.likeNum
                                }

                                this.setState({
                                    review: _review,
                                    mode: 'read'
                                })

                            }.bind(this)}></ModifyReviewDetail>
            return _article
        }

    }

    render() {
        return(
            <div className="ReviewDetail">
                <ReadReviewDetailBtn
                    onChangeMode={function(_mode){
                        if (_mode === 'delete') {   // 현재 모드가 delete일 때
                            if (window.confirm('Really?')) {
                                // 홈 화면으로 돌아감
                            }
                        } else {
                                this.setState({     // 현재 모드가 modify일 때
                                    mode: _mode
                                });
                        }
                    }.bind(this)}>
                </ReadReviewDetailBtn>

                <Paper className="ReviewPosting">
                    {this.getReview()}
                </Paper>
            </div>
        )
    }
}

export default ReviewDetail;

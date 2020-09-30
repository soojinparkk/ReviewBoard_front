import React, { Component } from 'react';
import ModifyReviewDetail from './ModifyReviewDetail';
import ReadReviewDetail from './ReadReviewDetail';
import ReviewDetailBtn from './ReviewDetailBtn';
import { Paper } from '@material-ui/core';

const paperStyle = {
    padding: "20px",
    margin: "20px"
}

class ReviewDetail extends Component {
    constructor(props) {
        super(props)
        this.state = {
            mode: 'read',   // 현재 모드 (read, modify, delete, like)
            review: {       // 리뷰 하나의 상세 정보 담은 객체
                review_id: 0,
                writer: 'writer',
                createDate: 'date',
                title: 'title',
                content: 'content',
                likeNum: 0
            },
            // likeState: 0    // 현재 리뷰 좋아요 안 한 경우: 0 / 좋아요 한 경우: 1
        }
    }

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
                                    review_id: this.state.review.review_id,
                                    writer: this.state.review.writer,
                                    createDate: this.state.review.createDate,
                                    title: _title,
                                    content: _content,
                                    likeNum: this.state.review.likeNum
                                }

                                this.setState({
                                    review: _review,
                                    mode: 'read'
                                })

                                // 현재 리뷰 아이디, title, content 서버에 전송

                            }.bind(this)}></ModifyReviewDetail>
     
            return _article

        } 
        else if (this.state.mode === 'like') {
            
        }

    }

    /*
    async getDetailReview() {
        const _result = await 
    }
    */

    render() {
        return(
            // detail 선택한 리뷰 아이디 받아서
            // 서버에 보냄
            // 해당 리뷰 상세정보 담긴 객체 받아서
            // 위의 review 객체 setState

            <div className="ReviewDetail">
                <div className="ButtonSection">
                    <ReviewDetailBtn onChangeMode={function(_mode){
                            if (_mode === 'delete') {   // 현재 모드가 delete일 때
                                if (window.confirm('삭제하시겠습니까?')) {
                                    // 홈 화면으로 돌아감 (리뷰리스트 화면)
                                    // 서버한테 현재 review_id 보냄 -> 삭제 요청
                                }
                            } else {
                                this.setState({     // 현재 모드가 modify일 때
                                    mode: _mode
                                });
                            }
                        }.bind(this)}>
                    </ReviewDetailBtn>

                </div>

                <div className="ReviewSection">
                    <Paper className="Paper" style={paperStyle}>
                        {this.getReview()}
                    </Paper>
                </div>
            </div>
                
        )
    }
}

export default ReviewDetail;




/*
function ReviewDetail(props) {
    var mode = 'read'   //현재 mode 설정
    var review_id = 0
    var writer = 'writer'
    var results = []
    // 리뷰 아이디, 이메일 , title, content, date, 좋아요 수
    var [title, setTitle] = useState('title')
    var [content, setContent] = useState('content')
    var [likeNum, setLikeNum] = useState(0)

    return (
        <div className="ReviewDetail">
            <form>

            </form>
        </div>
    );
}
*/

/*
title, content, writer, date
수정, 삭제, 좋아요 버튼
좋아요 수
*/

/*
ReviewDetail 초기값 -> writer????
*/
/*
review_id : Int,
email : String,
title : String,
contents : String,
createdDate : String,
like : Int
*/

// api.getReviewDetail(리뷰 아이디, 이메일)
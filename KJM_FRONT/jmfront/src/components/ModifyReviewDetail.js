import React, { Component } from 'react';
import styled from "styled-components";
import { TextField } from '@material-ui/core';

// 밑의 버튼 나중에 상속해서 받아오면 됨
const SubmitButton = styled.button`
    background: #fcc419;
    /* hover 했을 때 밝아짐 */
    &: hover {
        background: #ffe066;
    }
    /* 클릭했을 때 색상이 어두워짐 */
    &: active {
        background: #f59f00;
    }
    border-radius: 4px;
    height: 45px;
    font-size: 17px;
    border: none;
    outline: none;
`;

const FormStyle = styled.form`
    display: flex;
    flex-direction: 'column';
`;

class ModifyReviewDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.review.review_id,
            title: this.props.review.title,
            content: this.props.review.content
        }
        this.inputFormHandler = this.inputFormHandler.bind(this);
    }

    inputFormHandler(e) {
        this.setState({
            [e.target.name]:e.target.value
        });
    }

    render() {
        return (
            <div className="ModifyReview">
                <FormStyle className="ModifyForm"
                    onSubmit={function(e){
                        e.preventDefault();
                        this.props.onSubmit(
                            this.state.title,
                            this.state.content
                        )
                    }.bind(this)}>
                    
                    <TextField
                        name="title"
                        value={this.state.title}
                        label="Title"
                        variant="outlined"
                        margin="normal"
                        onChange={this.inputFormHandler}>
                    </TextField>
                    
                    <TextField
                        name="content"
                        value={this.state.content}
                        label="Content"
                        variant="outlined"
                        margin="normal"
                        multiline
                        rows={4}
                        value={this.state.content}
                        onChange={this.inputFormHandler}>
                    </TextField>
                    
                    <SubmitButton 
                        variant="contained"
                        color="primary"
                        size="large"
                        type="submit">Submit
                    </SubmitButton>
                    
                </FormStyle>
            </div>
        );
    }
}

export default ModifyReviewDetail;

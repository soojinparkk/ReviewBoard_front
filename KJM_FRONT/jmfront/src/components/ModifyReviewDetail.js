import React, { Component } from 'react';
import { TextField } from '@material-ui/core';
import styled from 'styled-components';

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

class ModifyReviewDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.review.id,
            title: this.props.review.title,
            content: this.props.review.content
        }
        this.inputFormHandler = this.inputFormHandler.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    inputFormHandler(e) {
        this.setState({
            [e.target.name]:e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();
        this.props.onSubmit(
            this.state.title,
            this.state.content
        );
    }

    render() {
        return (
            <div className="ModifyReview">
                <form className="ReviewForm"
                    onSubmit={this.onSubmit}>

                    <TextField
                        name="title"
                        value={this.state.title}
                        margin="normal"
                        label="Title"
                        variant="outlined"
                        onChange={this.inputFormHandler}>
                    </TextField>
                    
                    <TextField
                        name="content"
                        value={this.state.content}
                        margin="normal"
                        multiline
                        rows={4}
                        variant="outlined"
                        onChange={this.inputFormHandler}>
                    </TextField>
           
                    <SubmitButton
                        variant="contained"
                        type="submit"
                        size="large">Submit
                    </SubmitButton>
      
                </form>
            </div>
        );
    }
}

export default ModifyReviewDetail;
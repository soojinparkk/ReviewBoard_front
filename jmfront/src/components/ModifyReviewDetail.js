import React, { Component } from 'react';

import { TextField, Button } from '@material-ui/core';


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
                <h2>Review 수정하기</h2>
                <form className="ModifyForm"
                    action="/update_process" method="post"
                    onSubmit={function(e){
                        e.preventDefault();
                        this.props.onSubmit(
                            this.state.title,
                            this.state.content
                        )
                    }.bind(this)}>

                    <p>
                        <TextField
                            required id="standard-required"
                            name="title"
                            margin="normal"
                            value={this.state.title}
                            onChange={this.inputFormHandler}>
                        </TextField>
                    </p>

                    <p>
                        <TextField
                            required id="standard-multiline-flexible"
                            name="content"
                            margin="normal"
                            multiline
                            rowsMax={4}
                            value={this.state.content}
                            onChange={this.inputFormHandler}>
                        </TextField>
                    </p>

                    <p>
                        <Button variant="contained" color="primary" type="submit">Submit</Button>
                    </p>

                </form>
            </div>
        );
    }
}

export default ModifyReviewDetail;

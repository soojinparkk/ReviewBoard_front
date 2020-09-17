import React, { Component } from 'react';

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
                        <input 
                            type="text"
                            name="title"
                            value={this.state.title}
                            placeholder="title"
                            onChange={this.inputFormHandler}>
                        </input>
                    </p>

                    <p>
                        <textarea 
                            name="content"
                            value={this.state.content}
                            onChange={this.inputFormHandler}>
                        </textarea>
                    </p>

                    <p>
                        <input type="submit"></input>
                    </p>

                </form>
            </div>
        );
    }
}

export default ModifyReviewDetail;

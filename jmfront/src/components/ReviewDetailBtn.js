import React, { Component } from 'react';

class ReviewDetailBtn extends Component {
    render() {
        return(
            <div className="Btn">
                <input
                    type="button"
                    value="modify"
                    onClick={function(e){
                        // e.preventDefault();
                        this.props.onChangeMode('modify');
                    }.bind(this)}>
                </input>

                <input
                    type="button"
                    value="delete"
                    onClick={function(e){
                        // e.preventDefault();
                        this.props.onChangeMode('delete');
                    }.bind(this)}>
                </input>

            </div>
        );
    }
}

export default ReviewDetailBtn;
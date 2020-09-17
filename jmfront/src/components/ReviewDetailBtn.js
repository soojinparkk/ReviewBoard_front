import React, { Component } from 'react';

import { Button, ButtonGroup } from '@material-ui/core';

class ReviewDetailBtn extends Component {
    render() {
        return(
            <div className="Btn">
                <ButtonGroup color="primary" aria-label="outlined primary button group">
                    <Button
                        type="button"
                        onClick={function(e){
                            this.props.onChangeMode('modify');
                        }.bind(this)}>modify
                    </Button>
                    <Button
                        type="button"
                        onClick={function(e){
                            this.props.onChangeMode('delete');
                        }.bind(this)}>delete
                    </Button>
                </ButtonGroup>

            </div>
        );
    }
}

export default ReviewDetailBtn;
import React, { Component } from 'react';

import { IconButton } from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';

class ReviewDetailLikeBtn extends Component {
    render() {
        return(
            <div className="LikeBtn">
                    <IconButton aria-label="favorite">
                        <FavoriteIcon 
                            type="button"
                            onClick={function(e){
                            this.props.onChangeMode('like');
                            }.bind(this)}>
                        </FavoriteIcon>
                    </IconButton>
            </div>
        );
    }
}

export default ReviewDetailLikeBtn;
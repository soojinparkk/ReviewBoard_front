import React, { Component } from 'react';
import { ButtonGroup } from '@material-ui/core';
import styled from 'styled-components';

const DetailBtn = styled.button`
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

class ReviewDetailBtn extends Component {
    render() {
        return(
            <div className="ReviewDetailBtn">
                <ButtonGroup >
                    <DetailBtn
                        type="button"
                        onClick={function(e){
                            this.props.onChangeMode('modify');
                        }.bind(this)}>MODIFY
                    </DetailBtn>
                    <DetailBtn
                        type="button"
                        onClick={function(e){
                            this.props.onChangeMode('delete');
                        }.bind(this)}>DELETE
                    </DetailBtn>
                </ButtonGroup>

            </div>
        );
    }
}

export default ReviewDetailBtn; 
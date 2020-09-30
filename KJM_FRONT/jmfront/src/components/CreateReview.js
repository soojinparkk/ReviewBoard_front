import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
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

function CreateReview({ onCreate }) {
    const [text, setText] = useState({
        title: '',
        content: ''
    });

    const { title, content } = text;

    const onChange = e => {
        setText({
            ...text,
            [e.target.name]: e.target.value,
        });
    };

    const onSubmit = e => {
        e.preventDefault();
        onCreate(title, content);
        setText({
            title: '',
            content: ''
        });
    };

    return (
        <div>
            <Paper className="ReviewPosting">
                <form className="ReviewForm" onSubmit={onSubmit}>
                    <TextField   
                        name="title"
                        value={title}
                        label="Title" 
                        variant="outlined" 
                        margin="normal"
                        onChange={onChange}
                    />
                    <TextField
                        name="content"
                        value={content}
                        label="Content"
                        multiline
                        rows={4}
                        variant="outlined"
                        margin="normal"
                        onChange={onChange}
                    />
                    <SubmitButton
                        type="submit"
                        variant="contained"
                        size="large"
                    >
                        Save
                    </SubmitButton>
                </form>
            </Paper>
        </div>
    );
}

export default CreateReview;
import React from 'react';
import { useDispatch } from 'react-redux';
import CreateReview from '../components/CreateReview';
import { createReview } from '../modules/reviews';


function ReviewFormContainer() {
    const dispatch = useDispatch();

    const onCreate = (title, content) => dispatch(createReview(title, content));


    return (
        <CreateReview onCreate={onCreate} />
        );
}

export default ReviewFormContainer;
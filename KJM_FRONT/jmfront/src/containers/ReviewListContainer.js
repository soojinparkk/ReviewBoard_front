import React, {useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ReviewList from '../components/ReviewList';
import { heartToggle } from '../modules/reviews';

function ReviewListContainer() {
    const reviews = useSelector(state => state.reviews);
    const dispatch = useDispatch();

    const onToggle = useCallback(id => dispatch(heartToggle(id)), [dispatch]);

    return (
        <ReviewList 
            reviews={reviews}
            onToggle={onToggle}
        />
        );
}

export default ReviewListContainer;
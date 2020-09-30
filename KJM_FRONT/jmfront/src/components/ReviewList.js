import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import styled from 'styled-components';
import { TiHeartOutline, TiHeartFullOutline } from 'react-icons/ti';

const NumandHeart = styled.div`
    display: flex;
    flex-direction: row;
`;

const ReviewItem = React.memo(function ReviewItem({ review, onToggle }) {
    return (
        <div>
            <Card className="ReviewPosts">
                <CardContent>
                    <NumandHeart>
                        <Typography className="ReviewId">
                            NO.{review.id}
                        </Typography>
                        {!(review.done) &&
                        <TiHeartOutline 
                            className="Review_Heart" 
                            color="#fa5252"
                            size="32px"
                            display="flex"   
                            onClick={() => onToggle(review.id)}/>}
                        {review.done && 
                            <TiHeartFullOutline 
                                className="Review_Heart"
                                color="#fa5252"
                                size="32px"
                                display="flex"
                                onClick={() => onToggle(review.id)}
                            />}
                    </NumandHeart>
                    <Typography variant="h6" component="h4">
                        {review.title}
                    </Typography>
                    <Typography variant="body2" component="p">
                        {review.content}
                    </Typography>
                </CardContent>
            </Card>
        </div>
    );
})

const Reviews = React.memo(function Reviews({ reviews, onToggle }) {
    return (
        <div>
            {
               reviews.map(review => <ReviewItem 
                    key={review.id}
                    review={review}
                    onToggle={onToggle}
               />)
            }
        </div>
    );
})

function ReviewList({ reviews, onToggle }) {
    return (
        <div>
            <Reviews 
                reviews={reviews}
                onToggle={onToggle}    
            />
        </div>
    );
}

export default ReviewList;
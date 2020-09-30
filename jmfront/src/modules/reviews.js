const CREATE_REVIEW = 'reviews/CREATE_REVIEW';
const HEART_TOGGLE = 'reviews/HEART_TOGGLE';

// 액션 생성 함수
let nextId = 1;
export const createReview = (title, content) => ({ 
    type: CREATE_REVIEW,
    review: {
        id: nextId++,
        title,
        content
    }
});

export const heartToggle = id => ({
    type: HEART_TOGGLE,
    id
});

const initialState = [
    /*
    {
        id: 1,
        title: 나성집,
        content: 맛있어요
        done: false
    }
    */
];

//리듀서
export default function reviews(state=initialState, action) {
    switch (action.type) {
        case CREATE_REVIEW:
            return state.concat(action.review);
        case HEART_TOGGLE:
            return state.map( review => 
                review.id === action.id ? { ...review, done: !review.done } : review
                );
        default:
            return state;
    }
}
import {SET_POSTS_DATA} from './constants';

const initialState: any = [];

export const reducer = (state = initialState, action: {type: string, payload: object}) => {
switch(action.type){
    // From here we can post and store the posts data to out global store.
    case SET_POSTS_DATA:
        return [
            action.payload
        ]
    default:
        return state
}
}
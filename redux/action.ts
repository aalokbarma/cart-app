import {POSTS_LIST} from './constants';

// In this file we can tell redux to perform specific actions according to end user interaction.
export function getPostsList(){
    return{
        type: POSTS_LIST
    }
}
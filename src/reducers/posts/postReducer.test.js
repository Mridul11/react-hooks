
import { postReducer } from './postReducers' ;
import { GET_POSTS }  from '../../actions/types' ; 

describe('Testing PostReducer ', () => {

    
    it('should render default state', () => {
        const newState = postReducer(undefined , {} );
        expect(newState).toEqual([]) ; 
    });

    it('should render the newState of recieving tyoes', () => {
        const dummy_posts = [ { title : 'title 1' , desc: 'description 1 '} , { title : 'title 2' , desc: 'description 2 '} ] ; 
        const newState = postReducer(undefined , { type : GET_POSTS, payload : dummy_posts } );
        expect(newState).toEqual(dummy_posts) ;  
    });


});
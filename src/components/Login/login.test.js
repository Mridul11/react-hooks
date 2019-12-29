import React from "react";
import {shallow, mount } from 'enzyme' ;
import { LoginComponent } from './index' ; 

const setup = (props={}) => {
    const wrapper = mount(<LoginComponent {...props}/>) ; 
    return wrapper ; 
}

describe('Login component', ()=>{

    it('should render LoginComponent ', ()=>{
        let wrapper = setup();
        let component = wrapper.find('.form-control') ; 
        expect(component.length).toBe(2) ; 
    }); 

});

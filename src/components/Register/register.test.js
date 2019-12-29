import React from "react";
import { mount, shallow } from 'enzyme' ;
import { RegisterComponent } from './index' ; 

const setup = (props={}) => {
    const wrapper = mount(<RegisterComponent {...props}/>) ; 
    return wrapper ; 
}

describe('Register component', ()=>{

    it('should render RegisterComponent ', ()=>{
        let wrapper = setup();
        let component = wrapper.find('.form-control') ; 
        expect(component.length).toBe(2) ; 
    });

});

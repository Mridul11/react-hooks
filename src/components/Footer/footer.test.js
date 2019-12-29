import React from "react";
import {shallow } from 'enzyme' ;
import Footer from './index' ; 

const setup = (props={}) => {
    const wrapper = shallow(<Footer {...props}/>) ; 
    return wrapper ; 
}

describe('Footer component', ()=>{

    it('should render footer ', ()=>{
        let wrapper = setup();
        let component = wrapper.find('.footer_para') ; 
        expect(component.length).toBe(1) ; 
    }); 

});

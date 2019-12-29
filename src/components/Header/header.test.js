import React from "react";
import {shallow } from 'enzyme' ;
import Header from './index' ; 

const setup = (props={}) => {
    const wrapper = shallow(<Header {...props}/>) ; 
    return wrapper ; 
}

describe('Header component', ()=>{

    it('should render header ', ()=>{
        let wrapper = setup();
        let component = wrapper.find('.header_para') ; 
        expect(component.length).toBe(1) ; 
    }); 

});

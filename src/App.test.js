import React from 'react';
import App from './App';
import { shallow , mount } from 'enzyme' ; 
import { RegisterComponent } from './components/Register';


const setup = (props = {}) => {
  let wrapper = shallow(<App {...props}/>) ; 
  return wrapper ; 
}

describe('App component', ()=> {

  it('renders correctly', ()=>{
      let wrapper = setup();
      let component = wrapper.find('.App') ; 
      expect(component.length).toBe(1) ;
  });

  it('should have child component', ()=>{
    let wrapper = mount(<App />) ; 
    let component = wrapper.find('.App') ;
    let childComponent = shallow(<RegisterComponent />) ;
    component.contains(childComponent) ; 
});


})
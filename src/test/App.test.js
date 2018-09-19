import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';
import {shallow} from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('default tab is user', () => {
    const wrapper=shallow(<App />);
    expect(wrapper.state().selectedTab).toEqual("user");
});

it('activates correct tab based on input to onUseSubmit method', () => {
    const wrapper=shallow(<App />);
    wrapper.instance().onUserSubmit('user',{});
    expect(wrapper.state().selectedTab).toEqual("privacy");
});



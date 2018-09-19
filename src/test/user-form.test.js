import React from 'react';
import ReactDOM from 'react-dom';
import UserForm from '../user-form';
import {shallow} from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

it('renders without crashing', () => {
    const wrapper=shallow(<UserForm />);
});

it('Parent onSubmit is called only when results are valid', () => {
    const myMock = jest.fn();
    const wrapper=shallow(<UserForm onUserSubmit={myMock}/>);
    wrapper.instance().performValidation=jest.fn(()=>{
        return false;
    });
    wrapper.instance().onSubmit({preventDefault:()=>{}});
    expect(myMock.mock.calls.length).toBe(0);
});

it('validateIfPresent returns correct result based on input', () => {
    const myMock = jest.fn();
    const wrapper=shallow(<UserForm onUserSubmit={myMock}/>);

    const returnValueWithUndefined=wrapper.instance().validateIfPresent(undefined);
    const returnValueWithSpace=wrapper.instance().validateIfPresent(" ");
    const returnValueWithValid=wrapper.instance().validateIfPresent(" hello");

    expect(returnValueWithUndefined).toBe(false);
    expect(returnValueWithSpace).toBe(false);
    expect(returnValueWithValid).toBe(true);
});

it('error is shown for name not present', () => {
    const myMock = jest.fn();
    const wrapper=shallow(<UserForm onUserSubmit={myMock}/>);

    wrapper.instance().changeHandler({target:{
            name:"email",
            value:"superuser"
        }});
    wrapper.instance().performValidation();

    expect(wrapper.state().error).toBe("Invalid name");

});

it('error is shown for Invalid Email', () => {
    const myMock = jest.fn();
    const wrapper=shallow(<UserForm onUserSubmit={myMock}/>);

    wrapper.setState({user:{name:"Vidhi",email:"superuser"}});

    wrapper.instance().performValidation();

    expect(wrapper.state().error).toBe("Invalid Email Address");

});

it('error is shown for Invalid password', () => {
    const myMock = jest.fn();
    const wrapper=shallow(<UserForm onUserSubmit={myMock}/>);

    wrapper.setState({user:{name:"Vidhi",email:"superuser@abc.com",password:"sdr"}});

    wrapper.instance().performValidation();

    expect(wrapper.state().error).toBe("Password must be at least 8 characters, consisting of: lowercase; uppercase; number.");

});

it('true is returned when user Object is valid', () => {
    const myMock = jest.fn();
    const wrapper=shallow(<UserForm onUserSubmit={myMock}/>);

    wrapper.setState({user:{name:"Vidhi",email:"superuser@abc.com",password:"sdr1Sedfr",role:""}});

    const isValid=wrapper.instance().performValidation();

    expect(isValid).toBe(true);

});





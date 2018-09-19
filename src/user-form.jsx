

import React from 'react';

export default class UserForm extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            error:false,
            user:{
                name:"",
                role:"",
                email:"",
                password:""
            }
        };
        this.changeHandler = this.changeHandler.bind(this);
        this.performValidation=this.performValidation.bind(this);
        this.onSubmit=this.onSubmit.bind(this);
    }


    onSubmit(e){
        e.preventDefault();
        let isValid=this.performValidation();
        if(isValid){
            this.props.onUserSubmit("user",this.state.user);
        }
    }

    performValidation(){
        const regex = /^\S+@\S+\.\S+$/;
        const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{9,}$/;
        if(!this.validateIfPresent(this.state.user.name)){
            this.setState({error:"Invalid name"});
            return false;
        } else if(!this.validateIfPresent(this.state.user.email) || !regex.test(this.state.user.email)){
            this.setState({error:"Invalid Email Address"});
            return false;
        }else if(!this.validateIfPresent(this.state.user.password) || !passwordRegex.test(this.state.user.password)){
            this.setState({error:"Password must be at least 9 characters, consisting of: lowercase; uppercase; number."});
            return false;
        }else{
            this.setState({error:false});
            return true;
        }
    }

    validateIfPresent(val){
        if(val){
            let valueTobeValidated=val.trim();
            return !!valueTobeValidated;
        }
        return false;

    }


    render () {
        return (
            <form className={"user-form"}>
                <div className="">
                    <label htmlFor={this.props.name} className="light">Name <span className={"text-brown"}>*</span></label>
                    <div>
                        <input
                            type="text"
                            className=""
                            name={'name'}
                            required
                            value={this.state.user.name}
                            onChange={this.changeHandler}
                        />
                    </div>
                </div>
                <div className="">
                    <label htmlFor={this.props.name} className="light">Role</label>
                    <div>
                        <input
                            type="text"
                            className=""
                            name={'role'}
                            value={this.state.user.role}
                            onChange={this.changeHandler}
                        />
                    </div>
                </div>
                <div className="">
                    <label htmlFor={this.props.name} className="light">Email&nbsp;<span className={"text-brown"}>*</span></label>
                    <div>
                        <input
                            type="text"
                            value={this.state.user.email}
                            className=""
                            name={'email'}
                            required
                            onChange={this.changeHandler}
                        />
                    </div>
                </div>
                <div className="">
                    <label htmlFor={this.props.name} className="light">Password&nbsp;<span className={"text-brown"}>*</span></label>
                    <div>
                        <input
                            type="password"
                            className=""
                            name={'password'}
                            value={this.state.user.password}
                            required
                            onChange={this.changeHandler}
                        />
                    </div>
                </div>
                {this.state.error?
                    <div className="error">
                        {this.state.error}
                    </div>
                    :null

                }
                <div className="">
                    <button type="submit" className="btn btn-primary" onClick={this.onSubmit}>Submit</button>
                </div>

                </form>

        );
    }


    changeHandler (e) {
        let name = e.target.name;
        let value = e.target.value;
        this.setState((prevState)=>{
            let user=prevState.user;
            user[name]=value;
            return ({user})
        });

    }
}
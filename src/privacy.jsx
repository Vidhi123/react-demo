/*
* author: richard.sproson.
* date: 30.08.2017.
* file: checkbox-field.jsx.
*/

import React from 'react';

export default class Privacy extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            commForOtherProduct:false,
            updateAboutProduct:false
        };

        this.changeHandler = this.changeHandler.bind(this);
        this.onSubmit=this.onSubmit.bind(this);
    }


    onSubmit(e){
        e.preventDefault();
        this.props.onUserSubmit("privacy",{commForOtherProduct:this.state.commForOtherProduct,updateAboutProduct:this.state.updateAboutProduct});
    }



    render () {
        return (
            <form className={"privacy-form"}>

                    <div>
                        <input
                                type="checkbox"
                                className=""
                                name={'updateAboutProduct'}
                                value={this.state.updateAboutProduct}
                                onChange={this.changeHandler}
                            />

                        <label htmlFor={'updateAboutProduct'} className="light">Receive update about tray.io products</label>
                    </div>
                <div>
                    <input
                            type="checkbox"
                            className=""
                            name={'commForOtherProduct'}
                            value={this.state.commForOtherProduct}
                            onChange={this.changeHandler}
                        />
                    <label htmlFor={'commForOtherProduct'} className="light">Receive communication about other Products from tray.io</label>
                </div>
                <div>
                    <button type="submit" className="btn btn-primary" onClick={this.onSubmit}>Submit</button>
                </div>



            </form>

        );
    }


    changeHandler (e) {
        let name = e.target.name;
        //let value = e.target.value;
        this.setState((prevState)=>{
            let prevValue=prevState[name];
            return ({[name]:!prevValue})
        });

    }
}
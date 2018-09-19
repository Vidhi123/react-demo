/*
* author: richard.sproson.
* date: 30.08.2017.
* file: checkbox-field.jsx.
*/

import React from 'react';

export default class Done extends React.Component {
    constructor (props) {
        super(props);
        this.state = {

        };
    }






    render () {
        return (
            <div className={'done'}>
              <i className="glyphicon glyphicon-ok" ></i>
                <div>Please verify your email address, You should have received an email from us already</div>
            </div>
        );
    }



}
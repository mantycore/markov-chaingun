import React, { Component } from 'react';
import Input from 'react-toolbox/lib/input/Input';
import { connect } from 'react-redux';
import wrap from './fun'

const style = {
    height: 575,
    width: 400,
    padding: 10,
    marginRight: 20,
    marginLeft: 20,
    overflow: 'scroll'        
}

const inputStyle = {
    border: '0px solid white',
    width: 380
}

export default wrap(
    connect(
        ({source}) => { return {source}; },
        dispatch => { return {
            handleChange: (source) =>
                dispatch({type: 'SOURCE_CHANGED', source})
        }; }
    ),
    class Editor extends Component {
        render() {
            return <div style={style}>
                <Input
                    style={inputStyle}
                    type="text"
                    multiline
                    rows={38}
                    value={this.props.source}
                    onChange={this.props.handleChange}
                />
            </div>
        }
    }
);
                    

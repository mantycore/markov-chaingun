import React, { Component } from 'react';
import { connect } from 'react-redux';
import wrap from './fun'

const style = {
    height: 575,
    width: 400,
    backgroundColor: 'wheat',
    padding: 10,
    fontFamily: 'serif',
    overflow: 'scroll'        
}

export default wrap(
    connect(
        ({preview}) => { return {preview}; },
    ),
    class Preview extends Component {
        render() {
            return <div
                style={style}
                dangerouslySetInnerHTML={{__html: this.props.preview}}
            />
        }
    }
);

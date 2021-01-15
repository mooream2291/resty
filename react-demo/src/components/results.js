import React from 'react';
import ReactJson from 'react-json-view';
import './results.scss';

class Results extends React.Component {
    render() {
        return (
            <div>
                <legend>Results</legend>
                <p>url: {this.props.url}</p>
                <p>method: {this.props.method}</p>
                <ReactJson src={this.props.headers} name='Headers' />
                <ReactJson src={this.props.result} name='Response' />
            </div>
        )
    }
}

export default Results;


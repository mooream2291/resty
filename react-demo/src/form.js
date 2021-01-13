import React from 'react';


class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            display: false,
            url: '',
            method: ''
        }
    }

    handleClick = e => {
        const method = e.target.name;
        this.setState({ method });
        console.log(this.state.method);
        if (this.state.url) { this.setState({ display: true }) }
    }

    handleSubmit = e => {
        e.preventDefault();
        const url = e.target.value;
        this.setState({ url });
        console.log(url);
        if (this.state.method && this.state.url) { this.setState({ display: true }) }
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label for="URL"> URL: </label>
                    <input name="URL" onChange={this.handleSubmit} />
                    <button type="submit">Go!</button>
                </form>
                <div>
                    <button name="get" onClick={this.handleClick}>GET</button>
                    <button name="put" onClick={this.handleClick}>PUT</button>
                    <button name="post" onClick={this.handleClick}>POST</button>
                    <button name="delete" onClick={this.handleClick}>DELETE</button>
                </div>
                {!this.state.display ? "":
                    < div >
                    <legend>Results</legend>
                    <p>url: {this.state.url}</p>
                    <p>method: {this.state.method}</p>
                    </div>
                }
            </div>
        )
    };
};

export default Form;
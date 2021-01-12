import React from 'react';


class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            URL: '',
            method: ''
        }
    }

    handleInput = e => {
        let newInput = e.target.value;
        this.setState({ URL: newInput });
    }

    handleMethod = e => {
        let newMethod = e.target.value;
        this.setState({ method: newMethod });
    }

    handleClick = e => {
        e.preventDefault();
    }

    render() {
        return (
            <div>
                <form>
                    <label for="URL"> URL: </label>
                    <input name="URL" onChange={this.handleInput} />
                    <button onClick={this.handleClick}>Go!</button>
                    <div>
                        <fieldset>
                            <button onClick={this.handleMethod}>GET</button>
                            <button onClick={this.handleMethod}>PUT</button>
                            <button onClick={this.handleMethod}>POST</button>
                            <button onClick={this.handleMethod}>DELETE</button>
                        </fieldset>
                    </div>
                    <fieldset>
                        <legend>Results</legend>
                    <p> {this.state.method} {this.state.URL}</p>
                    </fieldset>
                </form>
            </div>
        )
    }
}

export default Form;
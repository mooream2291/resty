import React from 'react';
import Results from './results';

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            display: false,
            url: '',
            method: '',
            result: [],
            headers: []
        }
    }
    handleClick = e => {
        e.preventDefault();
        const method = e.target.name;
        this.setState({ method });
        // this.prepResults();
    }

    prepResults = e => {
        e.preventDefault();
        this.getResults();
        this.setState({ display: true })
    }
    handleUrl = e => {
        let newUrl = e.target.value;
        this.setState({ url: newUrl });
    }

    getResults = async (e) => {
        const url = this.state.url;
        console.log(url);
        const method = this.state.method;
        console.log(method);
        const newHistoryObj = {
            url, method
        }
        this.props.updateHistory(newHistoryObj);
        //to make this dynamic, do multiple if statements//
        let headers = {};

        const result = await fetch(url, { method: method, mode: 'cors' })
            .then(response => {
                if (response.status === 200) {
                    let i = 0;
                    for (var pair of response.headers.entries()) {
                        headers[i] = { name: pair[0], value: pair[1] };
                        i++;
                    }
                    return response.json();
                } else {
                    return;
                }
            });
        let resultObj = {};
        resultObj.count = Object.keys(result).length;
        resultObj.result = result;
        console.log(resultObj);

        this.setState({ result: resultObj });
        this.setState({ headers: headers });
    }
    //add a poke to the history display//
    //https://sarastrasner-auth-api.herokuapp.com/api/v1/clothes///
    addResult = async (e) => {
        const result = await fetch(this.state.url, { method: this.state.method, mode: 'cors' })
            .then(response => {
                if (response.status === 200) {

                }
            }
            )
    }
    //post updatePoke function //
    //delete deletePoke function //

    render() {
        return (
            <div id="form">
                <form>
                    <label for="URL"> URL: </label>
                    <input name="URL" onBlur={this.handleUrl} />
                    {(this.state.method && this.state.url) ?
                        <button name="go" onClick={this.prepResults}>Go!</button>
                        : ""
                    }
                </form>
                <div>
                    <button name="get" onClick={this.handleClick}>GET</button>
                    <button name="put" onClick={this.handleClick}>PUT</button>
                    <button name="post" onClick={this.handleClick}>POST</button>
                    <button name="delete" onClick={this.handleClick}>DELETE</button>
                </div>
                {!this.state.display ? "" :
                    <Results
                        url={this.state.url}
                        method={this.state.method}
                        result={this.state.result}
                        headers={this.state.headers}
                    />}
            </div>
        )
    };
};

export default Form;
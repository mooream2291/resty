import React from 'react';
import Results from './results';
import If from './if';

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
        let url = this.state.url;
        console.log(url);
        let method = this.state.method;
        console.log(method);
        //to make this dynamic, do multiple if statements//
        let headers = {};

        const result = await fetch(url, { method: method, mode: 'cors' })
            .then(response => {
                if (response.status === 200) {
                    //save to local storage//
                    let newObj = {
                        url: url,
                        method: method
                    }
                    this.props.updateHistory(newObj);
                    // var savedResult = JSON.stringify(response);
                    // localStorage.setItem('savedMethod', savedResult);
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
    //put addPoke function //
    //add a poke to the history display//
    //https://sarastrasner-auth-api.herokuapp.com/api/v1/clothes///
    addResult = async (e) => {
        let url = this.state.url;
        let method = this.state.method;
        const results = await fetch(url, { method: method, mode: 'cors' })
            .then(response => {
                if (response.status === 200) {
                    //reference to users inout

                    //sets it
                    var savedResult = JSON.stringify(results);

                    localStorage.setItem('savedMethod', savedResult);
                    var getKey = localStorage.getItem('savedMethod');
                    var storageObject = JSON.parse(getKey);
                    console.log(storageObject, storageObject.name);
                }

            }
            )
    }
    //post updatePoke function //
    //delete deletePoke function //
    render() {
        return (
            <div id="form" >
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
                {/* <If> */}
                {!this.state.display ? "" :
                    <Results
                        url={this.state.url}
                        method={this.state.method}
                        result={this.state.result}
                        headers={this.state.headers}
                    />}
                {/* </If> */}
            </div >
        )
    }
};

export default Form;
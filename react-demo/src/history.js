import React from 'react';

//once the routes are successful, they will save the data into local storage and the history component will be pulled out and displayed on the page//

class History extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                {
                this.props.history.map((entry) => {
                    return (
                    <p>{entry.method} {entry.url}</p>
                    )
                }) 
                }
            </div>
        )
    }
}
export default History;
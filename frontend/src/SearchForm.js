import React from "react";

class SearchForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { query : ''};
    }

    handleChange = (event) => {
        this.setState({[event.target.query] : event.target.value});
    }

    handleSubmit = (event) => {
        alert('A form was submitted:' + this.state);

        const url = 'http://localhost:3000/store-data';

        fetch(url, {
            method:'POST',
            body: JSON.stringify(this.state)
        }).then(function(response){
            console.log(response);
            return response.json();
        });

        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
            <label>
                Search:
                <input type="text" value={this.state.value} name="query" onChange={this.handleChange}/>
                <input type="submit" value="Submit" />

            </label>

        </form>

        );
    }
 
}

export default SearchForm;
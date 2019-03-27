import React, { Component } from 'react';
import { Route, Link, withRouter, Switch } from 'react-router-dom'
import Axios from 'axios';


class Screen extends Component {

    state = {
        data: []
    }

    componentDidMount = () => {
        Axios.get("https://hn.algolia.com/api/v1/search_by_date?tags=story")
            .then(response => {
                /* this.setState({ ingredients: response.data }) */
                this.setState({ data: response.data.hits })
                console.log(this.state.data)
            })
    }



    render() {

        console.log(this.props.match);

        return (
            <div>
                {this.state.data.filter(x => x.objectID === this.props.match.params.id).map(i =>
                    <div>
                        <Link to="/"><h3>Home</h3></Link>
                        <h3>{i.title}</h3>
                        <iframe src={i.url}>
                            <p>Your browser does not support iframes.</p>
                        </iframe>
                        <h4>Comment Section</h4>
                        {(i.num_comments===0)?"No Comments":"Decided to use data from FiveThirtyEight to rank professional soccer leagues from around the world"}
                    </div>
                )}
            </div>
        );
    }
}

export default withRouter(Screen);

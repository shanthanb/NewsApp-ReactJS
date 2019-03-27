import React, { Component } from 'react';
import { Route, Link, withRouter, Switch} from 'react-router-dom';
import Axios from 'axios';
import Screen from './screen2';
class Result extends Component {
state={
  data:[],
  data2:{}
}

  componentDidMount = () => {
    Axios.get("https://hn.algolia.com/api/v1/search_by_date?tags=story")
      .then(response => {
        /* this.setState({ ingredients: response.data }) */
        this.setState({data:response.data.hits})
        console.log(this.state.data)
      })
  }


/*   return {id:i.objectID, title:i.title, comments:i.num_comments, url:i.url}
${i.title}/${i.num_comments}/${i.url}
 */
  render() {
    return (
      <div className="App">
       { this.state.data.map(i=>
        
        <Link to =  {`/screen2/${i.objectID}/`}>
        <div key={i.objectID}>
         <h3>{i.title}</h3>
        <ul style={{listStyleType:'none'}}>
        <li>Author: {i.author}</li>
        <li>Number of comments : {i.num_comments}</li>
         </ul> 
        </div>
        </Link>
        )}
      </div>
    );
  }
}

export default Result;

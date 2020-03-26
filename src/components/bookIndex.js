import React, { Component } from 'react';

import { Link } from 'react-router-dom';
import DeleteAction from './deleteAction';

export default class BookIndex extends Component {
  constructor(props){
    super(props);

    this.state ={
      books: []
    }
  }

  componentDidMount(){
    fetch('https://book-index-tw.herokuapp.com/books', {
      method: 'GET',
      headers:{
        "accepts" : "application/json",
        "Content-Type" : "application/json"
      }
    }).then(response =>{
      return response.json()
    }).then(data =>{
      this.setState({books:data})
    }).catch(e => {
      console.log('Fetch error', e)
    })
  }
      
  render(){
    return (

      <div className="content">
        <h1>Book Index</h1>

        {this.state.books.map((book)=>(
          <div className="book-title-author" key={book[0]}>

            <h2>Book Title: {book[1]}</h2>
            
            <h3>Author: {book[2]}</h3>
            
            <div className="links">
              <Link to={`/view_book/${book[0]}`}>View Book</Link>
              <DeleteAction id={book[0]}/>
            </div>
          </div>
        ))}

      </div>

    );
  }
}


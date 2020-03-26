import React, { Component } from 'react';

export default class AddBook extends Component {
    constructor(props){
        super(props);

        this.state={
            title : "",
            author: ""
        }
        
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event){
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit(event){
        
        let title = this.state.title
        let author = this.state.author
        
        fetch("https://book-index-tw.herokuapp.com/book/input",{
            method:"POST",
            headers:{
                "Content-Type" : "application/json"
            },
            body: JSON.stringify({title, author})
        })
        .then(response => {
            return response.json();
        })
        .then(responseData => {
            return responseData
        })
        .then(()=> {this.props.history.push("/")})
        .catch(error =>{
            console.log('Fetch Error', error)
        })

        event.preventDefault();
    }

  render(){
    return (

      <div>
          <h1>Add a Book Below</h1>

          <form onSubmit={this.handleSubmit}>
              <div className="add-title">
                <label>Title:</label>
                <input 
                    type="text"
                    name = "title"
                    value = {this.state.title}
                    onChange = {this.handleChange}
                />
              </div>
              <div className="add-author">
                <label>Author:</label>
                <input 
                    type="text"
                    name = "author"
                    value = {this.state.author}
                    onChange = {this.handleChange}
                />
              </div>
              <div className="submit">
                  <button type="submit" value="submit">Add Book</button>
              </div>
          </form>
      </div>

    );
  }
}
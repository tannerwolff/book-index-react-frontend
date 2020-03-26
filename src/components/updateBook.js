import React, { Component } from 'react';

export default class UpdateBook extends Component {
    constructor(props){
        super(props);

        this.state={
            id: "",
            title: "",
            author: "",
            formHidden: true
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.editBook = this.editBook.bind(this)
    }

    handleChange(event){
      this.setState({
          [event.target.name]: event.target.value
      })
  }

    handleSubmit(event){
      let id = this.state.id
      let title = this.state.title;
      let author = this.state.author;
        
        fetch(`https://book-index-tw.herokuapp.com/update_book/${id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({title: title, author: author})
        }).then(response =>
          response.json()
        ).then(responseData =>{
          return responseData
        }).catch(error => console.log("Fetch error", error))
    }

    editBook(){
      this.setState({id: this.props.ourProp[0]})
      this.setState({title: this.props.ourProp[1]})
      this.setState({author: this.props.ourProp[2]})
      this.setState({formHidden: !this.state.formHidden})
  }

  render(){
    return (

      <div>
          <button onClick={this.editBook}>Update Book</button>
          <form onSubmit={this.handleSubmit} style={{visibility:this.state.formHidden ? "hidden" : "visible"}}>
              <input
              type="text"
              name ="title"
              value={this.state.title}
              onChange={this.handleChange}
              >
              </input>

              <input
              type="text"
              name ="author"
              value={this.state.author}
              onChange={this.handleChange}
              >
              </input>

              <button 
              type="submit" 
              value="submit">
                Save update
              </button>

              
          </form>
      </div>

    );
  }
}
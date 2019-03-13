import React, { Component } from 'react'

class Postform extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: '',
            body: ''
        }
    }

    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    } 

    handleSubmit = (e) => {
        e.preventDefault()
        const post = {
            title: this.state.title,
            body: this.state.body
        }

        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            }, 
            body: JSON.stringify(post)
        })
        .then(res => res.json())
        .then(data => console.log(data))
    }

    render() {
    return (
      <div>
        <h1>Add posts</h1>
        <form onSubmit={this.handleSubmit}>
            <div>
                <label>Title: </label><br />
                <input type='text' name='title' onChange={this.handleChange} value={this.state.title} />
            </div>
            <br />
            <div>
                <label>Body: </label><br />
                <textarea name='body' onChange={this.handleChange} value={this.state.body} />
            </div>
            <br />
            <button type='submit'>Submit</button>
        </form>
      </div>
    )
  }
}

export default Postform
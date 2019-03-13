import React, { Component } from 'react';
import './App.css';
import axios from 'axios'
import Posts from './components/Posts'
import Postform from './components/Postform'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      posts: []
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(data => this.setState({posts: data}))
  }

  render() {
    const postItems = this.state.posts.map(post => (
      <div key={post.id}>
        <h3>{post.title}</h3>
        <p>{post.body}</p>
      </div>
    ))
    return (
      <div className="App">
        <Postform />
        <hr />
        <Posts />
        {postItems}
      </div>
    );
  }
}

export default App;

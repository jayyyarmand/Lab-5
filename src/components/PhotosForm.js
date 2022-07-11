import React, { Component } from 'react'
import axios from 'axios'

class PhotosForm extends Component {
    constructor(props) {
        super(props)
      
        this.state = {
           id:'',
           title:''
        }
      }
      changeHandler = (e) =>{
        this.setState({[e.target.name]:e.target.value})
      }

      submitHandler =  (e) =>{
        e.preventDefault()
        console.log(this.state)
        axios.post('https://jsonplaceholder.typicode.com/photos', this.state)
            .then(response => {
                console.log(response)
            })
            .catch(error => {
                console.log(error)
            })
      }
  render() {
    const{id, title} = this.state
    return (
      <div>
        <form onSubmit={this.submitHandler}>
            <div>
                <label>ID </label>
                <input type="text" name="id" value={id} onChange={this.changeHandler}></input>
            </div>
            <div>
                <label>Title </label>
                <input type="text" name="title" value={title} onChange={this.changeHandler} ></input>
            </div>
            <button type="submit">Submit</button>

        </form>

      </div>
    )
  }
}

export default PhotosForm
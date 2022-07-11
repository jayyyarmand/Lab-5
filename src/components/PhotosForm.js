import React, { Component } from 'react'
import axios from 'axios'

class PhotosForm extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         id: '',
         title: '',
         thumbnailUrl: ''
      }
    }

    deleteHandler = (e) =>{
        e.preventDefault()
        console.log(this.state)
        axios.delete('https://jsonplaceholder.typicode.com/photos', this.state)
            .then(response => {
                console.log(response)
            })
            .catch(error => {
                console.log(error)
                this.setState({errorMessage: 'Error retrieving data'})
            })
    }
        
    render() {
        const{id, title, thumbnailUrl} = this.state
        return (
            <div>
                <table>
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Thumbnail</th>
                        <th><button></button>Delete</th>
                    </tr>
                    
                </table>
                <button onClick={this.deleteHandler}>Delete</button>
            </div>
        )
    }
}

export default PhotosForm
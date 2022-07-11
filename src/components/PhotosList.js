import React, { Component } from 'react'
import axios from 'axios'

class PhotosList extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            photos: [],
            errorMessage: ''
        }
    }

    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/photos')
            .then(response => {
                console.log(response)
                this.setState({photos: response.data})
            })
            .catch(error => {
                console.log(error)
                this.setState({errorMessage: 'Error retrieving data'})
            })
    }

    deleteRow(id, e){
        axios.delete('https://jsonplaceholder.typicode.com/photos/${id}')
        .then(response => {
            console.log(response)
            const photos = this.state.photos.filter(item => item.id !== id);
            this.setState({photos});
        })
        .catch(error => {
            console.log(error)
            this.setState({errorMessage: 'Error retrieving data'})
        })
    }

    

    render() {
        const {photos} = this.state
        return (
            <div>
                <h1>List of Photos</h1>
                <table>
                    <th id="id">ID</th>
                    <th id="title">Title</th>
                    <th id="thumb">Thumbnail</th>
                    <th id="delete">Delete</th>
                </table>
                {
                    photos.length?
                    photos.map(photos => <table key = {(photos.id)}><tr><td>{photos.id}</td> <td>{photos.title}</td> <td><img src= {photos.thumbnailUrl}></img></td><td><button onClick={(e) => this.deleteRow(photos.id, e)}>Delete</button> </td></tr></table>) :
                    null
                }
                
            </div>
        )
    }
}

export default PhotosList
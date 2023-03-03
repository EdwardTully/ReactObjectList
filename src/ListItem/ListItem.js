
import React, { Component } from 'react'
import './listItem.css'

class ListItem extends Component {
  render() {

    return (
      
        
    <div>
        <div className = 'list'>
            <h1>Student Information:</h1>
            <ul className = 'contact'>
            <li>Name: {this.props.student.name}</li>
            <li>Phone: {this.props.student.phone}</li>
            <li>Car: {this.props.student.car}</li>
            <li>Dorm: {this.props.student.dorm}</li>
            <li>Major: {this.props.student.major}</li>
            <li>Class of: {this.props.student.class}</li>
            <li>Nickname: {this.props.student.nickname}</li>
            <li>Hobby: {this.props.student.hobby}</li>
            <li>Favorite Book: {this.props.student.favorite_book}</li>
            </ul>
          

        </div>
    </div>
  
  
    )
  }
}

export default ListItem
import React, { Component } from 'react'
import './flistItem.css'

class FlistItem extends Component {
  render() {

    return (
      
        
    <div>
        <div className = 'flist'>
           <h1>Faculty and Staff:</h1>
            <ul className = 'fcontact'>
            <li>Name: {this.props.faculty.name}</li>
            <li>Phone: {this.props.faculty.phone}</li>
            <li>Car: {this.props.faculty.car}</li>
            <li>Office: {this.props.faculty.office}</li>
            <li>Subject: {this.props.faculty.subject}</li>
            <li>Nickname: {this.props.faculty.nickname}</li>
            <li>Hobby: {this.props.faculty.hobby}</li>
            <li>Favorite Book: {this.props.faculty.favorite_book}</li>
            </ul>
          

        </div>
    </div>
  
  
    )
  }
}

export default FlistItem
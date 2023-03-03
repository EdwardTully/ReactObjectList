import React, { Component } from 'react'
import ListItem from '../ListItem/ListItem'
import FlistItem from '../FlistItem/FlistItem'
import './listContain.css'

class ListContain extends Component {
  render() {
    return (
    <div>
      <div className = 'table'>
        
          {this.props.studentInfo.map((stu)=>{
            return <ListItem student = {stu} />
          })}
          {this.props.facultyInfo.map((fac)=>{
            return <FlistItem faculty = {fac} />          
            })}
          </div>
    </div>
    
    
    )
   
  }
}

export default ListContain
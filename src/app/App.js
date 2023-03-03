import React, { Component } from 'react'
import ListContain from '../ListContain/ListContain'
import './App.css'

class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      students: [
        {
          name: 'Dan Maude',
          phone:'235-285-8794',
          car:'Honda Civic',
          dorm: 'Freeman',
          major: 'Biology',
          class: '2025',
          nickname: 'Da',
          hobby: 'fencing',
          favorite_book: 'how to do...'
        },
        {
          name: 'Fred Rogers',
          phone:'807-698-7951',
          car:'Rolls Royce',
          dorm: 'Freeman',
          major: 'Chemistry',
          class: '2025',
          nickname: 'Freddeee',
          hobby: 'partying',
          favorite_book: 'I cant Read'
        },
        {
          name: 'Betty Crocker',
          phone:'971-894-7896',
          car:'Ford Galaxy',
          dorm: 'Freeman',
          major: 'English',
          class: '2024',
          nickname: 'Betz',
          hobby: 'baking',
          favorite_book: 'Betty Crocker Cooks'
        },
       { name: 'Dan Maude',
        phone:'235-285-8794',
        car:'Honda Civic',
        dorm: 'Freeman',
        major: 'Biology',
        class: '2025',
        nickname: 'Da',
        hobby: 'fencing',
        favorite_book: 'how to do...' },
      {
        name: 'Fred Rogers',
        phone:'807-698-7951',
        car:'Rolls Royce',
        dorm: 'Freeman',
        major: 'Chemistry',
        class: '2025',
        nickname: 'Freddeee',
        hobby: 'partying',
        favorite_book: 'I cant Read'
      },
      {
        name: 'Betty Crocker',
        phone:'971-894-7896',
        car:'Ford Galaxy',
        dorm: 'Freeman',
        major: 'English',
        class: '2024',
        nickname: 'Betz',
        hobby: 'baking',
        favorite_book: 'Betty Crocker Cooks'
      },
     { name: 'Dan Maude',
      phone:'235-285-8794',
      car:'Honda Civic',
      dorm: 'Freeman',
      major: 'Biology',
      class: '2025',
      nickname: 'Da',
      hobby: 'fencing',
      favorite_book: 'how to do...'
    },
    {
      name: 'Fred Rogers',
      phone:'807-698-7951',
      car:'Rolls Royce',
      dorm: 'Freeman',
      major: 'Chemistry',
      class: '2025',
      nickname: 'Freddeee',
      hobby: 'partying',
      favorite_book: 'I cant Read'
    },
    {
      name: 'Betty Crocker',
      phone:'971-894-7896',
      car:'Ford Galaxy',
      dorm: 'Freeman',
      major: 'English',
      class: '2024',
      nickname: 'Betz',
      hobby: 'baking',
      favorite_book: 'Betty Crocker Cooks'
    },
   { name: 'Dan Maude',
    phone:'235-285-8794',
    car:'Honda Civic',
    dorm: 'Freeman',
    major: 'Biology',
    class: '2025',
    nickname: 'Da',
    hobby: 'fencing',
    favorite_book: 'how to do...'
  },
  {
    name: 'Fred Rogers',
    phone:'807-698-7951',
    car:'Rolls Royce',
    dorm: 'Freeman',
    major: 'Chemistry',
    class: '2025',
    nickname: 'Freddeee',
    hobby: 'partying',
    favorite_book: 'I cant Read'
  },
  {
    name: 'Betty Crocker',
    phone:'971-894-7896',
    car:'Ford Galaxy',
    dorm: 'Freeman',
    major: 'English',
    class: '2024',
    nickname: 'Betz',
    hobby: 'baking',
    favorite_book: 'Betty Crocker Cooks'
  }],
       faculty: [{
          name: 'Dr. Snape',
          phone:'971-894-7896',
          car:'Mustang',
          office: 'Sanger',
          subject: 'Potions',
          nickname: 'Sevy',
          hobby: 'Fly Tying',
          favorite_book: 'The tale of the two Cities'
       },
       {
        name: 'Dr. Snape',
        phone:'971-894-7896',
        car:'Mustang',
        office: 'Sanger',
        subject: 'Potions',
        nickname: 'Sevy',
        hobby: 'Fly Tying',
        favorite_book: 'The tale of the two Cities'
     },
     {
      name: 'Dr. Snape',
      phone:'971-894-7896',
      car:'Mustang',
      office: 'Sanger',
      subject: 'Potions',
      nickname: 'Sevy',
      hobby: 'Fly Tying',
      favorite_book: 'The tale of the two Cities'
   },
   {
    name: 'Dr. Snape',
    phone:'971-894-7896',
    car:'Mustang',
    office: 'Sanger',
    subject: 'Potions',
    nickname: 'Sevy',
    hobby: 'Fly Tying',
    favorite_book: 'The tale of the two Cities'
 },
 {
  name: 'Dr. Snape',
  phone:'971-894-7896',
  car:'Mustang',
  office: 'Sanger',
  subject: 'Potions',
  nickname: 'Sevy',
  hobby: 'Fly Tying',
  favorite_book: 'The tale of the two Cities'
},
{
  name: 'Dr. Snape',
  phone:'971-894-7896',
  car:'Mustang',
  office: 'Sanger',
  subject: 'Potions',
  nickname: 'Sevy',
  hobby: 'Fly Tying',
  favorite_book: 'The tale of the two Cities'
}]
    }
       
    
  }
  render() {
    return (
      <div className='main'>
        <h1 className='title'>Info at a Glance Cards</h1>
        <ListContain studentInfo={this.state.students} facultyInfo = {this.state.faculty} />
      </div>
    )
  }
}

export default App
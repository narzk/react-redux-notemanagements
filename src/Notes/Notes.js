import React, { Component } from 'react'
import NotesForm from './NotesForm';
import AllNotes from './AllNotes';


export default class Notes extends Component {
  render() {
    return (
      <div>
        <h1 class="flex-containere flex-center" >React Redux Notes App</h1>
      <div class="flex-container flex-center">
        

        <NotesForm />
        <hr />
        </div>
        <div class="flex-container flex-center">
        <AllNotes />
        </div>
        
        </div>
      
    )
  }
}
import React, { Component } from 'react'
import { connect } from 'react-redux';
import { removeNote } from '../redux/actions/actions';

class AllNotes extends Component {
  state={
    isInEditMode: false
  }

  removeNote = (index) => {
    this.props.removeNote(index);
  }

  changeEditMode = () =>{
    this.setState({
      isInEditMode: !this.state.isInEditMode
    })
  }
  updateComponentValue = () =>{
    this.setState({
      isInEditMode: false,
      })
      this.props.notes.title = this.refs.theTextInput.value;
  }
 
  
  render() {
    const notesItems = this.props.notes.map((note, index) =>
    this.state.isInEditMode ? 
    <div> <input type="text" defaultValue={note.title} ref="theTextInput"/>
                  <button onClick={this.changeEditMode} >X</button>
                  <button onClick={this.updateComponentValue}>ok</button>
           </div>:
      <li key={ index } onDoubleClick={this.changeEditMode} className=''>
        <b>{ note.title }</b>
        <button onClick={ () => this.removeNote(index) } className='close'>x</button>
        <br />
        <span >{ note.content }</span>
      </li>
    );

    return (
      <div>
        {notesItems.length==0 ? <h3>No Notes Yet!</h3>: <h3>All Notes</h3>}
        
        
        <ul>
          { notesItems }
        </ul>
        </div>
    )
  }
  
}

const mapStateToProps = state => {
  return {
    notes: state.notes
  };
};

const mapDispatchToProprs = {
  removeNote: removeNote
};

export default connect(mapStateToProps, mapDispatchToProprs)(AllNotes);
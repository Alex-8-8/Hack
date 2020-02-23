import React, { Component } from 'react';

export default class AddNote extends Component {
 state = {
   inputText: '',
 }

 handleSubmit = (e) => {
   e.preventDefault();
   const { selectDay, month, year } = this.props;
   const string = `${selectDay} ${month} ${year} ${this.state.inputText}`;

   this.props.onAddNote(string);
   this.setState({
     inputText: '',
   });
 }

 handleChange = (e) => {
   this.setState({
     inputText: e.target.value,
   });
 }

 render() {
   const { selectDay, month, year } = this.props;
   const { inputText } = this.state;

   return (
     <>
       <form onSubmit={this.handleSubmit}>
         <span>
           {selectDay}
           {' '}
           {month}
           {' '}
           {year}
         </span>
         <input type="text" value={inputText} placeholder="input task..." onChange={this.handleChange} />
         <button type="submit">Add</button>
       </form>

     </>
   );
 }
}

import React from 'react';

export default class EntryForm extends React.Component {

  // handleAddOption = (e) => {
  //   e.preventDefault();
  //   const option = e.target.elements.option.value.trim();
  //   const error = this.props.handleAddOption(option);
  //
  //   this.setState(() => ({error}));
  //
  //   if(!error) {
  //     e.target.elements.option.value = '';
  //   }
  // };
  render() {
    return (
      <div>
        <form
          className='entry-form-submit'
          onSubmit={undefined}>
          <label
            className='user-email'
            type='email'>Email:
          </label>
          <input type='email' name='email'/>
          <label
            className='user-name'
            type='text'>Name:
          </label>
          <input type='text' name='name'/>
          <button className='button'>Submit</button>
        </form>
      </div>
    );
  }
}

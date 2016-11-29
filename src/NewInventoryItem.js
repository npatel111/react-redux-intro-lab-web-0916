import React from 'react';

const NewInventoryItem = (props) => {
  function submitItemForm(event) {
    event.preventDefault();
    const quantity = event.target.children[1].value
    const description = event.target.children[3].value
    props.triggerCreateItem(quantity, description)
  }
  return (
    <form onSubmit={submitItemForm}>
      <label>Quantity:</label>
      <input type="text"></input>
      <label>Description:</label>
      <input type="text"></input>
      <input type="submit">Submit</input>
    </form>
  )
}

export default NewInventoryItem;

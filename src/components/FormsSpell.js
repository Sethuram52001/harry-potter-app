import React from 'react';

const Forms = (props) => {
  return (
    <div>
    	<form onSubmit={props.getSpells}>
    		<input type="text" name="spell" placeholder="Enter the spells's name"></input>
    	</form>
    </div>
  )
}

export default Forms;

import React from 'react';

const Forms = (props) => {
  return (
    <div>
    	<form onSubmit={props.getCharacters}>
    		<input type="text" name="character" placeholder="Enter the character's name"></input>
    	</form>
    </div>
  )
}

export default Forms;

/*
    	<form onSubmit={getCharacters}>
    		<input type="text" name="nameEnterd" placeholder="Enter the character's name"></input>
    	</form>


       
*/
import React from 'react';
import SearchBar from "material-ui-search-bar";

const Forms = (props) => {
  return (
    <div>
    	<form onSubmit={props.getCharacters}>
            <SearchBar
            name="character"
            onChange={() => console.log('onChange')}
            onRequestSearch={() => console.log('onRequestSearch')}
            style={{margin: '0 auto', maxWidth: 800}}/>
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
import React from 'react';
import SearchBar from "material-ui-search-bar";

const Forms = (props) => {
  return (
    <div>
    	<form onSubmit={props.getSpells}>
            <SearchBar
            name="spell"
            onChange={() => console.log('onChange')}
            onRequestSearch={() => console.log('onRequestSearch')}
            style={{margin: '0 auto', maxWidth: 800}}/>   		
    	</form>
    </div>
  )
}

export default Forms;

/*
    	<form onSubmit={props.getSpells}>
    		<input type="text" name="spell" placeholder="Enter the spells's name"></input>
    	</form>
*/
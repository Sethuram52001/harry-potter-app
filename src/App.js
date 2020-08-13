import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import SortingHat from './components/SortingHat';
import Characters from './components/Characters';
import Spells from './components/Spells';
import Houses from './components/Houses';
import NavBar from './components/NavBar';
import MediaCard from './components/spare';
import RecipeReviewCard from './components/spare1';

class App extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
      {/*<NavBar />*/}
      <Router>
      <div>
        <Switch>
          <Route path="/sortingHat" excat component={SortingHat} />
          <Route path="/characters" excat component={Characters} />
          <Route path="/spells" excat component={Spells} />
          <Route path="/houses" excat component={Houses} />
          <Route path="/spare" excat component={MediaCard} />
          <Route path="/spare1" excat component={RecipeReviewCard} />
        </Switch>
      </div>
      </Router>
      </div>
    );
  }
}

export default App;

/*
const api_key = '$2a$10$UHNOpXzWjg7g2VTELvBbU.LrImDHAKrF18HqgVM.BYY64TTdQx3nW';
const api_url = 'https://www.potterapi.com/v1/sortingHat';

  getData = async(e) =>{
    const api_call = await fetch(`https://www.potterapi.com/v1/spells?key=${api_key}`);
    const data = api_call.json();
    console.log(data);
  }

  <button onClick={this.getData}>click</button>
*/
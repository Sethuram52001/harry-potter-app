import React from 'react';

const api_key = '$2a$10$UHNOpXzWjg7g2VTELvBbU.LrImDHAKrF18HqgVM.BYY64TTdQx3nW';

async function getHouses(){
  const api_url = `https://www.potterapi.com/v1/houses?key=${api_key}`;
  const data = await fetch(api_url).then(api_call => api_call.json());
  console.log(data);
}

const spare = (props) => {
  return (
    <div>
    <button onClick={getHouses}>click</button>
    </div>
  )
}

export default spare;
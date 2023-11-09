
const state = {
  puppyNames: [],
};

const apiURL = `https://fsa-puppy-bowl.herokuapp.com/api/2310-FSA-ET-WEB-FT-SF`;

const getDataApiFunction = async () => {
  try {
    const response = await fetch(`${apiURL}/players`);
    const dataPull = await response.json();
    const playerData = dataPull.data;
    // console.log(playerData.players);

    // Update state with puppy names
    state.puppyNames = playerData.players.map(player => player.name);

    console.log(state.puppyNames);
    return state.puppyNames;
  } catch (error) {
    console.error('Error fetching player data:', error);
  }
};

getDataApiFunction();















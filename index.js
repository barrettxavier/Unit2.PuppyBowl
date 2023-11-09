const main = document.querySelector(`main`);

const state = {
  puppyNames: [],
};

const apiURL = `https://fsa-puppy-bowl.herokuapp.com/api/2310-FSA-ET-WEB-FT-SF`;

const getDataApiFunction = async () => {
  try {
    const response = await fetch(`${apiURL}/players`);
    const dataPull = await response.json();
    const playerData = dataPull.data;
    console.log(playerData);

    // Update state with puppy names
    state.puppyNames = playerData.players.map(player => player.name);

    console.log(state.puppyNames);

    createList();
  } catch (error) {
    console.error('Error fetching player data:', error);
  }
};

const createList = () => {
  const ul = document.createElement(`ul`);
  state.puppyNames.forEach(name => {
    const li = document.createElement(`li`);
    li.innerText = name;
    ul.appendChild(li);

    li.addEventListener(`click`, (event) => {
      console.log(event.target.innerText);

      const html = `
      <h1> Hello </h1>
      `
      main.innerHTML= html;
    })
  });
  main.appendChild(ul);
};

// const clickableLink = () => {
//   const clickPlayer = 
// }

getDataApiFunction();














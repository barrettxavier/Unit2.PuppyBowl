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
    const sss = playerData.players;
    console.log(sss);
    
    // Update state with puppy names
    state.puppyNames = playerData.players.map(player => player.name);

    console.log(state.puppyNames);

    createList();
  } catch (error) {
    console.error('Error fetching player data:', error);
  }
};


const createList = () => {
  for (let i = 0; i < state.puppyNames.length; i++) {
    const li = document.createElement(`li`);
    li.textContent = state.puppyNames[i];
    main.appendChild(li);
    
    const singlePuppyName = state.puppyNames[i];

    li.addEventListener(`click`, (event) => {
      console.log(event.target.innerText);

      const html = `
      <div class"card-container" style="margin-bottom: 2rem; display: flex; justify-content: center; height: fit-contents; width: 100vw;">
        <div class"card" style="height: 500px; width: 400px; background-color: lightgrey; padding: 1rem;">
        <h1 style="text-align: center;"> ${singlePuppyName} </h1>
        <img src="" alt="image of a puppy">
        <h3 style="text-align: center;"> Description </h3>
        
        <p></p>

        </div>
        
      </div>

      <button> Back </button>
      
      `
      main.innerHTML= html;

    });
  }
}








// const createList = () => {
//   const ul = document.createElement(`ul`);
//   state.puppyNames.forEach(name => {
//     const li = document.createElement(`li`);
//     li.innerText = name;
//     ul.appendChild(li);

//     li.addEventListener(`click`, (event) => {
//       console.log(event.target.innerText);

//     })
//   });
//   main.appendChild(ul);
// };

// const clickableLink = () => {
//   const clickPlayer = 
// }

getDataApiFunction();














const main = document.querySelector(`main`);
main.setAttribute(`style`, `padding-left: 3rem; display: flex; flex-wrap: wrap; justify-content: center;`)

const state = {
  puppyNames: [],
  breed: [],
  status: [],
  imgURL: [],
};

const apiURL = `https://fsa-puppy-bowl.herokuapp.com/api/2310-FSA-ET-WEB-FT-SF`;

const getDataApiFunction = async () => {
  try {
    const response = await fetch(`${apiURL}/players`);
    const dataPull = await response.json();
    const playerData = dataPull.data;
    console.log(playerData)
    
  
    // Update state with puppy names
    state.puppyNames = playerData.players.map(player => player.name);
    state.breed = playerData.players.map(player => player.breed);
    state.status = playerData.players.map(player => player.status);
    state.imgURL = playerData.players.map(player => player.imageUrl);

    // console.log(state.puppyNames);
    // console.log(state.breed);
    // console.log(state.status);
    // console.log(state.imgURL);

    createList();
  } catch (error) {
    console.error('Error fetching player data:', error);
  }
};

const form = document.querySelector(`form`);
form.addEventListener(`submit`, async (event) => {
  event.preventDefault();
  console.log(`submit`);

  const nameInput = document.querySelector(`#puppy-name`);
  const imgInput = document.querySelector(`#img-url`);
  // const descriptionInput = document.querySelector(`#description`);
  const statusInput = document.querySelector(`#status`);
  

  const response = await fetch(`${apiURL}/players`, {
    method: `POST`,
    headers: {
      "Content-Type": `application/json`,
    },
    body: JSON.stringify({
      name: nameInput.value,
      imageUrl: imgInput.value,
      // description: descriptionInput.value,
      status: statusInput.value,
    })
  });

  const newPuppy = await response.json();
  console.log(newPuppy);

});





const createList = () => {
  main.innerHTML = (``);
  for (let i = 0; i < state.puppyNames.length; i++) {
    const li = document.createElement(`li`);
    li.setAttribute(`style`, `margin-right: 5rem; width: 400px; padding: 5px;`)
    li.textContent = state.puppyNames[i];
    main.appendChild(li);
    
    const singlePuppyName = state.puppyNames[i];
    const puppyBreed = state.breed[i];
    const puppyStatus = state.status[i];
    const puppyImage = state.imgURL[i];

    li.addEventListener(`click`, (event) => {
      console.log(event.target.innerText);

      const html = `
      <div class"card-container" style="margin-top: 2rem; margin-bottom: 2rem; display: flex; justify-content: center; height: fit-contents; width: 100vw;">
        <div class"card" style="border-radius: 15px; height: fit-content; min-width: 400px; width: fit-content; background-color: #131B23; padding: 1rem;">
        <h1 style="font-variant: small-caps; color: white; text-align: center;"> ${singlePuppyName} </h1>
        <img src="${puppyImage}" style="height: 300px;" alt="image of a puppy">
        <h3 style="color: white; text-align: center; font-variant: small-caps;"> Description </h3>
        <p style="color: white; text-align: center; ">${puppyBreed}</p>
        <p></p>
        <h3 style="color: white; text-align: center;"> Status </h3>
        <p style="color: white; text-align: center; font-variant: small-caps;">${puppyStatus}</p>

        </div>
        
      </div>

      <button id="backBtn" style="font-size: 1.5rem;"> Back </button>
      
      `;
      main.innerHTML= html;

      const backBtn = document.getElementById(`backBtn`);
      backBtn.addEventListener(`click`, () => {
        createList();
      });
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














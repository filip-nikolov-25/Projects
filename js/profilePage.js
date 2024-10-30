import { setProfiles } from "./functions.js";
export{handleProfileChangesByUser}

function handleProfileChangesByUser(userToEditFromSession) {
  const changeEmailBtn = document.querySelector("#changeEmail");
  const changeDateOfBirthBtn = document.querySelector("#changeBirthDate");

  const profileEmailInput = document.querySelector("#profile-Email");
  const profileDateOfBirthInput = document.querySelector("#profile-Birth");
  
  const profileEmailCancelBtn = document.querySelector('#cancelEmail');
  const dateOfBirthCancelBtn = document.querySelector('#cancelBirthDate');

  const saveEmail = document.getElementById("saveEmail");
  const saveDateOfBirthBtn = document.querySelector("#saveDateOfBirth");

  changeEmailBtn.addEventListener("click", (e) => {
    e.preventDefault();
    profileEmailInput.value = "";
    profileEmailInput.disabled = false;
    e.target.style.display = 'none';
    saveEmail.style.display = 'block';
    profileEmailCancelBtn.style.display = 'block';
    profileEmailInput.style.backgroundColor = 'white';
    profileEmailInput.style.color = 'black';
    profileEmailInput.style.border = '2px solid #9946f3';
  });
  profileEmailCancelBtn.addEventListener('click', (e) => {
    e.preventDefault()
    const profileUserString = localStorage.getItem(userToEditFromSession);
    const profileUser = JSON.parse(profileUserString);
    profileEmailInput.value = profileUser.email;
    saveEmail.style.display = 'none';
    e.target.style.display = 'none';
    changeEmailBtn.style.display = '';
    profileEmailInput.disabled = true;
    profileEmailInput.style.backgroundColor = 'transparent';
    profileEmailInput.style.color = 'white';
    profileEmailInput.style.border = 'none';
    profileEmailInput.style.borderBottom = '2px solid rgba(255, 255, 255, 0.5)';

  });
  saveEmail.addEventListener("click", (e) => {
    e.preventDefault();

    const profileUserString = localStorage.getItem(userToEditFromSession);
    const profileUser = JSON.parse(profileUserString);
    profileUser.email = profileEmailInput.value;
    localStorage.setItem(
      userToEditFromSession,
      JSON.stringify(profileUser)
    );
    profileEmailInput.disabled = true;
    saveEmail.style.display = 'none';
    profileEmailCancelBtn.style.display = 'none';
    profileEmailInput.style.backgroundColor = 'transparent';
    profileEmailInput.style.color = 'white';
    profileEmailInput.style.border = 'none';
    profileEmailInput.style.borderBottom = '2px solid rgba(255, 255, 255, 0.5)';
        // to activate again the css other way the button will be always display:block and the css won't affect it  
    changeEmailBtn.style.display = '';
  });



  changeDateOfBirthBtn.addEventListener("click", (e) => {
    e.preventDefault();
    profileDateOfBirthInput.value = "";
    profileDateOfBirthInput.disabled = false;
    e.target.style.display = 'none';
    dateOfBirthCancelBtn.style.display = 'block';
    saveDateOfBirthBtn.style.display = 'block';
    profileDateOfBirthInput.style.backgroundColor = 'white';
    profileDateOfBirthInput.style.color = 'black';
    profileDateOfBirthInput.style.border = '2px solid #9946f3';
  });
  dateOfBirthCancelBtn.addEventListener('click', (e) => {
    e.preventDefault()
    const profileUserString = localStorage.getItem(userToEditFromSession);
    const profileUser = JSON.parse(profileUserString);
    profileDateOfBirthInput.value = profileUser.dateOfBirth;
    saveDateOfBirthBtn.style.display = 'none';
    e.target.style.display = 'none';
    changeDateOfBirthBtn.style.display = '';
    profileDateOfBirthInput.disabled = true;
    profileDateOfBirthInput.style.backgroundColor = 'transparent';
    profileDateOfBirthInput.style.color = 'white';
    profileDateOfBirthInput.style.border = 'none';
    profileDateOfBirthInput.style.borderBottom = '2px solid rgba(255, 255, 255, 0.5)';

  })
  saveDateOfBirthBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const profileUserString = localStorage.getItem(userToEditFromSession);
    const profileUser = JSON.parse(profileUserString);
    profileUser.dateOfBirth = profileDateOfBirthInput.value;
    localStorage.setItem(
      userToEditFromSession,
      JSON.stringify(profileUser)
    );
    profileDateOfBirthInput.disabled = true;
    e.target.style.display = ' none';
    dateOfBirthCancelBtn.style.display - 'none';
    dateOfBirthCancelBtn.style.display = 'none';
    profileDateOfBirthInput.style.backgroundColor = 'transparent';
    profileDateOfBirthInput.style.color = 'white';
    profileDateOfBirthInput.style.border = 'none';
    profileDateOfBirthInput.style.borderBottom = '2px solid rgba(255, 255, 255, 0.5)';
    changeDateOfBirthBtn.style.display = '';
  });
  setProfiles();
}
setProfiles();

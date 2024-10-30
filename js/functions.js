export {
  displayPage,
  createDiscusionCard,
  randomIntFromInterval,
  displayDiscussionCards,
  setProfiles,
  displayComments,
};

function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function displayDiscussionCards(arr) {
  const DiscussionCardsContainer = document.querySelector(
    ".DP-onlyCardsContainer"
  );

  DiscussionCardsContainer.innerHTML = "";
  arr.forEach((discussion) => {
    DiscussionCardsContainer.append(
      createDiscusionCard(
        discussion.description,
        discussion.userName,
        discussion.cardColor,
        discussion.date,
        discussion.time,
        discussion.img
      )
    );
  });
}
function displayComments(arr) {
  const commentsContainer = document.querySelector(".onlyCommentsContainer");

  commentsContainer.innerHTML = "";
  arr.forEach((comment) => {
    commentsContainer.append(
      createComment(
        comment.description,
        comment.userName,
        comment.date,
        comment.time,
        comment.img
      )
    );
  });
}

function displayPage(page) {
  const allPages = document.querySelectorAll(".allPages");
  allPages.forEach((allPages) => {
    allPages.style.display = "none";
  });
  page.style.display = "block";
}

function createDiscusionCard(text, user, cardColor, date, time, img) {
  // This creates a new discussion card element
  const newDiscusion = document.createElement("div");
  newDiscusion.innerHTML = newDiscusion.innerHTML = `<div class="DP-Parent">
  <div class="staticCard ${cardColor}">
      <div class="staticDiscussion">
          <p>${text}</p>
          <div class="discusionProfilePic">
              <img src="${img}">
              <div class="DP-name-stats">
                  <p>${user}</p>
                  <p>${date}, ${time}</p>
              </div>
          </div>
          <input type="text" disabled name="experience" class="newDiscusionInput" placeholder="">
      </div>
      <div class="DD-cardfooter">
          <i class="fas fa-plus"></i><p>5 Коментари</p><p>84 Реакции</p>
      </div>
  </div>
</div>`;

  return newDiscusion;
}
function createComment(text, user, date, time, img) {
  // This creates a new discussion card element
  const newComment = document.createElement("div");
  newComment.innerHTML = `<div class="comment-Parent">
      <div class=" staticCommentCard ">
          <div class=" staticComment">
              <p>${text}</p>
              <div class=" commentProfilePic" ><img src="${img}" alt="profile-Pic">
               
                <div class=" comment-name-stats">
                  <p>${user}</p>
                  <p>${date}, ${time} </p>
                </div>
              </div>
          </div>
      </div>
      </div>`;

  return newComment;
}

function setProfiles() {
  const userFromSession = localStorage.getItem("currentLoggedInUser");
  const profileNameLastNameInput = document.querySelector("#profile-Username");
  const profileEmailInput = document.querySelector("#profile-Email");
  const profilePasswordInput = document.querySelector("#profile-Password");
  const profileDateOfBirthInput = document.querySelector("#profile-Birth");
  const profileGenderInput = document.querySelector("#profile-Gender");

  if (userFromSession === "User123") {
    const profileUser123String = localStorage.getItem("profileUser123");
    const profileUser123 = JSON.parse(profileUser123String);
    profileNameLastNameInput.value = profileUser123.nameAndLastName;
    profileEmailInput.value = profileUser123.email;
    profilePasswordInput.value = profileUser123.password;
    profileDateOfBirthInput.value = profileUser123.dateOfBirth;
    profileGenderInput.value = profileUser123.gender;
  }
  if (userFromSession === "User456") {
    const profileUser456String = localStorage.getItem("profileUser456");
    const profileUser456 = JSON.parse(profileUser456String);
    profileNameLastNameInput.value = profileUser456.nameAndLastName;
    profileEmailInput.value = profileUser456.email;
    profilePasswordInput.value = profileUser456.password;
    profileDateOfBirthInput.value = profileUser456.dateOfBirth;
    profileGenderInput.value = profileUser456.gender;
  }
  if (userFromSession === "User789") {
    const profileUser789String = localStorage.getItem("profileUser789");
    const profileUser789 = JSON.parse(profileUser789String);
    profileNameLastNameInput.value = profileUser789.nameAndLastName;
    profileEmailInput.value = profileUser789.email;
    profilePasswordInput.value = profileUser789.password;
    profileDateOfBirthInput.value = profileUser789.dateOfBirth;
    profileGenderInput.value = profileUser789.gender;
  }
}

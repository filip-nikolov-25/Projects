import { displayPage } from "./functions.js";
import {
  filterContentCardsOnClick,
  addWatchedVideosBadge,
} from "./contentPage.js";
import { handleProfileChangesByUser } from "./profilePage.js";
const landingPageRoute = document.querySelector("#landingPage");
const getInformedLink = document.querySelectorAll(".getInformedLink");
const discusionLink = document.querySelectorAll(".discusionLinks");
const contactLinks = document.querySelectorAll(".contactLinks");
const profileLinks = document.querySelectorAll(".profileLinks");
const LogOutBtns = document.querySelectorAll(".LogOutBtns");
const LogInBtns = document.querySelectorAll(".LogInBtns");
const logoLandingPage = document.querySelector(".logo1");
const newDiscInput = document.querySelector(".newDiscussion");
const filterInputsContainer = document.querySelectorAll(".checkboxInputButton");
const commentInput = document.querySelector(".newCommentInput");
const enteredDiscBadge = document.querySelector(".enteredDisc");
const newCommentCurrentLoggedInName = document.querySelector(".newCommentUser");
const newCommentCurrentLoggedInProfilePic = document.querySelector(
  ".newCommentProfilePicImg"
);
const loggedInProfilePicNavBar = document.querySelector(
  ".profileImgSmallNavBar"
);
const discussionCurrentLoggedInName =
  document.querySelector(".newDiscussionUser");
const profileBigImageOnProfilePage =
  document.querySelector(".ProfilePageBigImg");
const discussionCurrentLoggedInUserImg = document.querySelector(
  ".currentUserProfileImg"
);
const logOutBtn1 = document.getElementById("logOutBtn1");
const logOutBtn2 = document.getElementById("logOutBtn2");
const logInBtn1 = document.getElementById("logInBtn1");
const logInBtn2 = document.getElementById("logInBtn2");
displayPage(landingPageRoute);
location.hash = "";

getInformedLink.forEach((link) => {
  link.addEventListener("click", () => {
    location.hash = "contentPage";
  });
});

discusionLink.forEach((link) => {
  link.addEventListener("click", function () {
    location.hash = "discusionPage";
  });
});
contactLinks.forEach((link) => {
  link.addEventListener("click", function () {
    location.hash = "contactPage";
  });
});
profileLinks.forEach((link) => {
  link.addEventListener("click", function () {
    location.hash = "profilePage";
  });
});
//Adding and removing buttons based on if the user is LOGGED ON REFRESH

LogOutBtns.forEach((button) => {
  button.addEventListener("click", () => {
    // On logOut Button creates an array for storing the clicked inputs IDs before Logging Out the user
    let allFiltersArr = Array.from(filterInputsContainer);

    let emptyArr = [];

    localStorage.removeItem("currentLoggedInUser");
    location.hash = "singInPage";
    allFiltersArr.forEach((input) => (input.checked = false)); //(UN)Checking ALL FILTERS ON LOGOUT
    filterContentCardsOnClick(emptyArr); //Reset cards to show all

    const allProfileInputs = document.querySelectorAll(".profileInputs");
    allProfileInputs.forEach((input) => {
      input.value = "";
    });

    enteredDiscBadge.style.display = "none";
    loggedInProfilePicNavBar.style.display = "none";
  });
});

LogInBtns.forEach((link) => {
  link.addEventListener("click", function () {
    location.hash = "singInPage";
  });
});
logoLandingPage.addEventListener("click", function () {
  location.hash = "";
});

const mediaQuery768 = window.matchMedia("(min-width: 770px)");

function handleMediaQueryChange() {
  if (localStorage.getItem("currentLoggedInUser") !== null) {
    //Can't go with forEach because it adds all buttons on refresh and make conflict
    if (mediaQuery768.matches) {
      logOutBtn1.style.display = "none";
      logOutBtn2.style.display = "block";
      logInBtn1.style.display = "none";
      logInBtn2.style.display = "none";
      loggedInProfilePicNavBar.style.display = "none";
    } else {
      logOutBtn1.style.display = "block";
      logOutBtn2.style.display = "none";
      logInBtn1.style.display = "none";
      logInBtn2.style.display = "none";
      loggedInProfilePicNavBar.style.display = "none";
    }
  } else {
    if (mediaQuery768.matches) {
      logOutBtn1.style.display = "none";
      logOutBtn2.style.display = "none";
      logInBtn1.style.display = "none";
      logInBtn2.style.display = "block";
    } else {
      logOutBtn1.style.display = "none";
      logOutBtn2.style.display = "none";
      logInBtn1.style.display = "block";
      logInBtn2.style.display = "none";
    }
  }
}
mediaQuery768.addEventListener("change", handleMediaQueryChange);
handleMediaQueryChange();

if (localStorage.getItem("currentLoggedInUser")) {
  const currentLoggedInUser = localStorage.getItem("currentLoggedInUser");
  // Handling buttons
  profileLinks.forEach((link) => (link.style.display = "block"));
  newDiscInput.style.display = "block";
  commentInput.style.display = "block";
  loggedInProfilePicNavBar.style.display = "block";
  // for discussion badges load and videos comments
  if (localStorage.getItem("currentLoggedInUser") === "User123") {
    const currentUser = JSON.parse(localStorage.getItem("profileUser123"));
    loggedInProfilePicNavBar.src = currentUser.img;
    profileBigImageOnProfilePage.src = currentUser.img;
    discussionCurrentLoggedInUserImg.src = currentUser.img;
    newCommentCurrentLoggedInProfilePic.src = currentUser.img;
    newCommentCurrentLoggedInName.innerHTML = currentUser.nameAndLastName;
    discussionCurrentLoggedInName.innerHTML = currentUser.nameAndLastName;
    // Sets the current user name for the comments and discussions
    if (currentUser.hasOwnProperty("activeDiscussion")) {
      enteredDiscBadge.style.display = "block";
    } else {
      enteredDiscBadge.style.display = "none";
    }
    addWatchedVideosBadge(currentUser);
    handleProfileChangesByUser("profileUser123");
  }
  if (localStorage.getItem("currentLoggedInUser") === "User456") {
    const currentUser = JSON.parse(localStorage.getItem("profileUser456"));
    profileBigImageOnProfilePage.src = currentUser.img;
    discussionCurrentLoggedInUserImg.src = currentUser.img;
    newCommentCurrentLoggedInProfilePic.src = currentUser.img;
    loggedInProfilePicNavBar.src = currentUser.img;
    newCommentCurrentLoggedInName.innerHTML = currentUser.nameAndLastName;
    discussionCurrentLoggedInName.innerHTML = currentUser.nameAndLastName;

    if (currentUser.hasOwnProperty("activeDiscussion")) {
      enteredDiscBadge.style.display = "block";
    } else {
      enteredDiscBadge.style.display = "none";
    }
    addWatchedVideosBadge(currentUser);
    handleProfileChangesByUser("profileUser456");
  }
  if (localStorage.getItem("currentLoggedInUser") === "User789") {
    const currentUser = JSON.parse(localStorage.getItem("profileUser789"));
    profileBigImageOnProfilePage.src = currentUser.img;
    discussionCurrentLoggedInUserImg.src = currentUser.img;
    newCommentCurrentLoggedInName.innerHTML = currentUser.nameAndLastName;
    discussionCurrentLoggedInName.innerHTML = currentUser.nameAndLastName;
    newCommentCurrentLoggedInProfilePic.src = currentUser.img;
    loggedInProfilePicNavBar.src = currentUser.img;

    if (currentUser.hasOwnProperty("activeDiscussion")) {
      enteredDiscBadge.style.display = "block";
    } else {
      enteredDiscBadge.style.display = "none";
    }
    addWatchedVideosBadge(currentUser);
    handleProfileChangesByUser("profileUser789");
  }

  if (currentLoggedInUser === "User123" && localStorage.getItem("User123")) {
    const arrayOfInputsId = localStorage.getItem("User123").split(",");

    filterContentCardsOnClick(arrayOfInputsId);
  }
  if (currentLoggedInUser === "User456" && localStorage.getItem("User456")) {
    const arrayOfInputsId = localStorage.getItem("User456").split(",");

    filterContentCardsOnClick(arrayOfInputsId);
  }
  if (currentLoggedInUser === "User789" && localStorage.getItem("User789")) {
    const arrayOfInputsId = localStorage.getItem("User789").split(",");
    filterContentCardsOnClick(arrayOfInputsId);
  }
  if (mediaQuery768.matches) {
    logOutBtn1.style.display = "none";
    logOutBtn2.style.display = "block";
    logInBtn1.style.display = "none";
    logInBtn2.style.display = "none";
    loggedInProfilePicNavBar.style.display = "block";
  } else {
    logOutBtn1.style.display = "block";
    logOutBtn2.style.display = "none";
    logInBtn1.style.display = "none";
    logInBtn2.style.display = "none";
    loggedInProfilePicNavBar.style.display = "none";
  }
} else {
  // Handling buttons
  if (mediaQuery768.matches) {
    logOutBtn1.style.display = "none";
    logOutBtn2.style.display = "none";
    logInBtn1.style.display = "none";
    logInBtn2.style.display = "block";
  } else {
    logOutBtn1.style.display = "none";
    logOutBtn2.style.display = "none";
    logInBtn1.style.display = "block";
    logInBtn2.style.display = "none";
  }

  // Handling profile link
  profileLinks.forEach((link) => (link.style.display = "none"));

  newDiscInput.style.display = "none";
  commentInput.style.display = "none";
}

window.addEventListener("hashchange", () => {
  let hash = location.hash.slice(1);
  const contactPageRoute = document.querySelector("#contactPage");
  const contentPageRoute = document.querySelector("#contentPage");
  const discusionPageRoute = document.querySelector("#discusionPage");
  const profilePageRoute = document.querySelector("#profilePage");
  const signInPageRoute = document.querySelector("#singInPage");

  //Adding and removing elements based on if the user is LOGGED    (ON)CHANGING ROUTES
  if (localStorage.getItem("currentLoggedInUser")) {
    //handling buttons
    if (mediaQuery768.matches) {
      logOutBtn1.style.display = "none";
      logOutBtn2.style.display = "block";
      logInBtn1.style.display = "none";
      logInBtn2.style.display = "none";
    } else {
      logOutBtn1.style.display = "block";
      logOutBtn2.style.display = "none";
      logInBtn1.style.display = "none";
      logInBtn2.style.display = "none";
    }
    //handling profile links
    profileLinks.forEach((link) => (link.style.display = "block"));

    // Allowing or NOT Allowing to enter discussions
    newDiscInput.style.display = "block";
    commentInput.style.display = "block";
  } else {
    if (mediaQuery768.matches) {
      logOutBtn1.style.display = "none";
      logOutBtn2.style.display = "none";
      logInBtn1.style.display = "none";
      logInBtn2.style.display = "block";
    } else {
      logOutBtn1.style.display = "none";
      logOutBtn2.style.display = "none";
      logInBtn1.style.display = "block";
      logInBtn2.style.display = "none";
    }
    profileLinks.forEach((link) => (link.style.display = "none"));
    newDiscInput.style.display = "none";
    commentInput.style.display = "none";
  }

  switch (hash) {
    case "":
      displayPage(landingPageRoute);
      break;
    case "contentPage":
      displayPage(contentPageRoute);
      break;
    case "discusionPage":
      displayPage(discusionPageRoute);
      break;
    case "contactPage":
      displayPage(contactPageRoute);
      break;
    case "profilePage":
      displayPage(profilePageRoute);
      if (localStorage.getItem("currentLoggedInUser") !== null) {
        if (mediaQuery768.matches) {
          loggedInProfilePicNavBar.style.display = "block";
        } else {
          loggedInProfilePicNavBar.style.display = "none";
        }
      }
      break;
    case "singInPage":
      displayPage(signInPageRoute);
      break;
    default:
      displayPage(landingPageRoute);
      break;
  }
});

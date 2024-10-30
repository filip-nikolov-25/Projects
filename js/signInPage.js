import {
  filterContentCardsOnClick,
  addWatchedVideosBadge,
} from "./contentPage.js";
import { objectUser123, objectUser456, objectUser789 } from "./Users.js";
import { setProfiles } from "./functions.js";
import { handleProfileChangesByUser } from "./profilePage.js";

const LogInForm = document.querySelector(".SIG-form");
LogInForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const VALID_RESPONSE = "Valid";
  const username = document.querySelector("#username").value;
  const password = document.querySelector("#password").value;
  const requestedUserData = { username, password };
  const popUpMessage = document.querySelector(".welcomeMessageContainer");
  const popUpOnLoginBtn = document.querySelector("#popUpOnLoginBtn");
  const enteredDiscBadge = document.querySelector(".enteredDisc");
  const newCommentCurrentLoggedInName =
    document.querySelector(".newCommentUser");
  const loggedInProfilePicNavBar = document.querySelector(
    ".profileImgSmallNavBar"
  );
  const profileBigImageOnProfilePage =
    document.querySelector(".ProfilePageBigImg");
  const discussionCurrentLoggedInName =
    document.querySelector(".newDiscussionUser");
  const discussionCurrentLoggedInImg = document.querySelector(
    ".currentUserProfileImg"
  );
  const newCommentDiscussionLoggedInImg = document.querySelector(
    ".newCommentProfilePicImg"
  );
  const mediaQuery768 = window.matchMedia("(min-width: 770px)");

  try {
    const response = await fetch("http://localhost:5000/api/authentication", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestedUserData),
    });
    const data = await response.json();
    const validResponse = data.message.slice(0, 5);
    if (validResponse === VALID_RESPONSE) {
      // Here is the logic about when LOGGING THE USER
      localStorage.setItem("currentLoggedInUser", requestedUserData.username);
      // displaying PopUpMessage (On)Login

      if (localStorage.getItem("currentLoggedInUser") === "User123") {
        if (localStorage.getItem("User123")) {
          const arrayOfInputsId = localStorage.getItem("User123").split(",");
          filterContentCardsOnClick(arrayOfInputsId);
        }
        if (!localStorage.getItem("profileUser123")) {
          localStorage.setItem("profileUser123", JSON.stringify(objectUser123));
        }
        const currentUser = JSON.parse(localStorage.getItem("profileUser123"));
        loggedInProfilePicNavBar.src = currentUser.img;
        profileBigImageOnProfilePage.src = currentUser.img;
        newCommentCurrentLoggedInName.innerHTML = currentUser.nameAndLastName;
        discussionCurrentLoggedInName.innerHTML = currentUser.nameAndLastName;
        discussionCurrentLoggedInImg.src = currentUser.img;
        newCommentDiscussionLoggedInImg.src = currentUser.img;
        // Setting the comment and discussion CURRENT LOGGED IN USER
        if (currentUser.hasOwnProperty("activeDiscussion")) {
          enteredDiscBadge.style.display = "block";
        } else {
          enteredDiscBadge.style.display = "none";
        }
        addWatchedVideosBadge(currentUser);
        handleProfileChangesByUser("profileUser123");
      } else if (localStorage.getItem("currentLoggedInUser") === "User456") {
        if (localStorage.getItem("User456")) {
          const arrayOfInputsId = localStorage.getItem("User456").split(",");
          filterContentCardsOnClick(arrayOfInputsId);
        }
        if (!localStorage.getItem("profileUser456")) {
          localStorage.setItem("profileUser456", JSON.stringify(objectUser456));
        }
        const currentUser = JSON.parse(localStorage.getItem("profileUser456"));

        loggedInProfilePicNavBar.src = currentUser.img;
        profileBigImageOnProfilePage.src = currentUser.img;
        newCommentCurrentLoggedInName.innerHTML = currentUser.nameAndLastName;
        discussionCurrentLoggedInName.innerHTML = currentUser.nameAndLastName;
        discussionCurrentLoggedInImg.src = currentUser.img;
        newCommentDiscussionLoggedInImg.src = currentUser.img;

        if (currentUser.hasOwnProperty("activeDiscussion")) {
          enteredDiscBadge.style.display = "block";
        } else {
          enteredDiscBadge.style.display = "none";
        }
        addWatchedVideosBadge(currentUser);
        handleProfileChangesByUser("profileUser456");
      } else if (localStorage.getItem("currentLoggedInUser") === "User789") {
        if (localStorage.getItem("User789")) {
          const arrayOfInputsId = localStorage.getItem("User789").split(",");
          filterContentCardsOnClick(arrayOfInputsId);
        }
        if (!localStorage.getItem("profileUser789")) {
          localStorage.setItem("profileUser789", JSON.stringify(objectUser789));
        }
        const currentUser = JSON.parse(localStorage.getItem("profileUser789"));
        loggedInProfilePicNavBar.src = currentUser.img;
        profileBigImageOnProfilePage.src = currentUser.img;
        newCommentCurrentLoggedInName.innerHTML = currentUser.nameAndLastName;
        discussionCurrentLoggedInName.innerHTML = currentUser.nameAndLastName;
        discussionCurrentLoggedInImg.src = currentUser.img;
        newCommentDiscussionLoggedInImg.src = currentUser.img;

        if (currentUser.hasOwnProperty("activeDiscussion")) {
          enteredDiscBadge.style.display = "block";
        } else {
          enteredDiscBadge.style.display = "none";
        }
        addWatchedVideosBadge(currentUser);
        handleProfileChangesByUser("profileUser789");
      }
      popUpMessage.style.display = "flex";
      popUpOnLoginBtn.addEventListener("click", () => {
        location.hash = "";
        popUpMessage.style.display = "none";
        if (mediaQuery768.matches) {
          loggedInProfilePicNavBar.style.display = "block";
        } else {
          loggedInProfilePicNavBar.style.display = "none";
        }
      });
      setProfiles();
    } else {
      alert("Invalid Username Or Password");
    }
  } catch (error) {
    console.error("Error:", error);
  }
});

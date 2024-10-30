import { randomIntFromInterval, displayDiscussionCards } from "./functions.js";

export { discussions };

const hamMenyBtn = document.querySelector("#hamMenuIcon");
hamMenyBtn.addEventListener("click", () => {
  const hamMenu = document.querySelector("#hamMenu");
  hamMenu.style.display = "block";
  const xBtn = document.querySelector(".x-Btn");
  xBtn.addEventListener("click", () => {
    hamMenu.style.display = "none";
  });
});

const discussions = [
  {
    cardType: "staticCard",
    cardColor: "DD-card-LightGreen",
    inputPlaceholder: "Сподели искуство...",
    img: "./Img/ProfilePageImages/profilepic.png",
    userName: "Име и Презиме",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit Лорем ипсум е едноставен модел на текст кој се користел...",
    date: "00/00/00",
    time: "00:00",
  },
  {
    cardType: "staticCard",
    cardColor: "DD-card-Light-Blue",
    description: "Лорем ипсум е едноставен модел на текст кој се користел...",
    img: "./Img/ProfilePageImages/profile3.png",
    userName: "Име и Презиме",
    date: "00/00/00",
    time: "00:00",
  },

  {
    cardType: "staticCard",
    cardColor: "DD-card-LightGreen",
    description:
      "Лорем ипсум е едноставен модел на текст кој се користел Лорем ипсум е едноставен модел на текст кој се користел Лорем ипсум е едноставен модел на текст кој се користел...",
    img: "./Img/ProfilePageImages/profile2.png",
    userName: "Име и Презиме",
    date: "00/00/00",
    time: "00:00",
  },
  {
    cardType: "staticCard",
    cardColor: "DD-card-Light-Purple",
    description: "Лорем ипсум е едноставен модел на текст кој се користел...",
    img: "./Img/ProfilePageImages/profile2.png",
    userName: "Име и Презиме",
    date: "00/00/00",
    time: "00:00",
  },
  {
    cardType: "staticCard",
    cardColor: "DD-card-Light-Blue",
    description:
      "Лорем ипсум е едноставен модел на текст кој се користел Лорем ипсум е едноставен модел на текст кој се користел...",
    img: "./Img/ProfilePageImages/profilepic.png",
    userName: "Име и Презиме",
    date: "00/00/00",
    time: "00:00",
  },
  {
    cardType: "staticCard",
    cardColor: "DD-card-Light-Purple",
    description:
      "Лорем ипсум е едноставен модел на текст кој се користел Лорем ипсум е едноставен модел на текст кој се користел Лорем ипсум е едноставен модел на текст кој се користел...",
    img: "./Img/ProfilePageImages/profile3.png",
    userName: "Име и Презиме",
    date: "00/00/00",
    time: "00:00",
  },
];
const newDiscInput = document.querySelector(".newDiscusionInput");
const enteredDiscBadge = document.querySelector(".enteredDisc");
const discussionCurrentLoggedInName =
  document.querySelector(".newDiscussionUser");
const profileBigImageOnProfilePage =
  document.querySelector(".ProfilePageBigImg");

const discusionCardBgColors = [
  "DD-card-Light-Blue",
  "DD-card-Light-Purple",
  "DD-card-LightGreen",
];
if (localStorage.getItem("DiscussionCards")) {
  const discussionFromLocalStorage = localStorage.getItem("DiscussionCards");
  const parsedDisc = JSON.parse(discussionFromLocalStorage);
  parsedDisc.unshift();
  parsedDisc.sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    return dateB - dateA;
  });
  displayDiscussionCards(parsedDisc);
} else {
  displayDiscussionCards(discussions);
}

newDiscInput.addEventListener("keyup", function (e) {
  if (e.key === "Enter") {
    const date = new Date();

    const currentYear = date.getFullYear();
    const currentMonth = date.getMonth() + 1;
    const currentDate = date.getDate();

    const currentHour = date.getHours();
    const currentMinute = date.getMinutes();

    const formattedDate = `${currentDate}/${currentMonth}/${currentYear}`;
    const formattedTime = `${currentHour}:${currentMinute}`;

    let userName;
    let currentUserProfileImg;
    if (localStorage.getItem("currentLoggedInUser") === "User123") {
      const currentUser = JSON.parse(localStorage.getItem("profileUser123"));
      userName = currentUser.nameAndLastName;
      currentUserProfileImg = currentUser.img;
      discussionCurrentLoggedInName.innerHTML = currentUser.nameAndLastName;
      profileBigImageOnProfilePage.src = currentUser.img;

      currentUser.activeDiscussion = true;
      localStorage.setItem("profileUser123", JSON.stringify(currentUser));
      enteredDiscBadge.style.display = "block";
    }
    if (localStorage.getItem("currentLoggedInUser") === "User456") {
      const currentUser = JSON.parse(localStorage.getItem("profileUser456"));
      userName = currentUser.nameAndLastName;
      currentUserProfileImg = currentUser.img;

      discussionCurrentLoggedInName.innerHTML = userName;
      profileBigImageOnProfilePage.src = currentUser.img;

      currentUser.activeDiscussion = true;
      localStorage.setItem("profileUser456", JSON.stringify(currentUser));
      enteredDiscBadge.style.display = "block";
    }
    if (localStorage.getItem("currentLoggedInUser") === "User789") {
      const currentUser = JSON.parse(localStorage.getItem("profileUser789"));
      currentUserProfileImg = currentUser.img;
      userName = currentUser.nameAndLastName;
      discussionCurrentLoggedInName.innerHTML = userName;
      profileBigImageOnProfilePage.src = currentUser.img;

      currentUser.activeDiscussion = true;
      localStorage.setItem("profileUser789", JSON.stringify(currentUser));
      enteredDiscBadge.style.display = "block";
    }

    const enteredText = e.target.value;
    const randomIndexDiscusionColor = randomIntFromInterval(0, 2);
    const newDiscussion = {
      cardType: "staticCard",
      cardColor: discusionCardBgColors[randomIndexDiscusionColor],
      description: enteredText,
      img: currentUserProfileImg,
      userName: userName,
      date: formattedDate,
      time: formattedTime,
    };
    //Here is the logic about when adding new Discussions to check if there are discussions saved on session
    if (localStorage.getItem("DiscussionCards")) {
      const discussionFromLocalStorage =
        localStorage.getItem("DiscussionCards");
      const parsedDisc = JSON.parse(discussionFromLocalStorage);

      parsedDisc.unshift(newDiscussion);
      parsedDisc.sort((a, b) => {
        const dateA = new Date(a.date);
        const dateB = new Date(b.date);
        return dateB - dateA;
      });
      localStorage.setItem("DiscussionCards", JSON.stringify(parsedDisc));
      displayDiscussionCards(parsedDisc);
    } else {
      //Here is the logic about when THERE IS NOTHING ON
      discussions.unshift(newDiscussion);
      discussions.sort((a, b) => {
        const dateA = new Date(a.date);
        const dateB = new Date(b.date);
        return dateB - dateA;
      });
      localStorage.setItem("DiscussionCards", JSON.stringify(discussions));
      displayDiscussionCards(discussions);
    }
    e.target.value = "";
  }
});

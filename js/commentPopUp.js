import { displayComments } from "./functions.js";
export { card1Arr, card2Arr, card3Arr, card4Arr, card5Arr };

const comments = [
  {
    cardType: "staticCard",
    description: "Лорем ипсум е едноставен модел на текст кој се користел...",
    img: "./Img/DiscusionPageImages/profile pic.png",
    userName: "Име и Презиме",
    date: "00/00/00",
    time: "00:00",
  },
  {
    cardType: "staticCard",
    description:
      "Лорем ипсум е едноставен модел на текст кој се користел Лорем ипсум е едноставен модел на текст кој се користел...",
    img: "./Img/DiscusionPageImages/profile pic.png",
    userName: "Име и Презиме",
    date: "00/00/00",
    time: "00:00",
  },
  {
    cardType: "staticCard",
    description:
      "Лорем ипсум е едноставен модел на текст кој се користел Лорем ипсум е едноставен модел на текст кој се користел Лорем ипсум е едноставен модел на текст кој се користел...",
    img: "./Img/DiscusionPageImages/profile pic.png",
    userName: "Име и Презиме",
    date: "00/00/00",
    time: "00:00",
  },
  {
    cardType: "staticCard",
    description:
      "Лорем ипсум е едноставен модел на текст кој се користел Лорем ипсум е едноставен модел на текст кој се користел Лорем ипсум е едноставен модел на текст кој се користел...",
    img: "./Img/DiscusionPageImages/profile pic.png",
    userName: "Име и Презиме",
    date: "00/00/00",
    time: "00:00",
  },
  {
    cardType: "staticCard",
    description:
      "Лорем ипсум е едноставен модел на текст кој се користел Лорем ипсум е едноставен модел на текст кој се користел Лорем ипсум е едноставен модел на текст кој се користел...",
    img: "./Img/DiscusionPageImages/profile pic.png",
    userName: "Име и Презиме",
    date: "00/00/00",
    time: "00:00",
  },
];

const commentPopUp = document.querySelector(".videoPopUpContainer");
const newCommentInput = document.querySelector(".newCommentInput");
const newCommentCurrentLoggedInName = document.querySelector(".newCommentUser");
const newCommentLoggedInImg = document.querySelector(".newCommentProfilePic");

const removeCommentSectionBtn = document.querySelector(".x-button-comment");

let card1Arr = [...comments];
let card2Arr = [...comments];
let card3Arr = [...comments];
let card4Arr = [...comments];
let card5Arr = [...comments];

newCommentInput.addEventListener("keyup", (e) => {
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
    let profilePicImgComments;
    if (localStorage.getItem("currentLoggedInUser") === "User123") {
      const currentUser = JSON.parse(localStorage.getItem("profileUser123"));
      userName = currentUser.nameAndLastName;
      profilePicImgComments = currentUser.img;
      newCommentCurrentLoggedInName.innerHTML = userName;
      // tuka dodavaj i da se zacuva kolku pati e kliknato na video
    }
    if (localStorage.getItem("currentLoggedInUser") === "User456") {
      const currentUser = JSON.parse(localStorage.getItem("profileUser456"));
      profilePicImgComments = currentUser.img;

      userName = currentUser.nameAndLastName;
      newCommentCurrentLoggedInName.innerHTML = userName;
    }
    if (localStorage.getItem("currentLoggedInUser") === "User789") {
      const currentUser = JSON.parse(localStorage.getItem("profileUser789"));
      profilePicImgComments = currentUser.img;

      userName = currentUser.nameAndLastName;
      newCommentCurrentLoggedInName.innerHTML = userName;
    }

    const enteredComment = e.target.value;

    const newComment = {
      cardType: "staticCard",
      description: enteredComment,
      img: profilePicImgComments,
      userName: userName,
      date: formattedDate,
      time: formattedTime,
    };

    if (localStorage.getItem("card1Comments") !== null) {
      if (localStorage.getItem("card1CommentsSAVED") !== null) {
        const commentsFromLocalStorage =
          localStorage.getItem("card1CommentsSAVED");
        const parsedComments = JSON.parse(commentsFromLocalStorage);

        parsedComments.unshift(newComment);
        parsedComments.sort((a, b) => {
          const dateA = new Date(a.date);
          const dateB = new Date(b.date);
          return dateB - dateA;
        });
        localStorage.setItem(
          "card1CommentsSAVED",
          JSON.stringify(parsedComments)
        );
        displayComments(parsedComments);
      } else {
        card1Arr.unshift(newComment);
        card1Arr.sort((a, b) => {
          const dateA = new Date(a.date);
          const dateB = new Date(b.date);
          return dateB - dateA;
        });
        localStorage.setItem("card1CommentsSAVED", JSON.stringify(card1Arr));
        displayComments(card1Arr);
      }
    }

    if (localStorage.getItem("card2Comments") !== null) {
      if (localStorage.getItem("card2CommentsSAVED") !== null) {
        const commentsFromLocalStorage =
          localStorage.getItem("card2CommentsSAVED");
        const parsedComments = JSON.parse(commentsFromLocalStorage);

        parsedComments.unshift(newComment);
        parsedComments.sort((a, b) => {
          const dateA = new Date(a.date);
          const dateB = new Date(b.date);
          return dateB - dateA;
        });
        localStorage.setItem(
          "card2CommentsSAVED",
          JSON.stringify(parsedComments)
        );
        displayComments(parsedComments);
      } else {
        card2Arr.unshift(newComment);
        card2Arr.sort((a, b) => {
          const dateA = new Date(a.date);
          const dateB = new Date(b.date);
          return dateB - dateA;
        });
        localStorage.setItem("card2CommentsSAVED", JSON.stringify(card2Arr));
        displayComments(card2Arr);
      }
    }

    if (localStorage.getItem("card3Comments") !== null) {
      if (localStorage.getItem("card3CommentsSAVED") !== null) {
        const commentsFromLocalStorage =
          localStorage.getItem("card3CommentsSAVED");
        const parsedComments = JSON.parse(commentsFromLocalStorage);

        parsedComments.unshift(newComment);
        parsedComments.sort((a, b) => {
          const dateA = new Date(a.date);
          const dateB = new Date(b.date);
          return dateB - dateA;
        });
        localStorage.setItem(
          "card3CommentsSAVED",
          JSON.stringify(parsedComments)
        );
        displayComments(parsedComments);
      } else {
        card3Arr.unshift(newComment);
        card3Arr.sort((a, b) => {
          const dateA = new Date(a.date);
          const dateB = new Date(b.date);
          return dateB - dateA;
        });
        localStorage.setItem("card3CommentsSAVED", JSON.stringify(card3Arr));
        displayComments(card3Arr);
      }
    }

    if (localStorage.getItem("card4Comments") !== null) {
      if (localStorage.getItem("card4CommentsSAVED") !== null) {
        const commentsFromLocalStorage =
          localStorage.getItem("card4CommentsSAVED");
        const parsedComments = JSON.parse(commentsFromLocalStorage);

        parsedComments.unshift(newComment);
        parsedComments.sort((a, b) => {
          const dateA = new Date(a.date);
          const dateB = new Date(b.date);
          return dateB - dateA;
        });
        localStorage.setItem(
          "card4CommentsSAVED",
          JSON.stringify(parsedComments)
        );
        displayComments(parsedComments);
      } else {
        card4Arr.unshift(newComment);
        card4Arr.sort((a, b) => {
          const dateA = new Date(a.date);
          const dateB = new Date(b.date);
          return dateB - dateA;
        });
        localStorage.setItem("card4CommentsSAVED", JSON.stringify(card4Arr));
        displayComments(card4Arr);
      }
    }

    if (localStorage.getItem("card5Comments") !== null) {
      if (localStorage.getItem("card5CommentsSAVED") !== null) {
        const commentsFromLocalStorage =
          localStorage.getItem("card5CommentsSAVED");
        const parsedComments = JSON.parse(commentsFromLocalStorage);

        parsedComments.unshift(newComment);
        parsedComments.sort((a, b) => {
          const dateA = new Date(a.date);
          const dateB = new Date(b.date);
          return dateB - dateA;
        });
        localStorage.setItem(
          "card5CommentsSAVED",
          JSON.stringify(parsedComments)
        );
        displayComments(parsedComments);
      } else {
        card5Arr.unshift(newComment);
        card5Arr.sort((a, b) => {
          const dateA = new Date(a.date);
          const dateB = new Date(b.date);
          return dateB - dateA;
        });
        localStorage.setItem("card5CommentsSAVED", JSON.stringify(card5Arr));
        displayComments(card5Arr);
      }
    }
    e.target.value = "";
  }
});
// To exit from VideoComments POp up
removeCommentSectionBtn.addEventListener("click", () => {
  commentPopUp.style.display = "none";
  if (localStorage.getItem("card1Comments")) {
    localStorage.removeItem("card1Comments");
  }
  if (localStorage.getItem("card2Comments")) {
    localStorage.removeItem("card2Comments");
  }
  if (localStorage.getItem("card3Comments")) {
    localStorage.removeItem("card3Comments");
  }
  if (localStorage.getItem("card4Comments")) {
    localStorage.removeItem("card4Comments");
  }
  if (localStorage.getItem("card5Comments")) {
    localStorage.removeItem("card5Comments");
  }
});
// Deleting the Comment Section if the user refresh the page and NOT exiting the active CommentSection and making the card1Comments... if on session to delete them
window.addEventListener("beforeunload", () => {
  const checkIfCommentPOPUPAvailableOnSession = [
    "card1Comments",
    "card2Comments",
    "card3Comments",
    "card4Comments",
    "card5Comments",
  ];
  checkIfCommentPOPUPAvailableOnSession.forEach((activePopUp) => {
    if (localStorage.getItem(activePopUp) !== null) {
      localStorage.removeItem(activePopUp);
    }
  });
});

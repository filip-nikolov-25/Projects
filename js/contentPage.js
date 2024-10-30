export {
  filterContentCardsOnClick,
  arrOfButtonsLocally,
  addWatchedVideosBadge,
};
import { displayComments } from "./functions.js";
import {
  card1Arr,
  card2Arr,
  card3Arr,
  card4Arr,
  card5Arr,
} from "./commentPopUp.js";

const cards = [
  {
    imageSrc: "./img/contentPageImages/ContentImg5.png",
    imageAlt: "programming",
    title: "Наслов на видео DINAMICKI",
    description:
      "auultrices vehicula. Nulla nec mi et neque pharetra sollicitudin. Praesent commodo, mi non molestie placerat, nulla purus pretium ligula, a tempor nisi purus eget nibh. Integer tortor odio, commodo vitae, fermentum.",
    publicationDate: "02/02/2024",
    popular: "Popular Now",
    id: 1,
  },
  {
    imageSrc: "./Img/contentPageImages/Rectangle 540 slika 4.png",
    imageAlt: "programming",
    title: "Наслов на видео DINAMICKI",
    description:
      "Praesent vest dapibus.Etiam iaculis nunc ac metus. Ut id nisl quis enim dignissim sagittis. Etiam sollicitudin, ipsum eu pulvinar rutrum, tellus ipsum laoreet sapien, quis venenatis ante odio sit amet eros. Nullam justo.",
    publicationDate: "15/03/2024",
    mostWatched: "Most watched",
    id: 2,
  },
  {
    imageSrc: "./Img/contentPageImages/Rectangle 540 slika 7.png",
    imageAlt: "programming",
    title: "Наслов на видео DINAMICKI",
    description:
      "Vestibulum suscipitquis orci. Donec vitae magna id neque aliquam faucibus. Fusce lacinia arcu et nulla. Nulla vitae elit libero, a pharetra augue. Duis arcu tortor, suscipit eget, imperdiet nec, imperdiet iaculis, ipsum.",
    publicationDate: "10/05/2024",
    theme1: "Theme 1",
    id: 3,
  },
  {
    imageSrc: "./img/contentPageImages/ContentImg4.png",
    imageAlt: "programming",
    title: "Наслов на видео DINAMICKI",
    description:
      "Vestibulum suscipit null orci. Donec vitae magna id neque aliquam faucibus. Fusce lacinia arcu et nulla. Nulla vitae elit libero, a pharetra augue. Duis arcu tortor, suscipit eget, imperdiet nec, imperdiet iaculis, ipsum.",
    publicationDate: "10/05/2024",
    mostWatched: "Most watched",
    id: 4,
  },
  {
    imageSrc: "./Img/contentPageImages/Rectangle 540 slika 5.png",
    imageAlt: "programming",
    title: "Наслов на видео DINAMICKI",
    description:
      "Vestibulum suscipit nulla quis orci. Donec vitae magna id neque aliquam faucibus. Fusce lacinia arcu et nulla.Donec vitae magna Nulla vitae elit libero, a pharetra augue. Duis arcu tortor, suscipit eget, imperdiet nec, imperdiet iaculis, ipsum.",
    publicationDate: "10/05/2024",
    popular: "Popular Now",
    id: 5,
  },
];
const commentPopUp = document.querySelector(".videoPopUpContainer");
const filterbyPopularityBtn = document.querySelector("#popularBtn");
const filterByThemeBtn = document.querySelector("#theme1");
const filterByTrendingBtn = document.querySelector("#trending");
const cardsContainer = document.querySelector(".cardsContainer");

function addWatchedVideosBadge(current) {
  const fiveWatchedVideo = document.querySelector(".viewed5");
  const tenWatchedVideo = document.querySelector(".viewed10");
  if (current.videoPlayed >= 5) {
    fiveWatchedVideo.style.display = "block";

    if (current.videoPlayed >= 10) {
      tenWatchedVideo.style.display = "block";
    } else {
      tenWatchedVideo.style.display = "none";
    }
  } else {
    fiveWatchedVideo.style.display = "none";
    tenWatchedVideo.style.display = "none";
  }
}
function addVIdeosAndCheckApplyBadges(videoPath) {
  const videoInnerContainer = document.querySelector(".innerVideoContainer");
  const video = document.createElement("video");
  video.src = videoPath;
  video.classList.add("commentVIDEO");
  video.controls = true;

  video.addEventListener("play", () => {
    if (localStorage.getItem("currentLoggedInUser") === "User123") {
      const currentUser = JSON.parse(localStorage.getItem("profileUser123"));
      parseInt(currentUser.videoPlayed++);
      localStorage.setItem("profileUser123", JSON.stringify(currentUser));
      const current = JSON.parse(localStorage.getItem("profileUser123"));
      addWatchedVideosBadge(current);
    }
    if (localStorage.getItem("currentLoggedInUser") === "User456") {
      const currentUser = JSON.parse(localStorage.getItem("profileUser456"));

      parseInt(currentUser.videoPlayed++);
      localStorage.setItem("profileUser456", JSON.stringify(currentUser));
      const current = JSON.parse(localStorage.getItem("profileUser456"));
      addWatchedVideosBadge(current);
    }
    if (localStorage.getItem("currentLoggedInUser") === "User789") {
      const currentUser = JSON.parse(localStorage.getItem("profileUser789"));

      parseInt(currentUser.videoPlayed++);
      localStorage.setItem("profileUser789", JSON.stringify(currentUser));
      const current = JSON.parse(localStorage.getItem("profileUser789"));
      addWatchedVideosBadge(current);
    }
  });
  videoInnerContainer.innerHTML = "";
  videoInnerContainer.append(video);
}

function renderCard(cardImg, cardName, cardText, cardDate, cardId) {
  let cardParent = document.createElement("div");
  cardParent.classList.add("cardParentCard");
  cardParent.id = cardId;
  cardParent.innerHTML = ` <div class="cardInner">
      <img
        src="${cardImg}"
        alt="programming"
      />
      <div class="cardInner-Text">
        <h3>${cardName}</h3>
        <p>${cardText}</p>
        <p>${cardDate}</p>
      </div>
    </div>`;

  cardsContainer.appendChild(cardParent);
}
let arrOfButtonsLocally = [];

// For handling the events after filtering
function attachEventListenersToCards() {
  const allCards = document.querySelectorAll(".cardParentCard");
  allCards.forEach((card) => {
    const cardId = card.id;

    card.addEventListener("click", () => {
      if (cardId === "1") {
        commentPopUp.style.display = "flex";
        if (localStorage.getItem("card1Comments") === null) {
          localStorage.setItem("card1Comments", "true");
          if (localStorage.getItem("card1CommentsSAVED") !== null) {
            const arrOfComments = JSON.parse(
              localStorage.getItem("card1CommentsSAVED")
            );
            displayComments(arrOfComments);
          } else {
            displayComments(card1Arr);
          }
        }
        addVIdeosAndCheckApplyBadges("./videos/firstPopUpSectionVideo.mp4");
      }

      if (cardId === "2") {
        commentPopUp.style.display = "flex";
        if (localStorage.getItem("card2Comments") === null) {
          localStorage.setItem("card2Comments", "true");
          if (localStorage.getItem("card2CommentsSAVED") !== null) {
            const arrOfComments = JSON.parse(
              localStorage.getItem("card2CommentsSAVED")
            );
            displayComments(arrOfComments);
          } else {
            displayComments(card2Arr);
          }
        }
        addVIdeosAndCheckApplyBadges("./videos/secondPopUpSectionVideo.mp4");
      }
      if (cardId === "3") {
        commentPopUp.style.display = "flex";
        if (localStorage.getItem("card3Comments") === null) {
          localStorage.setItem("card3Comments", "true");
          if (localStorage.getItem("card3CommentsSAVED") !== null) {
            const arrOfComments = JSON.parse(
              localStorage.getItem("card3CommentsSAVED")
            );
            displayComments(arrOfComments);
          } else {
            displayComments(card3Arr);
          }
        }
        addVIdeosAndCheckApplyBadges("./videos/thirdPopUpsectionVideo.mp4");
      }
      if (cardId === "4") {
        commentPopUp.style.display = "flex";
        if (localStorage.getItem("card4Comments") === null) {
          localStorage.setItem("card4Comments", "true");
          if (localStorage.getItem("card4CommentsSAVED") !== null) {
            const arrOfComments = JSON.parse(
              localStorage.getItem("card4CommentsSAVED")
            );
            displayComments(arrOfComments);
          } else {
            displayComments(card4Arr);
          }
        }
        addVIdeosAndCheckApplyBadges("./videos/fourthPopUpSectionVideo.mp4");
      }
      if (cardId === "5") {
        commentPopUp.style.display = "flex";
        if (localStorage.getItem("card5Comments") === null) {
          localStorage.setItem("card5Comments", "true");
          if (localStorage.getItem("card5CommentsSAVED") !== null) {
            const arrOfComments = JSON.parse(
              localStorage.getItem("card5CommentsSAVED")
            );
            displayComments(arrOfComments);
          } else {
            displayComments(card5Arr);
          }
        }
        addVIdeosAndCheckApplyBadges("./videos/fifthPopUpSectionVideo.mp4");
      }
    });
  });
}

function filterContentCardsOnClick(arrOfCheckBoxId) {
  let arrOfFilteredCards = [];

  arrOfButtonsLocally = arrOfCheckBoxId;
  checkIfButtonsAreChecked(arrOfButtonsLocally);

  arrOfCheckBoxId.forEach((checkboxId) => {
    // Checks for each element if the arrOfCheckBoxId has the folowing ids and if it has pushes the card to arrOfFilteredCards and
    //  THEN if the arr is emtpy LOAD ALL CARDS Else loads the elements OF arrOfFIlteredCards
    switch (checkboxId) {
      case "popularBtn":
        const filteredByPopular = cards.filter((card) =>
          card.hasOwnProperty("popular")
        );
        filteredByPopular.forEach((card) => arrOfFilteredCards.push(card));
        break;

      case "trending":
        const filteredByMostWatched = cards.filter((card) =>
          card.hasOwnProperty("mostWatched")
        );
        filteredByMostWatched.forEach((card) => arrOfFilteredCards.push(card));
        break;

      case "theme1":
        const filteredByTheme1 = cards.filter((card) =>
          card.hasOwnProperty("theme1")
        );
        filteredByTheme1.forEach((card) => arrOfFilteredCards.push(card));
        break;

      default:
        break;
    }
  });

  if (arrOfFilteredCards.length >= 1) {
    cardsContainer.innerHTML = "";
    arrOfFilteredCards.forEach((card) => {
      renderCard(
        card.imageSrc,
        card.title,
        card.description,
        card.publicationDate,
        card.id
      );
    });
  } else {
    cardsContainer.innerHTML = "";
    cards.forEach((card) => {
      renderCard(
        card.imageSrc,
        card.title,
        card.description,
        card.publicationDate,
        card.id
      );
    });
  }

  //  attaching the events after rendering the new cards because instead of displaying none i render them every time so i can't acces them directly and on filter they are removed thats why i use this
  attachEventListenersToCards();
}

// This sets the checkbox to active.WIthout this is filters the cards correctly(From Session) but all the checkbox are UNchecked so when checking them again it add duplicate
function checkIfButtonsAreChecked(arrayButtons) {
  arrayButtons.forEach((buttonId) => {
    const button = document.querySelector(`#${buttonId}`);
    if (button) {
      button.classList.add("active");
    }
  });
}

filterbyPopularityBtn.addEventListener("click", (e) => {
  const popularBtn = e.target;
  // If checkbox is checked pushes the checkbox id in the empty ELSE if it is not checked removes the Checkbox ID and the function is called again
  if (!popularBtn.classList.contains("active")) {
    popularBtn.classList.add("active");
    arrOfButtonsLocally.push("popularBtn");
    e.target.style.backgroundColor = "#c2ebdb";
    e.target.style.color = "#42356B";
  } else {
    popularBtn.classList.remove("active");
    e.target.style.backgroundColor = "#ade2cf";
    e.target.style.color = "#829da7";
    const index = arrOfButtonsLocally.indexOf("popularBtn");
    if (index !== -1) {
      arrOfButtonsLocally.splice(index, 1);
    }
  }
  filterContentCardsOnClick(arrOfButtonsLocally);

  // Setting the current clicked checkbox on Session if there is a user
  if (localStorage.getItem("currentLoggedInUser") !== null) {
    // Checks if the array is empty or not so based on that to get the inputsId or not
    const currentUser = localStorage.getItem("currentLoggedInUser");
    localStorage.setItem(currentUser, arrOfButtonsLocally);
  }
});

filterByTrendingBtn.addEventListener("click", (e) => {
  const trendingBtn = e.target;
  if (!trendingBtn.classList.contains("active")) {
    trendingBtn.classList.add("active");
    arrOfButtonsLocally.push("trending");
    e.target.style.backgroundColor = "#c2ebdb";
    e.target.style.color = "#42356B";
  } else {
    trendingBtn.classList.remove("active");
    e.target.style.backgroundColor = "#ade2cf";
    e.target.style.color = "#829da7";
    const index = arrOfButtonsLocally.indexOf("trending");
    if (index !== -1) {
      arrOfButtonsLocally.splice(index, 1);
    }
  }
  filterContentCardsOnClick(arrOfButtonsLocally);
  // Setting the current clicked checkbox on Session if there is a user

  if (localStorage.getItem("currentLoggedInUser") !== null) {
    // Checks if the array is empty or not so based on that to get the inputsId or not
    const currentUser = localStorage.getItem("currentLoggedInUser");
    localStorage.setItem(currentUser, arrOfButtonsLocally);
  }
});

filterByThemeBtn.addEventListener("click", (e) => {
  const theme1Btn = e.target;
  if (!theme1Btn.classList.contains("active")) {
    theme1Btn.classList.add("active");
    arrOfButtonsLocally.push("theme1");
    e.target.style.backgroundColor = "#c2ebdb";
    e.target.style.color = "#42356B";
  } else {
    theme1Btn.classList.remove("active");
    e.target.style.backgroundColor = "#ade2cf";
    e.target.style.color = "#829da7";
    const index = arrOfButtonsLocally.indexOf("theme1");
    if (index !== -1) {
      arrOfButtonsLocally.splice(index, 1);
    }
  }
  filterContentCardsOnClick(arrOfButtonsLocally);

  // Setting the current clicked checkbox on Session if there is a user
  if (localStorage.getItem("currentLoggedInUser") !== null) {
    const currentUser = localStorage.getItem("currentLoggedInUser");
    localStorage.setItem(currentUser, arrOfButtonsLocally);
  }
});
filterContentCardsOnClick(arrOfButtonsLocally); //Calling the function initially to work and filter if there is checked
// checkbox iritates the elemets and filter based on the id if the array is empty shows the all cards.
// And on change on checkbox the array is filled with id of the same checkbox and the function is called again

// Carrousel

const nextBtn = document.querySelector(".carrousel-Next");
const previousBtn = document.querySelector(".carrousel-Previous");
const firstCarrouselItem = document.querySelector(".header1-carrousel");
const secondCarrouselItem = document.querySelector(".header2-carrousel");
const thirdCarrouselItem = document.querySelector(".header3-carrousel");
let carrouselCounter = 0;
nextBtn.addEventListener("click", () => {
  if (carrouselCounter === 0) {
    firstCarrouselItem.style.display = "none";
    secondCarrouselItem.style.display = "block";
    thirdCarrouselItem.style.display = "none";
    carrouselCounter++;
  } else if (carrouselCounter === 1) {
    carrouselCounter++;
    secondCarrouselItem.style.display = "none";
    firstCarrouselItem.style.display = "none";
    thirdCarrouselItem.style.display = "block";
  } else if (carrouselCounter === 2) {
    carrouselCounter = 0;
    thirdCarrouselItem.style.display = "none";
    firstCarrouselItem.style.display = "block";
    secondCarrouselItem.style.display = "none";
  }
});
previousBtn.addEventListener("click", () => {
  if (carrouselCounter === 0) {
    carrouselCounter = 2;
    firstCarrouselItem.style.display = "none";
    secondCarrouselItem.style.display = "none";
    thirdCarrouselItem.style.display = "block";
  } else if (carrouselCounter === 1) {
    carrouselCounter--;
    secondCarrouselItem.style.display = "none";
    firstCarrouselItem.style.display = "block";
    thirdCarrouselItem.style.display = "none";
  } else if (carrouselCounter === 2) {
    carrouselCounter--;
    thirdCarrouselItem.style.display = "none";
    firstCarrouselItem.style.display = "none";
    secondCarrouselItem.style.display = "block";
  }
});

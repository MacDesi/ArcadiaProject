let pages = [

  {
    page: 0,
    imgUrl: "https://i.pinimg.com/originals/8b/85/62/8b8562f42f0402989b66dcd5f66c5121.gif",
    StoryText:
      "Where Am I?.",
    choice1: 1,
    choice2: 1,
    choice1Text: "Go to next page",
    choice2Text: ""
  },
  {
    page: 1,
    imgUrl: "https://cdn.vox-cdn.com/uploads/chorus_asset/file/13601618/BW_Trailer.gif",
    StoryText:
      "In this game your path determines your future. Please be weary of your choices and select carefully.",
    choice1: 2,
    choice2: 2,
    choice1Text: "Go to next page",
    choice2Text: ""
  },
  {
    page: 2,
    imgUrl: "https://i.imgur.com/zHRczcr.jpg",
    StoryText:
      "Are you an Emitter(Right) or Augmenter(Left)",
    choice1: 3,
    choice2: 4,
    choice1Text: "Augmenter",
    choice2Text: "Emitter"
  },
  {
    page: 3,
    StoryText:
      "Welcome, Augmenter",
    choice1: 5,
    choice2: 4,
  
  },
  {
    page: 4,
    StoryText:
      "Welcome Emitter",
    choice1: 5,
    choice2: 6,
    choice1Text:
      "",
    choice2Text: ""
  },
];

let currentPage = 0;

// check what currentPage at -
function decideButton() {
  if (pages[currentPage].choice1 === pages[currentPage].choice2) {
    document.getElementById("button2").classList.add("hidden");
  } else {
    document.getElementById("button2").classList.remove("hidden");
  }
}

function renderNewPage() {
  // var pageinArray = pages[newPage + 1];
  // imgURL
  document.getElementById("Img").src = pages[currentPage].imgUrl;
  document.getElementById("text").innerHTML = pages[currentPage].StoryText;
  document.getElementById("button1").innerHTML = pages[currentPage].choice1Text;
  document.getElementById("button2").innerHTML = pages[currentPage].choice2Text;
  decideButton();
}
// document.getElementById("button2").style.visibility = "hidden";

function nextPage(buttonID) {
  if (buttonID === "button1") {
    currentPage = pages[currentPage].choice1;
  } else {
    currentPage = pages[currentPage].choice2;
  }
  renderNewPage();
}

function startPlay() {
  var elementHomePage = document.getElementById("homePage");
  elementHomePage.classList.add("hidden");
  var elementFooter = document.getElementById("footer");
  elementFooter.classList.add("hidden");
  var elementStory = document.getElementById("story");
  elementStory.classList.remove("hidden");
  document.getElementById("button2").classList.add("hidden");
}

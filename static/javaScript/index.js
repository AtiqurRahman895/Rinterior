// change the background of nav bar

window.addEventListener(`scroll`, () => {
    if (window.scrollY >= 20) {
      document
        .querySelector(`.headerSection`)
        .classList.add(`headerSectionAnimation`);
    } else {
      document
        .querySelector(`.headerSection`)
        .classList.remove(`headerSectionAnimation`);
    }
  });


  // Statistics box animation

let happyReviews = 250;
let completedProjects = 50;
let happyClient = 30;
let teamMembers = 307;

function videosNumberBoxAnimation(target, statisticNumber,icon) {
  let i = 0;
  let interval = setInterval(() => {
    i++;
    document.querySelector(`.${target}`).innerText = `${i}${icon}`;
    
    if (i === statisticNumber) {
      clearInterval(interval);
    }
  }, 3);
}



videosNumberBoxAnimation('happyReviews', happyReviews,'+');
videosNumberBoxAnimation('completedProjects', completedProjects,'+');
videosNumberBoxAnimation('happyClient', happyClient,'K');
videosNumberBoxAnimation('teamMembers', teamMembers,'+');
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


let allStatisticNumber = document.querySelectorAll(`.eachStatisticNumber`);
let observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry)=>{
      if(entry.target.className.includes('happyReviews') && entry.isIntersecting){
        videosNumberBoxAnimation('happyReviews', happyReviews,'+');
      }else if(entry.target.className.includes('completedProjects') && entry.isIntersecting){
        videosNumberBoxAnimation('completedProjects', completedProjects,'+');
      }else if(entry.target.className.includes('happyClient') && entry.isIntersecting){
        videosNumberBoxAnimation('happyClient', happyClient,'K');
      }else if(entry.target.className.includes('teamMembers') && entry.isIntersecting){
        videosNumberBoxAnimation('teamMembers', teamMembers,'+');
      }
      if(entry.isIntersecting){
        observer.unobserve(entry.target)
      }
    })
  },
  {
    threshold: 0.8,
  }
);

allStatisticNumber.forEach((eachStatisticNumber)=>{
  observer.observe(eachStatisticNumber);
})

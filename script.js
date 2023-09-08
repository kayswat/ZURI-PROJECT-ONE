 const myName = document.createElement('div');
 myName.className = "slack-name";
 myName.id = "slack-name";
 myName.setAttribute('data-testid', 'SlackUserName');
myName.textContent = "Kazeem Toheeb";
 document.querySelector('.header').appendChild(myName);

 const displayImage = document.createElement('img');
 displayImage.src = "profile-picture.PNG";
 displayImage.setAttribute('alt', 'Kayswat');
 displayImage.className = "profile-picture";
 displayImage.id = "profile-picture";
 displayImage.setAttribute('data-testid', 'slackDisplayImage');
 document.querySelector('.image-container').appendChild(displayImage);

 const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

const d = new Date();
let day = days[d.getDay()];
 currentDay = document.createElement('div');
 currentDay.className = "day-of-the-week";
 currentDay.id = "day-of-the-week";
 currentDay.setAttribute('data-testid', 'currentDayOfTheWeek');
currentDay.textContent = day;
 document.querySelector('.main').appendChild(currentDay);


const time = new Date().getTime();
utcTime = document.createElement('div');
 utcTime.className = "utc-time";
 utcTime.id = "utc-time";
 utcTime.setAttribute('data-testid', 'currentUTCTime');
utcTime.textContent = time;
 document.querySelector('.main').appendChild(utcTime);

 const track = document.createElement('div');
 track.className = "track";
 track.id = "track";
 track.setAttribute('data-testid', 'myTrack');
track.textContent = "Frontend";
 document.querySelector('.main').appendChild(track);

 const  click= document.createElement('div');
 click.className = "click";
 click.id = "click";
click.textContent = "Click on the button below to go to the repository of the source code ";
 document.querySelector('.main').appendChild(click);

 const githubBtn = document.createElement('button');
 githubBtn.className = "btn";
 githubBtn.id = "btn";
 githubBtn.setAttribute('data-testid', 'githubURL');
 githubBtn.setAttribute('target', '_blank');
githubBtn.textContent = "Click Me";
 githubBtn.addEventListener("click", function(){
    window.location.href = "https://github.com/kayswat/ZURI-PROJECT-ONE";
 });
 document.querySelector('.main').appendChild(githubBtn);


 const utcMilliseconds = new Date().getTime();
console.log(utcMilliseconds);
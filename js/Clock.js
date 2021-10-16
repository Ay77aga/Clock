console.time();
let time = new Date();
let sc = time.getSeconds();
let me = time.getMinutes();
let ho = time.getHours();
let s_arrow = document.createElement('div');
let m_arrow = document.createElement('div');
let h_arrow = document.createElement('div');
let body_c = document.createElement('section');

s_arrow.className = 'sec';
m_arrow.classList = 'minut';
h_arrow.classList = 'hours';
let hours = ho > 12 ? ho - 12 : ho;

let art = document.createElement('article');

for (let i = 0; i < 3; i++) {
  ar = document.createElement('span');
  art.appendChild(ar);
}
document.body.appendChild(art);
let ss = document.querySelectorAll('article span');

let s = setInterval(_ => {
  s_arrow.style.transform = `rotateZ(${sc*6}deg)`;
  m_arrow.style.transform = `rotateZ(${me*6}deg)`;
  h_arrow.style.transform = `rotateZ(${ho*30}deg)`;


  s_arrow.setAttribute('data', `${sc}`);
  m_arrow.setAttribute('data', `${me}`);
  h_arrow.setAttribute('data', `${hours}`);


  ss[0].setAttribute('data', `Hours`);
  ss[1].setAttribute('data', `Minutes`);
  ss[2].setAttribute('data', `Seconds`);

  ss[0].innerHTML = hours;

  ss[1].innerHTML = me;
  ss[2].innerHTML = sc;
  sc++;

  if (sc == 60) {
    sc = 0;
    ++me;
  }
  if (me == 60) {
    me = 0;
    ++ho;
    ++hours;
  }
}, 1000);

for (let i = 0; i < 4; i++) {
  let t_c = document.createElement('span');
  body_c.appendChild(t_c);
}

body_c.appendChild(s_arrow);
body_c.appendChild(m_arrow);
body_c.appendChild(h_arrow);
document.body.appendChild(body_c);

let span = document.querySelectorAll('section span');
span[0].innerHTML = '12';
span[1].innerHTML = '3';
span[2].innerHTML = '6';
span[3].innerHTML = '9';

//  years
let day = time.getDay();
let month = time.getMonth()+1;
let year = time.getFullYear();

console.log(day);
console.log(month);
let article = document.createElement('article');
for (let i = 0; i < 3; i++) {
  let artspan = document.createElement('span');
  article.appendChild(artspan);
}
document.body.appendChild(article);
let ymd = document.querySelectorAll('article:last-child span');
var days = ["Sunday", "Monday", "Tuesday", "Wednesday ", "Thursday", "Friday", "Saturday"];
let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

ymd[0].innerHTML = days[day] + ` (${time.getDate()})`;
ymd[1].innerHTML = months[month-1] + ` (${month})`;
ymd[2].innerHTML = year;

ymd[0].setAttribute('data', 'Day');
ymd[1].setAttribute('data', 'Month');
ymd[2].setAttribute('data', 'Year');
'use strict';
let dailyHours = ['6:00 AM','7:00 AM','8:00 AM','9:00 AM','10:00 AM','11:00 AM','12:00 PM','1:00 PM','2:00 PM','3:00 PM','4:00 PM','5:00 PM','6:00 PM','7:00 PM',' TotalSales '];

function randomValue(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}
let globVar=document.getElementById('cookies');
const SeattleShop= {
  Location :'Seattle',
  min:23,
  max:65,
  averageCookie: 6.3,
  custPerHour:[],
  sellCookies:[],
  totalcookiesAllDay:0,
  cookiesArray:[],

  customerPerHour :function() {
    for(let i=0;i<dailyHours.length;i++) {
      let valv=randomValue(this.min,this.max);
      this.custPerHour.push(valv);
    }
    console.log(this.custPerHour);
  },
  sPerHour :function() {
    for (let i=0; i<14; i++ ){
      let multi=Math.floor(this.custPerHour[i]*this.averageCookie);
      this.sellCookies.push(multi);
    }
    console.log(this.sellCookies);
  },
  totalcookies: function () {
    for (let i=0;i<14;i++){
      this.totalcookiesAllDay= this.totalcookiesAllDay+this.sellCookies[i];
    }
    this.sellCookies.push(this.totalcookiesAllDay);
    console.log(this.totalcookiesAllDay);
  },

  render:function() {
    let h2El = document.createElement('h2');
    globVar.appendChild(h2El);
    h2El.textContent = 'Seattle';
    let ulEL = document.createElement('ul');
    globVar.appendChild(ulEL);
    for (let j=0; j <this.sellCookies.length; j++ ) {
      let liEL = document.createElement('li');
      ulEL.appendChild(liEL);
      liEL.textContent=`${dailyHours[j]} : ${this.sellCookies[j]}`;
    }
  },
};
SeattleShop.customerPerHour();
SeattleShop.sPerHour();
SeattleShop.totalcookies();
SeattleShop.render();

const TokyoShop= {
  Location :'Seattle',
  min:3,
  max:24,
  averageCookie: 1.2,
  custPerHour:[],
  sellCookies:[],totalcookiesAllDay:0,cookiesArray:[],

  customerPerHour :function() {
    for(let i=0;i<dailyHours.length;i++) {
      let valv=randomValue(this.min,this.max);
      this.custPerHour.push(valv);
    }
    console.log(this.custPerHour);
  },
  sPerHour :function() {
    for (let i=0; i<14; i++ ){
      let multi=Math.floor(this.custPerHour[i]*this.averageCookie);
      this.sellCookies.push(multi);
    }
    console.log(this.sellCookies);
  },
  totalcookies: function () {
    for (let i=0;i<14;i++){
      this.totalcookiesAllDay= this.totalcookiesAllDay+this.sellCookies[i];
    }
    this.sellCookies.push(this.totalcookiesAllDay);
    console.log(this.totalcookiesAllDay);
  },

  render:function() {
    let h2El = document.createElement('h2');
    globVar.appendChild(h2El);
    h2El.textContent = 'Tokyo';
    let ulEL = document.createElement('ul');
    globVar.appendChild(ulEL);
    for (let j=0; j <this.sellCookies.length; j++ ) {
      let liEL = document.createElement('li');
      ulEL.appendChild(liEL);
      liEL.textContent=`${dailyHours[j]} : ${this.sellCookies[j]}`;
    }
  },
};
TokyoShop.customerPerHour();
TokyoShop.sPerHour();
TokyoShop.totalcookies();
TokyoShop.render();

const DubaiShop= {
  Location :'Seattle',
  min:11,
  max:38,
  averageCookie: 3.7,
  custPerHour:[],
  sellCookies:[],totalcookiesAllDay:0,cookiesArray:[],

  customerPerHour :function() {
    for(let i=0;i<dailyHours.length;i++) {
      let valv=randomValue(this.min,this.max);
      this.custPerHour.push(valv);
    }
    console.log(this.custPerHour);
  },
  sPerHour :function() {
    for (let i=0; i<14; i++ ){
      let multi=Math.floor(this.custPerHour[i]*this.averageCookie);
      this.sellCookies.push(multi);
    }
    console.log(this.sellCookies);
  },
  totalcookies: function () {
    for (let i=0;i<14;i++){
      this.totalcookiesAllDay= this.totalcookiesAllDay+this.sellCookies[i];
    }
    this.sellCookies.push(this.totalcookiesAllDay);
    console.log(this.totalcookiesAllDay);
  },

  render:function() {
    let h2El = document.createElement('h2');
    globVar.appendChild(h2El);
    h2El.textContent = 'Dubai';
    let ulEL = document.createElement('ul');
    globVar.appendChild(ulEL);
    for (let j=0; j <this.sellCookies.length; j++ ) {
      let liEL = document.createElement('li');
      ulEL.appendChild(liEL);
      liEL.textContent=`${dailyHours[j]} : ${this.sellCookies[j]}`;
    }
  },
};
DubaiShop.customerPerHour();
DubaiShop.sPerHour();
DubaiShop.totalcookies();
DubaiShop.render();

const ParisShop= {
  Location :'Seattle',
  min:20,
  max:38,
  averageCookie: 2.3,
  custPerHour:[],
  sellCookies:[],totalcookiesAllDay:0,cookiesArray:[],

  customerPerHour :function() {
    for(let i=0;i<dailyHours.length;i++) {
      let valv=randomValue(this.min,this.max);
      this.custPerHour.push(valv);
    }
    console.log(this.custPerHour);
  },
  sPerHour :function() {
    for (let i=0; i<14; i++ ){
      let multi=Math.floor(this.custPerHour[i]*this.averageCookie);
      this.sellCookies.push(multi);
    }
    console.log(this.sellCookies);
  },
  totalcookies: function () {
    for (let i=0;i<14;i++){
      this.totalcookiesAllDay= this.totalcookiesAllDay+this.sellCookies[i];
    }
    this.sellCookies.push(this.totalcookiesAllDay);
    console.log(this.totalcookiesAllDay);
  },

  render:function() {
    let h2El = document.createElement('h2');
    globVar.appendChild(h2El);
    h2El.textContent = 'Paris';
    let ulEL = document.createElement('ul');
    globVar.appendChild(ulEL);
    for (let j=0; j <this.sellCookies.length; j++ ) {
      let liEL = document.createElement('li');
      ulEL.appendChild(liEL);
      liEL.textContent=`${dailyHours[j]} : ${this.sellCookies[j]}`;
    }
  },
};
ParisShop.customerPerHour();
ParisShop.sPerHour();
ParisShop.totalcookies();
ParisShop.render();


const LimaShop= {
  Location :'Seattle',
  min:2,
  max:16,
  averageCookie: 4.6,
  custPerHour:[],
  sellCookies:[],totalcookiesAllDay:0,cookiesArray:[],

  customerPerHour :function() {
    for(let i=0;i<dailyHours.length;i++) {
      let valv=randomValue(this.min,this.max);
      this.custPerHour.push(valv);
    }
    console.log(this.custPerHour);
  },
  sPerHour :function() {
    for (let i=0; i<14; i++ ){
      let multi=Math.floor(this.custPerHour[i]*this.averageCookie);
      this.sellCookies.push(multi);
    }
    console.log(this.sellCookies);
  },
  totalcookies: function () {
    for (let i=0;i<14;i++){
      this.totalcookiesAllDay= this.totalcookiesAllDay+this.sellCookies[i];
    }
    this.sellCookies.push(this.totalcookiesAllDay);
    console.log(this.totalcookiesAllDay);
  },

  render:function() {
    let h2El = document.createElement('h2');
    globVar.appendChild(h2El);
    h2El.textContent = 'Lima';
    let ulEL = document.createElement('ul');
    globVar.appendChild(ulEL);
    for (let j=0; j <this.sellCookies.length; j++ ) {
      let liEL = document.createElement('li');
      ulEL.appendChild(liEL);
      liEL.textContent=`${dailyHours[j]} : ${this.sellCookies[j]}`;
    }
  },
};
LimaShop.customerPerHour();
LimaShop.sPerHour();
LimaShop.totalcookies();
LimaShop.render();
  
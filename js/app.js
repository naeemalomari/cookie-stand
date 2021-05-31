'use strict';
let dailyHours = ['6:00 AM','7:00 AM','8:00 AM','9:00 AM','10:00 AM','11:00 AM','12:00 PM','1:00 PM',
  '2:00 PM','3:00 PM','4:00 PM','5:00 PM','6:00 PM','7:00 PM'
  ,'TotalSales '];

function randomValue(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}
let globVar=document.getElementById('cookies');

let table=document.createElement('table');
globVar.appendChild(table);
// function workHours (){
//   let firstRow= document.createElement('tr');
//   for (let i=0 ;i<dailyHours.length;i++){

//     let th = document.createElement('th');
//     th.textContent=dailyHours[i];
//     firstRow.appendChild(th);

//   }
//   table.appendChild(firstRow);
// }
// workHours();



let ArrOfLocations =[];

function Locations ( location ,min, max, averageCookie){
  this.location=location;
  this.min =min;
  this.max =max;
  this.averageCookie = averageCookie;
  this.custPerHour=[];
  this.sellCookies=[];
  this.totalcookiesAllDay=0;
  //   this.sellCookies=[];
  ArrOfLocations.push(this);
}
Locations.prototype.customerPerHour=function(){
  for(let i=0;i<dailyHours.length-1;i++) {
    let valv=randomValue(this.min,this.max);
    this.custPerHour.push(valv);
  }
  console.log(this.custPerHour);
};
Locations.prototype.sPerHour=function(){
  for (let i=0; i<dailyHours.length-1; i++ ){
    let multi=Math.floor(this.custPerHour[i]*this.averageCookie);
    this.sellCookies.push(multi);
  }
  console.log(this.sellCookies);
};
Locations.prototype.totalcookies=function() {
  for (let i=0;i<dailyHours.length-1;i++){
    this.totalcookiesAllDay= this.totalcookiesAllDay+this.sellCookies[i];
  }
  this.sellCookies.push(this.totalcookiesAllDay);
  console.log(this.totalcookiesAllDay);
};

Locations.prototype.renderheader=function(){
  let firstRow= document.createElement('tr');
  table.appendChild(firstRow);
  for (let i=-1 ;i<dailyHours.length;i++){

    let th = document.createElement('th');
    th.textContent=dailyHours[i];
    firstRow.appendChild(th);

  }

};



Locations.prototype.renderbody=function(){
  let secondRow= document.createElement('tr');
  let h2El=document.createElement('td');
  secondRow.appendChild(h2El);
  h2El.textContent=this.location;
  for (let i=0 ;i<this.sellCookies.length;i++){

    let td = document.createElement('td');
    secondRow.appendChild(td);
    td.textContent=this.sellCookies[i];
  }
  table.appendChild(secondRow);

  Locations.prototype.renderfooter=function(){
    let thirdRow=document.createElement('tr');
    table.appendChild(thirdRow);
    let total=document.createElement('td');
    thirdRow.appendChild(total);
    total.textContent='total';
    for (let i=0;i<this.sellCookies.length;i++) {
      let tdEl3=document.createElement('td');
      thirdRow.appendChild(tdEl3);

      let Sumation=0;
      for (let y=0;y<4;y++) {
        Sumation=Sumation+ ArrOfLocations[y].sellCookies[i];

      }
      tdEl3.textContent=Sumation;
    }

  };
//   let h2El = document.createElement('h2');
//   globVar.appendChild(h2El);
//   h2El.textContent = this.location;
//   let ulEL = document.createElement('ul');
//   globVar.appendChild(ulEL);
//   for (let j=0; j <dailyHours.length; j++ ) {
//     let liEL = document.createElement('li');
//     ulEL.appendChild(liEL);
//     liEL.textContent=`${dailyHours[j]} : ${this.sellCookies[j]}`;
//   }
};

let Seattle = new Locations('Seattle',23,65,6.3);
let Tokyo = new Locations('Tokyo',3,24,1.2);
let Dubai = new Locations('Dubai',11,38,3.7);
let Paris = new Locations ('Paris',20,38,2.3);
let Lima = new Locations('Lima',2,16,4.6);

Seattle.customerPerHour();
Seattle.sPerHour();
Seattle.totalcookies();
Seattle.renderheader();
Seattle.renderbody();
// Seattle.renderfooter();
Tokyo.customerPerHour();
Tokyo.sPerHour();
Tokyo.totalcookies();
// Tokyo.renderheader();
Tokyo.renderbody();
// Tokyo.renderfooter();
Dubai.customerPerHour();
Dubai.sPerHour();
Dubai.totalcookies();
Dubai.renderbody();
// Dubai.renderfooter();
Paris.customerPerHour();
Paris.sPerHour();
Paris.totalcookies();
Paris.renderbody();
// Paris.renderfooter();

Lima.customerPerHour();
Lima.sPerHour();
Lima.totalcookies();
Lima.renderbody();
Lima.renderfooter();

















// const SeattleShop= {
//   Location :'Seattle',
//   min:23,
//   max:65,
//   averageCookie: 6.3,
//   custPerHour:[],
//   sellCookies:[],
//   totalcookiesAllDay:0,
//   sellCookies:[],

//   customerPerHour :function() {
//     for(let i=0;i<dailyHours.length;i++) {
//       let valv=randomValue(this.min,this.max);
//       this.custPerHour.push(valv);
// }
// console.log(this.custPerHour);
//   },
//   sPerHour :function() {
//     for (let i=0; i<14; i++ ){
//       let multi=Math.floor(this.custPerHour[i]*this.averageCookie);
//       this.sellCookies.push(multi);
//     }
//     console.log(this.sellCookies);
//   },
//   totalcookies: function () {
//     for (let i=0;i<14;i++){
//       this.totalcookiesAllDay= this.totalcookiesAllDay+this.sellCookies[i];
//     }
//     this.sellCookies.push(this.totalcookiesAllDay);
//     console.log(this.totalcookiesAllDay);
//   },

//   render:function() {
//     let h2El = document.createElement('h2');
//     globVar.appendChild(h2El);
//     h2El.textContent = 'Seattle';
//     let ulEL = document.createElement('ul');
//     globVar.appendChild(ulEL);
//     for (let j=0; j <this.sellCookies.length; j++ ) {
//       let liEL = document.createElement('li');
//       ulEL.appendChild(liEL);
//       liEL.textContent=`${dailyHours[j]} : ${this.sellCookies[j]}`;
//     }
//   },
// };
// SeattleShop.customerPerHour();
// SeattleShop.sPerHour();
// SeattleShop.totalcookies();
// SeattleShop.render();

// const TokyoShop= {
//   Location :'Seattle',
//   min:3,
//   max:24,
//   averageCookie: 1.2,
//   custPerHour:[],
//   sellCookies:[],totalcookiesAllDay:0,cookiesArray:[],

//   customerPerHour :function() {
//     for(let i=0;i<dailyHours.length;i++) {
//       let valv=randomValue(this.min,this.max);
//       this.custPerHour.push(valv);
//     }
//     console.log(this.custPerHour);
//   },
//   sPerHour :function() {
//     for (let i=0; i<14; i++ ){
//       let multi=Math.floor(this.custPerHour[i]*this.averageCookie);
//       this.sellCookies.push(multi);
//     }
//     console.log(this.sellCookies);
//   },
//   totalcookies: function () {
//     for (let i=0;i<14;i++){
//       this.totalcookiesAllDay= this.totalcookiesAllDay+this.sellCookies[i];
//     }
//     this.sellCookies.push(this.totalcookiesAllDay);
//     console.log(this.totalcookiesAllDay);
//   },

//   render:function() {
//     let h2El = document.createElement('h2');
//     globVar.appendChild(h2El);
//     h2El.textContent = 'Tokyo';
//     let ulEL = document.createElement('ul');
//     globVar.appendChild(ulEL);
//     for (let j=0; j <this.sellCookies.length; j++ ) {
//       let liEL = document.createElement('li');
//       ulEL.appendChild(liEL);
//       liEL.textContent=`${dailyHours[j]} : ${this.sellCookies[j]}`;
//     }
//   },
// };
// TokyoShop.customerPerHour();
// TokyoShop.sPerHour();
// TokyoShop.totalcookies();
// TokyoShop.render();

// const DubaiShop= {
//   Location :'Seattle',
//   min:11,
//   max:38,
//   averageCookie: 3.7,
//   custPerHour:[],
//   sellCookies:[],totalcookiesAllDay:0,cookiesArray:[],

//   customerPerHour :function() {
//     for(let i=0;i<dailyHours.length;i++) {
//       let valv=randomValue(this.min,this.max);
//       this.custPerHour.push(valv);
//     }
//     console.log(this.custPerHour);
//   },
//   sPerHour :function() {
//     for (let i=0; i<14; i++ ){
//       let multi=Math.floor(this.custPerHour[i]*this.averageCookie);
//       this.sellCookies.push(multi);
//     }
//     console.log(this.sellCookies);
//   },
//   totalcookies: function () {
//     for (let i=0;i<14;i++){
//       this.totalcookiesAllDay= this.totalcookiesAllDay+this.sellCookies[i];
//     }
//     this.sellCookies.push(this.totalcookiesAllDay);
//     console.log(this.totalcookiesAllDay);
//   },

//   render:function() {
//     let h2El = document.createElement('h2');
//     globVar.appendChild(h2El);
//     h2El.textContent = 'Dubai';
//     let ulEL = document.createElement('ul');
//     globVar.appendChild(ulEL);
//     for (let j=0; j <this.sellCookies.length; j++ ) {
//       let liEL = document.createElement('li');
//       ulEL.appendChild(liEL);
//       liEL.textContent=`${dailyHours[j]} : ${this.sellCookies[j]}`;
//     }
//   },
// };
// DubaiShop.customerPerHour();
// DubaiShop.sPerHour();
// DubaiShop.totalcookies();
// DubaiShop.render();

// const ParisShop= {
//   Location :'Seattle',
//   min:20,
//   max:38,
//   averageCookie: 2.3,
//   custPerHour:[],
//   sellCookies:[],totalcookiesAllDay:0,cookiesArray:[],

//   customerPerHour :function() {
//     for(let i=0;i<dailyHours.length;i++) {
//       let valv=randomValue(this.min,this.max);
//       this.custPerHour.push(valv);
//     }
//     console.log(this.custPerHour);
//   },
//   sPerHour :function() {
//     for (let i=0; i<14; i++ ){
//       let multi=Math.floor(this.custPerHour[i]*this.averageCookie);
//       this.sellCookies.push(multi);
//     }
//     console.log(this.sellCookies);
//   },
//   totalcookies: function () {
//     for (let i=0;i<14;i++){
//       this.totalcookiesAllDay= this.totalcookiesAllDay+this.sellCookies[i];
//     }
//     this.sellCookies.push(this.totalcookiesAllDay);
//     console.log(this.totalcookiesAllDay);
//   },

//   render:function() {
//     let h2El = document.createElement('h2');
//     globVar.appendChild(h2El);
//     h2El.textContent = 'Paris';
//     let ulEL = document.createElement('ul');
//     globVar.appendChild(ulEL);
//     for (let j=0; j <this.sellCookies.length; j++ ) {
//       let liEL = document.createElement('li');
//       ulEL.appendChild(liEL);
//       liEL.textContent=`${dailyHours[j]} : ${this.sellCookies[j]}`;
//     }
//   },
// };
// ParisShop.customerPerHour();
// ParisShop.sPerHour();
// ParisShop.totalcookies();
// ParisShop.render();


// const LimaShop= {
//   Location :'Seattle',
//   min:2,
//   max:16,
//   averageCookie: 4.6,
//   custPerHour:[],
//   sellCookies:[],totalcookiesAllDay:0,cookiesArray:[],

//   customerPerHour :function() {
//     for(let i=0;i<dailyHours.length;i++) {
//       let valv=randomValue(this.min,this.max);
//       this.custPerHour.push(valv);
//     }
//     console.log(this.custPerHour);
//   },
//   sPerHour :function() {
//     for (let i=0; i<14; i++ ){
//       let multi=Math.floor(this.custPerHour[i]*this.averageCookie);
//       this.sellCookies.push(multi);
//     }
//     console.log(this.sellCookies);
//   },
//   totalcookies: function () {
//     for (let i=0;i<14;i++){
//       this.totalcookiesAllDay= this.totalcookiesAllDay+this.sellCookies[i];
//     }
//     this.sellCookies.push(this.totalcookiesAllDay);
//     console.log(this.totalcookiesAllDay);
//   },

//   render:function() {
//     let h2El = document.createElement('h2');
//     globVar.appendChild(h2El);
//     h2El.textContent = 'Lima';
//     let ulEL = document.createElement('ul');
//     globVar.appendChild(ulEL);
//     for (let j=0; j <this.sellCookies.length; j++ ) {
//       let liEL = document.createElement('li');
//       ulEL.appendChild(liEL);
//       liEL.textContent=`${dailyHours[j]} : ${this.sellCookies[j]}`;
//     }
//   },
// };
// LimaShop.customerPerHour();
// LimaShop.sPerHour();
// LimaShop.totalcookies();
// LimaShop.render();


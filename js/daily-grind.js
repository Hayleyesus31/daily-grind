 /*
    Here are the main things we'll likely need to store for each coffee:
    name - the name of the coffee
    pic - the picture of the coffee
    color - the color associated with the coffee
    alt - the alt tag identifying the coffee
    day - the day of the week
    desc - a description of the coffee



*/

function coffeeTemplate(coffee){

return `<p>
    		 <img src="${coffee.pic}" alt="${coffee.alt}" id="coffee" />
            <strong class="feature">${coffee.day}'s Coffee Special:</strong> ${coffee.day}'s daily coffee special is <strong class="feature">${coffee.name}</strong>, ${coffee.desc}</p>`
            ;
  
}

let myDate = new Date();

let coffee = "";

let today = myDate.getDay();


const queryString = window.location.search;


console.log(queryString);


const urlparams = new URLSearchParams(queryString);


//today = 3;

if(urlparams.has("day")){//from querystring
    today = urlparams.get("day");
}

today = parseInt(today);

//console.log(today);
switch(today){

	case 1:
      	today = "Monday";
        coffee = {
           name: "Bubble Tea",
           pic: "images/bubble-tea.jpg",
           alt: "A picture of a bubble tea",
           color: "pink",
           day: "monday",
           desc: `I love me some bubble tea!`
       };

    
	break;
    
	case 2:
      	today = "Tuesday";
        coffee = {
           name: "Drip",
        pic: "images/drip.jpg",
            alt: "A picture of a drip coffee",
            color: "black",
            day: "tuesday",
            desc: ` Give it to me straight!`
        };
    break;

    case 3:
        today = "Wednesday";
        coffee = {
            name: "Caramel latte",
         pic: "images/caramel-latte.jpg",
             alt: "A picture of a caramel coffee",
             color: "pink",
             day: "wednesday",
             desc: ` I like me some Caramel!`
         };
    break;

    case 4:
        today = "Thursday";
        coffee = {
            name: "frappaccino",
         pic: "images/frappaccino.jpg",
             alt: "A picture of a frappaccino coffee",
             color: "silver",
             day: "thursday",
             desc: `   I like me some frappaccino !`
         };
    break;

    case 5:
        today = "Friday";
        coffee = {
            name: "mocha",
         pic: "images/mocha.jpg",
             alt: "A picture of a mocha coffee",
             color: "gray",
             day: "friday",
             desc: ` Give it to me straight!`
         };

    break;

    case 6:
        today = "Saturday";
        coffee = {
            name: "Pumpkin spice",
         pic: "images/Pumpkin-spice .jpg",
             alt: "A picture of a  Pumpkin-spice coffee",
             color: "black",
             day: "saturday",
             desc: ` I like me pumpkin spice!`
         };


    case 7:
        today = "Sunday";
        coffee = {
            name: "Cold Brew",
        pic: "images/cold-brew.jpg",
            alt: "A picture of a cold-brew coffee",
            color: "black",
            day: "saturday",
            desc: ` I like it cold!`
             };    
    break;
   default:
   	today = "note sure what day it is!";
    alert("falling into alert!");
}




document.getElementById("coffee-cup").innerHTML = coffeeTemplate(coffee);

document.querySelector("html").style.backgroundColor = coffee.color
console.log(coffee);

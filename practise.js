
 const homepage = document.querySelector(`.HomePage`);
 homepage.style.display = `none`;

const loginpage = document.querySelector(`.LoginPage`);
loginpage.style.display = `none`;


const login = document.getElementById(`Login`);
login.addEventListener(`click`, function(){
 const homepage = document.querySelector(`.HomePage`);
 homepage.style.display = `none`;
    const loginpage = document.querySelector(`.LoginPage`);
     loginpage.style.display = `block`;

})


const close =  document.querySelector(`.close`);
close.addEventListener(`click`, function(){
       // const homepage = document.querySelector(`.HomePage`);
       // homepage.style.display = `block`;

       const loginpage = document.querySelector(`.LoginPage`);
       loginpage.style.display = `none`;
  
})

const SecondLogin = document.getElementById(`login22`);
SecondLogin.addEventListener(`click`, function(){

       const loginpage = document.querySelector(`.LoginPage`);
       loginpage.style.display = `none`;
  

       const homepage = document.querySelector(`.HomePage`);
       homepage.style.display = `block`;
})



// register sign up button
const registerSignup = document.querySelector(`.signn`);
registerSignup.addEventListener(`click`, function(){
       const loginpage = document.querySelector(`.LoginPage`);
       loginpage.style.display = `block`;
  
})
// registe create account button


const createAcc = document.querySelector(`.register`);
createAcc.addEventListener(`click`, function(){
       alert(`Congratulation🍾,Your Account Has Been Created 
Now It'S Time To Sign Up`);
       const createAcc2 = document.querySelector(`.Registration`);
       createAcc2.style.display = `none`; 
       const loginpage = document.querySelector(`.LoginPage`);
       loginpage.style.display = `block`;


       
})

// register closedown
const createAcc2 = document.querySelector(`.Registration`);
       createAcc2.style.display = `none`; 
       
const closeDown2 = document.querySelector(`.closeDown2`);
closeDown2.addEventListener(`click`,function(){
       const createAcc2 = document.querySelector(`.Registration`);
       createAcc2.style.display = `none`; 
})


// register main button

const registerAcc = document.getElementById(`Register`);
registerAcc.addEventListener(`click`, function(){
       const createAcc2 = document.querySelector(`.Registration`);
       createAcc2.style.display = `block`; 
})

// BookingForSearchButton in booking button

const Booking = document.querySelector(`.BookingForSearchButton`);
Booking.addEventListener(`click`,function(){
       window.open(`https://www.kayak.com/hotels/Jungle-Lodge-Boutique-Hotel,Tulum,Quintana-Roo,Mexico-c49625-h6274071/2022-12-10/2023-01-11/2adults?sort=rank_a`)
})

// display booking :)

const displayBooking  = document.querySelector(`.Booking`);
displayBooking.style.display = `none`;

//click booking button and make event listener

const eventBookBtn = document.querySelector(`.BookNow`);
eventBookBtn.addEventListener(`click`,function(){
   const displayBooking  = document.querySelector(`.Booking`);
   displayBooking.style.display = `block`;

})
// close booking if you click x

const closeBookingsite = document.querySelector(`.closeBooking`);
closeBookingsite.addEventListener(`click`,function(){
       const displayBooking  = document.querySelector(`.Booking`);
   displayBooking.style.display = `none`;
})


//  3 chef window display

let firstchef  = document.querySelector(`.chefInfo`);
firstchef.style.display = `none`


let secondchef  = document.querySelector(`.chefInfo2`);
secondchef.style.display = `none`


let thirdchef  = document.querySelector(`.chefInfo3`);
thirdchef.style.display = `none`;

// add to button
const addchef = document.getElementById(`chefunia`);
addchef.addEventListener(`click`,function(){
       let firstchef  = document.querySelector(`.chefInfo`);
firstchef.style.display = `block`;

let secondchef  = document.querySelector(`.chefInfo2`);
secondchef.style.display = `block`


let thirdchef  = document.querySelector(`.chefInfo3`);
thirdchef.style.display = `block`;

let chefdishes  = document.querySelector(`.chefdishes`);
chefdishes.style.display = `none`;

let chefdishes1  = document.querySelector(`.chefdishes1`);
chefdishes1.style.display = `none`;
})

const whydontclose = document.querySelector(`.closegordon`);
whydontclose.addEventListener(`click`,function(){
       let firstchef  = document.querySelector(`.chefInfo`);
       firstchef.style.display = `none`;


        
       let secondchef  = document.querySelector(`.chefInfo2`);
       secondchef.style.top = `80px`;
       let thirdchef  = document.querySelector(`.chefInfo3`);
       thirdchef.style.top = `-420px`;

           let chefdishes  = document.querySelector(`.chefdishes`);
         chefdishes.style.display = `block`;

       let chefdishes1  = document.querySelector(`.chefdishes1`);
       chefdishes1.style.display = `block`;      
})


const whydontclose2 = document.querySelector(`.closegleonora`);
whydontclose2.addEventListener(`click`,function(){
       
       let secondchef  = document.querySelector(`.chefInfo2`);
       secondchef.style.display = `none`;
       
       let thirdchef  = document.querySelector(`.chefInfo3`);
       thirdchef.style.top = `77px`;
           let chefdishes  = document.querySelector(`.chefdishes`);
         chefdishes.style.display = `block`;

       let chefdishes1  = document.querySelector(`.chefdishes1`);
       chefdishes1.style.display = `block`;      
})

const whydontclose3 = document.querySelector(`.closejoe`);
whydontclose3.addEventListener(`click`,function(){
       
      
       let thirdchef  = document.querySelector(`.chefInfo3`);
       thirdchef.style.display = `none`;
       
         let chefdishes  = document.querySelector(`.chefdishes`);
         chefdishes.style.display = `block`;

       let chefdishes1  = document.querySelector(`.chefdishes1`);
       chefdishes1.style.display = `block`;      
})

// first: Display menu window

const fullmenu = document.getElementById(`menudisplay`);
fullmenu.style.display = `none`;

// add menu button and block window;

const menuButton = document.querySelector(`.menu`);
menuButton.addEventListener(`click`,function(){
       const fullmenu = document.getElementById(`menudisplay`);
fullmenu.style.display = `block`;
})

// close menu button

const closeallmenu = document.querySelector(`.closeAllmenu`);
closeallmenu.addEventListener(`click`,function(){
       const fullmenu = document.getElementById(`menudisplay`);
fullmenu.style.display = `none`;
})


// 1 display reserve window

const displayReserveWindow = document.querySelector(`.reserveTable`);
displayReserveWindow.style.display = `none`;

// 2 add reserve table button and appear reserve window 

const reserveTable = document.getElementById(`reservetab`);
reserveTable.addEventListener(`click`,function(){
       const displayReserveWindow = document.querySelector(`.reserveTable`);
       displayReserveWindow.style.display = `block`;
        

       const firstchefdishes = document.querySelector(`.chefdishes1`);
       firstchefdishes.style.display = `none`
})
// close reserve window

const closereservetable = document.querySelector(`.closereservetable`);
closereservetable.addEventListener(`click`,function(){
       const displayReserveWindow = document.querySelector(`.reserveTable`);
       displayReserveWindow.style.display = `none`;

       const firstchefdishes = document.querySelector(`.chefdishes1`);
       firstchefdishes.style.display = `block`
})
// when you click book a table  come out alert

const bookatable = document.getElementById(`bookatable`);
bookatable.addEventListener(`click`,function(){
       alert(`Your table is reserved🍽, thank you for using our service!`)

       const displayReserveWindow = document.querySelector(`.reserveTable`);
       displayReserveWindow.style.display = `none`;

       const firstchefdishes = document.querySelector(`.chefdishes1`);
       firstchefdishes.style.display = `block`
})

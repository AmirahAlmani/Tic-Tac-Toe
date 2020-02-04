console.log("it's work ?");


// // let zones = document.querySelectorAll(".zone");


// // // function clickEvent() {

// //  zones.createElement(imgX);

// //  zone.addEventListener("click", imgX);


// // // }


// // zones.addEventListener("click", clickEvent);


//================================================================================



// // let zones = document.querySelectorAll(".zone");

// // zones.createElement(imgx);

// // zones.addEventListener("click", clickEvent);

// // function clickEvent() {
// //   let count = 0;
// //   this.classList += " "+ imgX;



// //   for (let i = 0; i < zones.length; i++) {
// //     if (zones[i].classList.value.includes(imgX)) {
// //       count++;
// //     }
// //   }
// //   if (count === 4) {
// //     console.log("congrats");
// //   }
// // }

// // function hoverEvent() {
// //   this.classList +=  " "+ imgX;
// // }

// // function leaveEvent() {
// //   this.classList = "zone";
// // }

// // for (let i = 0; i < zones.length; i++) {
// //   zones[i].addEventListener("click", clickEvent);
// //   zones[i].addEventListener("mouseover", hoverEvent);
// //   zones[i].addEventListener("mouseleave", leaveEvent);
// // }


// let zones = document.querySelectorAll(".zone");

// function clickEvent() {
//   let count = 0;
//   console.log('imgX')

//   //this.removeEventListener("mouseleave", leaveEvent);

// }
// function hoverEvent() {
//   this.classList +=  imgX;
// }

// function leaveEvent() {
//   this.classList = imgX;
// }

// for (let i = 0; i < zones.length; i++) {
//     console.log(i)
//   zones[i].addEventListener("click", clickEvent);

// }





//============================================================================
//مههممممممممم





//     let zones = document.querySelectorAll(".zone");
//     let count = 0;
//     function clickEvent() {


//       if (count % 2 === 0) {
//         console.log("even");
//         this.classList += " x";

//       } 


//       else {
//         console.log("odd");
//         this.classList += " o";

//       }

//       this.removeEventListener("mouseleave", leaveEvent);
//       this.removeEventListener("mouseover", hoverEvent);

//       for (let i = 0; i < zones.length; i++) {
//         if (zones[i].classList.value.includes("x")) {
//           console.log(count);
//         }
//       }
//       count++;
//     }

//     function hoverEvent() {
//       this.classList += " black";
//     }

//     function leaveEvent() {
//       this.classList = "zone";
//     }

//     for (let i = 0; i < zones.length; i++) {
//         zones[i].addEventListener("click", clickEvent);
//         // zones[i].addEventListener("mouseover", hoverEvent);
//         // zones[i].addEventListener("mouseleave", leaveEvent);
//     }


//     let winning = function(){

// if (zones[0].classList.contains('x') &&
//     zones[1].classList.contains('x') &&
//     zones[2].classList.contains('x') ){

//         return window.alert("X Wins") 

//     }



//     }








// popup = function (p){


//     let divElement = document.createElement("Div");
//     divElement.id = "divID";
    
//     // Styling it
//     divElement.style.textAlign = "center";
//     divElement.style.fontWeight = "bold";
//     divElement.style.fontSize = "smaller";
//     divElement.style.paddingTop = "15px";
    
//     // Adding a paragraph to it
//     var paragraph = document.createElement("P");
//     var text = document.createTextNode("");
//     paragraph.appendChild(text);
//     divElement.appendChild(paragraph);
    
//     // Adding a button, cause why not!
//     var button = document.createElement("Button");
//     var textForButton = document.createTextNode("Release the alert");
//     button.appendChild(textForButton);
//     button.addEventListener("click", function(){
//         alert("Hi!");
//     });
//     divElement.appendChild(button);
    
//     // Appending the div element to body
//     document.getElementsByTagName("body")[0].appendChild(divElement);


// }





//=====================================================================================







//let arr = array.form(document.querySelectorAll(".zone"))
//============================================================================================





let zones = document.querySelectorAll(".zone");

let box1 = document.querySelector('.row1column1');
let box2 = document.querySelector('.row1column2');
let box3 = document.querySelector('.row1column3');
let box4 = document.querySelector('.row2column1');
let box5 = document.querySelector('.row2column2');
let box6 = document.querySelector('.row2column3');
let box7 = document.querySelector('.row3column1');
let box8 = document.querySelector('.row3column2');
let box9 = document.querySelector('.row3column3');




let count = 0;

function clickEvent() {

    // let target = event.target;
    if (count % 2 === 0) {
        // console.log("click x");
        this.classList += " x";
         this.removeEventListener('click', clickEvent)


    } else {
     //   console.log("click o");
        this.classList += " o";
        this.removeEventListener('click', clickEvent)


    }

    // this.removeEventListener("mouseleave", leaveEvent);
    // this.removeEventListener("mouseover", hoverEvent);

    // for (let i = 0; i < zones.length; i++) {
    //     if (zones[i].classList.value.includes("x")) {
    //         console.log(count);
    //     }
    // }


    count++;

    winning();



}

const resetButton = document.querySelector('.button')
const reset = function(){
	document.querySelector('.button')
    location.reload(true)
     count=0;
	
};

// resetButton.removeEventListener('click', clickEvent);




box1.addEventListener('click', clickEvent);
box2.addEventListener('click', clickEvent);
box3.addEventListener('click', clickEvent);
box4.addEventListener('click', clickEvent);
box5.addEventListener('click', clickEvent);
box6.addEventListener('click', clickEvent);
box7.addEventListener('click', clickEvent);
box8.addEventListener('click', clickEvent);
box9.addEventListener('click', clickEvent);



   // 

  //  return window.alert('tie')





// for (let i = 0; i < zones.length; i++) {
//     zones[i].addEventListener("click", clickEvent);
//     // zones[i].addEventListener("mouseover", hoverEvent);
//     // zones[i].addEventListener("mouseleave", leaveEvent);
// }










let winning = function () {

    // x win
    if (box1.classList.contains('x') &&
        box2.classList.contains('x') &&
        box3.classList.contains('x')) {

            window.alert("X Wins")
        return reset();

    } else

    if (box4.classList.contains('x') &&
        box5.classList.contains('x') &&
        box6.classList.contains('x')) {

            window.alert("X Wins")
            return reset();

    } else

    if (box7.classList.contains('x') &&
        box8.classList.contains('x') &&
        box9.classList.contains('x')) {

            window.alert("X Wins")
            return reset();

    } else

    if (box1.classList.contains('x') &&
        box4.classList.contains('x') &&
        box7.classList.contains('x')) {

            window.alert("X Wins")
            return reset();

    } else

    if (box2.classList.contains('x') &&
        box5.classList.contains('x') &&
        box8.classList.contains('x')) {

            window.alert("X Wins")
            return reset();

    } else

    if (box3.classList.contains('x') &&
        box6.classList.contains('x') &&
        box9.classList.contains('x')) {

            window.alert("X Wins")
            return reset();

    } else

    if (box1.classList.contains('x') &&
        box5.classList.contains('x') &&
        box9.classList.contains('x')) {

            window.alert("X Wins")
            return reset();

    } else

    if (box3.classList.contains('x') &&
        box5.classList.contains('x') &&
        box7.classList.contains('x')) {

            window.alert("X Wins")
            return reset();

    }



    // O win

    if (box1.classList.contains('o') &&
        box2.classList.contains('o') &&
        box3.classList.contains('o')) {


            window.alert("O Wins")
            return reset();

    } else

    if (box4.classList.contains('o') &&
        box5.classList.contains('o') &&
        box6.classList.contains('o')) {

            window.alert("O Wins")
            return reset();

    } else

    if (box7.classList.contains('o') &&
        box8.classList.contains('o') &&
        box9.classList.contains('o')) {

            window.alert("O Wins")
            return reset();

    } else

    if (box1.classList.contains('o') &&
        box4.classList.contains('o') &&
        box7.classList.contains('o')) {

            window.alert("O Wins")
            return reset();

    } else

    if (box2.classList.contains('o') &&
        box5.classList.contains('o') &&
        box8.classList.contains('o')) {

            window.alert("O Wins")
            return reset();

    } else

    if (box3.classList.contains('o') &&
        box6.classList.contains('o') &&
        box9.classList.contains('o')) {

            window.alert("O Wins")
            return reset();

    } else

    if (box1.classList.contains('o') &&
        box5.classList.contains('o') &&
        box9.classList.contains('o')) {

            window.alert("O Wins")
            return reset();

    } else

    if (box3.classList.contains('o') &&
        box5.classList.contains('o') &&
        box7.classList.contains('o')) {

            window.alert("O Wins")
            return reset();

    } 




}






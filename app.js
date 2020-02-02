console.log("it's work ?");


// const imgX = document.createElement('img');

// imgX.setAttribute("src", "https://i.ya-webdesign.com/images/png-x-1.png");



// const imgO = document.createElement('img');
// imgO.setAttribute("src", "https://image.flaticon.com/icons/png/512/16/16894.png");


// // let zones = document.querySelectorAll(".zone");


// // // function clickEvent() {

// //  zones.createElement(imgX);

// //  zone.addEventListener("click", imgX);


// // // }


// // zones.addEventListener("click", clickEvent);


// // let zones = document.querySelectorAll(".zone");

// // zones.createElement(imgx);

// // zones.addEventListener("click", imgX);

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

    let zones = document.querySelectorAll(".zone");
    let count = 0;
    function clickEvent() {


      if (count % 2 === 0) {
        console.log("even");
        this.classList += " x";
        
      } 
      
      
      else {
        console.log("odd");
        this.classList += " o";
        
      }
  
      this.removeEventListener("mouseleave", leaveEvent);
      this.removeEventListener("mouseover", hoverEvent);
  
      for (let i = 0; i < zones.length; i++) {
        if (zones[i].classList.value.includes("x")) {
          console.log(count);
        }
      }
      count++;
    }
  
    function hoverEvent() {
      this.classList += " black";
    }
  
    function leaveEvent() {
      this.classList = "zone";
    }
  
    for (let i = 0; i < zones.length; i++) {
        zones[i].addEventListener("click", clickEvent);
        // zones[i].addEventListener("mouseover", hoverEvent);
        // zones[i].addEventListener("mouseleave", leaveEvent);
    }


    let winning = function(){

if (zones[0].classList.contains('x') &&
    zones[1].classList.contains('x') &&
    zones[2].classList.contains('x') ){

        return window.alert("X Wins") 

    }



    }
//============================================================================================


//Get SLider Items | Array.from [Es6 Feature]

var sliderImages = Array.from(document.querySelectorAll('.slider-container img'));
//hotayna el ['img','img','imgs','img','img']
// console.table(sliderImages);


//GetNumber Of Slides
var slidesCount = sliderImages.length;//5

//Set Current Slide
var currentSlide = 2;//2

//Slide Number ELement
var slideNumberElement = document.getElementById('slide-number');
//div li fia (#1of4)

//Previous and Next Buttons
var nextButton = document.getElementById('next');
var prevButton = document.getElementById('prev');


//Handle Click on Previous and Next Buttons
nextButton.onclick = nextSlide;
prevButton.onclick = prevSlide;

//Create The main UL Element
var paginationElement = document.createElement('ul');//<ul></ul>


//set ID On created UL Element
paginationElement.setAttribute('id', 'pagination-ul');//id="pagination-ul"
//<ul id="pagination-ul"></ul>


//Create List Items Based on Slides Count
for (let i = 1; i <= slidesCount; i++) {
    //Create The LI
    var paginationItem = document.createElement('li');//<li></li>

    //set Custom Attribute

    paginationItem.setAttribute('data-index', i);//<li data-index="i"></li>
    // <li data-index="i"></li>


    //set Item Content
    paginationItem.appendChild(document.createTextNode(i));//<li data-index="i">i</li>

    //Append Items to the Main UL List
    paginationElement.appendChild(paginationItem); //<ul><li data-index="i">i</li>*5</li>
    //   <ul id="pagination-ul">
    // <li data-index="1">1</li>
    // </ul>

}

//add the created UL Element to The Page
document.getElementById('indicators').appendChild(paginationElement);
//<span id="indicators">
//<ul id="pagination-ul">
//<li data-index="1">1</li>
//</ul>
//</span>

//Get The New Created UL
var paginationCreatedUl = document.getElementById('pagination-ul');//jebna el UL
//<ul id="pagination-ul"></ul>


//Get Pagination Items | Array.from [Es6 Feature]
var paginationBullets = Array.from(document.querySelectorAll('#pagination-ul li'))

for (let i = 0; i < paginationBullets.length; i++) {
    paginationBullets[i].onclick = function () {
        currentSlide = parseInt(this.getAttribute('data-index'));
        theChecker();
    }

}








//Trigger The Checker Function
theChecker();








//Next Slide Function
function nextSlide() {
    if (nextButton.classList.contains('disabled')) {
        //Do Nothing
        return false;

    } else {
        currentSlide++;
        theChecker();
    }
}

//Previous Slide Function
function prevSlide() {
    if (prevButton.classList.contains('disabled')) {
        //Do nothing
        return false;
    } else {
        currentSlide--;
        theChecker();
    }
}




function theChecker() {
    //set the Slide Number
    slideNumberElement.textContent = 'Slide#' + (currentSlide) + 'of' + (slidesCount);
    // <div>slide 3of 7<div>


    // Remove all active Classes
    removeAllActive();



    // Set Active Class On Current Slide
    sliderImages[currentSlide - 1].classList.add('active');
    //[3-1] = 2 =><img class="active">

    //set Active Class on Current Pagination Item
    paginationCreatedUl.children[currentSlide - 1].classList.add("active");
    //[li, li, li.active, li, li]  => li[0] => <li class="active">2</li>


    //check if current Slide is The First
    if (currentSlide == 1) {
        prevButton.classList.add('disabled');
    } else {
        prevButton.classList.remove('disabled');
    }


    if (currentSlide == slidesCount) {
        nextButton.classList.add('disabled');
    } else {
        nextButton.classList.remove('disabled');
    }



}


function removeAllActive() {
    //loop through Images
    sliderImages.forEach(function (img) {
        img.classList.remove('active');
    });
    //loop through Pagination Bullets
    paginationBullets.forEach(function (bullet) {
        bullet.classList.remove('active');
    })
}




























































































// var imglist = document.querySelectorAll(".slider-container img");
// // [img, img, img, img, img]


// var Arraylist = Array.from(imglist);
// //  [img, img, img, img, img]

// var len = Arraylist.length;
// //5


// var currentvalue = 2;
// //2


// var slidenumber = document.getElementById("slide-number");
// // <div id="slide-number" class="slide-number">Slide 2#of </div>



















// function slide() {

//     //[li, li, li, li, li]

//     imglist[currentvalue - 1].classList.add("active");
//     //<img 1 class="active">



//     Arraylisto[currentvalue - 1].classList.add("active");
//     // <li class ="active">


// }





// var spano = document.getElementById("indicators");
// //  <span id="indicators" class="indicators"></span>



// var a = document.createElement("ul");
// //<ul></ul>

// for (let i = 1; i <= Arraylist.length; i++) {

//     slidenumber.innerHTML = "Slide" + "#" + currentvalue + "of" + len;
//     //slide #2 of 5

//     var b = document.createElement("li");
//     // <li></li>

//     b.setAttribute("data-index", i);
//     //<li data-index ="i"></li>

//     var textnode = document.createTextNode(i);
//     //<li data-index ="i">i</li>

//     b.appendChild(textnode);
//     // <li>i</li>

//     a.appendChild(b);
//     // <ul><li>i<li><ul>

//     spano.appendChild(a);
//     // <span><ul><li>i</li></ul></span>




//     var listo = document.querySelectorAll(".indicators ul li");
//     var Arraylisto = Array.from(listo);





//     b.addEventListener("click", namos);




//     function namos() {

//         // var s = document.querySelectorAll("li");

//         // s.classList.remove("acive");

//         slidenumber.innerHTML = "Slide" + "#" + currentvalue + "of" + len;

//         var listo = document.querySelectorAll(".indicators ul li");
//         var Arraylisto = Array.from(listo);


//         Arraylisto.forEach(function (bullet) {
//             bullet.classList.remove('active');
//         })
//         Arraylist.forEach(function (bullet) {
//             bullet.classList.remove('active');




//         })




//         Arraylist[this.getAttribute("data-index") - 1].classList.add("active");
//         // Arraylisto[this.getAttribute("data-index") - 1].classList.remove("active");

//         Arraylisto[this.getAttribute("data-index") - 1].classList.add("active");
//         slidenumber.innerHTML = "Slide" + "#" + `${this.getAttribute("data-index")}` + "of" + len;
//         // Arraylisto.setAttribute("class", "");
//         if (currentvalue >= 4) {
//             document.querySelector(".slider-controls .next").classList.add('disabled');
//         } else {
//             document.querySelector(".slider-controls .next").classList.remove('disabled');
//         }

//         if (currentvalue == 2) {
//             document.querySelector(".slider-controls .prev").classList.add('disabled');
//         } else {
//             document.querySelector(".slider-controls .prev").classList.remove('disabled');
//         }
//     }

// }




// // console.log(Arraylisto);

// slide();












// function next() {



//     var lol = document.querySelector(".slider-controls .next");

//     var listo = document.querySelectorAll(".indicators ul li");
//     var Arraylisto = Array.from(listo);
//     // <li><li></li>
//     Arraylisto.forEach(function (bullet) {
//         bullet.classList.remove('active');
//     })


//     currentvalue++;
//     slide();
//     slidenumber.innerHTML = "Slide" + "#" + currentvalue + "of" + len;
//     // .slider-controls .prev.disabled,
//     // }


// }







// function prev() {


//     var lolo = document.querySelector(".slider-controls .prev");

//     var listo = document.querySelectorAll(".indicators ul li");
//     var Arraylisto = Array.from(listo);
//     // <li><li></li>
//     Arraylisto.forEach(function (bullet) {
//         bullet.classList.remove('active');
//     })


//     currentvalue--;
//     slide();
//     slidenumber.innerHTML = "Slide" + "#" + currentvalue + "of" + len;
//     // .slider-controls .prev.disabled,


// }



// //check if current Slide is The First








































































































































// //Get SLider Items | Array.from [Es6 Feature]

// var sliderImages = Array.from(document.querySelectorAll('.slider-container img'));
// //hotayna el ['img','img','imgs','img','img']
// // console.table(sliderImages);


// //GetNumber Of Slides
// var slidesCount = sliderImages.length;//5

// //Set Current Slide
// var currentSlide = 2;//2

// //Slide Number ELement
// var slideNumberElement = document.getElementById('slide-number');
// //div li fia (#1of4)

// //Previous and Next Buttons
// var nextButton = document.getElementById('next');
// var prevButton = document.getElementById('prev');


// //Handle Click on Previous and Next Buttons
// nextButton.onclick = nextSlide;
// prevButton.onclick = prevSlide;

// //Create The main UL Element
// var paginationElement = document.createElement('ul');//<ul></ul>


// //set ID On created UL Element
// paginationElement.setAttribute('id', 'pagination-ul');//id="pagination-ul"
// //<ul id="pagination-ul"></ul>


// //Create List Items Based on Slides Count
// for (let i = 1; i <= slidesCount; i++) {
//     //Create The LI
//     var paginationItem = document.createElement('li');//<li></li>

//     //set Custom Attribute

//     paginationItem.setAttribute('data-index', i);//<li data-index="i"></li>
//     // <li data-index="i"></li>


//     //set Item Content
//     paginationItem.appendChild(document.createTextNode(i));//<li data-index="i">i</li>

//     //Append Items to the Main UL List
//     paginationElement.appendChild(paginationItem); //<ul><li data-index="i">i</li>*5</li>
//     //   <ul id="pagination-ul">
//     // <li data-index="1">1</li>
//     // </ul>

// }

// //add the created UL Element to The Page
// document.getElementById('indicators').appendChild(paginationElement);
// //<span id="indicators">
// //<ul id="pagination-ul">
// //<li data-index="1">1</li>
// //</ul>
// //</span>

// //Get The New Created UL
// var paginationCreatedUl = document.getElementById('pagination-ul');//jebna el UL
// //<ul id="pagination-ul"></ul>


// //Get Pagination Items | Array.from [Es6 Feature]
// var paginationBullets = Array.from(document.querySelectorAll('#pagination-ul li'))

// for (let i = 0; i < paginationBullets.length; i++) {
//     paginationBullets[i].onclick = function () {
//         currentSlide = parseInt(this.getAttribute('data-index'));
//         theChecker();
//     }

// }








// //Trigger The Checker Function
// theChecker();








// //Next Slide Function
// function nextSlide() {
//     if (nextButton.classList.contains('disabled')) {
//         //Do Nothing
//         return false;

//     } else {
//         currentSlide++;
//         theChecker();
//     }
// }

// //Previous Slide Function
// function prevSlide() {
//     if (prevButton.classList.contains('disabled')) {
//         //Do nothing
//         return false;
//     } else {
//         currentSlide--;
//         theChecker();
//     }
// }




// function theChecker() {
//     //set the Slide Number
//     slideNumberElement.textContent = 'Slide#' + (currentSlide) + 'of' + (slidesCount);
//     // <div>slide 3of 7<div>


//     // Remove all active Classes
//     removeAllActive();



//     // Set Active Class On Current Slide
//     sliderImages[currentSlide - 1].classList.add('active');
//     //[3-1] = 2 =><img class="active">

//     //set Active Class on Current Pagination Item
//     paginationCreatedUl.children[currentSlide - 1].classList.add("active");
//     //[li, li, li.active, li, li]  => li[0] => <li class="active">2</li>


//     //check if current Slide is The First
//     if (currentSlide == 1) {
//         prevButton.classList.add('disabled');
//     } else {
//         prevButton.classList.remove('disabled');
//     }


//     if (currentSlide == slidesCount) {
//         nextButton.classList.add('disabled');
//     } else {
//         nextButton.classList.remove('disabled');
//     }



// }


// function removeAllActive() {
//     //loop through Images
//     sliderImages.forEach(function (img) {
//         img.classList.remove('active');
//     });
//     //loop through Pagination Bullets
//     paginationBullets.forEach(function (bullet) {
//         bullet.classList.remove('active');
//     })
// }




























/////////////////////////////////////////////////////////////////////////////////////////////////////////




// //https://penji.co/wp-content/uploads/2019/04/Best-Food-Ad-Designs.jpg
// //https://www.wordstream.com/wp-content/uploads/2021/07/persuasive-ads-coca-cola.jpg
// //https://penji.co/wp-content/uploads/2019/03/Mcdonalds-Food-Ad-Designs.jpg
// //https://cdn2.nogarlicnoonions.com/images/thumbs/image.php?width=2000&height=2000&image=/images/articles/2016-02/fake-ads2016-02-17-06-00-08.jpg
// //https://www.researchgate.net/profile/David-Yeager/publication/332428823/figure/fig3/AS:748413549281280@1555447103540/Examples-of-modifications-to-junk-food-ads-produced-by-expose-intervention-participants.png
// //https://debatewise.org/wp-content/uploads/fast-food-advertising.jpg
// //https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSa6lARbdd_zEPyPDb6s4kK1qnjs05LFBCSTA&usqp=CAU

// let a = document.getElementById("a");
// let pre = document.getElementById("b");
// let l1 = document.getElementById("l1");
// let l2 = document.getElementById("l2");
// let l3 = document.getElementById("l3");
// let l4 = document.getElementById("l4");
// let l5 = document.getElementById("l5");
// let divo = document.getElementById("bs");
// // a.src

// let images = ['https://penji.co/wp-content/uploads/2019/04/Best-Food-Ad-Designs.jpg',
//     'https://www.wordstream.com/wp-content/uploads/2021/07/persuasive-ads-coca-cola.jpg',
//     'https://s3-prod.adage.com/s3fs-public/styles/800x600/public/KFC_waffle_3x2.jpg', 'https://i0.wp.com/khaleejjournal.com/wp-content/uploads/2019/03/Zomato-Banner.gif?fit=1000%2C600&ssl=1',
//     'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/0fdd0e25559501.56347a238b44b.png'
// ]


// l1.onclick = function () {


//     a.setAttribute("src", this.getAttribute("data-image"));

//     // divo = "Slide 1 Of7 ";
//     document.getElementById("bs").innerHTML = "Slide #1 Of5";

// }
// l2.onclick = function () {
//     a.setAttribute("src", this.getAttribute("data-image"));

//     document.getElementById("bs").innerHTML = "Slide #2 Of5";

// }
// l3.onclick = function () {
//     a.setAttribute("src", this.getAttribute("data-image"));
//     document.getElementById("bs").innerHTML = "Slide #3 Of5";
// }

// l4.onclick = function () {
//     a.setAttribute("src", this.getAttribute("data-image"));
//     document.getElementById("bs").innerHTML = "Slide #4 Of5";
// }

// l5.onclick = function () {
//     a.setAttribute("src", this.getAttribute("data-image"));
//     document.getElementById("bs").innerHTML = "Slide #5 Of5";
// }




// function next() {

//     for (var i = 0; i < images.length; i++) {


//         document.getElementById("a").src = images[i];//images[0]

//         console.log(i);
//     }
// }

// {






































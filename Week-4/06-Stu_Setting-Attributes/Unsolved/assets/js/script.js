//select first element (div class) that includes the class .site1/2/3
var site1El = document.querySelector(".site1");
var site2El = document.querySelector(".site2");
var site3El = document.querySelector(".site3");

//assign (h4) with the string "Site 1"
site1El.children[0].textContent = "Site 1";
//assign (a) with the below address.
site1El.children[1].setAttribute("href", "https://google.com");
//set attributes of the image.
site1El.children[1].children[0].setAttribute("src", "assets/images/image_1.jpg");
site1El.children[1].children[0].setAttribute("alt", "man working");
site1El.children[1].children[0].setAttribute("style", "padding:10px;");

//see above
site2El.children[0].textContent = "Site 2";
site2El.children[1].setAttribute("href", "https://twitter.com");
site2El.children[1].children[0].setAttribute("src", "assets/images/image_2.jpg");
site2El.children[1].children[0].setAttribute("alt", "group brainstorm");
site2El.children[1].children[0].setAttribute("style", "padding:10px;");

//see above
site3El.children[0].textContent = "Site 3";
site3El.children[1].setAttribute("href", "https://instagram.com");
site3El.children[1].children[0].setAttribute("src", "assets/images/image_3.jpg");
site3El.children[1].children[0].setAttribute("alt", "women working");
site3El.children[1].children[0].setAttribute("style", "padding:10px;");

//select all h4
var header4 = document.querySelectorAll("h4");

header4.setAttribute("style", "color:blue; font-size: 30px; font-weight: bold;");

//select header element
var bodyTitle = document.body[0] = "style: paddingLeft = 0px;"

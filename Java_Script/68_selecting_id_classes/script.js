document.body.firstElementChild.children[2].style.backgroundColor="red";

     //same thing by diffeerent way
            //selecting element by class
let a=document.getElementsByClassName("box");     //here written getElements because muliple element can have single class name
a[3].style.backgroundColor="green";

    //same thing by diffeerent way
            //selecting element by class
let b=document.getElementById("square1").style.backgroundColor="blue";   //here written getElement because only one elemen can have  single id 


        //selecting element by quarySelector
    //document.quarySelectorAll   -->select all element by given css selector
// document.querySelectorAll(".box").style.backgroundColor="black";    //it will not work because document.querySelectorAll(".box") is a html collecton and .style of any html collection is not possible. we can do it by using for loop

document.querySelectorAll(".box").forEach(e=>{
    e.style.backgroundColor="pink";
})

    //document.quarySelector   -->select first element by given css selector
document.querySelector(".box").style.backgroundColor="black";

            //selecting element by TagName
// document.getElementsByTagName("div").forEach(e=>{
//     e.style.backgroundColor="green";
// })


           //matches
 /*          document.getElementsByTagName("div")
           HTMLCollection { 0: div.containar, 1: div#square1.box, 2: div#square2.box, 3: div#square3.box, 4: div#square4.box, 5: div#square5.box
           , length: 6, … }
           
           let m=document.getElementsByTagName("div")
           undefined
           m[4].matches(".box")
           true
           m[5].matches("#square5")
           true        */


           //contains
document.quarySelector(".container").contains(document.getElementById("#square3"))
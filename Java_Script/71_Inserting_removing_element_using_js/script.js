/*
document.querySelector(".box")
<div class="box">

document.querySelector(".box").innerHTML    //html inside the element
" Hey i am a box"

document.querySelector(".container").innerHTML
'
        <div class="box"> Hey i am a box</div>
    '
document.querySelector(".box").outerHTML        //element inside the element and element itself
'<div class="box"> Hey i am a box</div>'

document.querySelector(".container").outerHTML
'<div class="container">
        <div class="box"> Hey i am a box</div>
    </div>'

document.getElementsByClassName("container")[0].tagName
"DIV"

document.getElementsByClassName("container")[0].nodeName        //tagName and nodeName are same difference is tagName is used for Element and nodeName is used for any node-text/comment..
"DIV"

document.getElementsByClassName("container")[0].hidden
false

document.getElementsByClassName("container")[0].hidden=true
true 

document.querySelector(".box").innerHTML="I am subhendu"       //changing inner html
"I am subhendu" 

document.querySelector(".box").hasAttribute("style")
false 

document.querySelector(".box").getAttribute("style")
"display: flex;"

document.querySelector(".box").setAttribute("style","display:inline")
undefined

document.querySelector(".box").attributes
NamedNodeMap [ class="box", style="display:inline" ]

document.querySelector(".box").removeAttribute("style")
undefined 

document.designMode="on"        //using this we can design any wesite 
"on" 

document.querySelector(".box").dataset
DOMStringMap { createdby → "subhendu" }
*/
// let div= document.createElement("div")  //create
// div.className="hero"     //set class
// div.innerHTML="i have been inserted by <b>by Harry</b>"
// document.body.append(div)       //inserting this div inside the body  ///inserting at the end of the node

// document.body.prepend(div)       //inserting at the beginning of the node
// document.body.before(div)       //inserting before the node
// document.body.after(div)       //inserting after the node
// document.body.replaceWith(div)        //replace node with given node

// document.querySelector(".container").insertAdjacentHTML("afterbegin","<b> hi ther i am using whatsapp</b>")
// document.querySelector(".container").insertAdjacentHTML("afterend","<b> hi ther i am using whatsapp</b>")
// document.querySelector(".container").insertAdjacentHTML("beforebegin","<b> hi ther i am using whatsapp</b>")
// document.querySelector(".container").insertAdjacentHTML("beforeend","<b> hi ther i am using whatsapp</b>")

document.querySelector(".container").insertAdjacentText("beforeend","<b> hi ther i am using whatsapp</b>")

// document.querySelector(".container").insertAdjacentElement("beforeend","<b> hi ther i am using whatsapp</b>")

// document.querySelector(".box").remove()         //it will remove the selected html

/*
document.querySelector(".container").classList
DOMTokenList(3) [ "container", "red", "bg-green" ]
​
0: "container"
​
1: "red"
​
2: "bg-green"
​
length: 3
​
value: "container red bg-green"
​
<prototype>: DOMTokenListPrototype { item: item(), contains: contains(), add: add(), … }

document.querySelector(".container").className
"container red bg-green" 
*/

// document.querySelector(".container").className="guru"      //it will replace the class name it will not add
         //to add we have to use classList
// document.querySelector(".container").classList.add("ram")      //it will add ram with class
                                                                //if we run it multiple time it will not add many ram's it will add only one ram
// document.querySelector(".container").classList.remove("red")      //it will remove red fromm the class if it is there in the class name
                                                            
// document.querySelector(".container").classList.toggle("red")     //if there is no red class then it will add or if there is red class then it will remove
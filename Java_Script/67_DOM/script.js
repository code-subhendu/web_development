/*
document.body.firstElementChild
<div class="contaier">

document.body.firstChild
#text "\n    "

document.body.COMMENT_NODE
8
document.body.firstElementChild.childNodes
NodeList(15) [ #text, <!--  this is me  -->, #text, div.box, #text, div.box, #text, div.box, #text, div.box
, … ]

document.body.firstElementChild.children
HTMLCollection { 0: div.box, 1: div.box, 2: div.box, 3: div.box, 4: div.box, 5: script, length: 6 }

document.body.firstElementChild.firstChild.parentElement
<div class="contaier">

document.body.firstElementChild.children[3].nextElementSibling
<div class="box">

document.body.firstElementChild.children[3].previousElementSibling
<div class="box">

document.body.firstElementChild.children[3].previousSibling
#text "\n        "

document.body.firstElementChild.children[3].previousSibling.parentElement
<div class="contaier">

document.body.children[1].rows
HTMLCollection { 0: tr, 1: tr, 2: tr
, length: 3 }

document.body.children[1].tBodies
HTMLCollection { 0: tbody
, length: 1 }
​
0: <tbody>
​
length: 1
​
<prototype>: HTMLCollectionPrototype { item: item(), namedItem: namedItem(), length: Getter, … }

*/

function id4mouseoverMethod() {
 var elements = document.getElementsByTagName("sentence");
for (var i=0;i<elements.length;i++){
elements[i].setAttribute("title",elements[i].id);
}
}

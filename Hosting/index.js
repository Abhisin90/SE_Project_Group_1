// // Create a "close" button and append it to each list item
// var myNodelist = document.getElementsByTagName("LI");
// var i;
// for (i = 0; i < myNodelist.length; i++) {
//   var span = document.createElement("SPAN");
//   var txt = document.createTextNode("\u00D7");
//   span.className = "close";
//   span.appendChild(txt);
//   myNodelist[i].appendChild(span);
// }

// // Click on a close button to hide the current list item
// var close = document.getElementsByClassName("close");
// var i;
// for (i = 0; i < close.length; i++) {
//   close[i].onclick = function() {
//     var div = this.parentElement;
//     div.style.display = "none";
//   }
// }

// // Add a "checked" symbol when clicking on a list item
// var list = document.querySelector('ul');
// list.addEventListener('click', function(ev) {
//   if (ev.target.tagName === 'LI') {
//     ev.target.classList.toggle('checked');
//   }
// }, false);

// Create a new list item when clicking on the "Add" button
function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var inputValue2 = document.getElementById("myDate").value;
  var inputValue3 = document.getElementById("myTime").value;
  // var t = document.createTextNode(inputValue);
  // li.appendChild(t);
  // if (inputValue === '') {
  //   alert("You must write something!");
  // } else {
  //   document.getElementById("myUL").appendChild(li);
  // }
  // document.getElementById("myInput").value = "";

  // var u = document.createTextNode(inputValue2);
  // li.appendChild(u);
  // if (inputValue === '') {
  //   alert("You must write something!");
  // } else {
  //   document.getElementById("myUL").appendChild(li);
  // }
  // document.getElementById("myDate").value = "";

  // var v = document.createTextNode(inputValue3);
  // li.appendChild(v);
  // if (inputValue === '') {
  //   alert("You must write something!");
  // } else {
  //   document.getElementById("myUL").appendChild(li);
  // }
  // document.getElementById("myTime").value = "";
// let x =  document.querySelector(".edittt")
// console.log(x)
// let a = `<div class="Events col-lg-4"></div>
// <li><h2>${inputValue}</h2></li>
// <li><h3>${inputValue2} ${inputValue3}</h3></li>
// </div>`;
// console.log(a)
// x.innerHtml += `a`

const list = document.getElementById("ed");

list.innerHTML += `<div class="Events col-lg-4">
<li><h2>${inputValue}</h2></li>
<li><h3>${inputValue2} ${inputValue3}</h3></li>
</div>`;

document.getElementById("myInput").value = "";
document.getElementById("myDate").value = "";
document.getElementById("myTime").value = "";


console.log(list)

  // var span = document.createElement("SPAN");
  // var txt = document.createTextNode("\u00D7");
  // span.className = "close";
  // span.appendChild(txt);
  // li.appendChild(span);

  //  for (i = 0; i < close.length; i++) {
  //    close[i].onclick = function() {
  //      var div = this.parentElement;
  //      div.style.display = "none";
  //    }
  // }
}
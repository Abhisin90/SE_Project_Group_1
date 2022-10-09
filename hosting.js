
// Create a new list item when clicking on the "Add" button
function newElement() {

  var inputValue = document.getElementById("myInput").value;
  var inputValue2 = document.getElementById("myDate").value;
  var inputValue3 = document.getElementById("myTime").value;
  
  const h2new = document.createElement('h2');
  h2new.innerText = `${inputValue}`;
  const h3new = document.createElement('h3');
  h3new.innerText = `${inputValue2} ${inputValue3}` ;

  const linew1 = document.createElement('li');
  linew1.appendChild(h2new);
  const linew2 = document.createElement('li');
  linew2.appendChild(h3new);

  const newDiv = document.createElement('div');
  newDiv.append(linew1,linew2);

  newDiv.classList.add('Events','col-lg-4');

  console.log(newDiv);

  const list = document.getElementById('ed');
  list.appendChild(newDiv);

  document.getElementById("myInput").value = "";
  document.getElementById("myDate").value = "";
  document.getElementById("myTime").value = "";


  console.log(list)

  
}
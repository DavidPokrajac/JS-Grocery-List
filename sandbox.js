window.onload = function(){

  // Referencing HTML tags
  var container = document.querySelector(".container");
  var form = document.forms[0];
  var input = form.querySelector("input[type='text']");
  var clearAll = document.querySelector(".clear-all button");
  var ul = document.querySelector("ul");

  var time = new Date();
  var date = document.createElement("p");
  date.id = "date";
  var year = time.getFullYear();

  // Setting up actual time
  var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  var getMonth = months[time.getMonth()];

  switch(time.getDate()){
    case 1:
      date.innerHTML = getMonth + " " + time.getDate() + "1<sup>st</sup>, " + year;
      container.insertBefore(date, form);
      break;
    case 2:
      date.innerHTML = getMonth + " " + time.getDate() + "2<sup>nd</sup>, " + year;
      container.insertBefore(date, form);
      break;
    case 3:
      date.innerHTML = getMonth + " " + time.getDate() + "3<sup>rd</sup>, " + year;
      container.insertBefore(date, form);
      break;
    default:
      date.innerHTML = getMonth + " " + time.getDate() + "<sup>th</sup>, " + year;
      container.insertBefore(date, form);
  }

  function addItem(a){
    ul.innerHTML += `<li>${a}<span class="delete"><i class="fas fa-trash"></i></span></li>`;
  }

  // Add event listener to submit a grocery on the list
  form.addEventListener("submit", function(e){

    e.preventDefault();

    var value = form.groceryItem.value.trim();

    if(value.length >= 1){
      addItem(value);
      var inserted = document.createElement("p");
      inserted.id = "inserted";
      inserted.textContent = "Grocery added to the list";
      container.insertBefore(inserted, form);
      setTimeout(function(){
        container.removeChild(inserted);
      }, 1500);
      form.reset();
    } else{
      var alert = document.createElement("p");
      alert.id = "warning";
      alert.textContent = "You have to add something!!!";
      container.insertBefore(alert, form);
      setTimeout(function(){
        container.removeChild(alert);
      }, 1500);
    }

  });

  ul.addEventListener("click", function(e){
    e.stopPropagation();
    if(e.target.parentNode.className === "delete"){
      var li = e.target.parentNode.parentNode;
      ul.removeChild(li);
    };
  });

  clearAll.addEventListener("click", function(){
    ul.innerHTML = "";
  });

}

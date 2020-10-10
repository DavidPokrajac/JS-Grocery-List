window.onload = function(){

  // Referencing HTML tags
  var container = document.querySelector(".container");
  var form = document.forms[0];
  var input = form.querySelector("input[type='text']");
  var submit = form.querySelector("input[type='submit']");
  var clearAll = document.querySelector(".clear-all button");

  var time = new Date();
  var date = document.createElement("p");
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



}

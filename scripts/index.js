// Get the <span> element that closes the modal

function img(event) {
  var x = event.target;
  var d = x.parentElement;
  var k = d.parentElement;

  if (x.tagName == "H1") {
   
        document.getElementById("t").innerHTML = k.id;
       
      modal.style.display = "block";
    
    
    
  
  }
}

function thumb(event) {
  var x = event.target;
  var d = x.parentElement;
  var k = d.parentElement;
  if (k.tagName == "DIV") {
    var t = d.getElementsByTagName("h1")[0];

    t.style.display = "block";
    var id = k.id;
    switch (id) {
      case "img1":
        t.innerHTML = "Mountain";
        break;
      case "img2":
        t.innerHTML = "Ice";
        break;
      case "img3":
        t.innerHTML = "Fog";
        break;
      case "img4":
        t.innerHTML = "Lake";
        break;
      case "img5":
        t.innerHTML = "Grass";
        break;
      case "img6":
        t.innerHTML = "Boat";
        break;
      case "img7":
        t.innerHTML = "River";
        break;
      case "img8":
        t.innerHTML = "Tree";
        break;
      case "img9":
        t.innerHTML = "Stone";
        break;
     
      default:
    }

    var s = d.getElementsByTagName("img")[0];
    s.classList.add("thumb");
  }
}
function nothumb(event) {
  var x = event.target;
  var d = x.parentElement;
  var k = d.parentElement;
  if (d.tagName == "A") {
    var h = d.getElementsByTagName("h1")[0];
    var s = d.getElementsByTagName("img")[0];
    h.style.display = "none";
    s.classList.remove("thumb");
  } else if (d.tagName == "DIV") {
    var h = x.getElementsByTagName("h1")[0];
    var s = x.getElementsByTagName("img")[0];
    h.style.display = "none";
    s.classList.remove("thumb");
  }

 
}

//document.getElementById("myModal");

// JavaScript source code
var modal = document.querySelector("#myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");
// When the user clicks on <span> (x), close the modal

// When the user clicks the button, open the modal
var span = document.getElementsByClassName("close")[0];
span.onclick = function () {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

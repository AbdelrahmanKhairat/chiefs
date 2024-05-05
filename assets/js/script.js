$(document).ready(function () {
  $('.menu-toggle').click(function () {
    $('.menu-toggle').toggleClass('active')
    $('.menu').toggleClass('active')
  });
});

$('.counting').each(function () {
  var $this = $(this),
    countTo = $this.attr('data-count');

  $({
    countNum: $this.text()
  }).animate({
      countNum: countTo
    },

    {

      duration: 3000,
      easing: 'linear',
      step: function () {
        $this.text(Math.floor(this.countNum));
      },
      complete: function () {
        $this.text(this.countNum);
        //alert('finished');
      }

    });

});

function deletePost(id) {
  var div = document.getElementById(id);
      if (div) {
        div.parentNode.removeChild(div);
      }
}

function updatePost(txtBoxDiv,id) {
  // Get the input value from the text box
  var inputText = document.getElementById(txtBoxDiv).value;

  // Update the content of the div with the input value
  document.getElementById(id).textContent = inputText;
}

var coll = document.getElementsByClassName("collapsible");

for (var i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}

//var col = document.getElementsByClassName("collapse");

function showPndPosts() {
  document.getElementById("pndDiv").classList.remove("hidden");
  document.getElementById("chDiv").classList.add("hidden");
  document.getElementById("ffDiv").classList.add("hidden");
}

function showChPosts() {
  document.getElementById("chDiv").classList.remove("hidden");
  var col = document.getElementById("chDiv").getElementsByClassName("collapse");
  document.getElementById("pndDiv").classList.add("hidden");
  document.getElementById("ffDiv").classList.add("hidden");
  for(var i = 0; i<col.length; i++){
    col[i].classList.add("hidden");
  }
}

function showFFPosts() {
  document.getElementById("ffDiv").classList.remove("hidden");
  var col = document.getElementById("ffDiv").getElementsByClassName("collapse");
  document.getElementById("pndDiv").classList.add("hidden");
  document.getElementById("chDiv").classList.add("hidden");
  for(var i = 0; i<col.length; i++){
    col[i].classList.add("hidden");
  }
}


function orgAccOnload(){
  document.getElementById("pndDiv").classList.add("hidden");
  document.getElementById("chDiv").classList.add("hidden");
  document.getElementById("ffDiv").classList.add("hidden");
  for(var i = 0; i<col.length; i++){
    col[i].classList.add("hidden");
  }
}

var dropdown = document.getElementById("category");
var dropdown2 = document.getElementById("book-content");
var contentContainer = document.getElementById("divs-container");
var bookContainer = document.getElementById("book-content");

dropdown.addEventListener("change", function() {

  var selectedValue = dropdown.value;
  var sValue = dropdown2.value;

  var contentDivs = document.getElementsByClassName("content");
  for (var i = 0; i < contentDivs.length; i++) {
    contentDivs[i].style.display = "none";
  }

  var selectedContent = document.getElementById(selectedValue + "-content");
  var selectedBook = document.getElementById(sValue + "-content");
  if (selectedContent) {
    selectedContent.style.display = "block";
  }
});

dropdown2.addEventListener("change", function() {

  var sValue = dropdown2.value;

  var contentDivs = document.getElementsByClassName("book-class");
  if(sValue === "book"){
    contentDivs[0].style.display = "block";
  }else {
    contentDivs[0].style.display = "none";
  }
  //var selectedBook = document.getElementById(sValue + "-content");
  //if (selectedBook) {
  //  selectedBook.style.display = "block";
//}
});



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


function Organisation(first_name, last_name, gender, mail, number, address, password, area, governorate, orgName, orgType) {
  this.first_name = first_name;
  this.last_name = last_name;
  this.gender = gender;
  this.mail = mail;
  this.number = number;
  this.address = address;
  this.password = password;
  this.area = area;
  this.governorate = governorate;
  this.orgName = orgName;
  this.orgType = orgType;
}


function orgMyAccOnload(){
  document.getElementById("SetLocDiv").classList.add("hidden");
  document.getElementById("UploadDocsDiv").classList.add("hidden");
  document.getElementById("viewCredintials").classList.add("hidden");
  document.getElementById("updateCredintials").classList.add("hidden");
}
function showUploadDocsDiv(){
  orgMyAccOnload();
  document.getElementById("UploadDocsDiv").classList.remove("hidden");
  
}
function showSetLocDiv(){
  orgMyAccOnload();
  document.getElementById("SetLocDiv").classList.remove("hidden");
  
}
function showUpdateDiv(){
  orgMyAccOnload();
  document.getElementById("updateCredintials").classList.remove("hidden");
}
function showViewDiv(){
  var p = new Organisation("John", "Doe", "Male", "john@example.com", "123456789", "123 Main St", "password123", "Some Area", "Some Governorate", "Org1", "Hospital");

  orgMyAccOnload();
  document.getElementById("viewCredintials").classList.remove("hidden");
  

  document.getElementById("fNameLbl").innerHTML = p.first_name; 
  document.getElementById("lNameLbl").innerHTML = p.last_name; 
  document.getElementById("genderLbl").innerHTML = p.gender; 
  document.getElementById("emailLbl").innerHTML = p.mail; 
  document.getElementById("numberLbl").innerHTML = p.number; 
  document.getElementById("addressLbl").innerHTML = p.address; 
  document.getElementById("passwordLbl").innerHTML = p.password; 
  document.getElementById("areaLbl").innerHTML = p.area; 
  document.getElementById("govLbl").innerHTML = p.governorate; 
  document.getElementById("orgNameLbl").innerHTML = p.orgName; 
  document.getElementById("orgTypeLbl").innerHTML = p.orgType; 



}


function updateAcc(){
  // if( document.getElementById("fName").value !== "")
  //     p.first_name = document.getElementById("fName").value;
  // if(document.getElementById("lName").value !== "")
  //     p.last_name = document.getElementById("lName").value;
  // if(document.getElementById("gender").value !== "")
  //     p.gender = document.getElementById("gender").value;
  // if(document.getElementById("email").value !== "")
  //     p.mail = document.getElementById("email").value; 
  // if(document.getElementById("number").value !== "")
  //     p.number = document.getElementById("number").value;   
  // if(document.getElementById("orgAddress").value !== "")
  //     p.address = document.getElementById("orgAddress").value;
  // if(document.getElementById("password").value !== "")
  //     p.password = document.getElementById("password").value;
  // if(document.getElementById("orgName").value !== "")
  //   p.orgName = document.getElementById("orgName").value;

  // if(document.getElementById("orgType").value !== "")
  //   p.orgType = document.getElementById("orgType").value;
  
  // if(document.getElementById("orgArea").value !== "")
  //     p.area = document.getElementById("OrgArea").value;
  // if(document.getElementById("orgGov").value !== "")
  //     p.governorate = document.getElementById("orgGov").value;


  orgMyAccOnload();
  alert("Credintials are updated sucessfully!");
  

  
}
function deleteAcc(){
  window.location.replace("C:/Users/Msi1/Documents/GitHub/chiefs/Organizationregistration.html");
}


var map;
var marker;
function initMap() {
  var mapOptions = {
    center: { lat: 37.7749, lng: -122.4194 }, // Example: San Francisco coordinates
    zoom: 12
  };

  map = new google.maps.Map(document.getElementById("map"), mapOptions);

  // Create a marker with initial position
  marker = new google.maps.Marker({
    position: mapOptions.center,
    map: map
  });

  // Event listener for map click
  map.addListener('click', function(event) {
    updateMarkerPosition(event.latLng);
  });
}

function updateMarkerPosition(position) {
  marker.setPosition(position);
}




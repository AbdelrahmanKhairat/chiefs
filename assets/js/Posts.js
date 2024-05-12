var Posts = [];


function MedicalPost(medicalSpeciality, organisationName, area, governorate, name, age, gender, weight, longitude, latitude, address, caseDescription) {
    this.medicalSpeciality = medicalSpeciality;
    this.organisationName = organisationName;
    this.area = area;
    this.governorate = governorate;
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.weight = weight;
    this.longitude = longitude;
    this.latitude = latitude;
    this.address = address;
    this.caseDescription = caseDescription;
}
function TeachingPost(numberOfStudents, area, governorate, address, longitude, latitude, subjects) {
    this.numberOfStudents = numberOfStudents;
    this.area = area;
    this.governorate = governorate;
    this.address = address;
    this.longitude = longitude;
    this.latitude = latitude;
    this.subjects = subjects;
}


function createDummyData(){
    var teachingPost1 = new TeachingPost(30, "Area1", "Gov1", "123 Main St", -74.0059, 40.7128, ["Math", "Science"]);
    var teachingPost2 = new TeachingPost(25, "Area2", "Gov2", "456 Elm St", -73.935242, 40.73061, ["History", "English"]);
    var medicalPost1 = new MedicalPost("Cardiology",  "City Hospital","Area1", "Gov1",  "John Doe", 45, "Male", 70, -74.0059, 40.7128, "123 Main St", "Patient has chest pain.");
    var medicalPost2 = new MedicalPost("Pediatrics",  "County Clinic","Area2", "Gov2", "Jane Smith", 8, "Female", 25, -73.935242, 40.73061, "456 Elm St", "Patient has fever and cough.");

    Posts.push(teachingPost1);
    Posts.push(teachingPost2);
    Posts.push(medicalPost1);
    Posts.push(medicalPost2);

}
createDummyData();


function getMedicalPost(medicalPost) {
    const div = document.createElement("div");
    div.classList.add("col-lg-4", "col-md-4", "col-sm-6", "col-xs-12");

    const box = document.createElement("div");
    box.classList.add("featured-box");

    const content = document.createElement("div");
    content.classList.add("content");

    const title = document.createElement("h3");
    title.innerText = "Medical Post";

    const hr = document.createElement("hr");

    const patientDetails = document.createElement("h2");
    patientDetails.innerText = "Patient Details";

    const patientName = document.createElement("p");
    patientName.innerText = "Patient Name: " + medicalPost.name;

    const patientGender = document.createElement("p");
    patientGender.innerText = "Patient Gender: " + medicalPost.gender;

    const patientAge = document.createElement("p");
    patientAge.innerText = "Patient Age: " + medicalPost.age;

    const patientWeight = document.createElement("p");
    patientWeight.innerText = "Patient Weight: " + medicalPost.weight;

    const patientAddress = document.createElement("p");
    patientAddress.innerText = "Patient Address: " + medicalPost.address;

    const hr1 = document.createElement("hr");

    const hospitalDetails = document.createElement("h2");
    hospitalDetails.innerText = medicalPost.organisationName;

    const mapDiv = document.createElement("div");
    mapDiv.classList.add("mapDiv");

    // Set the height of the map as needed
    
    const map = new google.maps.Map(mapDiv, {
        center: {lat: medicalPost.latitude, lng: medicalPost.longitude},
        zoom: 10,
        styles: [
            {
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#212121"
                }
              ]
            },
            {
              "elementType": "labels.icon",
              "stylers": [
                {
                  "visibility": "off"
                }
              ]
            },
            {
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#757575"
                }
              ]
            },
            {
              "elementType": "labels.text.stroke",
              "stylers": [
                {
                  "color": "#212121"
                }
              ]
            },
            {
              "featureType": "administrative",
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#757575"
                }
              ]
            },
            {
              "featureType": "administrative.country",
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#9e9e9e"
                }
              ]
            },
            {
              "featureType": "administrative.land_parcel",
              "elementType": "labels",
              "stylers": [
                {
                  "visibility": "off"
                }
              ]
            },
            {
              "featureType": "administrative.locality",
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#bdbdbd"
                }
              ]
            },
            {
              "featureType": "poi",
              "elementType": "labels.text",
              "stylers": [
                {
                  "visibility": "off"
                }
              ]
            },
            {
              "featureType": "poi",
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#757575"
                }
              ]
            },
            {
              "featureType": "poi.park",
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#181818"
                }
              ]
            },
            {
              "featureType": "poi.park",
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#616161"
                }
              ]
            },
            {
              "featureType": "poi.park",
              "elementType": "labels.text.stroke",
              "stylers": [
                {
                  "color": "#1b1b1b"
                }
              ]
            },
            {
              "featureType": "road",
              "elementType": "geometry.fill",
              "stylers": [
                {
                  "color": "#2c2c2c"
                }
              ]
            },
            {
              "featureType": "road",
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#8a8a8a"
                }
              ]
            },
            {
              "featureType": "road.arterial",
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#373737"
                }
              ]
            },
            {
              "featureType": "road.highway",
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#3c3c3c"
                }
              ]
            },
            {
              "featureType": "road.highway.controlled_access",
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#4e4e4e"
                }
              ]
            },
            {
              "featureType": "road.local",
              "elementType": "labels",
              "stylers": [
                {
                  "visibility": "off"
                }
              ]
            },
            {
              "featureType": "road.local",
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#616161"
                }
              ]
            },
            {
              "featureType": "transit",
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#757575"
                }
              ]
            },
            {
              "featureType": "water",
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#000000"
                }
              ]
            },
            {
              "featureType": "water",
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#3d3d3d"
                }
              ]
            }
          ]
      });

    // Add a marker to the map
    const marker = new google.maps.Marker({
        position: { lat: medicalPost.latitude, lng: medicalPost.longitude },
        map: map,
        title: "Teaching Post Location"
    });

    const loc = document.createElement("ol");
    const li1 = document.createElement("li");
    const li2 = document.createElement("li");
    const li3 = document.createElement("li");
    li2.innerText = medicalPost.area;
    li3.innerText = medicalPost.governorate; 
    loc.appendChild(li1);
    loc.appendChild(li2);
    loc.appendChild(li3);

    const caseDetails = document.createElement("h2");
    caseDetails.innerText = "Case Details";

    const caseDescription = document.createElement("p");
    caseDescription.innerText = "Case Description: " + medicalPost.caseDescription;

    const btnDiv = document.createElement("Div");
    btnDiv.classList.add("btnDiv");

    const btn = document.createElement("Button");
    btn.innerText = "Choose";
    btn.classList.add("btn");
    btn.addEventListener("click", function(){
        var PostsBox = document.getElementById("PostsBox");
        PostsBox.removeChild(this.parentNode.parentNode.parentNode.parentElement);
        alert("This Post have been Mark to be fullfilled by you!");
    });

    btnDiv.appendChild(btn);

    content.appendChild(title);
    content.appendChild(hr);
    content.appendChild(patientDetails);
    content.appendChild(patientName);
    content.appendChild(patientGender);
    content.appendChild(patientAge);
    content.appendChild(patientWeight);
    content.appendChild(patientAddress);
    content.appendChild(mapDiv);
    content.appendChild(hr1);
    content.appendChild(hospitalDetails);
    content.appendChild(loc);
    // content.appendChild(caseDetails);
    content.appendChild(caseDescription);
    content.appendChild(btnDiv);
    
    box.appendChild(content);
    div.appendChild(box);

    return div;
}
function getTeachingPost(teachingPost) {
    const div = document.createElement("div");
    div.classList.add("col-lg-4", "col-md-4", "col-sm-6", "col-xs-12");

    const box = document.createElement("div");
    box.classList.add("featured-box");

    const content = document.createElement("div");
    content.classList.add("content");

    const title = document.createElement("h3");
    title.innerText = "Teaching Post";

    const hr = document.createElement("hr");

    const numberOfStudents = document.createElement("p");
    numberOfStudents.innerText = "Number of Students: " + teachingPost.numberOfStudents;

    const hr1 = document.createElement("hr");

    const schoolDetails = document.createElement("h2");
    schoolDetails.innerText = "Location Details";

    const schoolAddress = document.createElement("p");
    schoolAddress.innerText = "Address: " + teachingPost.address;
    
    const mapDiv = document.createElement("div");
    mapDiv.classList.add("mapDiv");

    // Set the height of the map as needed
    const map = new google.maps.Map(mapDiv, {
        center: {lat: teachingPost.latitude, lng: teachingPost.longitude},
        zoom: 10,
        styles: [
            {
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#212121"
                }
              ]
            },
            {
              "elementType": "labels.icon",
              "stylers": [
                {
                  "visibility": "off"
                }
              ]
            },
            {
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#757575"
                }
              ]
            },
            {
              "elementType": "labels.text.stroke",
              "stylers": [
                {
                  "color": "#212121"
                }
              ]
            },
            {
              "featureType": "administrative",
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#757575"
                }
              ]
            },
            {
              "featureType": "administrative.country",
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#9e9e9e"
                }
              ]
            },
            {
              "featureType": "administrative.land_parcel",
              "elementType": "labels",
              "stylers": [
                {
                  "visibility": "off"
                }
              ]
            },
            {
              "featureType": "administrative.locality",
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#bdbdbd"
                }
              ]
            },
            {
              "featureType": "poi",
              "elementType": "labels.text",
              "stylers": [
                {
                  "visibility": "off"
                }
              ]
            },
            {
              "featureType": "poi",
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#757575"
                }
              ]
            },
            {
              "featureType": "poi.park",
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#181818"
                }
              ]
            },
            {
              "featureType": "poi.park",
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#616161"
                }
              ]
            },
            {
              "featureType": "poi.park",
              "elementType": "labels.text.stroke",
              "stylers": [
                {
                  "color": "#1b1b1b"
                }
              ]
            },
            {
              "featureType": "road",
              "elementType": "geometry.fill",
              "stylers": [
                {
                  "color": "#2c2c2c"
                }
              ]
            },
            {
              "featureType": "road",
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#8a8a8a"
                }
              ]
            },
            {
              "featureType": "road.arterial",
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#373737"
                }
              ]
            },
            {
              "featureType": "road.highway",
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#3c3c3c"
                }
              ]
            },
            {
              "featureType": "road.highway.controlled_access",
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#4e4e4e"
                }
              ]
            },
            {
              "featureType": "road.local",
              "elementType": "labels",
              "stylers": [
                {
                  "visibility": "off"
                }
              ]
            },
            {
              "featureType": "road.local",
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#616161"
                }
              ]
            },
            {
              "featureType": "transit",
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#757575"
                }
              ]
            },
            {
              "featureType": "water",
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#000000"
                }
              ]
            },
            {
              "featureType": "water",
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#3d3d3d"
                }
              ]
            }
          ]
      });

    // Add a marker to the map
    const marker = new google.maps.Marker({
        position: { lat: teachingPost.latitude, lng: teachingPost.longitude },
        map: map,
        title: "Teaching Post Location"
    });
 
    const hr2 = document.createElement("hr");

    const subjectsTaught = document.createElement("h2");
    subjectsTaught.innerText = "Subjects Taught";

    const btnDiv = document.createElement("Div");
    btnDiv.classList.add("btnDiv");

    const btn = document.createElement("Button");
    btn.innerText = "Choose";
    btn.classList.add("btn");
    btn.addEventListener("click", function(){
        var PostsBox = document.getElementById("PostsBox");
        PostsBox.removeChild(this.parentNode.parentNode.parentNode.parentElement);
        alert("This Post have been Mark to be fullfilled by you!");
    });


    btnDiv.appendChild(btn);
    content.appendChild(title);
    // content.appendChild(hr);
    content.appendChild(numberOfStudents);
    content.appendChild(hr1);
    content.appendChild(schoolDetails);
    content.appendChild(mapDiv);
    content.appendChild(schoolAddress);
    content.appendChild(hr2);
    content.appendChild(subjectsTaught);
    teachingPost.subjects.forEach(subject => {
        const subjectItem = document.createElement("p");
        subjectItem.innerText = subject;
        content.appendChild(subjectItem);
    });
    content.appendChild(btnDiv);

    
    box.appendChild(content);
    div.appendChild(box);

    return div;
}

function allTeachingPosts() {
    const postContainer = document.getElementById("PostsBox");
    
    const children = postContainer.children;

    for(var i = children.length - 1; i > 0; i--){
        postContainer.removeChild(children[i]);
    }

    Posts.forEach(function(post){

        if(post instanceof TeachingPost){
            const postDiv = getTeachingPost(post);
            postContainer.appendChild(postDiv);
        }
        
    });
}
function allMedicalPosts() {
    const postContainer = document.getElementById("PostsBox");
    
    const children = postContainer.children;

    for(var i = children.length - 1; i > 0; i--){
        postContainer.removeChild(children[i]);
    }

    Posts.forEach(function(post){

        if(post instanceof MedicalPost){
            const postDiv = getMedicalPost(post);
            postContainer.appendChild(postDiv);
        }
        
    });
}


function filterPosts() {
    const postContainer = document.getElementById("PostsBox");
    const children = postContainer.children;

    for (var i = children.length - 1; i > 0; i--) {
        postContainer.removeChild(children[i]);
    }

    const searchString = document.getElementById("category").value.toLowerCase();
    document.getElementById("category").value = "";

    Posts.forEach(function(post) {
        let postDiv;

        if (searchString === "teaching") {
            if (post instanceof TeachingPost && filterTeachingPost(post)) {
                postDiv = getTeachingPost(post);
            } else {
                return;
            }
        } else if (searchString === "medical") {
            if (post instanceof MedicalPost && filterMedicalPost(post)) {
                postDiv = getMedicalPost(post);
            } else {
                return;
            }
        }
        postContainer.appendChild(postDiv);
    });

    resetAllOptions();
    changeDivPosts();
}


function filterTeachingPost(post){
    var flag = true;
    var subject = document.getElementById("subject").value;
    var area = document.getElementById("Area-Teaching").value;
    var governorate = document.getElementById("Governorate-Teaching").value;

    if(subject !== ""){
        if(post.subjects.includes(subject)){
            flag = flag && true;
        } else {
            flag = false;
        }
    }

    if(area !== ""){
        if(area === post.area){
            flag = flag && true;
        } else {
            flag = false;
        }
    }

    if(governorate !== ""){
        if(governorate === post.governorate){
            flag = flag && true;
        } else {
            flag = false;
        }
    }

    return flag;
}
function filterMedicalPost(post){
    var flag = true;
    var speciallity = document.getElementById("Specialty").value;
    var orgName = document.getElementById("OrgName").value;
    var area = document.getElementById("AreaMedical").value;
    var governorate = document.getElementById("GovernorateMedical").value;

    if(speciallity !== ""){
        if(speciallity === post.medicalSpeciality){
            flag = flag && true;
        } else {
            flag = false;
        }
    }

    if(orgName !== ""){
        if(orgName === post.organisationName){
            flag = flag && true;
        } else {
            flag = false;
        }
    }

    if(area !== ""){
        if(area === post.area){
            flag = flag && true;
        } else {
            flag = false;
        }
    }

    if(governorate !== ""){
        if(governorate === post.governorate){
            flag = flag && true;
        } else {
            flag = false;
        }
    }

    if(governorate === "" & area === "" & orgName === "" & speciallity === ""){
        flag = false;
    }

    return flag;
}





function resetAllOptions(){
    var x = document.getElementsByClassName("searchItem");

    for(var i = 0; i<x.length;i++){
        (x[i].children)[1].value = "";
    }

}
function changeDivPosts(){
    const val = document.getElementById("category").value;
    const allDivs = ["Teaching", "Medical"];
    for(var i =0; i<allDivs.length;i++){
        document.getElementById(allDivs[i]).classList.add("hidden");
    }
    if(val !== ""){
        document.getElementById(val).classList.remove("hidden");
    }
}

function changeDivPosts2(){
    const val = document.getElementById("category").value;
    const allDivs = ["Teaching", "Medical"];
    for(var i =0; i<allDivs.length;i++){
        document.getElementById(allDivs[i]).classList.add("hidden");
    }
    if(val !== ""){
        document.getElementById(val).classList.remove("hidden");
    }

    if(val === "Teaching"){
        allTeachingPosts();
    }
    if(val === "Medical"){
        allMedicalPosts();
    }

}



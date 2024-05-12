var requests = [];


function BloodDonationRequest(patientName, patientGender, bloodType, hospitalName, hospitalArea, hospitalGov, hospitalAddress, patientAge, longitude, latitude) {
    this.patientName = patientName;
    this.patientGender = patientGender;
    this.bloodType = bloodType;
    this.hospitalName = hospitalName;
    this.hospitalArea = hospitalArea;
    this.hospitalGov = hospitalGov;
    this.hospitalAddress = hospitalAddress;
    this.patientAge = patientAge;
    this.longitude = longitude;
    this.latitude =latitude;
}

function ClothesRequest(clothesType, age, gender, season, material, quantityRequested) {
    this.clothesType = clothesType;
    this.age = age;
    this.gender = gender;
    this.season = season;
    this.material = material;
    this.quantityRequested = quantityRequested;
}

function SchoolSuppliesRequest(type, bookName, author, language, edition, shortSummary, pictureName, quantity) {
    this.type = type;
    this.bookName = bookName;
    this.author = author;
    this.language = language;
    this.edition = edition;
    this.shortSummary = shortSummary;
    this.pictureName = pictureName;
    this.quantity = quantity;
}

function ToysRequest(type, age, gender, category, pictureName) {
    this.type = type;
    this.age = age;
    this.gender = gender;
    this.category = category;
    this.pictureName = pictureName;
}

function FoodRequest(type, name, quantity) {
    this.type = type;
    this.name = name;
    this.quantity = quantity;
}

function MedicalSuppliesRequest(deviceType, use, image, quantity) {
    this.deviceType = deviceType;
    this.use = use;
    this.image = image;
    this.quantity = quantity;
}


function createdummyRequests(){

    var req1 = new BloodDonationRequest("John Doe","male", "O+", "City Hospital", "Downtown", "New York", "123 Main St", 22, 31.4528582, 29.9540431);
    var req2 = new BloodDonationRequest("Jane Smith","female", "AB-", "County Hospital", "Uptown", "Los Angeles", "456 Elm St", 30, 31.4528582, 29.9540431);
    var req3 = new BloodDonationRequest("Michael Johnson","male", "B+", "General Hospital", "Midtown", "Chicago", "789 Oak St", 6, 31.4528582, 29.9540431);
    var req4 = new BloodDonationRequest("Emily Davis","female", "A-", "University Hospital", "Suburb", "Houston", "101 Pine St", 11, 31.4528582, 29.9540431);
    var req5 = new ClothesRequest("Shirt", "adult", "male", "Summer", "Cotton", 10);
    var req6 = new ClothesRequest("Sweater", "child", "female", "Winter", "Wool", 5);
    var req7 = new SchoolSuppliesRequest("Books", "Mathematics for Beginners", "John Smith", "English", "1st Edition", "Introduction to basic math concepts.", "math_book.jpg", 20);
    var req8 = new SchoolSuppliesRequest("Stationary", "Blank Pages Notebook", "N/A", "Any", "N/A", "Blank pages for writing or drawing.", "blank_notebook.jpg", 50);
    var req9 = new ToysRequest("sports", "teen", "Male", "sports", "action_figure.jpg");
    var req10 = new ToysRequest("dolls", "child", "Female", "dolls", "doll.jpg");
    var req11 = new FoodRequest("canned food","beans", 10);
    var req12 = new FoodRequest("wfruits", "Apples", 20);
    var req13 = new MedicalSuppliesRequest("medical devices", "Use1", "thermometer.jpg", 5);
    var req14 = new MedicalSuppliesRequest("medication", "Use2", "bandages.jpg", 50);


    requests.push(req1);
    requests.push(req2);
    requests.push(req3);
    requests.push(req4);
    requests.push(req5);
    requests.push(req6);
    requests.push(req7);
    requests.push(req8);
    requests.push(req9);
    requests.push(req10);
    requests.push(req11);
    requests.push(req12);
    requests.push(req13);
    requests.push(req14);
    

}
createdummyRequests();


function getFoodReq(x)  {
    const div = document.createElement("div");
    div.classList.add("col-lg-4", "col-md-4", "col-sm-6", "col-xs-12");

    const box = document.createElement("div");
    box.classList.add("featured-box");

    const content = document.createElement("div");
    content.classList.add("content");

    const title = document.createElement("h3");
    title.innerText = "Food Request";

    const hr = document.createElement("hr");

    const foodName = document.createElement("p");
    foodName.innerText = x.name;

    const foodQuantity = document.createElement("p");
    foodQuantity.innerText = "Quantity: " + x.quantity;


    const hr3 = document.createElement("hr");

    const textbox = document.createElement("input");
    textbox.setAttribute("placeholder", "Quantity");

    const donateBtn = document.createElement("button");
    donateBtn.innerText = "Donate";
    donateBtn.addEventListener("click", function(){
        window.location.href = "Delivery.html";
    });



    content.appendChild(title);
    content.appendChild(hr);
    content.appendChild(foodName);
    content.appendChild(foodQuantity);
    content.appendChild(hr3);
    content.appendChild(textbox);
    content.appendChild(donateBtn);

    box.appendChild(content);
    div.appendChild(box);

    return div;
}
function getBloodDonationReq(bloodDonationRequest) {
    const div = document.createElement("div");
    div.classList.add("col-lg-4", "col-md-4", "col-sm-6", "col-xs-12");

    const box = document.createElement("div");
    box.classList.add("featured-box");

    const content = document.createElement("div");
    content.classList.add("content");

    const title = document.createElement("h3");
    title.innerText = "Blood Donation Request";

    const hr = document.createElement("hr");

    const patientDetails = document.createElement("h2");
    patientDetails.innerText = "Patient Details";

    const patientName = document.createElement("p");
    patientName.innerText = "Patient Name: " + bloodDonationRequest.patientName;

    const patientGender = document.createElement("p");
    patientGender.innerText = "Patient Age: " + bloodDonationRequest.patientGender;

    const patientAge = document.createElement("p");
    patientAge.innerText = "Patient Age: " + bloodDonationRequest.patientAge;

    const bloodType = document.createElement("p");
    bloodType.innerText = "Blood Type: " + bloodDonationRequest.bloodType;

    const hr1 = document.createElement("hr");

    const hospitalDetails = document.createElement("h2");
    hospitalDetails.innerText = bloodDonationRequest.hospitalName;

    const mapDiv = document.createElement("div");
    mapDiv.classList.add("mapDiv");

    // Initialize the map
    
      const map = new google.maps.Map(mapDiv, {
        center: {lat: bloodDonationRequest.latitude, lng: bloodDonationRequest.longitude},
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
        position: { lat: bloodDonationRequest.latitude, lng: bloodDonationRequest.longitude },
        map: map,
        title: bloodDonationRequest.hospitalName
    });

    const loc = document.createElement("ol");
    const li1 = document.createElement("li");
    const li2 = document.createElement("li");
    const li3 = document.createElement("li");
    li1.innerText = bloodDonationRequest.hospitalAddress;
    li2.innerText = bloodDonationRequest.hospitalArea;
    li3.innerText = bloodDonationRequest.hospitalGov; 
    loc.appendChild(li1);
    loc.appendChild(li2);
    loc.appendChild(li3);

    content.appendChild(title);
    content.appendChild(hr);
    content.appendChild(patientDetails);
    content.appendChild(patientName);
    content.appendChild(patientGender);
    content.appendChild(patientAge);
    content.appendChild(bloodType);
    content.appendChild(hr1);
    content.appendChild(hospitalDetails);
    content.appendChild(mapDiv);
    content.appendChild(loc);
    
    

    box.appendChild(content);
    div.appendChild(box);

    return div;
}
function getClothesReq(clothesRequest) {
    const div = document.createElement("div");
    div.classList.add("col-lg-4", "col-md-4", "col-sm-6", "col-xs-12");

    const box = document.createElement("div");
    box.classList.add("featured-box");

    const content = document.createElement("div");
    content.classList.add("content");

    const title = document.createElement("h3");
    title.innerText = "Clothes Request";

    const hr = document.createElement("hr");

    const clothesDetails = document.createElement("h2");
    clothesDetails.innerText = "Clothes Details";

    const clothesType = document.createElement("p");
    clothesType.innerText = "Clothes Type: " + clothesRequest.clothesType;

    const age = document.createElement("p");
    age.innerText = "Age: " + clothesRequest.age;

    const gender = document.createElement("p");
    gender.innerText = "Gender: " + clothesRequest.gender;

    const season = document.createElement("p");
    season.innerText = "Season: " + clothesRequest.season;

    const material = document.createElement("p");
    material.innerText = "Material: " + clothesRequest.material;

    const quantityRequested = document.createElement("p");
    quantityRequested.innerText = "Quantity Requested: " + clothesRequest.quantityRequested;


    const hr3 = document.createElement("hr");

    const textbox = document.createElement("input");
    textbox.setAttribute("placeholder", "Quantity");

    const donateBtn = document.createElement("button");
    donateBtn.innerText = "Donate";
    donateBtn.addEventListener("click", function(){
        window.location.href = "Delivery.html";
    });

    content.appendChild(title);
    content.appendChild(hr);
    content.appendChild(clothesDetails);
    content.appendChild(clothesType);
    content.appendChild(age);
    content.appendChild(gender);
    content.appendChild(season);
    content.appendChild(material);
    content.appendChild(quantityRequested);
    content.appendChild(hr3);
    content.appendChild(textbox);
    content.appendChild(donateBtn);

    box.appendChild(content);
    div.appendChild(box);

    return div;
}
function getSchoolSuppliesReq(schoolSuppliesRequest) {


    const div = document.createElement("div");
    div.classList.add("col-lg-4", "col-md-4", "col-sm-6", "col-xs-12");

    const box = document.createElement("div");
    box.classList.add("featured-box");

    const content = document.createElement("div");
    content.classList.add("content");

    if (schoolSuppliesRequest.type === "Stationary"){

        const title = document.createElement("h3");
        title.innerText = "School Supplies Request";

        const subTitle = document.createElement("h2");
        subTitle.innerText = "Stationary";

        const hr = document.createElement("hr");

        const quantity = document.createElement("p");
        quantity.innerText = "Quantity: " + schoolSuppliesRequest.quantity;

        const hr3 = document.createElement("hr");

        const textbox = document.createElement("input");
        textbox.setAttribute("placeholder", "Quantity");

        const donateBtn = document.createElement("button");
        donateBtn.innerText = "Donate";
        donateBtn.addEventListener("click", function(){
            window.location.href = "Delivery.html";
        });

        content.appendChild(title);
        content.appendChild(subTitle);
        content.appendChild(hr);
        content.appendChild(quantity);
        content.appendChild(hr3);
        content.appendChild(textbox);
        content.appendChild(donateBtn);


    }else{
        const title = document.createElement("h3");
        title.innerText = "School Supplies Request";

        const subTitle = document.createElement("h2");
        subTitle.innerText = "Books";

        const hr = document.createElement("hr");

        const suppliesDetails = document.createElement("h2");
        suppliesDetails.innerText = "Supplies Details";

        const type = document.createElement("p");
        type.innerText = "Type: " + schoolSuppliesRequest.type;

        const bookName = document.createElement("p");
        bookName.innerText = "Book Name: " + schoolSuppliesRequest.bookName;

        const author = document.createElement("p");
        author.innerText = "Author: " + schoolSuppliesRequest.author;

        const language = document.createElement("p");
        language.innerText = "Language: " + schoolSuppliesRequest.language;

        const edition = document.createElement("p");
        edition.innerText = "Edition: " + schoolSuppliesRequest.edition;

        const shortSummary = document.createElement("p");
        shortSummary.innerText = "Short Summary: " + schoolSuppliesRequest.shortSummary;

        const pictureName = document.createElement("p");
        pictureName.innerText = "Picture Name: " + schoolSuppliesRequest.pictureName;

        const quantity = document.createElement("p");
        quantity.innerText = "Quantity: " + schoolSuppliesRequest.quantity;

        const hr3 = document.createElement("hr");

        const textbox = document.createElement("input");
        textbox.setAttribute("placeholder", "Quantity");

        const donateBtn = document.createElement("button");
        donateBtn.innerText = "Donate";
        donateBtn.addEventListener("click", function(){
            window.location.href = "Delivery.html";
        });

        content.appendChild(title);
        content.appendChild(subTitle);
        content.appendChild(hr);
        content.appendChild(suppliesDetails);
        content.appendChild(type);
        content.appendChild(bookName);
        content.appendChild(author);
        content.appendChild(language);
        content.appendChild(edition);
        content.appendChild(shortSummary);
        content.appendChild(pictureName);
        content.appendChild(quantity);
        content.appendChild(hr3);
        content.appendChild(textbox);
        content.appendChild(donateBtn);
    }

    box.appendChild(content);
    div.appendChild(box);

    return div;
}
function getToysReq(toysRequest) {
    const div = document.createElement("div");
    div.classList.add("col-lg-4", "col-md-4", "col-sm-6", "col-xs-12");

    const box = document.createElement("div");
    box.classList.add("featured-box");

    const content = document.createElement("div");
    content.classList.add("content");

    const title = document.createElement("h3");
    title.innerText = "Toys Request";

    const hr = document.createElement("hr");

    const toysDetails = document.createElement("h2");
    toysDetails.innerText = "Toys Details";

    const type = document.createElement("p");
    type.innerText = "Type: " + toysRequest.type;

    const age = document.createElement("p");
    age.innerText = "Age: " + toysRequest.age;

    const gender = document.createElement("p");
    gender.innerText = "Gender: " + toysRequest.gender;

    const category = document.createElement("p");
    category.innerText = "Category: " + toysRequest.category;

    const pictureName = document.createElement("p");
    pictureName.innerText = "Picture Name: " + toysRequest.pictureName;

    const hr3 = document.createElement("hr");

    const textbox = document.createElement("input");
    textbox.setAttribute("placeholder", "Quantity");

    const donateBtn = document.createElement("button");
    donateBtn.innerText = "Donate";
    donateBtn.addEventListener("click", function(){
        window.location.href = "Delivery.html";
    });

    content.appendChild(title);
    content.appendChild(hr);
    content.appendChild(toysDetails);
    content.appendChild(type);
    content.appendChild(age);
    content.appendChild(gender);
    content.appendChild(category);
    content.appendChild(pictureName);
    content.appendChild(hr3);
    content.appendChild(textbox);
    content.appendChild(donateBtn);

    box.appendChild(content);
    div.appendChild(box);

    return div;
}
function getMedicalSuppliesReq(medicalSuppliesRequest) {
    const div = document.createElement("div");
    div.classList.add("col-lg-4", "col-md-4", "col-sm-6", "col-xs-12");

    const box = document.createElement("div");
    box.classList.add("featured-box");

    const content = document.createElement("div");
    content.classList.add("content");

    const title = document.createElement("h3");
    title.innerText = "Medical Supplies Request";

    const hr = document.createElement("hr");

    const suppliesDetails = document.createElement("h2");
    suppliesDetails.innerText = "Medical Supplies Details";

    const deviceType = document.createElement("p");
    deviceType.innerText = "Device Type: " + medicalSuppliesRequest.deviceType;

    const use = document.createElement("p");
    use.innerText = "Use: " + medicalSuppliesRequest.use;

    const image = document.createElement("p");
    image.innerText = "Image: " + medicalSuppliesRequest.image;

    const quantity = document.createElement("p");
    quantity.innerText = "Quantity: " + medicalSuppliesRequest.quantity;


    const hr3 = document.createElement("hr");

    const textbox = document.createElement("input");
    textbox.setAttribute("placeholder", "Quantity");

    const donateBtn = document.createElement("button");
    donateBtn.innerText = "Donate";
    donateBtn.addEventListener("click", function(){
        window.location.href = "Delivery.html";
    });

    content.appendChild(title);
    content.appendChild(hr);
    content.appendChild(suppliesDetails);
    content.appendChild(deviceType);
    content.appendChild(use);
    content.appendChild(image);
    content.appendChild(quantity);
    content.appendChild(hr3);
    content.appendChild(textbox);
    content.appendChild(donateBtn);

    box.appendChild(content);
    div.appendChild(box);

    return div;
}

function allReqs(){

    const reqContainer = document.getElementById("requestBox");
    
    const children = reqContainer.children;

    for(var i = children.length -1 ; i>0; i--){
        reqContainer.removeChild(children[i]);
    }

    requests.forEach(function(req){
        
        let reqDiv;
        
        if (req instanceof FoodRequest) {
            reqDiv = getFoodReq(req);
        } else if (req instanceof BloodDonationRequest) {
            reqDiv = getBloodDonationReq(req);
        } else if (req instanceof ClothesRequest) {
            reqDiv = getClothesReq(req);
        } else if (req instanceof SchoolSuppliesRequest) {
            reqDiv = getSchoolSuppliesReq(req);
        } else if (req instanceof ToysRequest) {
            reqDiv = getToysReq(req);
        } else {
            reqDiv = getMedicalSuppliesReq(req);
        }
        reqContainer.appendChild(reqDiv);
    });
}
function searchRequests(event, element){
    if(event.key !=="Enter"){
        return;
    }
    element.blur();
    const reqContainer = document.getElementById("requestBox");
    const children = reqContainer.children;

    for(var i = children.length -1 ; i>0; i--){
        reqContainer.removeChild(children[i]);
    }

    const searchString = document.getElementById("searchDonorRequest").value.toLowerCase();;
    document.getElementById("searchDonorRequest").value = "";
    
    requests.forEach(function(req){
        
        let reqDiv;

        if(searchString === "food"){
            if (req instanceof FoodRequest)
                reqDiv = getFoodReq(req);
            else return;
            
        } else if(searchString === "clothes"){
            if (req instanceof ClothesRequest)
                reqDiv = getClothesReq(req);
            else return;
            
        } else if(searchString === "blood donations"){
            if (req instanceof BloodDonationRequest)
                reqDiv = getBloodDonationReq(req);
            else return;

        } else if(searchString === "toys"){
            if (req instanceof ToysRequest) 
                reqDiv = getToysReq(req);
            else return;

        } else if(searchString === "school supplies"){
            if (req instanceof SchoolSuppliesRequest) 
                reqDiv = getSchoolSuppliesReq(req);
            else return;

        } else if(searchString === "medical supplies"){
            if (req instanceof MedicalSuppliesRequest)
                reqDiv = getMedicalSuppliesReq(req);
            else return;
        }

        reqContainer.appendChild(reqDiv);
    });

}
function filterRequests(){
    const reqContainer = document.getElementById("requestBox");
    const children = reqContainer.children;

    for(var i = children.length -1 ; i>0; i--){
        reqContainer.removeChild(children[i]);
    }

    const searchString = document.getElementById("category").value.toLowerCase();
    document.getElementById("category").value = "";

    requests.forEach(function(req){
        
        let reqDiv;

        if(searchString === "food"){
            if (req instanceof FoodRequest & filterFood(req))
                reqDiv = getFoodReq(req);
            else return;
            
        } else if(searchString === "clothes" ){
            if (req instanceof ClothesRequest & filterClothes(req))
                reqDiv = getClothesReq(req);
            else return;
            
        } else if(searchString === "blood donations" ){
            if (req instanceof BloodDonationRequest & filterBloodDonations(req))
                reqDiv = getBloodDonationReq(req);
            else return;

        } else if(searchString === "toys" ){
            if (req instanceof ToysRequest & filterToys(req)) 
                reqDiv = getToysReq(req);
            else return;

        } else if(searchString === "school supplies" ){
            if (req instanceof SchoolSuppliesRequest & filterSchoolSupp(req)) 
                reqDiv = getSchoolSuppliesReq(req);
            else return;

        } else if(searchString === "medical supplies" ){
            if (req instanceof MedicalSuppliesRequest & filterMedicalSupp(req))
                reqDiv = getMedicalSuppliesReq(req);
            else return;
        }





        reqContainer.appendChild(reqDiv);
    });

    resetAllOptions();
    changeDiv();
}


function filterBloodDonations(req){

    var flag = true;
    var name = document.getElementById("hospitalName").value;
    var area = document.getElementById("area").value;
    var governorate = document.getElementById("governorate").value;

    if(name !== ""){
        if(name === req.hospitalName){
            flag = flag & true;
        }else{
            flag = false;
        }
    }
    if(area !== ""){
        if(area === req.hospitalArea){
            flag = flag & true;
        } else{
            flag = false;
        }
    }
    if(governorate !== ""){
        if(governorate === req.hospitalGov){
            flag = flag & true;
        }else {
            flag = false;
        }
    }

    return flag;

}
function filterClothes(req){
    var flag = true;
    var age = document.getElementById("clothesAge").value;
    var gender = document.getElementById("clothesGender").value.toLowerCase();
    var season = document.getElementById("season").value;

    if(age !== ""){
        if(age === req.age){
            flag = flag & true;
        }else{
            flag = false;
        }
    }
    if(gender !== ""){
        if(gender === req.gender){
            flag = flag & true;
        } else{
            flag = false;
        }
    }
    if(season !== ""){
        if(season === req.season){
            flag = flag & true;
        }else {
            flag = false;
        }
    }

    return flag;
}
function filterSchoolSupp(req){
    var flag = true;
    var type = document.getElementById("schoolSupp").value;

    if(type !== ""){
        if(type === req.type){
            flag = flag & true;
        }else {
            flag = false;
        }
    }

    return flag;
}
function filterToys(req){
    var flag = true;
    var age = document.getElementById("toysAge").value;
    var gender = document.getElementById("toysGender").value;
    var type = document.getElementById("toysType").value;

    if(age !== ""){
        if(age === req.age){
            flag = flag & true;
        }else{
            flag = false;
        }
    }
    if(gender !== ""){
        if(gender === req.gender){
            flag = flag & true;
        } else{
            flag = false;
        }
    }
    if(type !== ""){
        if(type === req.type){
            flag = flag & true;
        }else {
            flag = false;
        }
    }

    return flag;
}
function filterMedicalSupp(req){
    var flag = true;
    var type = document.getElementById("medicalType").value;
    var use = document.getElementById("medicalUse").value;

    if(type !== ""){
        if(type === req.deviceType){
            flag = flag & true;
        }else {
            flag = false;
        }
    }

    if(use !== ""){
        if(use === req.use){
            flag = flag & true;
        }else {
            flag = false;
        }
    }


    return flag;
}
function filterFood(req){
    var flag = true;
    var type = document.getElementById("foodType").value;

    if(type !== ""){
        if(type === req.type){
            flag = flag & true;
        }else {
            flag = false;
        }
    }

    return flag;
}


function changeDiv(){
    const val = document.getElementById("category").value;
    const allDivs = ["clothes", "toys", "food", "medical supplies", "school supplies", "blood donations"];
            
    for(var i =0; i<allDivs.length;i++){
        document.getElementById(allDivs[i]).classList.add("hidden");
    }
    if(val !== "")
        document.getElementById(val).classList.remove("hidden");
}
function resetAllOptions(){
    var x = document.getElementsByClassName("searchItem");
    for(var i = 0; i<x.length;i++){
        (x[i].children)[1].value = "";
    }

}

// --------------- delivery Page ------------------------- //

function submit() {
    

    var vehicle = document.getElementById("vehicle").value;
    var pickup = document.getElementById("pickup").value;

    if(vehicle === "" || pickup ===""){
        alert("Please select vehicle type and pickup time");
        return;
    }

    var div = document.getElementById('box');
    div.classList.remove("hidden");
    if(div.children.length > 1){
        div.removeChild(div.children[1]);
    }
    
    var text = document.createElement("p");
    text.innerText = "Your Donation has been confirmed A " + vehicle +" will be arriving from " +pickup +" to pickup your donation. Thank you!"  ;
    
    div.appendChild(text);

} 
function changeDiv2(){
    const val = document.getElementById("category").value;
    const allDivs = ["Teacher","doctor"];

    for(var i =0; i<allDivs.length;i++){
        document.getElementById(allDivs[i]).classList.add("hidden");
    }
    if(val !== "")
        document.getElementById(val).classList.remove("hidden");
}
function resetAllOptions2(){
    var x = document.getElementsByClassName("searchItem");

    for(var i = 0; i<x.length;i++){
        (x[i].children)[1].value = "";
    }

}
function Alert(){
    alert("your Documents are verified");
    window.location.href="Volunteer-Role.html";
}


// ---------------------- Account Pagee ----------------------- //

function Person(first_name, last_name, gender, mail, number, address, password, area, governorate) {
    this.first_name = first_name;
    this.last_name = last_name;
    this.gender = gender;
    this.mail = mail;
    this.number = number;
    this.address = address;
    this.password = password;
    this.area = area;
    this.governorate = governorate;
}
let p = new Person("John", "Doe", "Male", "john@example.com", "123456789", "123 Main St", "password123", "Some Area", "Some Governorate");


function donorAccOnload(){
    document.getElementById("UpdateCredintials").classList.add("hidden");
    document.getElementById("viewCredintials").classList.add("hidden");
}
function showUpdateDiv(){
    document.getElementById("viewCredintials").classList.add("hidden");
    document.getElementById("UpdateCredintials").classList.remove("hidden");
}
function showViewDiv(){
    document.getElementById("viewCredintials").classList.remove("hidden");
    document.getElementById("UpdateCredintials").classList.add("hidden");

    document.getElementById("fNameLbl").innerHTML = p.first_name; 
    document.getElementById("lNameLbl").innerHTML = p.last_name; 
    document.getElementById("genderLbl").innerHTML = p.gender; 
    document.getElementById("emailLbl").innerHTML = p.mail; 
    document.getElementById("numberLbl").innerHTML = p.number; 
    document.getElementById("addressLbl").innerHTML = p.address; 
    document.getElementById("passwordLbl").innerHTML = p.password; 
    document.getElementById("areaLbl").innerHTML = p.area; 
    document.getElementById("govLbl").innerHTML = p.governorate; 



}
function updateAcc(){
    if( document.getElementById("fName").value !== "")
        p.first_name = document.getElementById("fName").value;
    if(document.getElementById("lName").value !== "")
        p.last_name = document.getElementById("lName").value;
    if(document.getElementById("gender").value !== "")
        p.gender = document.getElementById("gender").value;
    if(document.getElementById("email").value !== "")
        p.mail = document.getElementById("email").value; 
    if(document.getElementById("number").value !== "")
        p.number = document.getElementById("number").value;   
    if(document.getElementById("address").value !== "")
        p.address = document.getElementById("address").value;
    if(document.getElementById("password").value !== "")
        p.password = document.getElementById("password").value;
    if(document.getElementById("area").value !== "")
        p.area = document.getElementById("area").value;
    if(document.getElementById("gov").value !== "")
        p.governorate = document.getElementById("gov").value;


    donorAccOnload();
    alert("Credintials are updated sucessfully!");
    

    
}
function deleteAcc(){
    window.location.replace("C:/Users/Msi1/Documents/GitHub/chiefs/Organizationregistration.html");
}


// -------------------------- Request Pageee ----------------------- //


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
function updateMarkerPosition(position){
    marker.setPosition(position);

}


// --------------------- volunteer Pagee ------------------//
function changeVolunteerDiv(){
    const val = document.getElementById("category").value;
    const allDivs = ["Teacher","doctor","regular"];

    for(var i =0; i<allDivs.length;i++){
        document.getElementById(allDivs[i]).classList.add("hidden");
    }
    if(val !== "")
        document.getElementById(val).classList.remove("hidden");


}

function showRegular(){
  volunteerHideAllDiv();
  document.getElementById("regular").classList.remove("hidden");
}
function showTeacher(){
  volunteerHideAllDiv();
  document.getElementById("Teacher").classList.remove("hidden");
}
function showDoctor(){
  volunteerHideAllDiv();
  document.getElementById("doctor").classList.remove("hidden");

}

function volunteerHideAllDiv(){
    document.getElementById("Teacher").classList.add("hidden");
    document.getElementById("doctor").classList.add("hidden");
    document.getElementById("regular").classList.add("hidden");
}
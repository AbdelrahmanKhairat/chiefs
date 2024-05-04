var requests = [];


function BloodDonationRequest(patientName, bloodType, hospitalName, hospitalArea, hospitalGov, hospitalAddress, patientAge) {
    this.patientName = patientName;
    this.bloodType = bloodType;
    this.hospitalName = hospitalName;
    this.hospitalArea = hospitalArea;
    this.hospitalGov = hospitalGov;
    this.hospitalAddress = hospitalAddress;
    this.patientAge = patientAge;
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

function FoodRequest(name, quantity) {
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

    var req1 = new BloodDonationRequest("John Doe", "O+", "City Hospital", "Downtown", "New York", "123 Main St", 30);
    var req2 = new BloodDonationRequest("Jane Smith", "AB-", "County Hospital", "Uptown", "Los Angeles", "456 Elm St", 45);
    var req3 = new BloodDonationRequest("Michael Johnson", "B+", "General Hospital", "Midtown", "Chicago", "789 Oak St", 50);
    var req4 = new BloodDonationRequest("Emily Davis", "A-", "University Hospital", "Suburb", "Houston", "101 Pine St", 35);
    var req5 = new ClothesRequest("Shirt", 25, "Male", "Summer", "Cotton", 10);
    var req6 = new ClothesRequest("Sweater", 8, "Female", "Winter", "Wool", 5);
    var req7 = new SchoolSuppliesRequest("Textbook", "Mathematics for Beginners", "John Smith", "English", "1st Edition", "Introduction to basic math concepts.", "math_book.jpg", 20);
    var req8 = new SchoolSuppliesRequest("Notebook", "Blank Pages Notebook", "N/A", "Any", "N/A", "Blank pages for writing or drawing.", "blank_notebook.jpg", 50);
    var req9 = new ToysRequest("Action Figure", 5, "Male", "Action Figures", "action_figure.jpg");
    var req10 = new ToysRequest("Doll", 7, "Female", "Dolls", "doll.jpg");
    var req11 = new FoodRequest("Rice", 10);
    var req12 = new FoodRequest("Apples", 20);
    var req13 = new MedicalSuppliesRequest("Thermometer", "Measuring body temperature", "thermometer.jpg", 5);
    var req14 = new MedicalSuppliesRequest("Bandages", "Wound dressing", "bandages.jpg", 50);


    requests.push(req1);
    requests.push(req2);
    requests.push(req3);
    requests.push(req4);
    requests.push(req5);
    requests.push(req6);
    requests.push(req7);
    requests.push(req8);
    
    requests.push(req11);
    requests.push(req12);
    requests.push(req13);
    requests.push(req14);
    requests.push(req9);
    requests.push(req10);

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

    content.appendChild(title);
    content.appendChild(hr);
    content.appendChild(foodName);
    content.appendChild(foodQuantity);

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

    const patientAge = document.createElement("p");
    patientAge.innerText = "Patient Age: " + bloodDonationRequest.patientAge;

    const bloodType = document.createElement("p");
    bloodType.innerText = "Blood Type: " + bloodDonationRequest.bloodType;

    const hr1 = document.createElement("hr");

    const hospitalDetails = document.createElement("h2");
    hospitalDetails.innerText = "Hospital Details";

    const hospitalName = document.createElement("p");
    hospitalName.innerText = "Hospital Name: " + bloodDonationRequest.hospitalName;

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
    content.appendChild(patientAge);
    content.appendChild(bloodType);
    content.appendChild(hr1);
    content.appendChild(hospitalDetails);
    content.appendChild(hospitalName);
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

    content.appendChild(title);
    content.appendChild(hr);
    content.appendChild(clothesDetails);
    content.appendChild(clothesType);
    content.appendChild(age);
    content.appendChild(gender);
    content.appendChild(season);
    content.appendChild(material);
    content.appendChild(quantityRequested);

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

    const title = document.createElement("h3");
    title.innerText = "School Supplies Request";

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

    content.appendChild(title);
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

    content.appendChild(title);
    content.appendChild(hr);
    content.appendChild(toysDetails);
    content.appendChild(type);
    content.appendChild(age);
    content.appendChild(gender);
    content.appendChild(category);
    content.appendChild(pictureName);

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

    content.appendChild(title);
    content.appendChild(hr);
    content.appendChild(suppliesDetails);
    content.appendChild(deviceType);
    content.appendChild(use);
    content.appendChild(image);
    content.appendChild(quantity);

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















function changeDiv(){
    const val = document.getElementById("category").value;
    const allDivs = ["clothes", "toys", "food", "medical supplies", "school supplies", "blood donations"];
            
    for(var i =0; i<allDivs.length;i++){
        document.getElementById(allDivs[i]).classList.add("hide");
    }

    document.getElementById(val).classList.remove("hide");
}




function getPosts(){



}
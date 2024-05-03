// ----------------- variables to act as DB --------------- //

const orgs = [];
const donors = [];
const AdminCredits = {
    username: "admin",
    password: "admin"
}

// ---------------- constructor for objects ----------------- //

function Donor(fname, lname, email, gender, type, number, address, area, governorate, password, isApproved) {
    this.fname = fname;
    this.lname = lname;
    this.email = email;
    this.gender = gender;
    this.type = type;
    this.number = number;
    this.address = address;
    this.area = area;
    this.governorate = governorate;
    this.password = password;
    this.isApproved = isApproved; 
}
function Organisation(fname, lname, gender, email, password, contact_number, org_name, org_type, org_address, area, governorate, longitude, latitude, isApproved) {
    this.fname = fname;
    this.lname = lname;
    this.gender = gender;
    this.email = email;
    this.password = password;
    this.contact_number = contact_number;
    this.org_name = org_name;
    this.org_type = org_type;
    this.org_address = org_address;
    this.area = area;
    this.governorate = governorate;
    this.longitude = longitude;
    this.latitude = latitude;
    this.isApproved = isApproved;  // 0 = pending , 1 = accepted, 2 = rejected
}

// ------------- dummy data for DB ----------------//

function createDummyOrgs(){

    var org1 = new Organisation("John", "Doe", "Male", "john@example.com", "password1", "1234567890", "Org1", "Type1", "Address1", "Area1", "Governorate1", 31.50197, 30.06494, 1);
    var org2 = new Organisation("Jane", "Smith", "Female", "jane@example.com", "password2", "9876543210", "Org2", "Type2", "Address2", "Area2", "Governorate2", 31.50197, 30.06494, 0);
    var org3 = new Organisation("Alice", "Johnson", "Female", "alice@example.com", "password3", "4561237890", "Org3", "Type1", "Address3", "Area3", "Governorate3", 31.50197, 30.06494, 0);
    var org4 = new Organisation("Bob", "Smith", "Male", "bob@example.com", "password4", "7894561230", "Org4", "Type3", "Address4", "Area4", "Governorate4", 31.50197, 30.06494, 1);
    
    // Create an array to hold Organisation objects
    orgs.push(org1);
    orgs.push(org2);
    orgs.push(org3);
    orgs.push(org4);
}
function createDummyDonors(){
    var donor1 = new Donor("John", "Doe", "john@example.com", "Male", "Doctor", "1234567890", "123 Main St", "Area1", "Government1", "password1", 1);
    var donor2 = new Donor("Jane", "Smith", "jane@example.com", "Female", "Normal", "9876543210", "456 Elm St", "Area2", "Government2", "password2", 0);
    var donor3 = new Donor("Alice", "Johnson", "alice@example.com", "Female", "Teacher", "4561237890", "789 Oak St", "Area3", "Government3", "password3", 0);
    var donor4 = new Donor("Bob", "Smith", "bob@example.com", "Male", "Normal", "7894561230", "789 Maple St", "Area4", "Government4", "password4", 1);

    donors.push(donor1);
    donors.push(donor2);
    donors.push(donor3);
    donors.push(donor4);

}
createDummyOrgs();
createDummyDonors();

// ------------------- Admin Orgs Page --------------- //

function searchgOrgs(){
    const orgsContainer = document.getElementById("orgsBox");
    const children = orgsContainer.children;

    for(var i = children.length -1 ; i>0; i--){
        orgsContainer.removeChild(children[i]);
    }

    var searchString = document.getElementById("searchOrgsInput").value.toLowerCase();
    
    document.getElementById("searchOrgsInput").value = "";

    orgs.forEach(function(org) {
        const x = org.org_name.toLowerCase();

        if(!x.includes(searchString) || org.isApproved==2){
            return;
        }

        const div = document.createElement("div");
        div.classList.add("col-lg-4", "col-md-4", "col-sm-6", "col-xs-12");

        const box = document.createElement("div");
        box.classList.add("featured-box");

        const content = document.createElement("div");
        content.classList.add("content");

        const orgName = document.createElement("h3");
        orgName.innerText = org.org_name;

        const orgType = document.createElement("h2");
        orgType.innerText = org.org_type;

        content.appendChild(orgName);
        content.appendChild(orgType);

        const mapDiv = document.createElement("div");
        mapDiv.classList.add("mapDiv");

        box.appendChild(content);
        div.appendChild(box);
        orgsContainer.appendChild(div);

        // Initialize the map
        const map = new google.maps.Map(mapDiv, {
            center: {lat: org.latitude, lng: org.longitude},
            zoom: 10
          });

        // Add a marker to the map
        const marker = new google.maps.Marker({
            position: { lat: org.latitude, lng: org.longitude },
            map: map,
            title: org.org_name
        });


        const loc = document.createElement("ol");
        const li1 = document.createElement("li");
        const li2 = document.createElement("li");
        const li3 = document.createElement("li");
        li1.innerText = org.org_address;
        li2.innerText = org.area;
        li3.innerText = org.governorate;

        loc.appendChild(li1);
        loc.appendChild(li2);
        loc.appendChild(li3);
        

        const hr = document.createElement("hr");
        content.appendChild(hr);

        const name = document.createElement("p");
        name.innerText = org.fname + " "+org.lname;
        const number = document.createElement("p");
        number.innerText = org.contact_number;
        const email = document.createElement("p");
        email.innerText = org.email;

        content.appendChild(name);
        content.appendChild(number);
        content.appendChild(email);

        const hr1 = document.createElement("hr");
        content.appendChild(hr1);
        
        content.appendChild(mapDiv);
        content.appendChild(loc);


    });

    
    
}
function getRegisteredOrgs(){
    const orgsContainer = document.getElementById("orgsBox");
    const children = orgsContainer.children;

    for(var i = children.length -1 ; i>0; i--){
        orgsContainer.removeChild(children[i]);
    }


    orgs.forEach(function(org) {

        if(org.isApproved == 0 || org.isApproved == 2){
            return;
        }

        const div = document.createElement("div");
        div.classList.add("col-lg-4", "col-md-4", "col-sm-6", "col-xs-12");

        const box = document.createElement("div");
        box.classList.add("featured-box");

        const content = document.createElement("div");
        content.classList.add("content");

        const orgName = document.createElement("h3");
        orgName.innerText = org.org_name;

        const orgType = document.createElement("h2");
        orgType.innerText = org.org_type;

        content.appendChild(orgName);
        content.appendChild(orgType);

        const mapDiv = document.createElement("div");
        mapDiv.classList.add("mapDiv");

        box.appendChild(content);
        div.appendChild(box);
        orgsContainer.appendChild(div);

        // Initialize the map
        const map = new google.maps.Map(mapDiv, {
            center: {lat: org.latitude, lng: org.longitude},
            zoom: 10
          });

        // Add a marker to the map
        const marker = new google.maps.Marker({
            position: { lat: org.latitude, lng: org.longitude },
            map: map,
            title: org.org_name
        });


        const loc = document.createElement("ol");
        const li1 = document.createElement("li");
        const li2 = document.createElement("li");
        const li3 = document.createElement("li");
        li1.innerText = org.org_address;
        li2.innerText = org.area;
        li3.innerText = org.governorate;

        loc.appendChild(li1);
        loc.appendChild(li2);
        loc.appendChild(li3);
        


        const btnDiv = document.createElement("Div");
        btnDiv.classList.add("btnDiv");

        const i = orgs.indexOf(org);

        const delBtn = document.createElement("button");
        delBtn.innerText = "Delete";
        delBtn.classList.add("rejectBtn");
        delBtn.id = "del"+i;
        delBtn.addEventListener("click", function(event){
            var btnID = parseInt(delBtn.id.charAt(delBtn.id.length-1));
            orgs[btnID].isApproved = 2;
            getRegisteredOrgs();
        });
        btnDiv.appendChild(delBtn);


        const hr = document.createElement("hr");
        content.appendChild(hr);

        const name = document.createElement("p");
        name.innerText = org.fname + " "+org.lname;
        const number = document.createElement("p");
        number.innerText = org.contact_number;
        const email = document.createElement("p");
        email.innerText = org.email;

        content.appendChild(name);
        content.appendChild(number);
        content.appendChild(email);

        const hr1 = document.createElement("hr");
        content.appendChild(hr1);
        
        content.appendChild(mapDiv);
        content.appendChild(loc);
        content.appendChild(btnDiv);


    });


}
function getPendingOrgs(){
    const orgsContainer = document.getElementById("orgsBox");
    const children = orgsContainer.children;

    for(var i = children.length -1 ; i>0; i--){
        orgsContainer.removeChild(children[i]);
    }


    orgs.forEach(function(org) {

        if(!org.isApproved == 0  ){
            return;
        }

        const div = document.createElement("div");
        div.classList.add("col-lg-4", "col-md-4", "col-sm-6", "col-xs-12");

        const box = document.createElement("div");
        box.classList.add("featured-box");

        const content = document.createElement("div");
        content.classList.add("content");

        const orgName = document.createElement("h3");
        orgName.innerText = org.org_name;

        const orgType = document.createElement("h2");
        orgType.innerText = org.org_type;

        content.appendChild(orgName);
        content.appendChild(orgType);

        const mapDiv = document.createElement("div");
        mapDiv.classList.add("mapDiv");

        box.appendChild(content);
        div.appendChild(box);
        orgsContainer.appendChild(div);

        // Initialize the map
        const map = new google.maps.Map(mapDiv, {
            center: {lat: org.latitude, lng: org.longitude},
            zoom: 10
          });

        // Add a marker to the map
        const marker = new google.maps.Marker({
            position: { lat: org.latitude, lng: org.longitude },
            map: map,
            title: org.org_name
        });


        const loc = document.createElement("ol");
        const li1 = document.createElement("li");
        const li2 = document.createElement("li");
        const li3 = document.createElement("li");
        li1.innerText = org.org_address;
        li2.innerText = org.area;
        li3.innerText = org.governorate;

        loc.appendChild(li1);
        loc.appendChild(li2);
        loc.appendChild(li3);
        

        const hr = document.createElement("hr");
        content.appendChild(hr);

        const name = document.createElement("p");
        name.innerText = org.fname + " "+org.lname;
        const number = document.createElement("p");
        number.innerText = org.contact_number;
        const email = document.createElement("p");
        email.innerText = org.email;

        content.appendChild(name);
        content.appendChild(number);
        content.appendChild(email);

        const hr1 = document.createElement("hr");
        content.appendChild(hr1);
        
        content.appendChild(mapDiv);
        content.appendChild(loc);

        const btnDiv = document.createElement("Div");
        btnDiv.classList.add("btnDiv");

        const i = orgs.indexOf(org);

        const accBtn = document.createElement("button");
        accBtn.innerText = "Accept";
        accBtn.classList.add("acceptBtn");
        accBtn.id = "acc"+i;
        accBtn.addEventListener("click", function(event){
            var btnID = parseInt(accBtn.id.charAt(accBtn.id.length-1));
            orgs[btnID].isApproved = 1;
            getPendingOrgs();
        });
        btnDiv.appendChild(accBtn);

        const rejBtn = document.createElement("button");
        rejBtn.innerText = "Reject";
        rejBtn.classList.add("rejectBtn");
        rejBtn.id = "rej"+i;
        rejBtn.addEventListener("click", function(event){
            var btnID = parseInt(rejBtn.id.charAt(rejBtn.id.length-1));
            orgs[btnID].isApproved = 2;
            //orgs.removeChild(org);
            getPendingOrgs();
        });
        btnDiv.appendChild(rejBtn);
        

        content.appendChild(btnDiv);

    });





}
function filterOrganisations(){
    const orgsContainer = document.getElementById("orgsBox");
    const children = orgsContainer.children;

    for(var i = children.length -1 ; i>0; i--){
        orgsContainer.removeChild(children[i]);
    }


    orgs.forEach(function(org) {

        if(org.isApproved == 0 || org.isApproved == 2){
            return;
        }
        
        var filterArea = document.getElementById("filterArea").value;
        var filterGov = document.getElementById("filterGovernorate").value;
        var filterType = document.getElementById("filterOrgType").value;

        if(filterArea !== "options"){
            if(filterArea !== org.area){
                return;
            }
        }

        if(filterGov !== "options"){
            if(filterGov !== org.governorate){
                return;
            }
        }

        if(filterType !== "options"){
            if(filterType !== org.org_type){
                return;
            }
        }

        document.getElementById("filterArea").value = "options";
        document.getElementById("filterGovernorate").value = "options";
        document.getElementById("filterOrgType").value = "options";
        


        const div = document.createElement("div");
        div.classList.add("col-lg-4", "col-md-4", "col-sm-6", "col-xs-12");

        const box = document.createElement("div");
        box.classList.add("featured-box");

        const content = document.createElement("div");
        content.classList.add("content");

        const orgName = document.createElement("h3");
        orgName.innerText = org.org_name;

        const orgType = document.createElement("h2");
        orgType.innerText = org.org_type;

        content.appendChild(orgName);
        content.appendChild(orgType);

        const mapDiv = document.createElement("div");
        mapDiv.classList.add("mapDiv");

        box.appendChild(content);
        div.appendChild(box);
        orgsContainer.appendChild(div);

        // Initialize the map
        const map = new google.maps.Map(mapDiv, {
            center: {lat: org.latitude, lng: org.longitude},
            zoom: 10
          });

        // Add a marker to the map
        const marker = new google.maps.Marker({
            position: { lat: org.latitude, lng: org.longitude },
            map: map,
            title: org.org_name
        });


        const loc = document.createElement("ol");
        const li1 = document.createElement("li");
        const li2 = document.createElement("li");
        const li3 = document.createElement("li");
        li1.innerText = org.org_address;
        li2.innerText = org.area;
        li3.innerText = org.governorate;

        loc.appendChild(li1);
        loc.appendChild(li2);
        loc.appendChild(li3);
        

        const hr = document.createElement("hr");
        content.appendChild(hr);

        const name = document.createElement("p");
        name.innerText = org.fname + " "+org.lname;
        const number = document.createElement("p");
        number.innerText = org.contact_number;
        const email = document.createElement("p");
        email.innerText = org.email;

        content.appendChild(name);
        content.appendChild(number);
        content.appendChild(email);

        const hr1 = document.createElement("hr");
        content.appendChild(hr1);
        
        content.appendChild(mapDiv);
        content.appendChild(loc);
        content.appendChild(btnDiv);


    });
}


// ------------------- Admin Account Page --------------- //

function adminAccOnload(){
    document.getElementById("ChangePasswordDiv").classList.add("hidden");
    document.getElementById("viewCredintialsDiv").classList.add("hidden");
    document.getElementById("savePasswordBtn").addEventListener("click", function(){
        if(AdminCredits.password === document.getElementById("oldPassword").value){
            AdminCredits.password = document.getElementById("newPassword").value;
            alert("Password has changed.");
        }else{
            alert("old password does not match. try again!");
        }
        
    });
}
function showChangePassDiv(){
    document.getElementById("ChangePasswordDiv").classList.remove("hidden");
    document.getElementById("viewCredintialsDiv").classList.add("hidden");
    document.getElementById("newPassword").value="";
    document.getElementById("oldPassword").value="";
}
function showCredintialsDiv(){
    document.getElementById("viewCredintialsDiv").classList.remove("hidden");
    document.getElementById("ChangePasswordDiv").classList.add("hidden");
    document.getElementById("usernameLbl").innerText = AdminCredits.username;
    document.getElementById("passwordLbl").innerText = AdminCredits.password;
}

// ------------------- Admin Donor PAge --------------- //

function getApprovedDonors() {
    
    const donorsContainer = document.getElementById("donorsBox");
    const children = donorsContainer.children;

    for (var i = children.length - 1; i > 0; i--) {
        donorsContainer.removeChild(children[i]);
    }

    donors.forEach(function(donor) {
        if (donor.isApproved == 0 || donor.isApproved == 2) {
            return;
        }

        const div = document.createElement("div");
        div.classList.add("col-lg-4", "col-md-4", "col-sm-6", "col-xs-12");

        const box = document.createElement("div");
        box.classList.add("featured-box");

        const content = document.createElement("div");
        content.classList.add("content");

        const donorName = document.createElement("h3");
        donorName.innerText = donor.fname + " " + donor.lname;

        const donorType = document.createElement("h2");
        donorType.innerText = donor.type;

        const hr = document.createElement("hr");
       
        const email = document.createElement("p");
        email.innerText = donor.email;

        const number = document.createElement("p");
        number.innerText = donor.number;

        const gender = document.createElement("p");
        gender.innerText = donor.gender;

        const hr1 = document.createElement("hr");

        const loc = document.createElement("ol");
        const li1 = document.createElement("li");
        const li2 = document.createElement("li");
        const li3 = document.createElement("li");
        li1.innerText = donor.address;
        li2.innerText = donor.area;
        li3.innerText = donor.governorate;

        loc.appendChild(li1);
        loc.appendChild(li2);
        loc.appendChild(li3);

        const btnDiv = document.createElement("Div");
        btnDiv.classList.add("btnDiv");

        const i = donors.indexOf(donor);

        const delBtn = document.createElement("button");
        delBtn.innerText = "Delete";
        delBtn.classList.add("rejectBtn");
        delBtn.id = "del"+i;
        delBtn.addEventListener("click", function(event){
            var btnID = parseInt(delBtn.id.charAt(delBtn.id.length-1));
            orgs[btnID].isApproved = 2;
            getRegisteredOrgs();
        });
        btnDiv.appendChild(delBtn);


        content.appendChild(donorName);
        content.appendChild(donorType);
        content.appendChild(hr);
        content.appendChild(email);
        content.appendChild(number);
        content.appendChild(gender);
        content.appendChild(hr1);
        content.appendChild(loc);
        content.appendChild(btnDiv);



        box.appendChild(content);
        div.appendChild(box);
        donorsContainer.appendChild(div);
        
    });
}
function getPendingDonors() {
    
    const donorsContainer = document.getElementById("donorsBox");
    const children = donorsContainer.children;

    for (var i = children.length - 1; i > 0; i--) {
        donorsContainer.removeChild(children[i]);
    }

    donors.forEach(function(donor) {
        if (donor.isApproved == 1 || donor.isApproved == 2) {
            return;
        }

        const div = document.createElement("div");
        div.classList.add("col-lg-4", "col-md-4", "col-sm-6", "col-xs-12");

        const box = document.createElement("div");
        box.classList.add("featured-box");

        const content = document.createElement("div");
        content.classList.add("content");

        const donorName = document.createElement("h3");
        donorName.innerText = donor.fname + " " + donor.lname;

        const donorType = document.createElement("h2");
        donorType.innerText = donor.type;

        const hr = document.createElement("hr");
       
        const email = document.createElement("p");
        email.innerText = donor.email;

        const number = document.createElement("p");
        number.innerText = donor.number;

        const gender = document.createElement("p");
        gender.innerText = donor.gender;

        const hr1 = document.createElement("hr");

        const loc = document.createElement("ol");
        const li1 = document.createElement("li");
        const li2 = document.createElement("li");
        const li3 = document.createElement("li");
        li1.innerText = donor.address;
        li2.innerText = donor.area;
        li3.innerText = donor.governorate;

        loc.appendChild(li1);
        loc.appendChild(li2);
        loc.appendChild(li3);


        const btnDiv = document.createElement("Div");
        btnDiv.classList.add("btnDiv");

        const i = donors.indexOf(donor);

        const accBtn = document.createElement("button");
        accBtn.innerText = "Accept";
        accBtn.classList.add("acceptBtn");
        accBtn.id = "acc"+i;
        accBtn.addEventListener("click", function(event){
            var btnID = parseInt(accBtn.id.charAt(accBtn.id.length-1));
            donors[btnID].isApproved = 1;
            getPendingDonors();
        });
        

        const rejBtn = document.createElement("button");
        rejBtn.innerText = "Reject";
        rejBtn.classList.add("rejectBtn");
        rejBtn.id = "rej"+i;
        rejBtn.addEventListener("click", function(event){
            var btnID = parseInt(rejBtn.id.charAt(rejBtn.id.length-1));
            donors[btnID].isApproved = 2;
            getPendingDonors();
        });
        btnDiv.appendChild(accBtn);
        btnDiv.appendChild(rejBtn);



        content.appendChild(donorName);
        content.appendChild(donorType);
        content.appendChild(hr);
        content.appendChild(email);
        content.appendChild(number);
        content.appendChild(gender);
        content.appendChild(hr1);
        content.appendChild(loc);
        content.appendChild(btnDiv);
        

        box.appendChild(content);
        div.appendChild(box);
        donorsContainer.appendChild(div);


        
    });
}
function getApprovedDoctors(){
    
    const donorsContainer = document.getElementById("donorsBox");
    const children = donorsContainer.children;

    for (var i = children.length - 1; i > 0; i--) {
        donorsContainer.removeChild(children[i]);
    }

    donors.forEach(function(donor) {
        if (donor.isApproved == 0 || donor.isApproved == 2) {
            return;
        }

        if(donor.type.toLowerCase() !== "doctor"){
            return;
        }

        const div = document.createElement("div");
        div.classList.add("col-lg-4", "col-md-4", "col-sm-6", "col-xs-12");

        const box = document.createElement("div");
        box.classList.add("featured-box");

        const content = document.createElement("div");
        content.classList.add("content");

        const donorName = document.createElement("h3");
        donorName.innerText = donor.fname + " " + donor.lname;

        const donorType = document.createElement("h2");
        donorType.innerText = donor.type;

        const hr = document.createElement("hr");
       
        const email = document.createElement("p");
        email.innerText = donor.email;

        const number = document.createElement("p");
        number.innerText = donor.number;

        const gender = document.createElement("p");
        gender.innerText = donor.gender;

        const hr1 = document.createElement("hr");

        const loc = document.createElement("ol");
        const li1 = document.createElement("li");
        const li2 = document.createElement("li");
        const li3 = document.createElement("li");
        li1.innerText = donor.address;
        li2.innerText = donor.area;
        li3.innerText = donor.governorate;

        loc.appendChild(li1);
        loc.appendChild(li2);
        loc.appendChild(li3);


        content.appendChild(donorName);
        content.appendChild(donorType);
        content.appendChild(hr);
        content.appendChild(email);
        content.appendChild(number);
        content.appendChild(gender);
        content.appendChild(hr1);
        content.appendChild(loc);



        box.appendChild(content);
        div.appendChild(box);
        donorsContainer.appendChild(div);
        
    });
}
function getApprovedTeachers(){
    
    const donorsContainer = document.getElementById("donorsBox");
    const children = donorsContainer.children;

    for (var i = children.length - 1; i > 0; i--) {
        donorsContainer.removeChild(children[i]);
    }

    donors.forEach(function(donor) {
        if (donor.isApproved == 0 || donor.isApproved == 2) {
            return;
        }
        if(donor.type.toLowerCase() !== "teacher"){
            return;
        }

        const div = document.createElement("div");
        div.classList.add("col-lg-4", "col-md-4", "col-sm-6", "col-xs-12");

        const box = document.createElement("div");
        box.classList.add("featured-box");

        const content = document.createElement("div");
        content.classList.add("content");

        const donorName = document.createElement("h3");
        donorName.innerText = donor.fname + " " + donor.lname;

        const donorType = document.createElement("h2");
        donorType.innerText = donor.type;

        const hr = document.createElement("hr");
       
        const email = document.createElement("p");
        email.innerText = donor.email;

        const number = document.createElement("p");
        number.innerText = donor.number;

        const gender = document.createElement("p");
        gender.innerText = donor.gender;

        const hr1 = document.createElement("hr");

        const loc = document.createElement("ol");
        const li1 = document.createElement("li");
        const li2 = document.createElement("li");
        const li3 = document.createElement("li");
        li1.innerText = donor.address;
        li2.innerText = donor.area;
        li3.innerText = donor.governorate;

        loc.appendChild(li1);
        loc.appendChild(li2);
        loc.appendChild(li3);


        content.appendChild(donorName);
        content.appendChild(donorType);
        content.appendChild(hr);
        content.appendChild(email);
        content.appendChild(number);
        content.appendChild(gender);
        content.appendChild(hr1);
        content.appendChild(loc);



        box.appendChild(content);
        div.appendChild(box);
        donorsContainer.appendChild(div);
        
    });
}


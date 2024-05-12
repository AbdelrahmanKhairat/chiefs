//---------arrays for posts---------//
var pndPosts = [];
var chPosts = [];
var ffPosts = [];


//------constructors for posts------/
function foodPost(cat, name, quantity) {
    this.cat = cat;
    this.name = name;
    this.quantity = quantity;
  }
  function bloodPost(cat, patientName, age, bloodType, hsptlName, hsptlArea, hsptlGov) {
    this.cat = cat;
    this.patientName = patientName;
    this.age = age;
    this.bloodType = bloodType;
    this.hsptlName = hsptlName;
    this.hsptlArea = hsptlArea;
    this.hsptlGov = hsptlGov;
  }
  function clothesPost(cat, type, age, gender, season, material, quantity) {
    this.cat = cat;
    this.type = type;
    this.age = age;
    this.gender = gender;
    this.season = season;
    this.material = material;
    this.quantity = quantity;
  }
  function schoolPost(cat, type, bookName, author, bookLang, bookEd, bookSum, bookPic, quantity) {
    this.cat = cat;
    this.type = type;
    this.bookName = bookName;
    this.author = author;
    this.bookLang = bookLang;
    this.bookEd = bookEd;
    this.bookSum = bookSum;
    this.bookPic = bookPic;
    this.quantity = quantity;
  }
  function toysPost(cat, type, age, gender, category, picture) {
    this.cat = cat;
    this.type = type;
    this.age = age;
    this.gender = gender;
    this.category = category;
    this.picture = picture;
  }
  function medicalPost(cat, type, use, image, quantity) {
    this.cat = cat;
    this.type = type;
    this.use = use;
    this.image = image;
    this.quantity = quantity;
  } 
  function teachingPost(cat, noOfStu, add, mapLoc, subs) {
    this.cat = cat;
    this.noOfStu = noOfStu;
    this.add = add;
    this.mapLoc = mapLoc;
    this.subs = subs;
  }
  function doctorPost(cat, patName, age, gender, weight, mapLoc, add, orgName, medSpec, caseDesc) {
    this.cat = cat;
    this.patName = patName;
    this.age = age;
    this.gender = gender;
    this.weight = weight;
    this.mapLoc = mapLoc;
    this.add = add;
    this.orgName = orgName;
    this.medSpec = medSpec;
    this.caseDesc = caseDesc;
  }
  
  
  //-----creating posts-----//
  function createPosts(){
    var post1 = new foodPost("Food","Lasagna","3");
    var post2 = new foodPost("Food","Steak","6");
    var post3 = new bloodPost("Blood donation", "Ahmed Ali", "24", "AB+", "Demerdash", "Giza", "Giza");
    var post4 = new clothesPost("Clothes","clothes","9","Male","Winter","Cotton","3");
    var post5 = new toysPost("Toys","Board Games","4","Female","Board Games","pic");
    var post6 = new teachingPost("Teaching","20","New Cairo","loc","Arabic");
    
    pndPosts.push(post1);
    pndPosts.push(post2);

    chPosts.push(post1);
    chPosts.push(post2);
    chPosts.push(post4);
    chPosts.push(post5);
    chPosts.push(post6);

    ffPosts.push(post1);
    ffPosts.push(post2);
    ffPosts.push(post4);
    ffPosts.push(post5);
    ffPosts.push(post6);
  }
  createPosts();
  
  function showPnd(){
    const orgsContainer = document.getElementById("orgsBox");
    const children = orgsContainer.children;
  
    for(var i = children.length -1 ; i>0; i--){
        orgsContainer.removeChild(children[i]);
    }
  
    pndPosts.forEach(function(post){
  
        var div = document.createElement("div");
        div.classList.add("col-lg-4", "col-md-4", "col-sm-6", "col-xs-12");
  
        const box = document.createElement("div");
        box.classList.add("featured-box");
  
        const content = document.createElement("div");
        content.classList.add("content");
  
        const postCat = document.createElement("h3");
        postCat.innerText = post.cat;
  
        content.appendChild(postCat);
        
        const hr = document.createElement("hr");
        content.appendChild(hr);
  
        if(post instanceof foodPost){

            const edit = document.createElement("i");
            edit.classList.add("editBtn", "fas", "fa-edit");
            
            // ----------------- name ----------------- //
            const nameDiv = document.createElement("div");
            nameDiv.classList.add("editRow");

            const name = document.createElement("p");
            name.innerText = post.name;
         
            edit.addEventListener("click", function() {
                createTextBox(name, name.innerText);
            });
            
            nameDiv.appendChild(name);
            nameDiv.appendChild(edit);
            content.appendChild(nameDiv);

            // ------------- number -------------------- //
            const numberDiv = document.createElement("div");
            numberDiv.classList.add("editRow");

            const number = document.createElement("p");
            number.innerText = post.quantity;
            

            edit.addEventListener("click", function() {
                createTextBox(number, number.innerText);
            });
        
            numberDiv.append(number);
            content.appendChild(numberDiv);

        }
        // else if (post instanceof bloodPost) {

        //     const edit = document.createElement("i");
        //     edit.classList.add("editBtn", "fas", "fa-edit");

        //     // ------------ patientName ---------------- //

        //     const pNameDiv = document.createElement("div");
        //     pNameDiv.classList.add("editRow");

        //     const patientName = document.createElement("p");
        //     patientName.innerText = post.patientName;

            
        //     edit.addEventListener("click", function() {
        //         createTextBox(patientName, patientName.innerText);
        //     });
        
            
        //     pNameDiv.appendChild(patientName);
        //     pNameDiv.appendChild(edit);
        //     content.appendChild(pNameDiv);
        
        //     // ------------------ age ------------------- //
        //     const pAgeDiv = document.createElement("div");
        //     pAgeDiv.classList.add("editRow");

        //     const age = document.createElement("p");
        //     age.innerText = post.age;

        //     // const editBtnAge = document.createElement("i");
        //     // editBtnAge.classList.add("editBtn", "fas", "fa-edit");
        //     edit.addEventListener("click", function() {
        //         createTextBox(age, age.innerText);
        //     });
        
            
        //     pAgeDiv.appendChild(age);
        //     // pAgeDiv.appendChild(editBtnAge);
        //     content.appendChild(pAgeDiv);

        //     // ----------------- blood type --------------- //
            
        //     const typeDiv = document.createElement("div");
        //     typeDiv.classList.add("editRow");

        //     const BldType = document.createElement("p");
        //     BldType.innerText = post.bloodType;

        //     // const editBtnBldType = document.createElement("i");
        //     // editBtnAge.classList.add("editBtn", "fas", "fa-edit");
        //     edit.addEventListener("click", function() {
        //         createTextBox(BldType, BldType.innerText);
        //     });

        //     typeDiv.appendChild(BldType);
        //     // typeDiv.appendChild(editBtnBldType);
        //     content.appendChild(typeDiv);

        //     // -------------------- hospital name -------------- //
        
        //     const hNameDiv = document.createElement("div");
        //     hNameDiv.classList.add("editRow");
            
        //     const HsptlName = document.createElement("p");
        //     HsptlName.innerText = post.hsptlName;
            
        //     // const editBtnHsptlName = document.createElement("i");
        //     // editBtnAge.classList.add("editBtn", "fas", "fa-edit");
        //     edit.addEventListener("click", function() {
        //         createTextBox(HsptlName, HsptlName.innerText);
        //     });
        
            
        //     hNameDiv.appendChild(HsptlName);
        //     // hNameDiv.appendChild(editBtnHsptlName);
        //     content.appendChild(hNameDiv);

        //     // ----------------- area -------------- //
        //     const areaDiv = document.createElement("div");
        //     areaDiv.classList.add("editRow");

        //     const HsptlArea = document.createElement("p");
        //     HsptlArea.innerText = post.hsptlArea;

        //     // const editBtnHsptlArea = document.createElement("i");
        //     // editBtnAge.classList.add("editBtn", "fas", "fa-edit");
        //     edit.addEventListener("click", function() {
        //         createTextBox(HsptlArea, post.age);
        //     });
        
        //     areaDiv.appendChild(HsptlArea);
        //     // areaDiv.appendChild(editBtnHsptlArea);
        //     content.appendChild(areaDiv);

        //     // ----------- gov ---------------- //
        //     const govDiv = document.createElement("div");
        //     govDiv.classList.add("editRow");

        //     const HsptlGov = document.createElement("p");
        //     HsptlGov.innerText = post.hsptlGov;
            
        //     edit.addEventListener("click", function() {
        //         createTextBox(HsptlGov, HsptlGov.innerText);
        //     });
        
        //     govDiv.appendChild(HsptlGov);
        //     content.appendChild(govDiv);
            
        
        // } else if (post instanceof clothesPost) {

        //     const edit = document.createElement("i");
        //     edit.classList.add("editBtn", "fas", "fa-edit");

        //     // ------------ patientName ---------------- //

        //     const typeDiv = document.createElement("div");
        //     typeDiv.classList.add("editRow");

        //     const type = document.createElement("p");
        //     type.innerText = post.type;

        //     // Edit button for type
            
        //     edit.addEventListener("click", function() {
        //         createTextBox(type, type.innerText);
        //     });
        
            
        //     typeDiv.appendChild(type);
        //     typeDiv.appendChild(edit);
        //     content.appendChild(typeDiv);
        
        //     // Edit button for age
            
        //     const age = document.createElement("p");
        //     age.innerText = post.age;
            
        //     editBtnAge.addEventListener("click", function() {
        //         createTextBox(age, age.innerText);
        //     });
        
        //     content.appendChild(age);
            
        //     // Edit button for gender
        //     const editBtnGender = document.createElement("button");
        //     editBtnGender.innerText = "Edit";
        //     editBtnGender.classList.add("editBtn");
        //     editBtnGender.addEventListener("click", function() {
        //         createTextBox(gender, post.gender);
        //     });
        
        //     const gender = document.createElement("p");
        //     gender.innerText = post.gender;
        //     content.appendChild(gender);
        //     content.appendChild(editBtnGender);
        
        //     // Edit button for season
        //     const editBtnSeason = document.createElement("button");
        //     editBtnSeason.innerText = "Edit";
        //     editBtnSeason.classList.add("editBtn");
        //     editBtnSeason.addEventListener("click", function() {
        //         createTextBox(season, post.season);
        //     });
        
        //     const season = document.createElement("p");
        //     season.innerText = post.season;
        //     content.appendChild(season);
        //     content.appendChild(editBtnSeason);
        
        //     // Edit button for material
        //     const editBtnMaterial = document.createElement("button");
        //     editBtnMaterial.innerText = "Edit";
        //     editBtnMaterial.classList.add("editBtn");
        //     editBtnMaterial.addEventListener("click", function() {
        //         createTextBox(material, post.material);
        //     });
        
        //     const material = document.createElement("p");
        //     material.innerText = post.material;
        //     content.appendChild(material);
        //     content.appendChild(editBtnMaterial);
        
        //     // Edit button for quantity
        //     const editBtnQuantity = document.createElement("button");
        //     editBtnQuantity.innerText = "Edit";
        //     editBtnQuantity.classList.add("editBtn");
        //     editBtnQuantity.addEventListener("click", function() {
        //         createTextBox(quantity, post.quantity);
        //     });
        
        //     const quantity = document.createElement("p");
        //     quantity.innerText = post.quantity;
        //     content.appendChild(quantity);
        //     content.appendChild(editBtnQuantity);
        
        // } else if (post instanceof schoolPost) {



        //     const edit = document.createElement("i");
        //     edit.classList.add("editBtn", "fas", "fa-edit");

        //     // Edit button for type
            
        //     const nameDiv = 

        //     const type = document.createElement("p");
        //     type.innerText = post.type;
        //     content.appendChild(type);
        //     content.appendChild(edit);
        
        //     // Edit button for bookName
        //     const editBtnBookName = document.createElement("button");
        //     editBtnBookName.innerText = "Edit";
        //     editBtnBookName.classList.add("editBtn");
        //     editBtnBookName.addEventListener("click", function() {
        //         createTextBox(bookName, post.bookName);
        //     });
        
        //     const bookName = document.createElement("p");
        //     bookName.innerText = post.bookName;
        //     content.appendChild(bookName);
        //     content.appendChild(editBtnBookName);
        
        //     // Edit button for author
        //     const editBtnAuthor = document.createElement("button");
        //     editBtnAuthor.innerText = "Edit";
        //     editBtnAuthor.classList.add("editBtn");
        //     editBtnAuthor.addEventListener("click", function() {
        //         createTextBox(author, post.author);
        //     });
        
        //     const author = document.createElement("p");
        //     author.innerText = post.author;
        //     content.appendChild(author);
        //     content.appendChild(editBtnAuthor);
        
        //     // Edit button for book language
        //     const editBtnBookLang = document.createElement("button");
        //     editBtnBookLang.innerText = "Edit";
        //     editBtnBookLang.classList.add("editBtn");
        //     editBtnBookLang.addEventListener("click", function() {
        //         createTextBox(bookLang, post.bookLang);
        //     });
        
        //     const bookLang = document.createElement("p");
        //     bookLang.innerText = post.bookLang;
        //     content.appendChild(bookLang);
        //     content.appendChild(editBtnBookLang);
        
        //     // Edit button for book edition
        //     const editBtnBookEd = document.createElement("button");
        //     editBtnBookEd.innerText = "Edit";
        //     editBtnBookEd.classList.add("editBtn");
        //     editBtnBookEd.addEventListener("click", function() {
        //         createTextBox(bookEd, post.bookEd);
        //     });
        
        //     const bookEd = document.createElement("p");
        //     bookEd.innerText = post.bookEd;
        //     content.appendChild(bookEd);
        //     content.appendChild(editBtnBookEd);
        
        //     // Edit button for book summary
        //     const editBtnBookSum = document.createElement("button");
        //     editBtnBookSum.innerText = "Edit";
        //     editBtnBookSum.classList.add("editBtn");
        //     editBtnBookSum.addEventListener("click", function() {
        //         createTextBox(bookSum, post.bookSum);
        //     });
        
        //     const bookSum = document.createElement("p");
        //     bookSum.innerText = post.bookSum;
        //     content.appendChild(bookSum);
        //     content.appendChild(editBtnBookSum);
        
        //     // Edit button for book picture
        //     const editBtnBookPic = document.createElement("button");
        //     editBtnBookPic.innerText = "Edit";
        //     editBtnBookPic.classList.add("editBtn");
        //     editBtnBookPic.addEventListener("click", function() {
        //         createTextBox(bookPic, post.bookPic);
        //     });
        
        //     const bookPic = document.createElement("p");
        //     bookPic.innerText = post.bookPic;
        //     content.appendChild(bookPic);
        //     content.appendChild(editBtnBookPic);
        
        //     // Edit button for quantity
        //     const editBtnQuantity = document.createElement("button");
        //     editBtnQuantity.innerText = "Edit";
        //     editBtnQuantity.classList.add("editBtn");
        //     editBtnQuantity.addEventListener("click", function() {
        //         createTextBox(quantity, post.quantity);
        //     });
        
        //     const quantity = document.createElement("p");
        //     quantity.innerText = post.quantity;
        //     content.appendChild(quantity);
        //     content.appendChild(editBtnQuantity);
        
        // } else if (post instanceof toysPost) {
        //     // Edit button for type
        //     const editBtnType = document.createElement("button");
        //     editBtnType.innerText = "Edit";
        //     editBtnType.classList.add("editBtn");
        //     editBtnType.addEventListener("click", function() {
        //         createTextBox(type, post.type);
        //     });
        
        //     const type = document.createElement("p");
        //     type.innerText = post.type;
        //     content.appendChild(type);
        //     content.appendChild(editBtnType);
        
        //     // Edit button for age
        //     const editBtnAge = document.createElement("button");
        //     editBtnAge.innerText = "Edit";
        //     editBtnAge.classList.add("editBtn");
        //     editBtnAge.addEventListener("click", function() {
        //         createTextBox(age, post.age);
        //     });
        
        //     const age = document.createElement("p");
        //     age.innerText = post.age;
        //     content.appendChild(age);
        //     content.appendChild(editBtnAge);
        
        //     // Edit button for gender
        //     const editBtnGender = document.createElement("button");
        //     editBtnGender.innerText = "Edit";
        //     editBtnGender.classList.add("editBtn");
        //     editBtnGender.addEventListener("click", function() {
        //         createTextBox(gender, post.gender);
        //     });
        
        //     const gender = document.createElement("p");
        //     gender.innerText = post.gender;
        //     content.appendChild(gender);
        //     content.appendChild(editBtnGender);
        
        //     // Edit button for category
        //     const editBtnCategory = document.createElement("button");
        //     editBtnCategory.innerText = "Edit";
        //     editBtnCategory.classList.add("editBtn");
        //     editBtnCategory.addEventListener("click", function() {
        //         createTextBox(category, post.category);
        //     });
        
        //     const category = document.createElement("p");
        //     category.innerText = post.category;
        //     content.appendChild(category);
        //     content.appendChild(editBtnCategory);
        
        //     // Edit button for picture
        //     const editBtnPicture = document.createElement("button");
        //     editBtnPicture.innerText = "Edit";
        //     editBtnPicture.classList.add("editBtn");
        //     editBtnPicture.addEventListener("click", function() {
        //         createTextBox(picture, post.picture);
        //     });
        
        //     const picture = document.createElement("p");
        //     picture.innerText = post.picture;
        //     content.appendChild(picture);
        //     content.appendChild(editBtnPicture);
        
        // } else if (post instanceof medicalPost) {
        //     // Edit button for type
        //     const editBtnType = document.createElement("button");
        //     editBtnType.innerText = "Edit";
        //     editBtnType.classList.add("editBtn");
        //     editBtnType.addEventListener("click", function() {
        //         createTextBox(type, post.type);
        //     });
        
        //     const type = document.createElement("p");
        //     type.innerText = post.type;
        //     content.appendChild(type);
        //     content.appendChild(editBtnType);
        
        //     // Edit button for use
        //     const editBtnUse = document.createElement("button");
        //     editBtnUse.innerText = "Edit";
        //     editBtnUse.classList.add("editBtn");
        //     editBtnUse.addEventListener("click", function() {
        //         createTextBox(use, post.use);
        //     });
        
        //     const use = document.createElement("p");
        //     use.innerText = post.use;
        //     content.appendChild(use);
        //     content.appendChild(editBtnUse);
        
        //     // Edit button for image
        //     const editBtnImage = document.createElement("button");
        //     editBtnImage.innerText = "Edit";
        //     editBtnImage.classList.add("editBtn");
        //     editBtnImage.addEventListener("click", function() {
        //         createTextBox(image, post.image);
        //     });
        
        //     const image = document.createElement("p");
        //     image.innerText = post.image;
        //     content.appendChild(image);
        //     content.appendChild(editBtnImage);
        
        //     // Edit button for quantity
        //     const editBtnQuantity = document.createElement("button");
        //     editBtnQuantity.innerText = "Edit";
        //     editBtnQuantity.classList.add("editBtn");
        //     editBtnQuantity.addEventListener("click", function() {
        //         createTextBox(quantity, post.quantity);
        //     });
        
        //     const quantity = document.createElement("p");
        //     quantity.innerText = post.quantity;
        //     content.appendChild(quantity);
        //     content.appendChild(editBtnQuantity);
        
        // } else if (post instanceof teachingPost) {
        //     // Edit button for number of students
        //     const editBtnStudents = document.createElement("button");
        //     editBtnStudents.innerText = "Edit";
        //     editBtnStudents.classList.add("editBtn");
        //     editBtnStudents.addEventListener("click", function() {
        //         createTextBox(students, post.noOfStu);
        //     });
        
        //     const students = document.createElement("p");
        //     students.innerText = post.noOfStu;
        //     content.appendChild(students);
        //     content.appendChild(editBtnStudents);
        
        //     // Edit button for address
        //     const editBtnAddress = document.createElement("button");
        //     editBtnAddress.innerText = "Edit";
        //     editBtnAddress.classList.add("editBtn");
        //     editBtnAddress.addEventListener("click", function() {
        //         createTextBox(address, post.add);
        //     });
        
        //     const address = document.createElement("p");
        //     address.innerText = post.add;
        //     content.appendChild(address);
        //     content.appendChild(editBtnAddress);
        
        //     // Edit button for map location
        //     const editBtnMap = document.createElement("button");
        //     editBtnMap.innerText = "Edit";
        //     editBtnMap.classList.add("editBtn");
        //     editBtnMap.addEventListener("click", function() {
        //         createTextBox(mapLocation, post.mapLoc);
        //     });
        
        //     const mapLocation = document.createElement("p");
        //     mapLocation.innerText = post.mapLoc;
        //     content.appendChild(mapLocation);
        //     content.appendChild(editBtnMap);
        
        //     // Edit button for subjects
        //     const editBtnSubjects = document.createElement("button");
        //     editBtnSubjects.innerText = "Edit";
        //     editBtnSubjects.classList.add("editBtn");
        //     editBtnSubjects.addEventListener("click", function() {
        //         createTextBox(subjects, post.subs);
        //     });
        
        //     const subjects = document.createElement("p");
        //     subjects.innerText = post.subs;
        //     content.appendChild(subjects);
        //     content.appendChild(editBtnSubjects);
        
        // } else if (post instanceof doctorPost) {
        //     // Edit button for patient name
        //     const editBtnName = document.createElement("button");
        //     editBtnName.innerText = "Edit";
        //     editBtnName.classList.add("editBtn");
        //     editBtnName.addEventListener("click", function() {
        //         createTextBox(patientName, post.patName);
        //     });
        
        //     const patientName = document.createElement("p");
        //     patientName.innerText = post.patName;
        //     content.appendChild(patientName);
        //     content.appendChild(editBtnName);
        
        //     // Edit button for age
        //     const editBtnAge = document.createElement("button");
        //     editBtnAge.innerText = "Edit";
        //     editBtnAge.classList.add("editBtn");
        //     editBtnAge.addEventListener("click", function() {
        //         createTextBox(age, post.age);
        //     });
        
        //     const age = document.createElement("p");
        //     age.innerText = post.age;
        //     content.appendChild(age);
        //     content.appendChild(editBtnAge);
        
        //     // Edit button for gender
        //     const editBtnGender = document.createElement("button");
        //     editBtnGender.innerText = "Edit";
        //     editBtnGender.classList.add("editBtn");
        //     editBtnGender.addEventListener("click", function() {
        //         createTextBox(gender, post.gender);
        //     });
        
        //     const gender = document.createElement("p");
        //     gender.innerText = post.gender;
        //     content.appendChild(gender);
        //     content.appendChild(editBtnGender);
        
        //     // Edit button for weight
        //     const editBtnWeight = document.createElement("button");
        //     editBtnWeight.innerText = "Edit";
        //     editBtnWeight.classList.add("editBtn");
        //     editBtnWeight.addEventListener("click", function() {
        //         createTextBox(weight, post.weight);
        //     });
        
        //     const weight = document.createElement("p");
        //     weight.innerText = post.weight;
        //     content.appendChild(weight);
        //     content.appendChild(editBtnWeight);
        
        //     // Edit button for map location
        //     const editBtnMap = document.createElement("button");
        //     editBtnMap.innerText = "Edit";
        //     editBtnMap.classList.add("editBtn");
        //     editBtnMap.addEventListener("click", function() {
        //         createTextBox(mapLocation, post.mapLoc);
        //     });
        
        //     const mapLocation = document.createElement("p");
        //     mapLocation.innerText = post.mapLoc;
        //     content.appendChild(mapLocation);
        //     content.appendChild(editBtnMap);
        
        //     // Edit button for address
        //     const editBtnAddress = document.createElement("button");
        //     editBtnAddress.innerText = "Edit";
        //     editBtnAddress.classList.add("editBtn");
        //     editBtnAddress.addEventListener("click", function() {
        //         createTextBox(address, post.add);
        //     });
        
        //     const address = document.createElement("p");
        //     address.innerText = post.add;
        //     content.appendChild(address);
        //     content.appendChild(editBtnAddress);
        
        //     // Edit button for organization name
        //     const editBtnOrg = document.createElement("button");
        //     editBtnOrg.innerText = "Edit";
        //     editBtnOrg.classList.add("editBtn");
        //     editBtnOrg.addEventListener("click", function() {
        //         createTextBox(orgName, post.orgName);
        //     });
        
        //     const orgName = document.createElement("p");
        //     orgName.innerText = post.orgName;
        //     content.appendChild(orgName);
        //     content.appendChild(editBtnOrg);
        
        //     // Edit button for medical speciality
        //     const editBtnSpec = document.createElement("button");
        //     editBtnSpec.innerText = "Edit";
        //     editBtnSpec.classList.add("editBtn");
        //     editBtnSpec.addEventListener("click", function() {
        //         createTextBox(medSpec, post.medSpec);
        //     });
        
        //     const medSpec = document.createElement("p");
        //     medSpec.innerText = post.medSpec;
        //     content.appendChild(medSpec);
        //     content.appendChild(editBtnSpec);
        
        //     // Edit button for case description
        //     const editBtnDesc = document.createElement("button");
        //     editBtnDesc.innerText = "Edit";
        //     editBtnDesc.classList.add("editBtn");
        //     editBtnDesc.addEventListener("click", function() {
        //         createTextBox(caseDesc, post.caseDesc);
        //     });
        
        //     const caseDesc = document.createElement("p");
        //     caseDesc.innerText = post.caseDesc;
        //     content.appendChild(caseDesc);
        //     content.appendChild(editBtnDesc);
        
        // }
        
        const hr1 = document.createElement("hr");
        content.appendChild(hr1);
  
        const btnDiv = document.createElement("Div");
        btnDiv.classList.add("btnDiv");
  
        const i = pndPosts.indexOf(post);
  
        const rejBtn = document.createElement("button");
        rejBtn.innerText = "Delete";
        rejBtn.classList.add("rejectBtn");
        rejBtn.id = "rej"+i;
        rejBtn.addEventListener("click", function(event){
            var btnID = parseInt(rejBtn.id.charAt(rejBtn.id.length-1));
            pndPosts.splice(btnID,1);
            showPnd();
        });
        btnDiv.appendChild(rejBtn);
  
        content.appendChild(btnDiv);
  
        // Append the content to the box
        box.appendChild(content);
        // Append the box to the div
        div.appendChild(box);
        // Append the div to the container
        orgsContainer.appendChild(div);
    });
  }
  function showCH(){
    const chPostsContainer = document.getElementById("orgsBox");
    const children = chPostsContainer.children;
  
    for(var i = children.length -1 ; i>0; i--){
        chPostsContainer.removeChild(children[i]);
    }
  
    chPosts.forEach(function(post) {
  
        const div = document.createElement("div");
        div.classList.add("col-lg-4", "col-md-4", "col-sm-6", "col-xs-12");
  
        const box = document.createElement("div");
        box.classList.add("featured-box");
  
        const content = document.createElement("div");
        content.classList.add("content");
  
        const postCat = document.createElement("h3");
        postCat.innerText = post.cat;
  
        content.appendChild(postCat);
        
        const hr = document.createElement("hr");
        content.appendChild(hr);
  
        if(post instanceof foodPost){
            // Edit button for name
            
            const name = document.createElement("p");
            name.innerText = post.name;
            content.appendChild(name);
            
            // Edit button for number
            
            const number = document.createElement("p");
            number.innerText = post.quantity;
            content.appendChild(number);
        }
        else if (post instanceof bloodPost) {
            // Edit button for patient name
         
            const patientName = document.createElement("p");
            patientName.innerText = post.patientName;
            content.appendChild(patientName);
         
            // Edit button for age
         
            const age = document.createElement("p");
            age.innerText = post.age;
            content.appendChild(age);
         
            // Edit button for blood type
         
            const bloodType = document.createElement("p");
            bloodType.innerText = post.bloodType;
            content.appendChild(bloodType);
        
           // Edit button for hospital name
        
            const hospitalName = document.createElement("p");
            hospitalName.innerText = post.hsptlName;
            content.appendChild(hospitalName);
        
        
            // Edit button for hospital governorate
            const hospitalGovernorate = document.createElement("p");
            hospitalGovernorate.innerText = post.hsptlGov;
            content.appendChild(hospitalGovernorate);
        
            // Add similar blocks for other properties of bloodPost constructor
        } else if (post instanceof clothesPost) {
            // Edit button for type
        
            const type = document.createElement("p");
            type.innerText = post.type;
            content.appendChild(type);
        
            // Edit button for age
        
            const age = document.createElement("p");
            age.innerText = post.age;
            content.appendChild(age);
        
            // Edit button for gender
        
            const gender = document.createElement("p");
            gender.innerText = post.gender;
            content.appendChild(gender);
        
            // Edit button for season
        
            const season = document.createElement("p");
            season.innerText = post.season;
            content.appendChild(season);
        
            // Edit button for material
        
            const material = document.createElement("p");
            material.innerText = post.material;
            content.appendChild(material);
        
            // Edit button for quantity
        
            const quantity = document.createElement("p");
            quantity.innerText = post.quantity;
            content.appendChild(quantity);
        
        } else if (post instanceof schoolPost) {
            // Edit button for type
        
            const type = document.createElement("p");
            type.innerText = post.type;
            content.appendChild(type);
        
            // Edit button for bookName
        
            const bookName = document.createElement("p");
            bookName.innerText = post.bookName;
            content.appendChild(bookName);
        
            // Edit button for author
        
            const author = document.createElement("p");
            author.innerText = post.author;
            content.appendChild(author);
        
            // Edit button for book language
        
            const bookLang = document.createElement("p");
            bookLang.innerText = post.bookLang;
            content.appendChild(bookLang);
        
            // Edit button for book edition
        
            const bookEd = document.createElement("p");
            bookEd.innerText = post.bookEd;
            content.appendChild(bookEd);
        
            // Edit button for book summary
        
            const bookSum = document.createElement("p");
            bookSum.innerText = post.bookSum;
            content.appendChild(bookSum);
        
            // Edit button for book picture
        
            const bookPic = document.createElement("p");
            bookPic.innerText = post.bookPic;
            content.appendChild(bookPic);
        
            // Edit button for quantity
        
            const quantity = document.createElement("p");
            quantity.innerText = post.quantity;
            content.appendChild(quantity);
        
        } else if (post instanceof toysPost) {
            // Edit button for type
        
            const type = document.createElement("p");
            type.innerText = post.type;
            content.appendChild(type);
        
            // Edit button for age
        
            const age = document.createElement("p");
            age.innerText = post.age;
            content.appendChild(age);
        
            // Edit button for gender
        
            const gender = document.createElement("p");
            gender.innerText = post.gender;
            content.appendChild(gender);
        
            // Edit button for category
        
            const category = document.createElement("p");
            category.innerText = post.category;
            content.appendChild(category);
        
            // Edit button for picture
        
            const picture = document.createElement("p");
            picture.innerText = post.picture;
            content.appendChild(picture);
        
        } else if (post instanceof medicalPost) {
            // Edit button for type
        
            const type = document.createElement("p");
            type.innerText = post.type;
            content.appendChild(type);
        
            // Edit button for use
        
            const use = document.createElement("p");
            use.innerText = post.use;
            content.appendChild(use);
        
            // Edit button for image
        
            const image = document.createElement("p");
            image.innerText = post.image;
            content.appendChild(image);
        
            // Edit button for quantity
        
            const quantity = document.createElement("p");
            quantity.innerText = post.quantity;
            content.appendChild(quantity);
        
        } else if (post instanceof teachingPost) {
            // Edit button for number of students
        
            const students = document.createElement("p");
            students.innerText = post.noOfStu;
            content.appendChild(students);
        
            // Edit button for address
        
            const address = document.createElement("p");
            address.innerText = post.add;
            content.appendChild(address);
        
            // Edit button for map location
        
            const mapLocation = document.createElement("p");
            mapLocation.innerText = post.mapLoc;
            content.appendChild(mapLocation);
        
            // Edit button for subjects
        
            const subjects = document.createElement("p");
            subjects.innerText = post.subs;
            content.appendChild(subjects);
        
        } else if (post instanceof doctorPost) {
            // Edit button for patient name
        
            const patientName = document.createElement("p");
            patientName.innerText = post.patName;
            content.appendChild(patientName);
        
            // Edit button for age
        
            const age = document.createElement("p");
            age.innerText = post.age;
            content.appendChild(age);
        
            // Edit button for gender
        
            const gender = document.createElement("p");
            gender.innerText = post.gender;
            content.appendChild(gender);
        
            // Edit button for weight
        
            const weight = document.createElement("p");
            weight.innerText = post.weight;
            content.appendChild(weight);
        
            // Edit button for map location
        
            const mapLocation = document.createElement("p");
            mapLocation.innerText = post.mapLoc;
            content.appendChild(mapLocation);
        
            // Edit button for address
        
            const address = document.createElement("p");
            address.innerText = post.add;
            content.appendChild(address);
        
            // Edit button for postanization name
        
            const postName = document.createElement("p");
            postName.innerText = post.postName;
            content.appendChild(postName);
        
            // Edit button for medical speciality
        
            const medSpec = document.createElement("p");
            medSpec.innerText = post.medSpec;
            content.appendChild(medSpec);
        
            // Edit button for case description
        
            const caseDesc = document.createElement("p");
            caseDesc.innerText = post.caseDesc;
            content.appendChild(caseDesc);
        
        }

        const hr1 = document.createElement("hr");
        content.appendChild(hr1);
  
        const btnDiv = document.createElement("Div");
        btnDiv.classList.add("btnDiv");
  
        const i = chPosts.indexOf(post);
  
        const rejBtn = document.createElement("button");
        rejBtn.innerText = "Delete";
        rejBtn.classList.add("rejectBtn");
        rejBtn.id = "rej"+i;
        rejBtn.addEventListener("click", function(event){
            var btnID = parseInt(rejBtn.id.charAt(rejBtn.id.length-1));
            chPosts.splice(btnID, 1);
            showCH();
        });
        btnDiv.appendChild(rejBtn);

        const donBtn = document.createElement("button");
        donBtn.innerText = "View donor details";
        donBtn.id ="don"+i;
        donBtn.classList.add("viewBtn");
        donBtn.addEventListener("click", function(event){
            var btnID = parseInt(rejBtn.id.charAt(rejBtn.id.length-1));
            document.getElementById(i+"").classList.remove("hidden");
        });
        btnDiv.appendChild(donBtn);

        const donDiv = document.createElement("Div");
        donDiv.id = i;
        donDiv.classList.add("hidden");

        const hrhr = document.createElement("hr");

        const title = document.createElement("p");
        title.innerText = "contact Details"

        const contDon = document.createElement("a");
        contDon.href = "acknDonor.html";
        contDon.innerText = "Contact donor";


        donDiv.appendChild(hrhr);
        donDiv.appendChild(title);
        donDiv.appendChild(contDon);
        
        

        content.appendChild(btnDiv);
        content.appendChild(donDiv);
  
        // Append the content to the box
        box.appendChild(content);
        // Append the box to the div
        div.appendChild(box);
        // Append the div to the container
        chPostsContainer.appendChild(div);
    });
  }
  function showFF(){
    const ffPostsContainer = document.getElementById("orgsBox");
    const children = ffPostsContainer.children;
  
    for(var i = children.length -1 ; i>0; i--){
        ffPostsContainer.removeChild(children[i]);
    }
  
    ffPosts.forEach(function(post) {
  
        const div = document.createElement("div");
        div.classList.add("col-lg-4", "col-md-4", "col-sm-6", "col-xs-12");
  
        const box = document.createElement("div");
        box.classList.add("featured-box");
  
        const content = document.createElement("div");
        content.classList.add("content");
  
        const postCat = document.createElement("h3");
        postCat.innerText = post.cat;
  
        content.appendChild(postCat);
        
        const hr = document.createElement("hr");
        content.appendChild(hr);
  
        if(post instanceof foodPost){
            // Edit button for name
            
    
            const name = document.createElement("p");
            name.innerText = post.name;
            content.appendChild(name);
            
            // Edit button for number
            
            const number = document.createElement("p");
            number.innerText = post.quantity;
            content.appendChild(number);
            
        }
        else if (post instanceof bloodPost) {
            // Edit button for patientName
            
            const patientName = document.createElement("p");
            patientName.innerText = post.patientName;
            content.appendChild(patientName);
            
            // Edit button for age
            
            const age = document.createElement("p");
            age.innerText = post.age;
            content.appendChild(age);
        
            const BldType = document.createElement("p");
            age.innerText = post.bloodType;
            content.appendChild(BldType);
            
            const HsptlName = document.createElement("p");
            age.innerText = post.bloodType;
            content.appendChild(HsptlName);
            
            
            const HsptlArea = document.createElement("p");
            age.innerText = post.bloodType;
            content.appendChild(HsptlArea);
            
            
            const HsptlGov = document.createElement("p");
            age.innerText = post.bloodType;
            content.appendChild(HsptlGov);
            
        
        } else if (post instanceof clothesPost) {
            // Edit button for type
           
            const type = document.createElement("p");
            type.innerText = post.type;
            content.appendChild(type);
           
            // Edit button for age
           
            const age = document.createElement("p");
            age.innerText = post.age;
            content.appendChild(age);
           
            // Edit button for gender
           
            const gender = document.createElement("p");
            gender.innerText = post.gender;
            content.appendChild(gender);
           
            // Edit button for season
           
            const season = document.createElement("p");
            season.innerText = post.season;
            content.appendChild(season);
           
            // Edit button for material
           
            const material = document.createElement("p");
            material.innerText = post.material;
            content.appendChild(material);
           
            // Edit button for quantity
           
            const quantity = document.createElement("p");
            quantity.innerText = post.quantity;
            content.appendChild(quantity);
           
        } else if (post instanceof schoolPost) {
            // Edit button for type
           
            const type = document.createElement("p");
            type.innerText = post.type;
            content.appendChild(type);
           
            // Edit button for bookName
           
            const bookName = document.createElement("p");
            bookName.innerText = post.bookName;
            content.appendChild(bookName);
           
            // Edit button for author
           
            const author = document.createElement("p");
            author.innerText = post.author;
            content.appendChild(author);
           
            // Edit button for book language
           
            const bookLang = document.createElement("p");
            bookLang.innerText = post.bookLang;
            content.appendChild(bookLang);
           
            // Edit button for book edition
           
            const bookEd = document.createElement("p");
            bookEd.innerText = post.bookEd;
            content.appendChild(bookEd);
           
            // Edit button for book summary
           
            const bookSum = document.createElement("p");
            bookSum.innerText = post.bookSum;
            content.appendChild(bookSum);
           
            // Edit button for book picture
           
            const bookPic = document.createElement("p");
            bookPic.innerText = post.bookPic;
            content.appendChild(bookPic);
           
            // Edit button for quantity
           
            const quantity = document.createElement("p");
            quantity.innerText = post.quantity;
            content.appendChild(quantity);
           
        } else if (post instanceof toysPost) {
            // Edit button for type
            const type = document.createElement("p");
            type.innerText = post.type;
            content.appendChild(type);
           
            // Edit button for age
           
            const age = document.createElement("p");
            age.innerText = post.age;
            content.appendChild(age);
           
            // Edit button for gender
           
            const gender = document.createElement("p");
            gender.innerText = post.gender;
            content.appendChild(gender);
           
            // Edit button for category
           
            const category = document.createElement("p");
            category.innerText = post.category;
            content.appendChild(category);
           
            // Edit button for picture
           
            const picture = document.createElement("p");
            picture.innerText = post.picture;
            content.appendChild(picture);
           
        } else if (post instanceof medicalPost) {
            // Edit button for type
            
            const type = document.createElement("p");
            type.innerText = post.type;
            content.appendChild(type);
            
            // Edit button for use
            
            const use = document.createElement("p");
            use.innerText = post.use;
            content.appendChild(use);
            
            // Edit button for image
            
            const image = document.createElement("p");
            image.innerText = post.image;
            content.appendChild(image);
            
            // Edit button for quantity
            
            const quantity = document.createElement("p");
            quantity.innerText = post.quantity;
            content.appendChild(quantity);
            
        } else if (post instanceof teachingPost) {
            // Edit button for number of students
            
            const students = document.createElement("p");
            students.innerText = post.noOfStu;
            content.appendChild(students);
            
            // Edit button for address
            
            const address = document.createElement("p");
            address.innerText = post.add;
            content.appendChild(address);
            
            // Edit button for map location
            
            const mapLocation = document.createElement("p");
            mapLocation.innerText = post.mapLoc;
            content.appendChild(mapLocation);
            
            // Edit button for subjects
            
            const subjects = document.createElement("p");
            subjects.innerText = post.subs;
            content.appendChild(subjects);
            
        } else if (post instanceof doctorPost) {
            // Edit button for patient name
            
            const patientName = document.createElement("p");
            patientName.innerText = post.patName;
            content.appendChild(patientName);
            
            // Edit button for age
            
            const age = document.createElement("p");
            age.innerText = post.age;
            content.appendChild(age);
            
            // Edit button for gender
            
            const gender = document.createElement("p");
            gender.innerText = post.gender;
            content.appendChild(gender);
            
            // Edit button for weight
            
            const weight = document.createElement("p");
            weight.innerText = post.weight;
            content.appendChild(weight);
            
            // Edit button for map location
            
            const mapLocation = document.createElement("p");
            mapLocation.innerText = post.mapLoc;
            content.appendChild(mapLocation);
            
            // Edit button for address
            
            const address = document.createElement("p");
            address.innerText = post.add;
            content.appendChild(address);
            
            // Edit button for organization name
            
            const orgName = document.createElement("p");
            orgName.innerText = post.orgName;
            content.appendChild(orgName);
            
            // Edit button for medical speciality
            
            const medSpec = document.createElement("p");
            medSpec.innerText = post.medSpec;
            content.appendChild(medSpec);
            
            // Edit button for case description
            
            const caseDesc = document.createElement("p");
            caseDesc.innerText = post.caseDesc;
            content.appendChild(caseDesc);
            
        }
  
        const hr1 = document.createElement("hr");
        content.appendChild(hr1);
  
        const btnDiv = document.createElement("Div");
        btnDiv.classList.add("btnDiv");
  
        const i = ffPosts.indexOf(post);
  
        const rejBtn = document.createElement("button");
        rejBtn.innerText = "Delete";
        rejBtn.classList.add("rejectBtn");
        rejBtn.id = "rej"+i;
        rejBtn.addEventListener("click", function(event){
            var btnID = parseInt(rejBtn.id.charAt(rejBtn.id.length-1));
            ffPosts.splice(btnID, 1);
            showFF();
        });
        btnDiv.appendChild(rejBtn);
  
        const donBtn = document.createElement("button");
        donBtn.innerText = "View donor details";
        donBtn.id ="don"+i;
        donBtn.classList.add("viewBtn");
        donBtn.addEventListener("click", function(event){
            var btnID = parseInt(rejBtn.id.charAt(rejBtn.id.length-1));
            document.getElementById(i+"").classList.remove("hidden");
        });
        btnDiv.appendChild(donBtn);

        const donDiv = document.createElement("Div");
        donDiv.id = i;
        donDiv.classList.add("hidden");

        const hrhr = document.createElement("hr");

        const title = document.createElement("p");
        title.innerText = "contact Details"

        const contDon = document.createElement("a");
        contDon.href = "acknDonor.html";
        contDon.innerText = "Contact donor";


        donDiv.appendChild(hrhr);
        donDiv.appendChild(title);
        donDiv.appendChild(contDon);
        
        

        content.appendChild(btnDiv);
        content.appendChild(donDiv);
  
        // Append the content to the box
        box.appendChild(content);
        // Append the box to the div
        div.appendChild(box);
        // Append the div to the container
        ffPostsContainer.appendChild(div);
    });
  }
  
  function createTextBox(element, initialValue) {
    // Create a text input box
    const textBox = document.createElement("input");
    textBox.type = "text";
    textBox.value = initialValue;
  
    // Create a button to update the value
    const updateBtn = document.createElement("button");
    updateBtn.innerText = "Update";
    updateBtn.addEventListener("click", function() {
        // Replace the content of the element with the new value from the text box
        element.innerText = textBox.value;
    });
  
    // Replace the content of the element with the text box and update button
    element.innerHTML = ""; // Clear existing content
    element.appendChild(textBox);
    element.appendChild(updateBtn);
  }

  // ------------- return each Post Div --------------- //

  


  
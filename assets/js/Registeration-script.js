function registerDonor(){

    var fName =  document.getElementById("fName").value;
    var lName =  document.getElementById("lName").value;
    var gender =  document.getElementById("gender").value;
    var email =  document.getElementById("email").value;
    var password =  document.getElementById("password").value;
    var number =  document.getElementById("number").value;
    var address =  document.getElementById("address").value;
    var area =  document.getElementById("area").value;
    var gov =  document.getElementById("gov").value;

    if(fName === "" || lName === "" || gender ==="" ||email ===""||password ===""||number===""||address===""||area===""||gov===""){
        alert("Please fill all required fields");
    }else{
        alert("Registered Successfully");
        window.location.href = "Donorlogin.html";
    }

}
function signinDonor(){
    var user =  document.getElementById("username").value;
    var pass =  document.getElementById("password").value;

    if(user !== "user" & pass!=="pass"){
        alert("username or password does not match");
    }else{
        window.location.href = "donor-profile.html";
    }
}


function registerOrganisation(){
    var fName =  document.getElementById("fName").value;
    var lName =  document.getElementById("lName").value;
    var gender =  document.getElementById("gender").value;
    var email =  document.getElementById("email").value;
    var password =  document.getElementById("password").value;
    var number =  document.getElementById("number").value;
    var address =  document.getElementById("address").value;
    var area =  document.getElementById("area").value;
    var gov =  document.getElementById("gov").value;
    var orgName =  document.getElementById("orgName").value;
    var orgType =  document.getElementById("orgType").value;
    

    if(fName === "" || lName === "" || gender ==="" ||email ===""||password ===""||number===""||address===""||area===""||gov===""
    ||orgName===""||orgType===""){
        alert("Please fill all required fields");
    }else{
        alert("Registered Successfully");
        window.location.href = "Organization-login.html";
    }
}
function signinOrg(){
    var user =  document.getElementById("username").value;
    var pass =  document.getElementById("password").value;
    if(user !== "user" & pass!=="pass"){
        alert("username or password does not match");
    }else{
        window.location.href = "organizationDashboard.html";
    }
}


function signinAdmin(){
    var user =  document.getElementById("username").value;
    var pass =  document.getElementById("password").value;
    if(user !== "admin" & pass!=="admin"){
        alert("username or password does not match");
    }else{
        window.location.href = "admin-dashboard.html";
    }
}
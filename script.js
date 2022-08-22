function validation(){
    let name=document.getElementById("name").value;
    let password=document.getElementById("password").value;

    if(name==null||name==""){
        alert("Please Enter Your Name");
        return false;
    }
    else if(password.length<6){
        alert("Make Strong Password");
        return false;
    }

    

    // let email=document.getElementById("email").value;
    // let a=email.indexof("@");
    // let b=email.lastindexof(".")
}
function pass(){
    let repossword=document.getElementById("cpassword").value;
    let password=document.getElementById("password").value;

    if (password==repossword){
        document.getElementById("cpword").innerHTML="Password Match";
    }
    else{
        document.getElementById("cpword").innerHTML="Password did't Match";
    }
}
// Name-checking
function validation(){
    let name=document.getElementById("name").value;
    let password=document.getElementById("password").value;

    if(name==null||name==""){
        alert("Please Enter Your Name");
        document.getElementById("cname").innerHTML="Please Enter Your Name"
        return false;
    }
    else if(password.length<6){
        alert("Make Strong Password ");
        return false;
    }   
    else{
        return true;
    }
}
document.getElementById("valid").addEventListener("click",validation);

// Password-checking

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
document.getElementById("valid").addEventListener("click",pass);

//Email-checking

function validate(){
    let email=document.getElementById("email").value;
    let at=email.indexOf("@");
    let dot=email.lastIndexOf(".");

    if(at<1|| dot<at+2 || dot+2>=email.length){
        alert("Please Enter Valid Email Address");
    }
}
document.getElementById("valid-email").addEventListener("click",validate);

//Next-page

function next(){
    let name2=document.getElementById("name2").value;
    let password2=document.getElementById("password2").value;
    let status=false
    if(name2==null || name2==""){
        document.getElementById("cname2").innerHTML="Please Enter Your Name";
        status=false;
    }

    else{
        document.getElementById("cname2");
        status=true;
    }

    if(password2.length<6){
        document.getElementById("cpword2").innerHTML="Make strong Password";
        status=false;
    }

    else{
        document.getElementById("cpword2");
        status=true;
    }   
    return status;

}
document.getElementById("valid-next").addEventListener("click",next);

//Selectbox-checking

function select(){
    let selectbox=document.getElementById("mobile");

    alert(selectbox.options[selectbox.selectedIndex].value);
}
document.getElementById("valid-select").addEventListener("click",select);

//Table-calculation

function calculate(){
    let rate,qty,total,

    rowelement=this.parentNode.parentNode,//To select the row
    rateelement=rowelement.getElementsByClassName("rate")[0],//row element rate
    qtyelement=rowelement.getElementsByClassName("qty")[0],//row elemet qty
    totalelement=rowelement.getElementsByClassName("total")[0];//row element total
    
    rate=rateelement.innerText;
    rate=Number((rate).replace(/,/g,""));
    rate=parseInt(rate);
    qty=qtyelement.value;

    total=(rate*qty);
    total=total.toLocaleString();

    totalelement.innerText=total;
}

 let end=document.getElementsByClassName("submit");
  console.log(end);

 for(i=0;i<end.length;i++){
    end[i].addEventListener("click",calculate);
    console.log(end[i]);
}
//Image slider with button
let image=["../web-page2/images2/slide-1.jpg","../web-page2/images2/slide-2.jpg","../web-page2/images2/slide-3.jpg"],
slide=document.getElementById("manual"),
ind=0;

function next(){
    ind++;
    if(ind<=image.length){
        if(ind==image.length){
            ind=0;
        }
        slide.src=image[ind];
    }
}
let 
nextimage=document.getElementById("next-button");
nextimage.addEventListener("click",next);

function prev(){
    ind--;
    if(ind<image.length){
        if(ind==-1){
            ind=2;
        }
        slide.src=image[ind];
    }
}
let 
previmage=document.getElementById("prev-button");
previmage.addEventListener("click",prev)

//Automatic Image slider

let image1=["../web-page2/images2/slide-1.jpg","../web-page2/images2/slide-2.jpg","../web-page2/images2/slide-3.jpg"],
slide1=document.getElementById("auto"),
x=0;

function autoChange(){
    x++;
    
    if(x<=image1.length){
        if(x==image1.length){
            x=0
        }
        slide1.src=image1[x];
    }
    // console.log(x);
}
setInterval(autoChange,2000);

//Sum total=100;

let number=[1,23,54,-67,89,],tot=0,indtot;

for(i=0; i<number.length; i++){
    indtot=number[i]+tot;
    tot=indtot;
}
console.log(indtot);



document.getElementById("loginBtn").onclick = function(){

let user = document.getElementById("userid").value;
let pass = document.getElementById("password").value;
let msg = document.getElementById("msg");

if(user==="AJAY@MU2026" && pass==="993428"){

msg.style.color="lime";
msg.innerHTML="Login Successful...";

setTimeout(function(){

window.location.href="dashboard.html";

},1000);

}else{

msg.style.color="red";
msg.innerHTML="Invalid User ID or Password";

}

};

document.getElementById("adminBtn").onclick=function(){

alert(
"Customer Support\n\n"+
"Primary Number: +91 9572025885\n"+
"Secondary Number: +91 8294497070\n"+
"Email: ajaysingh40cr@gmail.com\n\n"+
"Company Address:\nGlobal Pay Support Office\nOffice 1204, Bay Square,\nBusiness Bay,\nDubai, United Arab Emirates"
);

};

function login() {

let user = document.getElementById("userid").value.trim();
let pass = document.getElementById("password").value.trim();
let msg = document.getElementById("msg");

if(user==="AJAY@MU2026" && pass==="993428"){

msg.style.color="#00ff88";
msg.innerHTML="✅ Login Successful...";

setTimeout(function(){
window.location.href="home.html";
},1000);

}else{

msg.style.color="#ff4d4d";
msg.innerHTML="❌ Invalid User ID or Password";

}

}
function toggleTheme() {
    document.body.classList.toggle("light-mode");

    const btn = document.querySelector(".top-buttons button");

    if (document.body.classList.contains("light-mode")) {
        btn.innerHTML = "☀️";
    } else {
        btn.innerHTML = "🌙";
    }
}

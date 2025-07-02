document.getElementById("hrHead").addEventListener("animationend", function() {
    document.getElementById("hrHead").style.width = "98vw";
});



const k = document.getElementsByClassName("hrFoot")
for (let i = 0; i < k.length; i++) {
    document.getElementsByClassName("hrFoot")[i].addEventListener("animationend", function() {
    document.getElementsByClassName("hrFoot")[i].style.width = "99.3%";
});
}

document.getElementById("social").addEventListener("click", function() {
    if( document.getElementById("extra").style.display === "none"){
    document.getElementById("extra").style.display = "block";
    document.getElementById("footer").style.height = "23vh";
}
else{
    document.getElementById("extra").style.display = "none";
    document.getElementById("footer").style.height = "5vh";
    }
});
document.getElementById("lang").addEventListener("click", function() {
    if( document.getElementById("extra").style.display === "none"){
    document.getElementById("extra").style.display = "block";
    document.getElementById("footer").style.height = "23vh";
}
else{
    document.getElementById("extra").style.display = "none";
    document.getElementById("footer").style.height = "5vh";
    }
});
const lofiVibes = [
  "Lofi Vibes",
  "Midnight Echoes",
  "Rainy Day Loops",
  "Sleepless Tapes",
  "Moonlight Tapes",
  "Cozy Beats",
  "Clouded Minds",
  "Fade In Fade Out",
  "City Lights & Chill",
  "Lost in Loops"
];

scrollToTop();

setInterval(function() {
    const k = lofiVibes[0];
    lofiVibes.shift();
    lofiVibes.push(k);
    scrollToTop();

}, 1000);
function scrollToTop() {
    document.getElementById("collection").innerHTML = "";
    
    lofiVibes.forEach(element => {
        document.getElementById("collection").innerHTML += `<li>${element}</li>`;
    });}
window.addEventListener("scroll", function() {
    var scrollPosition = window.scrollY;
    var bodyHeight = document.body.scrollHeight - window.innerHeight;
    var scrollPercentage = (scrollPosition / bodyHeight) * 100;

    if (scrollPercentage > 60) {
        document.getElementById("footer").style.height = "23vh";
        document.getElementById("extra").style.display = "block";
    } else {
    document.getElementById("extra").style.display = "none";
    document.getElementById("footer").style.height = "5vh";
    }
});

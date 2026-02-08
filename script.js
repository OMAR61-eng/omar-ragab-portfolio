const text = "Initializing Secure Portfolio...\nLoading CV...\nAccess Granted.";
let i = 0;
function typeEffect() {
  if (i < text.length) {
    document.getElementById("terminal-text").innerHTML += text.charAt(i);
    i++;
    setTimeout(typeEffect, 40);
  }
}
typeEffect();

particlesJS("particles-js", {
  particles: {
    number: { value: 60 },
    color: { value: "#58a6ff" },
    opacity: { value: 0.5 },
    size: { value: 3 },
    move: { speed: 2 }
  }
});

function magic() {
  fetch("https://official-joke-api.appspot.com/random_joke")
    .then(res => res.json())
    .then(data => {
      alert(`✨ Magic Joke ✨\n\n${data.setup}\n\n${data.punchline}`);
    })
    .catch(() => {
      alert("✨ Keep coding. Magic is already inside you! ✨");
    });
}

const text = "Hi, I'm Madhupriya 👋";
let index = 0;

function typeWriter() {
  if (index < text.length) {
    document.getElementById("typewriter").textContent += text.charAt(index);
    index++;
    setTimeout(typeWriter, 80); // typing speed
  }
}

window.addEventListener("load", typeWriter);